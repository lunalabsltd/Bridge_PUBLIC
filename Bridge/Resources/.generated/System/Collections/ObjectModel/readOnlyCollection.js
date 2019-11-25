    /*System.Collections.ObjectModel.ReadOnlyCollection$1 start.*/
    Bridge.define("System.Collections.ObjectModel.ReadOnlyCollection$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            methods: {
                /*System.Collections.ObjectModel.ReadOnlyCollection$1.IsCompatibleObject:static start.*/
                IsCompatibleObject: function (value) {
                    return ((Bridge.is(value, T)) || (value == null && Bridge.getDefaultValue(T) == null));
                },
                /*System.Collections.ObjectModel.ReadOnlyCollection$1.IsCompatibleObject:static end.*/


            }
        },
        fields: {
            list: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this.list, T);
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return this;
                }
            },
            Items: {
                get: function () {
                    return this.list;
                }
            },
            System$Collections$IList$IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "getItem", ["System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$getItem", "System$Collections$Generic$IReadOnlyList$1$getItem"],
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "System$Collections$Generic$IList$1$getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "System$Collections$Generic$IList$1$setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "System$Collections$Generic$ICollection$1$clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "System$Collections$Generic$IList$1$insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "System$Collections$Generic$IList$1$removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                if (list == null) {
                    throw new System.ArgumentNullException.$ctor1("list");
                }
                this.list = list;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$setItem: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$IList$setItem: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.contains start.*/
            contains: function (value) {
                return System.Array.contains(this.list, value, T);
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.contains end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$contains start.*/
            System$Collections$IList$contains: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).IsCompatibleObject(value)) {
                    return this.contains(Bridge.cast(Bridge.unbox(value, T), T));
                }
                return false;
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$contains end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.copyTo start.*/
            copyTo: function (array, index) {
                System.Array.copyTo(this.list, array, index, T);
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.copyTo end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$ICollection$copyTo start.*/
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1("array");
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException.$ctor1("array");
                }

                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.Count) {
                    throw new System.ArgumentException.ctor();
                }

                var items = Bridge.as(array, System.Array.type(T));
                if (items != null) {
                    System.Array.copyTo(this.list, items, index, T);
                } else {
                    var targetType = (Bridge.getType(array).$elementType || null);
                    var sourceType = T;
                    if (!(Bridge.Reflection.isAssignableFrom(targetType, sourceType) || Bridge.Reflection.isAssignableFrom(sourceType, targetType))) {
                        throw new System.ArgumentException.ctor();
                    }

                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        throw new System.ArgumentException.ctor();
                    }

                    var count = System.Array.getCount(this.list, T);
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        objects[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), objects)] = System.Array.getItem(this.list, i, T);
                    }
                }
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$ICollection$copyTo end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.GetEnumerator start.*/
            GetEnumerator: function () {
                return Bridge.getEnumerator(this.list, T);
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.GetEnumerator end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return Bridge.getEnumerator(Bridge.cast(this.list, System.Collections.IEnumerable));
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.indexOf start.*/
            indexOf: function (value) {
                return System.Array.indexOf(this.list, value, 0, null, T);
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.indexOf end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$indexOf start.*/
            System$Collections$IList$indexOf: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).IsCompatibleObject(value)) {
                    return this.indexOf(Bridge.cast(Bridge.unbox(value, T), T));
                }
                return -1;
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$indexOf end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$add start.*/
            System$Collections$Generic$ICollection$1$add: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$add end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$add start.*/
            System$Collections$IList$add: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$add end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$clear start.*/
            System$Collections$Generic$ICollection$1$clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$clear end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$clear start.*/
            System$Collections$IList$clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$clear end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$IList$1$insert start.*/
            System$Collections$Generic$IList$1$insert: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$IList$1$insert end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$insert start.*/
            System$Collections$IList$insert: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$insert end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$remove start.*/
            System$Collections$Generic$ICollection$1$remove: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$ICollection$1$remove end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$remove start.*/
            System$Collections$IList$remove: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$remove end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$IList$1$removeAt start.*/
            System$Collections$Generic$IList$1$removeAt: function (index) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$Generic$IList$1$removeAt end.*/

            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$removeAt start.*/
            System$Collections$IList$removeAt: function (index) {
                throw new System.NotSupportedException.ctor();
            },
            /*System.Collections.ObjectModel.ReadOnlyCollection$1.System$Collections$IList$removeAt end.*/


        }
    }; });
    /*System.Collections.ObjectModel.ReadOnlyCollection$1 end.*/
