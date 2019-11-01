    //System.Reflection.Module start.
    Bridge.define("System.Reflection.Module", {
        inherits: [System.Reflection.ICustomAttributeProvider,System.Runtime.Serialization.ISerializable],
        statics: {
            fields: {
                DefaultLookup: 0,
                FilterTypeName: null,
                FilterTypeNameIgnoreCase: null
            },
            ctors: {
                init: function () {
                    this.DefaultLookup = 28;
                    this.FilterTypeName = System.Reflection.Module.FilterTypeNameImpl;
                    this.FilterTypeNameIgnoreCase = System.Reflection.Module.FilterTypeNameIgnoreCaseImpl;
                }
            },
            methods: {
                //System.Reflection.Module.FilterTypeNameImpl:static start.
                FilterTypeNameImpl: function (cls, filterCriteria) {
                    if (filterCriteria == null || !(Bridge.is(filterCriteria, System.String))) {
                        throw new System.Reflection.InvalidFilterCriteriaException.$ctor1("A String must be provided for the filter criteria.");
                    }

                    var str = Bridge.cast(filterCriteria, System.String);

                    if (str.length > 0 && str.charCodeAt(((str.length - 1) | 0)) === 42) {
                        str = str.substr(0, ((str.length - 1) | 0));
                        return System.String.startsWith(Bridge.Reflection.getTypeName(cls), str, 4);
                    }

                    return System.String.equals(Bridge.Reflection.getTypeName(cls), str);
                },
                //System.Reflection.Module.FilterTypeNameImpl:static end.

                //System.Reflection.Module.FilterTypeNameIgnoreCaseImpl:static start.
                FilterTypeNameIgnoreCaseImpl: function (cls, filterCriteria) {
                    var $t;
                    if (filterCriteria == null || !(Bridge.is(filterCriteria, System.String))) {
                        throw new System.Reflection.InvalidFilterCriteriaException.$ctor1("A String must be provided for the filter criteria.");
                    }

                    var str = Bridge.cast(filterCriteria, System.String);

                    if (str.length > 0 && str.charCodeAt(((str.length - 1) | 0)) === 42) {
                        str = str.substr(0, ((str.length - 1) | 0));
                        var name = Bridge.Reflection.getTypeName(cls);
                        if (name.length >= str.length) {
                            return (($t = str.length, System.String.compare(name.substr(0, $t), str.substr(0, $t), 5)) === 0);
                        } else {
                            return false;
                        }
                    }
                    return (System.String.compare(str, Bridge.Reflection.getTypeName(cls), 5) === 0);
                },
                //System.Reflection.Module.FilterTypeNameIgnoreCaseImpl:static end.

                op_Equality: function (left, right) {
                    if (Bridge.referenceEquals(left, right)) {
                        return true;
                    }

                    if (left == null || right == null) {
                        return false;
                    }

                    return left.equals(right);
                },
                op_Inequality: function (left, right) {
                    return !(System.Reflection.Module.op_Equality(left, right));
                }
            }
        },
        props: {
            Assembly: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            FullyQualifiedName: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            Name: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            MDStreamVersion: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            ModuleVersionId: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            ScopeName: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            MetadataToken: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            }
        },
        alias: [
            "IsDefined", "System$Reflection$ICustomAttributeProvider$IsDefined",
            "GetCustomAttributes", "System$Reflection$ICustomAttributeProvider$GetCustomAttributes",
            "GetCustomAttributes$1", "System$Reflection$ICustomAttributeProvider$GetCustomAttributes$1"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            //System.Reflection.Module.IsResource start.
            IsResource: function () {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.IsResource end.

            //System.Reflection.Module.IsDefined start.
            IsDefined: function (attributeType, inherit) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.IsDefined end.

            //System.Reflection.Module.GetCustomAttributes start.
            GetCustomAttributes: function (inherit) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetCustomAttributes end.

            //System.Reflection.Module.GetCustomAttributes$1 start.
            GetCustomAttributes$1: function (attributeType, inherit) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetCustomAttributes$1 end.

            //System.Reflection.Module.GetMethod start.
            GetMethod: function (name) {
                if (name == null) {
                    throw new System.ArgumentNullException.$ctor1("name");
                }

                return this.GetMethodImpl(name, System.Reflection.Module.DefaultLookup, null, 3, null, null);
            },
            //System.Reflection.Module.GetMethod end.

            //System.Reflection.Module.GetMethod$2 start.
            GetMethod$2: function (name, types) {
                return this.GetMethod$1(name, System.Reflection.Module.DefaultLookup, null, 3, types, null);
            },
            //System.Reflection.Module.GetMethod$2 end.

            //System.Reflection.Module.GetMethod$1 start.
            GetMethod$1: function (name, bindingAttr, binder, callConvention, types, modifiers) {
                if (name == null) {
                    throw new System.ArgumentNullException.$ctor1("name");
                }
                if (types == null) {
                    throw new System.ArgumentNullException.$ctor1("types");
                }
                for (var i = 0; i < types.length; i = (i + 1) | 0) {
                    if (types[System.Array.index(i, types)] == null) {
                        throw new System.ArgumentNullException.$ctor1("types");
                    }
                }
                return this.GetMethodImpl(name, bindingAttr, binder, callConvention, types, modifiers);
            },
            //System.Reflection.Module.GetMethod$1 end.

            //System.Reflection.Module.GetMethodImpl start.
            GetMethodImpl: function (name, bindingAttr, binder, callConvention, types, modifiers) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetMethodImpl end.

            //System.Reflection.Module.GetMethods start.
            GetMethods: function () {
                return this.GetMethods$1(System.Reflection.Module.DefaultLookup);
            },
            //System.Reflection.Module.GetMethods end.

            //System.Reflection.Module.GetMethods$1 start.
            GetMethods$1: function (bindingFlags) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetMethods$1 end.

            //System.Reflection.Module.GetField start.
            GetField: function (name) {
                return this.GetField$1(name, System.Reflection.Module.DefaultLookup);
            },
            //System.Reflection.Module.GetField end.

            //System.Reflection.Module.GetField$1 start.
            GetField$1: function (name, bindingAttr) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetField$1 end.

            //System.Reflection.Module.GetFields start.
            GetFields: function () {
                return this.GetFields$1(System.Reflection.Module.DefaultLookup);
            },
            //System.Reflection.Module.GetFields end.

            //System.Reflection.Module.GetFields$1 start.
            GetFields$1: function (bindingFlags) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetFields$1 end.

            //System.Reflection.Module.GetTypes start.
            GetTypes: function () {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetTypes end.

            //System.Reflection.Module.GetType start.
            GetType: function (className) {
                return this.GetType$2(className, false, false);
            },
            //System.Reflection.Module.GetType end.

            //System.Reflection.Module.GetType$1 start.
            GetType$1: function (className, ignoreCase) {
                return this.GetType$2(className, false, ignoreCase);
            },
            //System.Reflection.Module.GetType$1 end.

            //System.Reflection.Module.GetType$2 start.
            GetType$2: function (className, throwOnError, ignoreCase) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.GetType$2 end.

            //System.Reflection.Module.FindTypes start.
            FindTypes: function (filter, filterCriteria) {
                var c = this.GetTypes();
                var cnt = 0;
                for (var i = 0; i < c.length; i = (i + 1) | 0) {
                    if (!Bridge.staticEquals(filter, null) && !filter(c[System.Array.index(i, c)], filterCriteria)) {
                        c[System.Array.index(i, c)] = null;
                    } else {
                        cnt = (cnt + 1) | 0;
                    }
                }
                if (cnt === c.length) {
                    return c;
                }

                var ret = System.Array.init(cnt, null, System.Type);
                cnt = 0;
                for (var i1 = 0; i1 < c.length; i1 = (i1 + 1) | 0) {
                    if (c[System.Array.index(i1, c)] != null) {
                        ret[System.Array.index(Bridge.identity(cnt, ((cnt = (cnt + 1) | 0))), ret)] = c[System.Array.index(i1, c)];
                    }
                }
                return ret;
            },
            //System.Reflection.Module.FindTypes end.

            //System.Reflection.Module.ResolveField start.
            ResolveField: function (metadataToken) {
                return this.ResolveField$1(metadataToken, null, null);
            },
            //System.Reflection.Module.ResolveField end.

            //System.Reflection.Module.ResolveField$1 start.
            ResolveField$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveField$1 end.

            //System.Reflection.Module.ResolveMember start.
            ResolveMember: function (metadataToken) {
                return this.ResolveMember$1(metadataToken, null, null);
            },
            //System.Reflection.Module.ResolveMember end.

            //System.Reflection.Module.ResolveMember$1 start.
            ResolveMember$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveMember$1 end.

            //System.Reflection.Module.ResolveMethod start.
            ResolveMethod: function (metadataToken) {
                return this.ResolveMethod$1(metadataToken, null, null);
            },
            //System.Reflection.Module.ResolveMethod end.

            //System.Reflection.Module.ResolveMethod$1 start.
            ResolveMethod$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveMethod$1 end.

            //System.Reflection.Module.ResolveSignature start.
            ResolveSignature: function (metadataToken) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveSignature end.

            //System.Reflection.Module.ResolveString start.
            ResolveString: function (metadataToken) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveString end.

            //System.Reflection.Module.ResolveType start.
            ResolveType: function (metadataToken) {
                return this.ResolveType$1(metadataToken, null, null);
            },
            //System.Reflection.Module.ResolveType end.

            //System.Reflection.Module.ResolveType$1 start.
            ResolveType$1: function (metadataToken, genericTypeArguments, genericMethodArguments) {
                throw System.NotImplemented.ByDesign;
            },
            //System.Reflection.Module.ResolveType$1 end.

            //System.Reflection.Module.equals start.
            equals: function (o) {
                return Bridge.equals(this, o);
            },
            //System.Reflection.Module.equals end.

            //System.Reflection.Module.getHashCode start.
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            //System.Reflection.Module.getHashCode end.

            //System.Reflection.Module.toString start.
            toString: function () {
                return this.ScopeName;
            },
            //System.Reflection.Module.toString end.


        }
    });
    //System.Reflection.Module end.
