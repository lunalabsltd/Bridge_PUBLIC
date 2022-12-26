        const rNames = ["fields", "events", "props", "ctors", "methods"];

        var base = {
        _initialize: function () {
            if (this.$init) {
                return;
            }

            this.$init = {};

            if (this.$staticInit) {
                this.$staticInit();
            }

            if (this.$initMembers) {
                this.$initMembers();
            }
        },

        initConfig: function (extend, base, config, statics, scope, prototype) {
            var initFn,
                name,
                cls = (statics ? scope : scope.ctor),
                descriptors = cls.$descriptors,
                aliases = cls.$aliases;

            if (config.fields) {
                for (name in config.fields) {
                    scope[name] = config.fields[name];
                }
            }

            var props = config.properties;
            if (props) {
                for (name in props) {
                    var v = props[name],
                        d,
                        cfg;

                    if (v != null && Bridge.isPlainObject(v) && (!v.get || !v.set)) {
                        for (var k = 0; k < descriptors.length; k++) {
                            if (descriptors[k].name === name) {
                                d = descriptors[k];
                            }
                        }

                        if (d && d.get && !v.get) {
                            v.get = d.get;
                        }

                        if (d && d.set && !v.set) {
                            v.set = d.set;
                        }
                    }

                    cfg = Bridge.property(statics ? scope : prototype, name, v, statics, cls);
                    cfg.name = name;
                    cfg.cls = cls;

                    descriptors.push(cfg);
                }
            }

            if (config.events) {
                for (name in config.events) {
                    Bridge.event(scope, name, config.events[name], statics);
                }
            }

            // Re-apply all parent aliases one more time. This is needed to support parent aliases that are not defined
            // in prototype, such as aliases in implemented interfaces.
            for ( let i = 0; i < aliases.length; i++ ) {
                const obj = statics ? scope : prototype;
                const alias = aliases[ i ];
                if ( !alias.descriptor || alias.alias in obj ) {
                    continue;
                }
                Object.defineProperty( obj, alias.alias, { get: alias.descriptor.get, set: alias.descriptor.set, configurable: true } );
            }

            if (config.alias) {
                for (var i = 0; i < config.alias.length; i++) {
                    (function (obj, name, alias, cls) {
                        var descriptor = null;

                        for (var i = descriptors.length - 1; i >= 0; i--) {
                            if (descriptors[i].name === name) {
                                descriptor = descriptors[i];

                                break;
                            }
                        }

                        var arr = Array.isArray(alias) ? alias : [alias];

                        for (var j = 0; j < arr.length; j++) {
                            alias = arr[j];

                            if (descriptor != null) {
                                Object.defineProperty(obj, alias, descriptor);
                                aliases.push({ alias: alias, descriptor: descriptor });
                                // In order to support aliasing aliases
                                descriptors.push( Object.assign( {}, descriptor, { name: alias } ) );
                            } else {
                                var m;

                                if (scope.hasOwnProperty(name) || !prototype) {
                                    m = scope[name];

                                    if (m === undefined && prototype) {
                                        m = prototype[name];
                                    }
                                } else {
                                    m = prototype[name];

                                    if (m === undefined) {
                                        m = scope[name];
                                    }
                                }

                                if (!Bridge.isFunction(m)) {
                                    descriptor = {
                                        get: function () {
                                            return this[name];
                                        },

                                        set: function (value) {
                                            this[name] = value;
                                        },

                                        configurable: true,
                                    };
                                    Object.defineProperty(obj, alias, descriptor);
                                    aliases.push({ alias: alias, descriptor: descriptor });
                                } else {
                                    obj[alias] = m;
                                    aliases.push({ fn: name, alias: alias });
                                }
                            }
                        }
                    })(statics ? scope : prototype, config.alias[i], config.alias[i + 1], cls);

                    i++;
                }
            }

            if (config.init) {
                initFn = config.init;
            }

            if (initFn || (extend && !statics && base.$initMembers)) {
                scope.$initMembers = function () {
                    if (extend && !statics && base.$initMembers) {
                        base.$initMembers.call(this);
                    }

                    if (initFn) {
                        initFn.call(this);
                    }
                };
            }
        },

        convertScheme: function (obj) {
            var result = {},
                copy = function (obj, to) {

                var reserved = ["fields", "methods", "events", "props", "properties", "alias", "ctors"],
                    keys = Object.keys(obj);

                for (var i = 0; i < keys.length; i++) {
                    var name = keys[i];

                    if (reserved.indexOf(name) === -1) {
                        to[name] = obj[name];
                    }
                }

                if (obj.fields) {
                    Bridge.apply(to, obj.fields);
                }

                if (obj.methods) {
                    Bridge.apply(to, obj.methods);
                }

                var config = {},
                    write = false;

                if (obj.props) {
                    config.properties = obj.props;
                    write = true;
                } else if (obj.properties) {
                    config.properties = obj.properties;
                    write = true;
                }

                if (obj.events) {
                    config.events = obj.events;
                    write = true;
                }

                // Support mixing primary and alternative schemes. This is needed for minifier that cannot
                // be bothered to check which scheme is actually used and is always using the primary one.
                const alias = obj.alias || ( obj.$config && obj.$config.alias );
                if ( alias ) {
                    config.alias = alias;
                    write = true;
                }

                if (obj.overloads) {
                    config.overloads = obj.overloads;
                    write = true;
                }

                if (obj.ctors) {
                    if (obj.ctors.init) {
                        config.init = obj.ctors.init;
                        write = true;
                        delete obj.ctors.init;
                    }

                    Bridge.apply(to, obj.ctors);
                }

                if (write) {
                    to.$config = config;
                }
            };

            if (obj.main) {
                result.$main = obj.main;
                delete obj.main;
            }

            copy(obj, result);

            if (obj.statics || obj.$statics) {
                result.$statics = {};
                copy(obj.statics || obj.$statics, result.$statics);
            }

            return result;
        },

        definei: function (className, gscope, prop) {
            if ((prop === true || !prop) && gscope) {
                gscope.$kind = Bridge.Typemarkers.Interface;
            } else if (prop) {
                prop.$kind = Bridge.Typemarkers.Interface;
            } else {
                gscope = { $kind: Bridge.Typemarkers.Interface };
            }

            var c = Bridge.define(className, gscope, prop);

            c.$kind = Bridge.Typemarkers.Interface;
            c.$isInterface = true;

            return c;
        },

        // Create a new Class that inherits from this class
        define: function (className, gscope, prop, gCfg) {
            var isGenericInstance = false;

            if (prop === true) {
                isGenericInstance = true;
                prop = gscope;
                gscope = Bridge.global;
            } else if (!prop) {
                prop = gscope;
                gscope = Bridge.global;
            }

            var fn;

            if (Bridge.isFunction(prop)) {
                fn = function () {
                    var args,
                        key,
                        obj,
                        c;

                    key = Bridge.Class.getCachedType(fn, arguments);

                    if (key) {
                        return key.type;
                    }

                    args = Array.prototype.slice.call(arguments);
                    obj = prop.apply(null, args);
                    // Callback defined by minifier for generic classes, allows to register proper aliases after
                    // class was instantiated with the generic params.
                    prop.$aliasInit && prop.$aliasInit( obj );
                    c = Bridge.define(Bridge.Class.genericName(className, args), obj, true, { fn: fn, args: args });

                    if (!Bridge.Class.staticInitAllow && !Bridge.Class.queueIsBlocked) {
                        Bridge.Class.$queue.push(c);
                    }

                    return Bridge.get(c);
                };

                fn.$cache = [];

                return Bridge.Class.generic(className, gscope, fn, prop);
            }

            if (!isGenericInstance) {
                Bridge.Class.staticInitAllow = false;
            }

            prop = prop || {};
            prop.$kind = prop.$kind || Bridge.Typemarkers.Class;

            var isNested = false;

            if (prop.$kind >= Bridge.Typemarkers.NestedOffset) {
                isNested = true;
                prop.$kind = prop.$kind - Bridge.Typemarkers.NestedOffset;
            }
            // if (Math.floor(prop.$kind / Bridge.Typemarkers.NestedOffset) > 0) {
            //     isNested = true;
            //     prop.$kind = prop.$kind % Bridge.Typemarkers.NestedOffset;
            // }


                if (prop.$kind === Bridge.Typemarkers.Enum && !prop.inherits) {
                prop.inherits = [System.IComparable, System.IFormattable];
            }

            // var rNames = ["fields", "events", "props", "ctors", "methods"],
            //     defaultScheme = Bridge.isFunction(prop.main) ? 0 : 1,
                var defaultScheme = Bridge.isFunction(prop.main) ? 0 : 1,
                check = function (scope) {
                    if (Bridge.isPlainObject(scope.config) ||
                        Bridge.isFunction(scope.$main) ||
                        scope.hasOwnProperty("ctor") && Bridge.isFunction(scope.ctor)) {
                        defaultScheme = 1;

                        return false;
                    }

                    if (Bridge.isArray(scope.alias) && scope.alias.length > 0 && scope.alias.length % 2 === 0) {
                        return true;
                    }

                    for (var j = 0; j < rNames.length; j++) {
                        const rName = scope[rNames[j]];
                        if (Bridge.isPlainObject(rName)) {
                            return true;
                        }
                    }

                    return false;
                },
                alternateScheme = check(prop);

            if (!alternateScheme && prop.statics) {
                alternateScheme = check(prop.statics);
            }

            if (!alternateScheme) {
                alternateScheme = defaultScheme == 0;
            }

            if (alternateScheme) {
                prop = Bridge.Class.convertScheme(prop);
            }

            var extend = prop.$inherits || prop.inherits,
                statics = prop.$statics || prop.statics,
                isEntryPoint = prop.$entryPoint,
                base,
                prototype,
                scope = prop.$scope || gscope || Bridge.global,
                objectType = Bridge.global.System && Bridge.global.System.Object || Object,
                i,
                v,
                isCtor,
                ctorName,
                name,
                registerT = true;

            if (prop.$kind === Bridge.Typemarkers.Enum) {
                extend = [System.Enum];
            }

            if (prop.$noRegister === true) {
                registerT = false;
                prop.$noRegister = null;
            }

            if (prop.$inherits) {
                prop.$inherits = null;
            } else {
                prop.inherits = null;
            }

            if (isEntryPoint) {
                delete prop.$entryPoint;
            }

            if (Bridge.isFunction(statics)) {
                statics = null;
            } else if (prop.$statics) {
                prop.$statics = null;
            } else {
                prop.statics = null;
            }

            var Class,
                cls = prop.hasOwnProperty("ctor") && prop.ctor;

            if (!cls) {
                if (prop.$literal) {
                    Class = function (obj) {
                        obj = obj || {};
                        obj.$getType = function () { return Class };

                        return obj;
                    };
                } else {
                    Class = function () {
                        this.$initialize();

                        if (Class.$base) {
                            if (Class.$$inherits && Class.$$inherits.length > 0 && Class.$$inherits[0].$staticInit) {
                                Class.$$inherits[0].$staticInit();
                            }

                            if (Class.$base.ctor) {
                                Class.$base.ctor.call(this);
                            } else if (Bridge.isFunction(Class.$base.constructor)) {
                                Class.$base.constructor.call(this);
                            }
                        }
                    };
                }

                prop.ctor = Class;
            } else {
                Class = cls;
            }

            if (prop.$literal) {
                if ((!statics || !statics.createInstance)) {
                    Class.createInstance = function () {
                        var obj = {};

                        obj.$getType = function () { return Class };

                        return obj;
                    };
                }

                Class.$literal = true;
                prop.$literal = null;
            }

            if (!isGenericInstance && registerT) {
                scope = Bridge.Class.set(scope, className, Class);
            }

            if (gCfg) {
                gCfg.fn.$cache.push({ type: Class, args: gCfg.args });
            }

            Class.$$name = className;

            if (isNested) {
                var lastIndex = Class.$$name.lastIndexOf(".");

                Class.$$name = Class.$$name.substr(0, lastIndex) + "+" + Class.$$name.substr(lastIndex + 1)
            }

            Class.$kind = prop.$kind;

            if (prop.$module) {
                Class.$module = prop.$module;
            }

            if (prop.$metadata) {
                Class.$metadata = prop.$metadata;
            }

            if (gCfg && isGenericInstance) {
                Class.$genericTypeDefinition = gCfg.fn;
                Class.$typeArguments = gCfg.args;
                Class.$assembly = gCfg.fn.$assembly || Bridge.$currentAssembly;

                var result = Bridge.Reflection.getTypeFullName(gCfg.fn);

                for (i = 0; i < gCfg.args.length; i++) {
                    result += (i === 0 ? "[" : ",") + "[" + Bridge.Reflection.getTypeQName(gCfg.args[i]) + "]";
                }

                result += "]";

                Class.$$fullname = result;
            } else {
                Class.$$fullname = Class.$$name;
            }

            if (Bridge.isFunction(extend)) {
                extend = extend();
            }

            Bridge.Class.createInheritors(Class, extend);

            var noBase = extend ? extend[0].$kind === Bridge.Typemarkers.Interface : true;

            if (noBase) {
                extend = null;
            }

            base = extend ? extend[0].prototype : this.prototype;
            Class.$base = base;

            if (extend && !extend[0].$$initCtor) {
                var cls = extend[0];
                var $$initCtor = function () { };
                $$initCtor.prototype = cls.prototype;
                $$initCtor.prototype.constructor = cls;
                $$initCtor.prototype.$$fullname = Bridge.Reflection.getTypeFullName(cls);

                prototype = new $$initCtor();
            }
            else {
                prototype = extend ? new extend[0].$$initCtor() : (objectType.$$initCtor ? new objectType.$$initCtor() : new objectType());
            }

            Class.$$initCtor = function () { };
            Class.$$initCtor.prototype = prototype;
            Class.$$initCtor.prototype.constructor = Class;
            Class.$$initCtor.prototype.$$fullname = gCfg && isGenericInstance ? Class.$$fullname : Class.$$name;

            if (statics) {
                var staticsConfig = statics.$config || statics.config;

                if (staticsConfig && !Bridge.isFunction(staticsConfig)) {
                    Bridge.Class.initConfig(extend, base, staticsConfig, true, Class);

                    if (statics.$config) {
                        statics.$config = null;
                    } else {
                        statics.config = null;
                    }
                }
            }

            var instanceConfig = prop.$config || prop.config;

            if (instanceConfig && !Bridge.isFunction(instanceConfig)) {
                Bridge.Class.initConfig(extend, base, instanceConfig, false, prop, prototype);

                if (prop.$config) {
                    prop.$config = null;
                } else {
                    prop.config = null;
                }
            } else if (extend && base.$initMembers) {
                prop.$initMembers = function () {
                    base.$initMembers.call(this);
                };
            }

            prop.$initialize = Bridge.Class._initialize;

            for (name in prop) {
                v = prop[name];
                isCtor = name === "ctor";
                ctorName = name;

                if (Bridge.isFunction(v) && (isCtor || name.substring(0, 5) === "$ctor")) {
                    isCtor = true;
                }

                if (isCtor) {
                    Class[ctorName] = v;
                    Class[ctorName].prototype = prototype;
                    Class[ctorName].prototype.constructor = Class;
                    prototype[ctorName] = v;
                } else {
                    prototype[ctorName] = v;
                }
            }

            prototype.$$name = className;

            if (!prototype.toJSON) {
                prototype.toJSON = Bridge.Class.toJSON;
            }

            if (statics) {
                for (name in statics) {
                    var member = statics[name];

                    if (name === "ctor") {
                        Class["$ctor"] = member;
                    } else {
                        if (prop.$kind === Bridge.Typemarkers.Enum && !Bridge.isFunction(member) && name.charAt(0) !== "$") {
                            Class.$names = Class.$names || [];
                            const aliases = ( prototype.statics && prototype.statics.$config && prototype.statics.$config.alias ) || [];
                            const currentNamePosition = aliases.indexOf( name );
                            if ( currentNamePosition !== -1 ) {
                                // The only case when enum's name was aliased is when file was minified by troll.js
                                // We should use the original name in this case to properly support System.Enum.toString and similar methods
                                Class.$names.push({name: aliases[ currentNamePosition + 1 ] || name, value: member});
                            } else {
                                Class.$names.push({name: name, value: member});
                            }
                        }

                        Class[name] = member;
                    }
                }

                if (prop.$kind === Bridge.Typemarkers.Enum && Class.$names) {
                    Class.$names = Class.$names.sort(function (i1, i2) {
                        if (Bridge.isFunction(i1.value.eq)) {
                            return i1.value.sub(i2.value).sign();
                        }

                        return i1.value - i2.value;
                    }).map(function (i) {
                        return i.name;
                    });
                }
            }

            if (!extend) {
                extend = [objectType].concat(Class.$interfaces);
            }

            Bridge.Class.setInheritors(Class, extend);

            fn = function () {
                if (Bridge.Class.staticInitAllow && !Class.$isGenericTypeDefinition) {
                    Class.$staticInit = null;

                    if (Class.$initMembers) {
                        Class.$initMembers();
                    }

                    if (Class.$ctor) {
                        Class.$ctor();
                    }
                }
            };

            if (isEntryPoint || Bridge.isFunction(prototype.$main)) {
                if (prototype.$main) {
                    var entryName = prototype.$main.name || "Main";

                    if (!Class[entryName]) {
                        Class[entryName] = prototype.$main;
                    }
                }

                Bridge.Class.$queueEntry.push(Class);
            }

            Class.$staticInit = fn;

            if (!isGenericInstance && registerT) {
                Bridge.Class.registerType(className, Class);
            }

            if (Bridge.Reflection) {
                Class.$getMetadata = Bridge.Reflection.getMetadata;
            }

            if (Class.$kind === Bridge.Typemarkers.Enum) {
                if (!Class.prototype.$utype) {
                    Class.prototype.$utype = System.Int32;
                }
                Class.$is = function (instance) {
                    var utype = Class.prototype.$utype;

                    if (utype === String) {
                        return typeof (instance) == "string";
                    }

                    if (utype && utype.$is) {
                        return utype.$is(instance);
                    }

                    return typeof (instance) == "number";
                };

                Class.getDefaultValue = function () {
                    var utype = Class.prototype.$utype;

                    if (utype === String || utype === System.String) {
                        return null;
                    }

                    return 0;
                };
            }

            if (Class.$kind === Bridge.Typemarkers.Interface) {
                if (Class.prototype.$variance) {
                    Class.isAssignableFrom = Bridge.Class.varianceAssignable;
                }

                Class.$isInterface = true;
            }

            return Class;
        },

        toCtorString: function () {
            return Bridge.Reflection.getTypeName(this);
        },

        createInheritors: function (cls, extend) {
            var interfaces = [],
                baseInterfaces = [],
                descriptors = [],
                aliases = [];

            if (extend) {
                for (var j = 0; j < extend.length; j++) {
                    var baseType = extend[j],
                        baseI = (baseType.$interfaces || []).concat(baseType.$baseInterfaces || []),
                        baseDescriptors = baseType.$descriptors,
                        baseAliases = baseType.$aliases;

                    if (baseDescriptors && baseDescriptors.length > 0) {
                        for (var d = 0; d < baseDescriptors.length; d++) {
                            descriptors.push(baseDescriptors[d]);
                        }
                    }

                    if (baseAliases && baseAliases.length > 0) {
                        for (var d = 0; d < baseAliases.length; d++) {
                            aliases.push(baseAliases[d]);
                        }
                    }

                    if (baseI.length > 0) {
                        for (var k = 0; k < baseI.length; k++) {
                            if (baseInterfaces.indexOf(baseI[k]) < 0) {
                                baseInterfaces.push(baseI[k]);
                            }
                        }
                    }

                    if (baseType.$kind === Bridge.Typemarkers.Interface) {
                        interfaces.push(baseType);
                    }
                }
            }

            cls.$descriptors = descriptors;
            cls.$aliases = aliases;
            cls.$baseInterfaces = baseInterfaces;
            cls.$interfaces = interfaces;
            cls.$allInterfaces = interfaces.concat(baseInterfaces);
        },

        toJSON: function () {
            var obj = {},
                t = Bridge.getType(this),
                descriptors = t.$descriptors || [];

            for (var key in this) {
                var own = this.hasOwnProperty(key),
                    descriptor = null;

                if (!own) {
                    for (var i = descriptors.length - 1; i >= 0; i--) {
                        if (descriptors[i].name === key) {
                            descriptor = descriptors[i];

                            break;
                        }
                    }
                }

                var dcount = key.split("$").length;

                if ((own || descriptor != null) && (dcount === 1 || dcount === 2 && key.match("\$\d+$"))) {
                    obj[key] = this[key];
                }
            }

            return obj;
        },

        setInheritors: function (cls, extend) {
            cls.$$inherits = extend;

            for (var i = 0; i < extend.length; i++) {
                var scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);
            }
        },

        varianceAssignable: function (source) {
            var check = function (target, type) {
                if (type.$genericTypeDefinition === target.$genericTypeDefinition && type.$typeArguments.length === target.$typeArguments.length) {
                    for (var i = 0; i < target.$typeArguments.length; i++) {
                        var v = target.prototype.$variance[i], t = target.$typeArguments[i], s = type.$typeArguments[i];

                        switch (v) {
                            case 1: if (!Bridge.Reflection.isAssignableFrom(t, s))
                                return false;

                                break;
                            case 2: if (!Bridge.Reflection.isAssignableFrom(s, t))
                                return false;

                                break;
                            default: if (s !== t)
                                return false;
                        }
                    }

                    return true;
                }

                return false;
            };

            if (source.$kind === Bridge.Typemarkers.Interface && check(this, source)) {
                return true;
            }

            var ifs = Bridge.Reflection.getInterfaces(source);

            for (var i = 0; i < ifs.length; i++) {
                if (ifs[i] === this || check(this, ifs[i])) {
                    return true;
                }
            }

            return false;
        },

        registerType: function (className, cls) {
            if (Bridge.$currentAssembly) {
                Bridge.$currentAssembly.$types[className] = cls;
                cls.$assembly = Bridge.$currentAssembly;
            }
        },

        addExtend: function (cls, extend) {
            var i,
                scope;

            Array.prototype.push.apply(cls.$$inherits, extend);
            cls.$interfaces = cls.$interfaces || [];
            cls.$baseInterfaces = cls.$baseInterfaces || [];

            for (i = 0; i < extend.length; i++) {
                scope = extend[i];

                if (!scope.$$inheritors) {
                    scope.$$inheritors = [];
                }

                scope.$$inheritors.push(cls);

                var baseI = (scope.$interfaces || []).concat(scope.$baseInterfaces || []);

                if (baseI.length > 0) {
                    for (var k = 0; k < baseI.length; k++) {
                        if (cls.$baseInterfaces.indexOf(baseI[k]) < 0) {
                            cls.$baseInterfaces.push(baseI[k]);
                        }
                    }
                }

                if (scope.$kind === Bridge.Typemarkers.Interface) {
                    cls.$interfaces.push(scope);
                }
            }

            cls.$allInterfaces = cls.$interfaces.concat(cls.$baseInterfaces);
        },

        set: function (scope, className, cls, noDefineProp) {
            var nameParts = className.split("."),
                name,
                key,
                exists,
                i;

            for (i = 0; i < (nameParts.length - 1) ; i++) {
                if (typeof scope[nameParts[i]] == "undefined") {
                    scope[nameParts[i]] = {};
                }

                scope = scope[nameParts[i]];
            }

            name = nameParts[nameParts.length - 1];
            exists = scope[name];

            if (exists) {
                if (exists.$$name === className) {
                    throw "Class '" + className + "' is already defined";
                }

                for (key in exists) {
                    var o = exists[key];

                    if (typeof o === "function" && o.$$name) {
                        (function (cls, key, o) {
                            Object.defineProperty(cls, key, {
                                get: function () {
                                    if (Bridge.Class.staticInitAllow) {
                                        if (o.$staticInit) {
                                            o.$staticInit();
                                        }

                                        Bridge.Class.defineProperty(cls, key, o);
                                    }

                                    return o;
                                },

                                set: function (newValue) {
                                    o = newValue;
                                },

                                enumerable: true,

                                configurable: true
                            });
                        })(cls, key, o);
                    }
                }
            }

            if (noDefineProp !== true) {
                (function (scope, name, cls) {
                    Object.defineProperty(scope, name, {
                        get: function () {
                            if (Bridge.Class.staticInitAllow) {
                                if (cls.$staticInit) {
                                    cls.$staticInit();
                                }

                                Bridge.Class.defineProperty(scope, name, cls);
                            }

                            return cls;
                        },

                        set: function (newValue) {
                            cls = newValue;
                        },

                        enumerable: true,

                        configurable: true
                    });
                })(scope, name, cls);
            } else {
                scope[name] = cls;
            }

            return scope;
        },

        defineProperty: function (scope, name, cls) {
            Object.defineProperty(scope, name, {
                value: cls,
                enumerable: true,
                configurable: true
            });
        },

        genericName: function (name, typeArguments) {
            var gName = name;

            for (var i = 0; i < typeArguments.length; i++) {
                var ta = typeArguments[i];

                gName += "$" + (ta.$$name || Bridge.getTypeName(ta));
            }

            return gName;
        },

        getCachedType: function (fn, args) {
            var arr = fn.$cache,
                len = arr.length,
                key,
                found,
                i, g;

            for (i = 0; i < len; i++) {
                key = arr[i];

                if (key.args.length === args.length) {
                    found = true;

                    for (g = 0; g < key.args.length; g++) {
                        if (key.args[g] !== args[g]) {
                            found = false;

                            break;
                        }
                    }

                    if (found) {
                        return key;
                    }
                }
            }

            return null;
        },

        generic: function (className, scope, fn, prop) {
            fn.$$name = className;
            fn.$kind = Bridge.Typemarkers.Class;

            Bridge.Class.set(scope, className, fn, true);
            Bridge.Class.registerType(className, fn);

            fn.$typeArgumentCount = prop.length;
            fn.$isGenericTypeDefinition = true;
            fn.$getMetadata = Bridge.Reflection.getMetadata;

            fn.$staticInit = function () {
                fn.$typeArguments = Bridge.Reflection.createTypeParams(prop);

                var old = Bridge.Class.staticInitAllow,
                    oldIsBlocked = Bridge.Class.queueIsBlocked;

                Bridge.Class.staticInitAllow = false;
                Bridge.Class.queueIsBlocked = true;

                var cfg = prop.apply(null, fn.$typeArguments),
                    extend = cfg.$inherits || cfg.inherits;

                Bridge.Class.staticInitAllow = old;
                Bridge.Class.queueIsBlocked = oldIsBlocked;

                if (extend && Bridge.isFunction(extend)) {
                    extend = extend();
                }

                Bridge.Class.createInheritors(fn, extend);

                var objectType = Bridge.global.System && Bridge.global.System.Object || Object;

                if (!extend) {
                    extend = [objectType].concat(fn.$interfaces);
                }

                Bridge.Class.setInheritors(fn, extend);

                var prototype = extend ? (extend[0].$$initCtor ? new extend[0].$$initCtor() : new extend[0]()) : new objectType();

                fn.prototype = prototype;
                fn.prototype.constructor = fn;
                fn.$kind = cfg.$kind || Bridge.Typemarkers.Class;

                if (cfg.$module) {
                    fn.$module = cfg.$module;
                }
            };

            Bridge.Class.$queue.push(fn);

            return fn;
        },

        init: function (fn) {
            if (Bridge.Reflection) {
                var metas = Bridge.Reflection.deferredMeta,
                    len = metas.length;

                if (len > 0) {
                    Bridge.Reflection.deferredMeta = [];

                    for (var i = 0; i < len; i++) {
                        var item = metas[i];

                        Bridge.setMetadata(item.typeName, item.metadata, item.ns);
                    }
                }
            }

            if (fn) {
                var old = Bridge.Class.staticInitAllow;

                Bridge.Class.staticInitAllow = true;
                fn();
                Bridge.Class.staticInitAllow = old;

                return;
            }

            Bridge.Class.staticInitAllow = true;

            var queue = Bridge.Class.$queue.concat(Bridge.Class.$queueEntry);

            Bridge.Class.$queue.length = 0;
            Bridge.Class.$queueEntry.length = 0;

            for (var i = 0; i < queue.length; i++) {
                var t = queue[i];

                if (t.$staticInit) {
                    t.$staticInit();
                }

                if (t.prototype.$main) {
                    (function (cls, name) {
                        Bridge.ready(function () {
                            var task = cls[name]();

                            if (task && task.continueWith) {
                                task.continueWith(function () {
                                    setTimeout(function () {
                                        task.getAwaitedResult();
                                    }, 0);
                                });
                            }
                        });
                    })(t, t.prototype.$main.name || "Main");

                    t.prototype.$main = null;
                }
            }
        }
    };

    Bridge.Class = base;
    Bridge.Class.$queue = [];
    Bridge.Class.$queueEntry = [];
    // Bridge.define = Bridge.Class.define;
    // Bridge.definei = Bridge.Class.definei;
    // Bridge.init = Bridge.Class.init;

        window.__defineTime = 0;
        window.__defineiTime = 0;
        window.__initTime = 0;

        Bridge.define = function(...args){
            const st = performance.now();
            const r = Bridge.Class.define(...args);
            window.__defineTime += performance.now() - st;

            return r;
        };
        Bridge.definei = function(...args){
            const st = performance.now();
            const r = Bridge.Class.definei(...args);
            window.__defineiTime += performance.now() - st;

            return r;
        };
        Bridge.init = function(...args){
            const st = performance.now();
            const r = Bridge.Class.init(...args);
            window.__initTime += performance.now() - st;

            return r;
        };
