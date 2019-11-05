    //System.Collections.SortedList+SyncSortedList start.
    Bridge.define("System.Collections.SortedList.SyncSortedList", {
        inherits: [System.Collections.SortedList],
        $kind: "nested class",
        fields: {
            _list: null,
            _root: null
        },
        props: {
            Count: {
                get: function () {
                    this._root;
                    {
                        return this._list.Count;
                    }
                }
            },
            SyncRoot: {
                get: function () {
                    return this._root;
                }
            },
            IsReadOnly: {
                get: function () {
                    return this._list.IsReadOnly;
                }
            },
            IsFixedSize: {
                get: function () {
                    return this._list.IsFixedSize;
                }
            },
            IsSynchronized: {
                get: function () {
                    return true;
                }
            },
            Capacity: {
                get: function () {
                    this._root;
                    {
                        return this._list.Capacity;
                    }
                }
            }
        },
        alias: [
            "Count", "System$Collections$ICollection$Count",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "IsReadOnly", "System$Collections$IDictionary$IsReadOnly",
            "IsFixedSize", "System$Collections$IDictionary$IsFixedSize",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IDictionary$getItem",
            "setItem", "System$Collections$IDictionary$setItem",
            "add", "System$Collections$IDictionary$add",
            "clear", "System$Collections$IDictionary$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IDictionary$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IDictionary$GetEnumerator",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "remove", "System$Collections$IDictionary$remove"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                System.Collections.SortedList.ctor.call(this);
                this._list = list;
                this._root = list.SyncRoot;
            }
        },
        methods: {
            getItem: function (key) {
                this._root;
                {
                    return this._list.getItem(key);
                }
            },
            setItem: function (key, value) {
                this._root;
                {
                    this._list.setItem(key, value);
                }
            },
            //System.Collections.SortedList+SyncSortedList.add start.
            add: function (key, value) {
                this._root;
                {
                    this._list.add(key, value);
                }
            },
            //System.Collections.SortedList+SyncSortedList.add end.

            //System.Collections.SortedList+SyncSortedList.clear start.
            clear: function () {
                this._root;
                {
                    this._list.clear();
                }
            },
            //System.Collections.SortedList+SyncSortedList.clear end.

            //System.Collections.SortedList+SyncSortedList.clone start.
            clone: function () {
                this._root;
                {
                    return this._list.clone();
                }
            },
            //System.Collections.SortedList+SyncSortedList.clone end.

            //System.Collections.SortedList+SyncSortedList.contains start.
            contains: function (key) {
                this._root;
                {
                    return this._list.contains(key);
                }
            },
            //System.Collections.SortedList+SyncSortedList.contains end.

            //System.Collections.SortedList+SyncSortedList.ContainsKey start.
            ContainsKey: function (key) {
                this._root;
                {
                    return this._list.ContainsKey(key);
                }
            },
            //System.Collections.SortedList+SyncSortedList.ContainsKey end.

            //System.Collections.SortedList+SyncSortedList.ContainsValue start.
            ContainsValue: function (key) {
                this._root;
                {
                    return this._list.ContainsValue(key);
                }
            },
            //System.Collections.SortedList+SyncSortedList.ContainsValue end.

            //System.Collections.SortedList+SyncSortedList.copyTo start.
            copyTo: function (array, index) {
                this._root;
                {
                    this._list.copyTo(array, index);
                }
            },
            //System.Collections.SortedList+SyncSortedList.copyTo end.

            //System.Collections.SortedList+SyncSortedList.GetByIndex start.
            GetByIndex: function (index) {
                this._root;
                {
                    return this._list.GetByIndex(index);
                }
            },
            //System.Collections.SortedList+SyncSortedList.GetByIndex end.

            //System.Collections.SortedList+SyncSortedList.GetEnumerator start.
            GetEnumerator: function () {
                this._root;
                {
                    return this._list.GetEnumerator();
                }
            },
            //System.Collections.SortedList+SyncSortedList.GetEnumerator end.

            //System.Collections.SortedList+SyncSortedList.GetKey start.
            GetKey: function (index) {
                this._root;
                {
                    return this._list.GetKey(index);
                }
            },
            //System.Collections.SortedList+SyncSortedList.GetKey end.

            //System.Collections.SortedList+SyncSortedList.GetKeyList start.
            GetKeyList: function () {
                this._root;
                {
                    return this._list.GetKeyList();
                }
            },
            //System.Collections.SortedList+SyncSortedList.GetKeyList end.

            //System.Collections.SortedList+SyncSortedList.GetValueList start.
            GetValueList: function () {
                this._root;
                {
                    return this._list.GetValueList();
                }
            },
            //System.Collections.SortedList+SyncSortedList.GetValueList end.

            //System.Collections.SortedList+SyncSortedList.IndexOfKey start.
            IndexOfKey: function (key) {
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor1("key");
                }

                return this._list.IndexOfKey(key);
            },
            //System.Collections.SortedList+SyncSortedList.IndexOfKey end.

            //System.Collections.SortedList+SyncSortedList.IndexOfValue start.
            IndexOfValue: function (value) {
                this._root;
                {
                    return this._list.IndexOfValue(value);
                }
            },
            //System.Collections.SortedList+SyncSortedList.IndexOfValue end.

            //System.Collections.SortedList+SyncSortedList.RemoveAt start.
            RemoveAt: function (index) {
                this._root;
                {
                    this._list.RemoveAt(index);
                }
            },
            //System.Collections.SortedList+SyncSortedList.RemoveAt end.

            //System.Collections.SortedList+SyncSortedList.remove start.
            remove: function (key) {
                this._root;
                {
                    this._list.remove(key);
                }
            },
            //System.Collections.SortedList+SyncSortedList.remove end.

            //System.Collections.SortedList+SyncSortedList.SetByIndex start.
            SetByIndex: function (index, value) {
                this._root;
                {
                    this._list.SetByIndex(index, value);
                }
            },
            //System.Collections.SortedList+SyncSortedList.SetByIndex end.

            //System.Collections.SortedList+SyncSortedList.ToKeyValuePairsArray start.
            ToKeyValuePairsArray: function () {
                return this._list.ToKeyValuePairsArray();
            },
            //System.Collections.SortedList+SyncSortedList.ToKeyValuePairsArray end.

            //System.Collections.SortedList+SyncSortedList.TrimToSize start.
            TrimToSize: function () {
                this._root;
                {
                    this._list.TrimToSize();
                }
            },
            //System.Collections.SortedList+SyncSortedList.TrimToSize end.


        }
    });
    //System.Collections.SortedList+SyncSortedList end.
