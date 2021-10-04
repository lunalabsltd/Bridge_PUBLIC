    /*System.Collections.Generic.CollectionExtensions start.*/
    Bridge.define("System.Collections.Generic.CollectionExtensions", {
        statics: {
            methods: {
                /*System.Collections.Generic.CollectionExtensions.GetValueOrDefault:static start.*/
                GetValueOrDefault: function (TKey, TValue, dictionary, key) {
                    return System.Collections.Generic.CollectionExtensions.GetValueOrDefault$1(TKey, TValue, dictionary, key, Bridge.getDefaultValue(TValue));
                },
                /*System.Collections.Generic.CollectionExtensions.GetValueOrDefault:static end.*/

                /*System.Collections.Generic.CollectionExtensions.GetValueOrDefault$1:static start.*/
                GetValueOrDefault$1: function (TKey, TValue, dictionary, key, defaultValue) {
                    if (dictionary == null) {
                        throw new System.ArgumentNullException.$ctor1("dictionary");
                    }

                    var value = { };
                    return dictionary["System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue"](key, value) ? value.v : defaultValue;
                },
                /*System.Collections.Generic.CollectionExtensions.GetValueOrDefault$1:static end.*/

                /*System.Collections.Generic.CollectionExtensions.TryAdd:static start.*/
                TryAdd: function (TKey, TValue, dictionary, key, value) {
                    if (dictionary == null) {
                        throw new System.ArgumentNullException.$ctor1("dictionary");
                    }

                    if (!dictionary["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey"](key)) {
                        dictionary["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add"](key, value);
                        return true;
                    }

                    return false;
                },
                /*System.Collections.Generic.CollectionExtensions.TryAdd:static end.*/

                /*System.Collections.Generic.CollectionExtensions.Remove:static start.*/
                Remove: function (TKey, TValue, dictionary, key, value) {
                    if (dictionary == null) {
                        throw new System.ArgumentNullException.$ctor1("dictionary");
                    }

                    if (dictionary["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue"](key, value)) {
                        dictionary["System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove"](key);
                        return true;
                    }

                    value.v = Bridge.getDefaultValue(TValue);
                    return false;
                },
                /*System.Collections.Generic.CollectionExtensions.Remove:static end.*/


            }
        }
    });
    /*System.Collections.Generic.CollectionExtensions end.*/
