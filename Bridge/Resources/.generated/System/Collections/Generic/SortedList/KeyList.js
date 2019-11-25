    /*System.Collections.Generic.SortedList$2+KeyList start.*/
    Bridge.define("System.Collections.Generic.SortedList$2.KeyList", function (TKey, TValue) { return {
        inherits: [System.Collections.Generic.IList$1(TKey),System.Collections.ICollection],
        $kind: "nested class",
        fields: {
            _dict: null
        },
        props: {
            Count: {
                get: function () {
                    return this._dict._size;
                }
            },
            IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return Bridge.cast(this._dict, System.Collections.ICollection).System$Collections$ICollection$SyncRoot;
                }
            }
        },
        alias: [
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$IsReadOnly",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$add",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$copyTo",
            "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(TKey) + "$insert",
            "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(TKey) + "$getItem",
            "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(TKey) + "$setItem",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(TKey) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(TKey) + "$indexOf",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(TKey) + "$remove",
            "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(TKey) + "$removeAt"
        ],
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                this._dict = dictionary;
            }
        },
        methods: {
            getItem: function (index) {
                return this._dict.GetKey(index);
            },
            setItem: function (index, value) {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_KeyCollectionSet);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.add start.*/
            add: function (key) {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_SortedListNestedWrite);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.add end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.clear start.*/
            clear: function () {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_SortedListNestedWrite);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.clear end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.contains start.*/
            contains: function (key) {
                return this._dict.containsKey(key);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.contains end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.copyTo start.*/
            copyTo: function (array, arrayIndex) {
                System.Array.copy(this._dict.keys, 0, array, arrayIndex, this._dict.Count);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.copyTo end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.System$Collections$ICollection$copyTo start.*/
            System$Collections$ICollection$copyTo: function (array, arrayIndex) {
                if (array != null && System.Array.getRank(array) !== 1) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_RankMultiDimNotSupported);
                }

                try {
                    System.Array.copy(this._dict.keys, 0, array, arrayIndex, this._dict.Count);
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.ArrayTypeMismatchException)) {
                        System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                    } else {
                        throw $e1;
                    }
                }
            },
            /*System.Collections.Generic.SortedList$2+KeyList.System$Collections$ICollection$copyTo end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.insert start.*/
            insert: function (index, value) {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_SortedListNestedWrite);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.insert end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.GetEnumerator start.*/
            GetEnumerator: function () {
                return new (System.Collections.Generic.SortedList$2.SortedListKeyEnumerator(TKey,TValue))(this._dict);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.GetEnumerator end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.SortedList$2.SortedListKeyEnumerator(TKey,TValue))(this._dict);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.indexOf start.*/
            indexOf: function (key) {
                if (key == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.key);
                }

                var i = System.Array.binarySearch(this._dict.keys, 0, this._dict.Count, key, this._dict.comparer);
                if (i >= 0) {
                    return i;
                }
                return -1;
            },
            /*System.Collections.Generic.SortedList$2+KeyList.indexOf end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.remove start.*/
            remove: function (key) {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_SortedListNestedWrite);
                return false;
            },
            /*System.Collections.Generic.SortedList$2+KeyList.remove end.*/

            /*System.Collections.Generic.SortedList$2+KeyList.removeAt start.*/
            removeAt: function (index) {
                System.ThrowHelper.ThrowNotSupportedException$1(System.ExceptionResource.NotSupported_SortedListNestedWrite);
            },
            /*System.Collections.Generic.SortedList$2+KeyList.removeAt end.*/


        }
    }; });
    /*System.Collections.Generic.SortedList$2+KeyList end.*/
