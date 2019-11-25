    /*System.Collections.Generic.List$1 start.*/
    Bridge.define("System.Collections.Generic.List$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            fields: {
                _defaultCapacity: 0,
                _emptyArray: null
            },
            ctors: {
                init: function () {
                    this._defaultCapacity = 4;
                    this._emptyArray = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            },
            methods: {
                /*System.Collections.Generic.List$1.IsCompatibleObject:static start.*/
                IsCompatibleObject: function (value) {
                    return ((Bridge.is(value, T)) || (value == null && Bridge.getDefaultValue(T) == null));
                },
                /*System.Collections.Generic.List$1.IsCompatibleObject:static end.*/


            }
        },
        fields: {
            _items: null,
            _size: 0,
            _version: 0
        },
        props: {
            Capacity: {
                get: function () {
                    return this._items.length;
                },
                set: function (value) {
                    if (value < this._size) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("value");
                    }

                    if (value !== this._items.length) {
                        if (value > 0) {
                            var newItems = System.Array.init(value, function (){
                                return Bridge.getDefaultValue(T);
                            }, T);
                            if (this._size > 0) {
                                System.Array.copy(this._items, 0, newItems, 0, this._size);
                            }
                            this._items = newItems;
                        } else {
                            this._items = System.Collections.Generic.List$1(T)._emptyArray;
                        }
                    }
                }
            },
            Count: {
                get: function () {
                    return this._size;
                }
            },
            System$Collections$IList$IsFixedSize: {
                get: function () {
                    return false;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return false;
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
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "getItem", ["System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$getItem", "System$Collections$Generic$IReadOnlyList$1$getItem"],
            "setItem", ["System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$setItem", "System$Collections$Generic$IReadOnlyList$1$setItem"],
            "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "clear", "System$Collections$IList$clear",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator",
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
            "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._items = System.Collections.Generic.List$1(T)._emptyArray;
            },
            $ctor2: function (capacity) {
                this.$initialize();
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("capacity");
                }

                if (capacity === 0) {
                    this._items = System.Collections.Generic.List$1(T)._emptyArray;
                } else {
                    this._items = System.Array.init(capacity, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            },
            $ctor1: function (collection) {
                this.$initialize();
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                var c = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
                if (c != null) {
                    var count = System.Array.getCount(c, T);
                    if (count === 0) {
                        this._items = System.Collections.Generic.List$1(T)._emptyArray;
                    } else {
                        this._items = System.Array.init(count, function (){
                            return Bridge.getDefaultValue(T);
                        }, T);
                        System.Array.copyTo(c, this._items, 0, T);
                        this._size = count;
                    }
                } else {
                    this._size = 0;
                    this._items = System.Collections.Generic.List$1(T)._emptyArray;

                    var en = Bridge.getEnumerator(collection, T);
                    try {
                        while (en.System$Collections$IEnumerator$moveNext()) {
                            this.add(en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(en)) {
                            en.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        },
        methods: {
            getItem: function (index) {
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.ctor();
                }
                return this._items[System.Array.index(index, this._items)];
            },
            setItem: function (index, value) {
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.ctor();
                }
                this._items[System.Array.index(index, this._items)] = value;
                this._version = (this._version + 1) | 0;
            },
            System$Collections$IList$getItem: function (index) {
                return this.getItem(index);
            },
            System$Collections$IList$setItem: function (index, value) {
                if (value == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException.$ctor1("value");
                }

                try {
                    this.setItem(index, Bridge.cast(Bridge.unbox(value, T), T));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException.$ctor1("value");
                    } else {
                        throw $e1;
                    }
                }
            },
            /*System.Collections.Generic.List$1.add start.*/
            add: function (item) {
                if (this._size === this._items.length) {
                    this.EnsureCapacity(((this._size + 1) | 0));
                }
                this._items[System.Array.index(Bridge.identity(this._size, ((this._size = (this._size + 1) | 0))), this._items)] = item;
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.add end.*/

            /*System.Collections.Generic.List$1.System$Collections$IList$add start.*/
            System$Collections$IList$add: function (item) {
                if (item == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException.$ctor1("item");
                }

                try {
                    this.add(Bridge.cast(Bridge.unbox(item, T), T));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException.$ctor1("item");
                    } else {
                        throw $e1;
                    }
                }

                return ((this.Count - 1) | 0);
            },
            /*System.Collections.Generic.List$1.System$Collections$IList$add end.*/

            /*System.Collections.Generic.List$1.AddRange start.*/
            AddRange: function (collection) {
                this.InsertRange(this._size, collection);
            },
            /*System.Collections.Generic.List$1.AddRange end.*/

            /*System.Collections.Generic.List$1.AsReadOnly start.*/
            AsReadOnly: function () {
                return new (System.Collections.ObjectModel.ReadOnlyCollection$1(T))(this);
            },
            /*System.Collections.Generic.List$1.AsReadOnly end.*/

            /*System.Collections.Generic.List$1.BinarySearch$2 start.*/
            BinarySearch$2: function (index, count, item, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                return System.Array.binarySearch(this._items, index, count, item, comparer);
            },
            /*System.Collections.Generic.List$1.BinarySearch$2 end.*/

            /*System.Collections.Generic.List$1.BinarySearch start.*/
            BinarySearch: function (item) {
                return this.BinarySearch$2(0, this.Count, item, null);
            },
            /*System.Collections.Generic.List$1.BinarySearch end.*/

            /*System.Collections.Generic.List$1.BinarySearch$1 start.*/
            BinarySearch$1: function (item, comparer) {
                return this.BinarySearch$2(0, this.Count, item, comparer);
            },
            /*System.Collections.Generic.List$1.BinarySearch$1 end.*/

            /*System.Collections.Generic.List$1.clear start.*/
            clear: function () {
                if (this._size > 0) {
                    System.Array.fill(this._items, function () {
                        return Bridge.getDefaultValue(T);
                    }, 0, this._size);
                    this._size = 0;
                }
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.clear end.*/

            /*System.Collections.Generic.List$1.contains start.*/
            contains: function (item) {
                if (item == null) {
                    for (var i = 0; i < this._size; i = (i + 1) | 0) {
                        if (this._items[System.Array.index(i, this._items)] == null) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    var c = System.Collections.Generic.EqualityComparer$1(T).def;
                    for (var i1 = 0; i1 < this._size; i1 = (i1 + 1) | 0) {
                        if (c.equals2(this._items[System.Array.index(i1, this._items)], item)) {
                            return true;
                        }
                    }
                    return false;
                }
            },
            /*System.Collections.Generic.List$1.contains end.*/

            /*System.Collections.Generic.List$1.System$Collections$IList$contains start.*/
            System$Collections$IList$contains: function (item) {
                if (System.Collections.Generic.List$1(T).IsCompatibleObject(item)) {
                    return this.contains(Bridge.cast(Bridge.unbox(item, T), T));
                }
                return false;
            },
            /*System.Collections.Generic.List$1.System$Collections$IList$contains end.*/

            /*System.Collections.Generic.List$1.ConvertAll start.*/
            ConvertAll: function (TOutput, converter) {
                if (Bridge.staticEquals(converter, null)) {
                    throw new System.ArgumentNullException.$ctor1("converter");
                }

                var list = new (System.Collections.Generic.List$1(TOutput)).$ctor2(this._size);
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    list._items[System.Array.index(i, list._items)] = converter(this._items[System.Array.index(i, this._items)]);
                }
                list._size = this._size;
                return list;
            },
            /*System.Collections.Generic.List$1.ConvertAll end.*/

            /*System.Collections.Generic.List$1.CopyTo start.*/
            CopyTo: function (array) {
                this.copyTo(array, 0);
            },
            /*System.Collections.Generic.List$1.CopyTo end.*/

            /*System.Collections.Generic.List$1.System$Collections$ICollection$copyTo start.*/
            System$Collections$ICollection$copyTo: function (array, arrayIndex) {
                if ((array != null) && (System.Array.getRank(array) !== 1)) {
                    throw new System.ArgumentException.$ctor1("array");
                }

                System.Array.copy(this._items, 0, array, arrayIndex, this._size);
            },
            /*System.Collections.Generic.List$1.System$Collections$ICollection$copyTo end.*/

            /*System.Collections.Generic.List$1.CopyTo$1 start.*/
            CopyTo$1: function (index, array, arrayIndex, count) {
                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                System.Array.copy(this._items, index, array, arrayIndex, count);
            },
            /*System.Collections.Generic.List$1.CopyTo$1 end.*/

            /*System.Collections.Generic.List$1.copyTo start.*/
            copyTo: function (array, arrayIndex) {
                System.Array.copy(this._items, 0, array, arrayIndex, this._size);
            },
            /*System.Collections.Generic.List$1.copyTo end.*/

            /*System.Collections.Generic.List$1.EnsureCapacity start.*/
            EnsureCapacity: function (min) {
                if (this._items.length < min) {
                    var newCapacity = this._items.length === 0 ? System.Collections.Generic.List$1(T)._defaultCapacity : Bridge.Int.mul(this._items.length, 2);
                    if ((newCapacity >>> 0) > 2146435071) {
                        newCapacity = 2146435071;
                    }
                    if (newCapacity < min) {
                        newCapacity = min;
                    }
                    this.Capacity = newCapacity;
                }
            },
            /*System.Collections.Generic.List$1.EnsureCapacity end.*/

            /*System.Collections.Generic.List$1.Exists start.*/
            Exists: function (match) {
                return this.FindIndex$2(match) !== -1;
            },
            /*System.Collections.Generic.List$1.Exists end.*/

            /*System.Collections.Generic.List$1.Find start.*/
            Find: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return this._items[System.Array.index(i, this._items)];
                    }
                }
                return Bridge.getDefaultValue(T);
            },
            /*System.Collections.Generic.List$1.Find end.*/

            /*System.Collections.Generic.List$1.FindAll start.*/
            FindAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                var list = new (System.Collections.Generic.List$1(T)).ctor();
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        list.add(this._items[System.Array.index(i, this._items)]);
                    }
                }
                return list;
            },
            /*System.Collections.Generic.List$1.FindAll end.*/

            /*System.Collections.Generic.List$1.FindIndex$2 start.*/
            FindIndex$2: function (match) {
                return this.FindIndex(0, this._size, match);
            },
            /*System.Collections.Generic.List$1.FindIndex$2 end.*/

            /*System.Collections.Generic.List$1.FindIndex$1 start.*/
            FindIndex$1: function (startIndex, match) {
                return this.FindIndex(startIndex, ((this._size - startIndex) | 0), match);
            },
            /*System.Collections.Generic.List$1.FindIndex$1 end.*/

            /*System.Collections.Generic.List$1.FindIndex start.*/
            FindIndex: function (startIndex, count, match) {
                if ((startIndex >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                }

                if (count < 0 || startIndex > ((this._size - count) | 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                var endIndex = (startIndex + count) | 0;
                for (var i = startIndex; i < endIndex; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return i;
                    }
                }
                return -1;
            },
            /*System.Collections.Generic.List$1.FindIndex end.*/

            /*System.Collections.Generic.List$1.FindLast start.*/
            FindLast: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                for (var i = (this._size - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return this._items[System.Array.index(i, this._items)];
                    }
                }
                return Bridge.getDefaultValue(T);
            },
            /*System.Collections.Generic.List$1.FindLast end.*/

            /*System.Collections.Generic.List$1.FindLastIndex$2 start.*/
            FindLastIndex$2: function (match) {
                return this.FindLastIndex(((this._size - 1) | 0), this._size, match);
            },
            /*System.Collections.Generic.List$1.FindLastIndex$2 end.*/

            /*System.Collections.Generic.List$1.FindLastIndex$1 start.*/
            FindLastIndex$1: function (startIndex, match) {
                return this.FindLastIndex(startIndex, ((startIndex + 1) | 0), match);
            },
            /*System.Collections.Generic.List$1.FindLastIndex$1 end.*/

            /*System.Collections.Generic.List$1.FindLastIndex start.*/
            FindLastIndex: function (startIndex, count, match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                if (this._size === 0) {
                    if (startIndex !== -1) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                    }
                } else {
                    if ((startIndex >>> 0) >= (this._size >>> 0)) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                    }
                }

                if (count < 0 || ((((startIndex - count) | 0) + 1) | 0) < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                var endIndex = (startIndex - count) | 0;
                for (var i = startIndex; i > endIndex; i = (i - 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return i;
                    }
                }
                return -1;
            },
            /*System.Collections.Generic.List$1.FindLastIndex end.*/

            /*System.Collections.Generic.List$1.ForEach start.*/
            ForEach: function (action) {
                if (Bridge.staticEquals(action, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                var version = this._version;

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (version !== this._version) {
                        break;
                    }
                    action(this._items[System.Array.index(i, this._items)]);
                }

                if (version !== this._version) {
                    throw new System.InvalidOperationException.ctor();
                }
            },
            /*System.Collections.Generic.List$1.ForEach end.*/

            /*System.Collections.Generic.List$1.GetEnumerator start.*/
            GetEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this);
            },
            /*System.Collections.Generic.List$1.GetEnumerator end.*/

            /*System.Collections.Generic.List$1.System$Collections$Generic$IEnumerable$1$GetEnumerator start.*/
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.List$1.System$Collections$Generic$IEnumerable$1$GetEnumerator end.*/

            /*System.Collections.Generic.List$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.List$1.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.Generic.List$1.GetRange start.*/
            GetRange: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                var list = new (System.Collections.Generic.List$1(T)).$ctor2(count);
                System.Array.copy(this._items, index, list._items, 0, count);
                list._size = count;
                return list;
            },
            /*System.Collections.Generic.List$1.GetRange end.*/

            /*System.Collections.Generic.List$1.indexOf start.*/
            indexOf: function (item) {
                return System.Array.indexOfT(this._items, item, 0, this._size);
            },
            /*System.Collections.Generic.List$1.indexOf end.*/

            /*System.Collections.Generic.List$1.System$Collections$IList$indexOf start.*/
            System$Collections$IList$indexOf: function (item) {
                if (System.Collections.Generic.List$1(T).IsCompatibleObject(item)) {
                    return this.indexOf(Bridge.cast(Bridge.unbox(item, T), T));
                }
                return -1;
            },
            /*System.Collections.Generic.List$1.System$Collections$IList$indexOf end.*/

            /*System.Collections.Generic.List$1.IndexOf start.*/
            IndexOf: function (item, index) {
                if (index > this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                return System.Array.indexOfT(this._items, item, index, ((this._size - index) | 0));
            },
            /*System.Collections.Generic.List$1.IndexOf end.*/

            /*System.Collections.Generic.List$1.IndexOf$1 start.*/
            IndexOf$1: function (item, index, count) {
                if (index > this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count < 0 || index > ((this._size - count) | 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                return System.Array.indexOfT(this._items, item, index, count);
            },
            /*System.Collections.Generic.List$1.IndexOf$1 end.*/

            /*System.Collections.Generic.List$1.insert start.*/
            insert: function (index, item) {
                if ((index >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                if (this._size === this._items.length) {
                    this.EnsureCapacity(((this._size + 1) | 0));
                }
                if (index < this._size) {
                    System.Array.copy(this._items, index, this._items, ((index + 1) | 0), ((this._size - index) | 0));
                }
                this._items[System.Array.index(index, this._items)] = item;
                this._size = (this._size + 1) | 0;
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.insert end.*/

            /*System.Collections.Generic.List$1.System$Collections$IList$insert start.*/
            System$Collections$IList$insert: function (index, item) {
                if (item == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException.$ctor1("item");
                }

                try {
                    this.insert(index, Bridge.cast(Bridge.unbox(item, T), T));
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException.$ctor1("item");
                    } else {
                        throw $e1;
                    }
                }
            },
            /*System.Collections.Generic.List$1.System$Collections$IList$insert end.*/

            /*System.Collections.Generic.List$1.InsertRange start.*/
            InsertRange: function (index, collection) {
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                if ((index >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                var c = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
                if (c != null) {
                    var count = System.Array.getCount(c, T);
                    if (count > 0) {
                        this.EnsureCapacity(((this._size + count) | 0));
                        if (index < this._size) {
                            System.Array.copy(this._items, index, this._items, ((index + count) | 0), ((this._size - index) | 0));
                        }

                        if (Bridge.referenceEquals(this, c)) {
                            System.Array.copy(this._items, 0, this._items, index, index);
                            System.Array.copy(this._items, ((index + count) | 0), this._items, Bridge.Int.mul(index, 2), ((this._size - index) | 0));
                        } else {
                            var itemsToInsert = System.Array.init(count, function (){
                                return Bridge.getDefaultValue(T);
                            }, T);
                            System.Array.copyTo(c, itemsToInsert, 0, T);
                            System.Array.copy(itemsToInsert, 0, this._items, index, itemsToInsert.length);
                        }
                        this._size = (this._size + count) | 0;
                    }
                } else {
                    var en = Bridge.getEnumerator(collection, T);
                    try {
                        while (en.System$Collections$IEnumerator$moveNext()) {
                            this.insert(Bridge.identity(index, ((index = (index + 1) | 0))), en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(en)) {
                            en.System$IDisposable$Dispose();
                        }
                    }
                }
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.InsertRange end.*/

            /*System.Collections.Generic.List$1.LastIndexOf start.*/
            LastIndexOf: function (item) {
                if (this._size === 0) {
                    return -1;
                } else {
                    return this.LastIndexOf$2(item, ((this._size - 1) | 0), this._size);
                }
            },
            /*System.Collections.Generic.List$1.LastIndexOf end.*/

            /*System.Collections.Generic.List$1.LastIndexOf$1 start.*/
            LastIndexOf$1: function (item, index) {
                if (index >= this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                return this.LastIndexOf$2(item, index, ((index + 1) | 0));
            },
            /*System.Collections.Generic.List$1.LastIndexOf$1 end.*/

            /*System.Collections.Generic.List$1.LastIndexOf$2 start.*/
            LastIndexOf$2: function (item, index, count) {
                if ((this.Count !== 0) && (index < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if ((this.Count !== 0) && (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (this._size === 0) {
                    return -1;
                }

                if (index >= this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count > ((index + 1) | 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                return System.Array.lastIndexOfT(this._items, item, index, count);
            },
            /*System.Collections.Generic.List$1.LastIndexOf$2 end.*/

            /*System.Collections.Generic.List$1.remove start.*/
            remove: function (item) {
                var index = this.indexOf(item);
                if (index >= 0) {
                    this.removeAt(index);
                    return true;
                }

                return false;
            },
            /*System.Collections.Generic.List$1.remove end.*/

            /*System.Collections.Generic.List$1.System$Collections$IList$remove start.*/
            System$Collections$IList$remove: function (item) {
                if (System.Collections.Generic.List$1(T).IsCompatibleObject(item)) {
                    this.remove(Bridge.cast(Bridge.unbox(item, T), T));
                }
            },
            /*System.Collections.Generic.List$1.System$Collections$IList$remove end.*/

            /*System.Collections.Generic.List$1.RemoveAll start.*/
            RemoveAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                var freeIndex = 0;

                while (freeIndex < this._size && !match(this._items[System.Array.index(freeIndex, this._items)])) {
                    freeIndex = (freeIndex + 1) | 0;
                }
                if (freeIndex >= this._size) {
                    return 0;
                }

                var current = (freeIndex + 1) | 0;
                while (current < this._size) {
                    while (current < this._size && match(this._items[System.Array.index(current, this._items)])) {
                        current = (current + 1) | 0;
                    }

                    if (current < this._size) {
                        this._items[System.Array.index(Bridge.identity(freeIndex, ((freeIndex = (freeIndex + 1) | 0))), this._items)] = this._items[System.Array.index(Bridge.identity(current, ((current = (current + 1) | 0))), this._items)];
                    }
                }

                System.Array.fill(this._items, function () {
                    return Bridge.getDefaultValue(T);
                }, freeIndex, ((this._size - freeIndex) | 0));
                var result = (this._size - freeIndex) | 0;
                this._size = freeIndex;
                this._version = (this._version + 1) | 0;
                return result;
            },
            /*System.Collections.Generic.List$1.RemoveAll end.*/

            /*System.Collections.Generic.List$1.removeAt start.*/
            removeAt: function (index) {
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException.ctor();
                }
                this._size = (this._size - 1) | 0;
                if (index < this._size) {
                    System.Array.copy(this._items, ((index + 1) | 0), this._items, index, ((this._size - index) | 0));
                }
                this._items[System.Array.index(this._size, this._items)] = Bridge.getDefaultValue(T);
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.removeAt end.*/

            /*System.Collections.Generic.List$1.RemoveRange start.*/
            RemoveRange: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                if (count > 0) {
                    var i = this._size;
                    this._size = (this._size - count) | 0;
                    if (index < this._size) {
                        System.Array.copy(this._items, ((index + count) | 0), this._items, index, ((this._size - index) | 0));
                    }
                    System.Array.fill(this._items, function () {
                        return Bridge.getDefaultValue(T);
                    }, this._size, count);
                    this._version = (this._version + 1) | 0;
                }
            },
            /*System.Collections.Generic.List$1.RemoveRange end.*/

            /*System.Collections.Generic.List$1.Reverse start.*/
            Reverse: function () {
                this.Reverse$1(0, this.Count);
            },
            /*System.Collections.Generic.List$1.Reverse end.*/

            /*System.Collections.Generic.List$1.Reverse$1 start.*/
            Reverse$1: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }
                System.Array.reverse(this._items, index, count);
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.Reverse$1 end.*/

            /*System.Collections.Generic.List$1.Sort start.*/
            Sort: function () {
                this.Sort$3(0, this.Count, null);
            },
            /*System.Collections.Generic.List$1.Sort end.*/

            /*System.Collections.Generic.List$1.Sort$1 start.*/
            Sort$1: function (comparer) {
                this.Sort$3(0, this.Count, comparer);
            },
            /*System.Collections.Generic.List$1.Sort$1 end.*/

            /*System.Collections.Generic.List$1.Sort$3 start.*/
            Sort$3: function (index, count, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                System.Array.sort(this._items, index, count, comparer);
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.List$1.Sort$3 end.*/

            /*System.Collections.Generic.List$1.Sort$2 start.*/
            Sort$2: function (comparison) {
                if (Bridge.staticEquals(comparison, null)) {
                    throw new System.ArgumentNullException.$ctor1("comparison");
                }

                if (this._size > 0) {
                    if (this._items.length === this._size) {
                        System.Array.sort(this._items, comparison);
                    } else {
                        var newItems = System.Array.init(this._size, function (){
                            return Bridge.getDefaultValue(T);
                        }, T);
                        System.Array.copy(this._items, 0, newItems, 0, this._size);
                        System.Array.sort(newItems, comparison);
                        System.Array.copy(newItems, 0, this._items, 0, this._size);
                    }
                }
            },
            /*System.Collections.Generic.List$1.Sort$2 end.*/

            /*System.Collections.Generic.List$1.ToArray start.*/
            ToArray: function () {

                var array = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                System.Array.copy(this._items, 0, array, 0, this._size);
                return array;
            },
            /*System.Collections.Generic.List$1.ToArray end.*/

            /*System.Collections.Generic.List$1.TrimExcess start.*/
            TrimExcess: function () {
                var threshold = Bridge.Int.clip32(this._items.length * 0.9);
                if (this._size < threshold) {
                    this.Capacity = this._size;
                }
            },
            /*System.Collections.Generic.List$1.TrimExcess end.*/

            /*System.Collections.Generic.List$1.TrueForAll start.*/
            TrueForAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (!match(this._items[System.Array.index(i, this._items)])) {
                        return false;
                    }
                }
                return true;
            },
            /*System.Collections.Generic.List$1.TrueForAll end.*/

            /*System.Collections.Generic.List$1.toJSON start.*/
            toJSON: function () {
                var newItems = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                if (this._size > 0) {
                    System.Array.copy(this._items, 0, newItems, 0, this._size);
                }

                return newItems;
            },
            /*System.Collections.Generic.List$1.toJSON end.*/


        }
    }; });
    /*System.Collections.Generic.List$1 end.*/
