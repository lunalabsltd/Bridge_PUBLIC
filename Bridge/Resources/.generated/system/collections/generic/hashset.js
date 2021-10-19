    /*System.Collections.Generic.HashSet$1 start.*/
    Bridge.define("System.Collections.Generic.HashSet$1", function (T) { return {
        inherits: [System.Collections.Generic.ICollection$1(T),System.Collections.Generic.ISet$1(T),System.Collections.Generic.IReadOnlyCollection$1(T)],
        statics: {
            fields: {
                Lower31BitMask: 0,
                ShrinkThreshold: 0
            },
            ctors: {
                init: function () {
                    this.Lower31BitMask = 2147483647;
                    this.ShrinkThreshold = 3;
                }
            },
            methods: {
                /*System.Collections.Generic.HashSet$1.HashSetEquals:static start.*/
                HashSetEquals: function (set1, set2, comparer) {
                    var $t, $t1, $t2;
                    if (set1 == null) {
                        return (set2 == null);
                    } else if (set2 == null) {
                        return false;
                    }
                    if (System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(set1, set2)) {
                        if (set1.Count !== set2.Count) {
                            return false;
                        }
                        $t = Bridge.getEnumerator(set2);
                        try {
                            while ($t.moveNext()) {
                                var item = $t.Current;
                                if (!set1.contains(item)) {
                                    return false;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                        return true;
                    } else {
                        $t1 = Bridge.getEnumerator(set2);
                        try {
                            while ($t1.moveNext()) {
                                var set2Item = $t1.Current;
                                var found = false;
                                $t2 = Bridge.getEnumerator(set1);
                                try {
                                    while ($t2.moveNext()) {
                                        var set1Item = $t2.Current;
                                        if (comparer[Bridge.geti(comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](set2Item, set1Item)) {
                                            found = true;
                                            break;
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t2, System.IDisposable)) {
                                        $t2.System$IDisposable$Dispose();
                                    }
                                }
                                if (!found) {
                                    return false;
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                        return true;
                    }
                },
                /*System.Collections.Generic.HashSet$1.HashSetEquals:static end.*/

                /*System.Collections.Generic.HashSet$1.AreEqualityComparersEqual:static start.*/
                AreEqualityComparersEqual: function (set1, set2) {
                    return Bridge.equals(set1.Comparer, set2.Comparer);
                },
                /*System.Collections.Generic.HashSet$1.AreEqualityComparersEqual:static end.*/


            }
        },
        fields: {
            _buckets: null,
            _slots: null,
            _count: 0,
            _lastIndex: 0,
            _freeList: 0,
            _comparer: null,
            _version: 0
        },
        props: {
            Count: {
                get: function () {
                    return this._count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            Comparer: {
                get: function () {
                    return this._comparer;
                }
            }
        },
        alias: [
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator",
            "add", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$add",
            "unionWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$unionWith",
            "intersectWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$intersectWith",
            "exceptWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$exceptWith",
            "symmetricExceptWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$symmetricExceptWith",
            "isSubsetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isSubsetOf",
            "isProperSubsetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isProperSubsetOf",
            "isSupersetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isSupersetOf",
            "isProperSupersetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isProperSupersetOf",
            "overlaps", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$overlaps",
            "setEquals", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$setEquals"
        ],
        ctors: {
            ctor: function () {
                System.Collections.Generic.HashSet$1(T).$ctor3.call(this, System.Collections.Generic.EqualityComparer$1(T).def);
            },
            $ctor3: function (comparer) {
                this.$initialize();
                if (comparer == null) {
                    comparer = System.Collections.Generic.EqualityComparer$1(T).def;
                }
                this._comparer = comparer;
                this._lastIndex = 0;
                this._count = 0;
                this._freeList = -1;
                this._version = 0;
            },
            $ctor1: function (collection) {
                System.Collections.Generic.HashSet$1(T).$ctor2.call(this, collection, System.Collections.Generic.EqualityComparer$1(T).def);
            },
            $ctor2: function (collection, comparer) {
                System.Collections.Generic.HashSet$1(T).$ctor3.call(this, comparer);
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }
                var suggestedCapacity = 0;
                var coll = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
                if (coll != null) {
                    suggestedCapacity = System.Array.getCount(coll, T);
                }
                this.Initialize(suggestedCapacity);
                this.unionWith(collection);
                if ((this._count === 0 && this._slots.length > System.Collections.HashHelpers.GetMinPrime()) || (this._count > 0 && ((Bridge.Int.div(this._slots.length, this._count)) | 0) > System.Collections.Generic.HashSet$1(T).ShrinkThreshold)) {
                    this.TrimExcess();
                }
            }
        },
        methods: {
            /*System.Collections.Generic.HashSet$1.System$Collections$Generic$ICollection$1$add start.*/
            System$Collections$Generic$ICollection$1$add: function (item) {
                this.AddIfNotPresent(item);
            },
            /*System.Collections.Generic.HashSet$1.System$Collections$Generic$ICollection$1$add end.*/

            /*System.Collections.Generic.HashSet$1.add start.*/
            add: function (item) {
                return this.AddIfNotPresent(item);
            },
            /*System.Collections.Generic.HashSet$1.add end.*/

            /*System.Collections.Generic.HashSet$1.clear start.*/
            clear: function () {
                if (this._lastIndex > 0) {
                    for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                        this._slots[System.Array.index(i, this._slots)] = new (System.Collections.Generic.HashSet$1.Slot(T))();
                    }

                    for (var i1 = 0; i1 < this._buckets.length; i1 = (i1 + 1) | 0) {
                        this._buckets[System.Array.index(i1, this._buckets)] = 0;
                    }

                    this._lastIndex = 0;
                    this._count = 0;
                    this._freeList = -1;
                }
                this._version = (this._version + 1) | 0;
            },
            /*System.Collections.Generic.HashSet$1.clear end.*/

            /*System.Collections.Generic.HashSet$1.ArrayClear start.*/
            ArrayClear: function (array, index, length) { },
            /*System.Collections.Generic.HashSet$1.ArrayClear end.*/

            /*System.Collections.Generic.HashSet$1.contains start.*/
            contains: function (item) {
                if (this._buckets != null) {
                    var hashCode = this.InternalGetHashCode(item);
                    for (var i = (this._buckets[System.Array.index(hashCode % this._buckets.length, this._buckets)] - 1) | 0; i >= 0; i = this._slots[System.Array.index(i, this._slots)].next) {
                        if (this._slots[System.Array.index(i, this._slots)].hashCode === hashCode && this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this._slots[System.Array.index(i, this._slots)].value, item)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            /*System.Collections.Generic.HashSet$1.contains end.*/

            /*System.Collections.Generic.HashSet$1.copyTo start.*/
            copyTo: function (array, arrayIndex) {
                this.CopyTo$1(array, arrayIndex, this._count);
            },
            /*System.Collections.Generic.HashSet$1.copyTo end.*/

            /*System.Collections.Generic.HashSet$1.CopyTo start.*/
            CopyTo: function (array) {
                this.CopyTo$1(array, 0, this._count);
            },
            /*System.Collections.Generic.HashSet$1.CopyTo end.*/

            /*System.Collections.Generic.HashSet$1.CopyTo$1 start.*/
            CopyTo$1: function (array, arrayIndex, count) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (arrayIndex < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("arrayIndex");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (arrayIndex > array.length || count > ((array.length - arrayIndex) | 0)) {
                    throw new System.ArgumentException.$ctor1("Destination array is not long enough to copy all the items in the collection. Check array index and length.");
                }
                var numCopied = 0;
                for (var i = 0; i < this._lastIndex && numCopied < count; i = (i + 1) | 0) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode >= 0) {
                        array[System.Array.index(((arrayIndex + numCopied) | 0), array)] = this._slots[System.Array.index(i, this._slots)].value;
                        numCopied = (numCopied + 1) | 0;
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.CopyTo$1 end.*/

            /*System.Collections.Generic.HashSet$1.remove start.*/
            remove: function (item) {
                if (this._buckets != null) {
                    var hashCode = this.InternalGetHashCode(item);
                    var bucket = hashCode % this._buckets.length;
                    var last = -1;
                    for (var i = (this._buckets[System.Array.index(bucket, this._buckets)] - 1) | 0; i >= 0; last = i, i = this._slots[System.Array.index(i, this._slots)].next) {
                        if (this._slots[System.Array.index(i, this._slots)].hashCode === hashCode && this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this._slots[System.Array.index(i, this._slots)].value, item)) {
                            if (last < 0) {
                                this._buckets[System.Array.index(bucket, this._buckets)] = (this._slots[System.Array.index(i, this._slots)].next + 1) | 0;
                            } else {
                                this._slots[System.Array.index(last, this._slots)].next = this._slots[System.Array.index(i, this._slots)].next;
                            }
                            this._slots[System.Array.index(i, this._slots)].hashCode = -1;
                            this._slots[System.Array.index(i, this._slots)].value = Bridge.getDefaultValue(T);
                            this._slots[System.Array.index(i, this._slots)].next = this._freeList;
                            this._count = (this._count - 1) | 0;
                            this._version = (this._version + 1) | 0;
                            if (this._count === 0) {
                                this._lastIndex = 0;
                                this._freeList = -1;
                            } else {
                                this._freeList = i;
                            }
                            return true;
                        }
                    }
                }
                return false;
            },
            /*System.Collections.Generic.HashSet$1.remove end.*/

            /*System.Collections.Generic.HashSet$1.GetEnumerator start.*/
            GetEnumerator: function () {
                return new (System.Collections.Generic.HashSet$1.Enumerator(T)).$ctor1(this);
            },
            /*System.Collections.Generic.HashSet$1.GetEnumerator end.*/

            /*System.Collections.Generic.HashSet$1.System$Collections$Generic$IEnumerable$1$GetEnumerator start.*/
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return new (System.Collections.Generic.HashSet$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.HashSet$1.System$Collections$Generic$IEnumerable$1$GetEnumerator end.*/

            /*System.Collections.Generic.HashSet$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.HashSet$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.HashSet$1.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.Generic.HashSet$1.unionWith start.*/
            unionWith: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        this.AddIfNotPresent(item);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.unionWith end.*/

            /*System.Collections.Generic.HashSet$1.intersectWith start.*/
            intersectWith: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    return;
                }
                var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                if (otherAsCollection != null) {
                    if (System.Array.getCount(otherAsCollection, T) === 0) {
                        this.clear();
                        return;
                    }
                    var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                    if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                        this.IntersectWithHashSetWithSameEC(otherAsSet);
                        return;
                    }
                }
                this.IntersectWithEnumerable(other);
            },
            /*System.Collections.Generic.HashSet$1.intersectWith end.*/

            /*System.Collections.Generic.HashSet$1.exceptWith start.*/
            exceptWith: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    return;
                }
                if (Bridge.referenceEquals(other, this)) {
                    this.clear();
                    return;
                }
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var element = $t.Current;
                        this.remove(element);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.exceptWith end.*/

            /*System.Collections.Generic.HashSet$1.symmetricExceptWith start.*/
            symmetricExceptWith: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    this.unionWith(other);
                    return;
                }
                if (Bridge.referenceEquals(other, this)) {
                    this.clear();
                    return;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                    this.SymmetricExceptWithUniqueHashSet(otherAsSet);
                } else {
                    this.SymmetricExceptWithEnumerable(other);
                }
            },
            /*System.Collections.Generic.HashSet$1.symmetricExceptWith end.*/

            /*System.Collections.Generic.HashSet$1.isSubsetOf start.*/
            isSubsetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    return true;
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                    if (this._count > otherAsSet.Count) {
                        return false;
                    }
                    return this.IsSubsetOfHashSetWithSameEC(otherAsSet);
                } else {
                    var result = this.CheckUniqueAndUnfoundElements(other, false);
                    return (result.uniqueCount === this._count && result.unfoundCount >= 0);
                }
            },
            /*System.Collections.Generic.HashSet$1.isSubsetOf end.*/

            /*System.Collections.Generic.HashSet$1.isProperSubsetOf start.*/
            isProperSubsetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                if (otherAsCollection != null) {
                    if (this._count === 0) {
                        return System.Array.getCount(otherAsCollection, T) > 0;
                    }
                    var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                    if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                        if (this._count >= otherAsSet.Count) {
                            return false;
                        }
                        return this.IsSubsetOfHashSetWithSameEC(otherAsSet);
                    }
                }
                var result = this.CheckUniqueAndUnfoundElements(other, false);
                return (result.uniqueCount === this._count && result.unfoundCount > 0);
            },
            /*System.Collections.Generic.HashSet$1.isProperSubsetOf end.*/

            /*System.Collections.Generic.HashSet$1.isSupersetOf start.*/
            isSupersetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                if (otherAsCollection != null) {
                    if (System.Array.getCount(otherAsCollection, T) === 0) {
                        return true;
                    }
                    var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                    if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                        if (otherAsSet.Count > this._count) {
                            return false;
                        }
                    }
                }
                return this.ContainsAllElements(other);
            },
            /*System.Collections.Generic.HashSet$1.isSupersetOf end.*/

            /*System.Collections.Generic.HashSet$1.isProperSupersetOf start.*/
            isProperSupersetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    return false;
                }
                var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                if (otherAsCollection != null) {
                    if (System.Array.getCount(otherAsCollection, T) === 0) {
                        return true;
                    }
                    var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                    if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                        if (otherAsSet.Count >= this._count) {
                            return false;
                        }
                        return this.ContainsAllElements(otherAsSet);
                    }
                }
                var result = this.CheckUniqueAndUnfoundElements(other, true);
                return (result.uniqueCount < this._count && result.unfoundCount === 0);
            },
            /*System.Collections.Generic.HashSet$1.isProperSupersetOf end.*/

            /*System.Collections.Generic.HashSet$1.overlaps start.*/
            overlaps: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                if (this._count === 0) {
                    return false;
                }
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var element = $t.Current;
                        if (this.contains(element)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*System.Collections.Generic.HashSet$1.overlaps end.*/

            /*System.Collections.Generic.HashSet$1.setEquals start.*/
            setEquals: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }
                var otherAsSet = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (otherAsSet != null && System.Collections.Generic.HashSet$1(T).AreEqualityComparersEqual(this, otherAsSet)) {
                    if (this._count !== otherAsSet.Count) {
                        return false;
                    }
                    return this.ContainsAllElements(otherAsSet);
                } else {
                    var otherAsCollection = Bridge.as(other, System.Collections.Generic.ICollection$1(T));
                    if (otherAsCollection != null) {
                        if (this._count === 0 && System.Array.getCount(otherAsCollection, T) > 0) {
                            return false;
                        }
                    }
                    var result = this.CheckUniqueAndUnfoundElements(other, true);
                    return (result.uniqueCount === this._count && result.unfoundCount === 0);
                }
            },
            /*System.Collections.Generic.HashSet$1.setEquals end.*/

            /*System.Collections.Generic.HashSet$1.RemoveWhere start.*/
            RemoveWhere: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }
                var numRemoved = 0;
                for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode >= 0) {
                        var value = this._slots[System.Array.index(i, this._slots)].value;
                        if (match(value)) {
                            if (this.remove(value)) {
                                numRemoved = (numRemoved + 1) | 0;
                            }
                        }
                    }
                }
                return numRemoved;
            },
            /*System.Collections.Generic.HashSet$1.RemoveWhere end.*/

            /*System.Collections.Generic.HashSet$1.TrimExcess start.*/
            TrimExcess: function () {
                if (this._count === 0) {
                    this._buckets = null;
                    this._slots = null;
                    this._version = (this._version + 1) | 0;
                } else {
                    var newSize = System.Collections.HashHelpers.GetPrime(this._count);
                    var newSlots = System.Array.init(newSize, function (){
                        return new (System.Collections.Generic.HashSet$1.Slot(T))();
                    }, System.Collections.Generic.HashSet$1.Slot(T));
                    var newBuckets = System.Array.init(newSize, 0, System.Int32);
                    var newIndex = 0;
                    for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                        if (this._slots[System.Array.index(i, this._slots)].hashCode >= 0) {
                            newSlots[System.Array.index(newIndex, newSlots)] = this._slots[System.Array.index(i, this._slots)].$clone();
                            var bucket = newSlots[System.Array.index(newIndex, newSlots)].hashCode % newSize;
                            newSlots[System.Array.index(newIndex, newSlots)].next = (newBuckets[System.Array.index(bucket, newBuckets)] - 1) | 0;
                            newBuckets[System.Array.index(bucket, newBuckets)] = (newIndex + 1) | 0;
                            newIndex = (newIndex + 1) | 0;
                        }
                    }
                    this._lastIndex = newIndex;
                    this._slots = newSlots;
                    this._buckets = newBuckets;
                    this._freeList = -1;
                }
            },
            /*System.Collections.Generic.HashSet$1.TrimExcess end.*/

            /*System.Collections.Generic.HashSet$1.Initialize start.*/
            Initialize: function (capacity) {
                var size = System.Collections.HashHelpers.GetPrime(capacity);
                this._buckets = System.Array.init(size, 0, System.Int32);
                this._slots = System.Array.init(size, function (){
                    return new (System.Collections.Generic.HashSet$1.Slot(T))();
                }, System.Collections.Generic.HashSet$1.Slot(T));
            },
            /*System.Collections.Generic.HashSet$1.Initialize end.*/

            /*System.Collections.Generic.HashSet$1.IncreaseCapacity start.*/
            IncreaseCapacity: function () {
                var newSize = System.Collections.HashHelpers.ExpandPrime(this._count);
                if (newSize <= this._count) {
                    throw new System.ArgumentException.$ctor1("HashSet capacity is too big.");
                }
                this.SetCapacity(newSize, false);
            },
            /*System.Collections.Generic.HashSet$1.IncreaseCapacity end.*/

            /*System.Collections.Generic.HashSet$1.SetCapacity start.*/
            SetCapacity: function (newSize, forceNewHashCodes) {
                var newSlots = System.Array.init(newSize, function (){
                    return new (System.Collections.Generic.HashSet$1.Slot(T))();
                }, System.Collections.Generic.HashSet$1.Slot(T));
                if (this._slots != null) {
                    for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                        newSlots[System.Array.index(i, newSlots)] = this._slots[System.Array.index(i, this._slots)].$clone();
                    }
                }
                if (forceNewHashCodes) {
                    for (var i1 = 0; i1 < this._lastIndex; i1 = (i1 + 1) | 0) {
                        if (newSlots[System.Array.index(i1, newSlots)].hashCode !== -1) {
                            newSlots[System.Array.index(i1, newSlots)].hashCode = this.InternalGetHashCode(newSlots[System.Array.index(i1, newSlots)].value);
                        }
                    }
                }
                var newBuckets = System.Array.init(newSize, 0, System.Int32);
                for (var i2 = 0; i2 < this._lastIndex; i2 = (i2 + 1) | 0) {
                    var bucket = newSlots[System.Array.index(i2, newSlots)].hashCode % newSize;
                    newSlots[System.Array.index(i2, newSlots)].next = (newBuckets[System.Array.index(bucket, newBuckets)] - 1) | 0;
                    newBuckets[System.Array.index(bucket, newBuckets)] = (i2 + 1) | 0;
                }
                this._slots = newSlots;
                this._buckets = newBuckets;
            },
            /*System.Collections.Generic.HashSet$1.SetCapacity end.*/

            /*System.Collections.Generic.HashSet$1.AddIfNotPresent start.*/
            AddIfNotPresent: function (value) {
                if (this._buckets == null) {
                    this.Initialize(0);
                }
                var hashCode = this.InternalGetHashCode(value);
                var bucket = hashCode % this._buckets.length;
                for (var i = (this._buckets[System.Array.index(bucket, this._buckets)] - 1) | 0; i >= 0; i = this._slots[System.Array.index(i, this._slots)].next) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode === hashCode && this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this._slots[System.Array.index(i, this._slots)].value, value)) {
                        return false;
                    }
                }
                var index;
                if (this._freeList >= 0) {
                    index = this._freeList;
                    this._freeList = this._slots[System.Array.index(index, this._slots)].next;
                } else {
                    if (this._lastIndex === this._slots.length) {
                        this.IncreaseCapacity();
                        bucket = hashCode % this._buckets.length;
                    }
                    index = this._lastIndex;
                    this._lastIndex = (this._lastIndex + 1) | 0;
                }
                this._slots[System.Array.index(index, this._slots)].hashCode = hashCode;
                this._slots[System.Array.index(index, this._slots)].value = value;
                this._slots[System.Array.index(index, this._slots)].next = (this._buckets[System.Array.index(bucket, this._buckets)] - 1) | 0;
                this._buckets[System.Array.index(bucket, this._buckets)] = (index + 1) | 0;
                this._count = (this._count + 1) | 0;
                this._version = (this._version + 1) | 0;
                return true;
            },
            /*System.Collections.Generic.HashSet$1.AddIfNotPresent end.*/

            /*System.Collections.Generic.HashSet$1.ContainsAllElements start.*/
            ContainsAllElements: function (other) {
                var $t;
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var element = $t.Current;
                        if (!this.contains(element)) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*System.Collections.Generic.HashSet$1.ContainsAllElements end.*/

            /*System.Collections.Generic.HashSet$1.IsSubsetOfHashSetWithSameEC start.*/
            IsSubsetOfHashSetWithSameEC: function (other) {
                var $t;
                $t = Bridge.getEnumerator(this);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!other.contains(item)) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*System.Collections.Generic.HashSet$1.IsSubsetOfHashSetWithSameEC end.*/

            /*System.Collections.Generic.HashSet$1.IntersectWithHashSetWithSameEC start.*/
            IntersectWithHashSetWithSameEC: function (other) {
                for (var i = 0; i < this._lastIndex; i = (i + 1) | 0) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode >= 0) {
                        var item = this._slots[System.Array.index(i, this._slots)].value;
                        if (!other.contains(item)) {
                            this.remove(item);
                        }
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.IntersectWithHashSetWithSameEC end.*/

            /*System.Collections.Generic.HashSet$1.IntersectWithEnumerable start.*/
            IntersectWithEnumerable: function (other) {
                var $t;
                var originalLastIndex = this._lastIndex;
                var intArrayLength = System.Collections.Generic.BitHelper.ToIntArrayLength(originalLastIndex);
                var bitHelper;
                var bitArray = System.Array.init(intArrayLength, 0, System.Int32);
                bitHelper = new System.Collections.Generic.BitHelper(bitArray, intArrayLength);
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var index = this.InternalIndexOf(item);
                        if (index >= 0) {
                            bitHelper.MarkBit(index);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                for (var i = 0; i < originalLastIndex; i = (i + 1) | 0) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode >= 0 && !bitHelper.IsMarked(i)) {
                        this.remove(this._slots[System.Array.index(i, this._slots)].value);
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.IntersectWithEnumerable end.*/

            /*System.Collections.Generic.HashSet$1.InternalIndexOf start.*/
            InternalIndexOf: function (item) {
                var hashCode = this.InternalGetHashCode(item);
                for (var i = (this._buckets[System.Array.index(hashCode % this._buckets.length, this._buckets)] - 1) | 0; i >= 0; i = this._slots[System.Array.index(i, this._slots)].next) {
                    if ((this._slots[System.Array.index(i, this._slots)].hashCode) === hashCode && this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this._slots[System.Array.index(i, this._slots)].value, item)) {
                        return i;
                    }
                }
                return -1;
            },
            /*System.Collections.Generic.HashSet$1.InternalIndexOf end.*/

            /*System.Collections.Generic.HashSet$1.SymmetricExceptWithUniqueHashSet start.*/
            SymmetricExceptWithUniqueHashSet: function (other) {
                var $t;
                $t = Bridge.getEnumerator(other);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!this.remove(item)) {
                            this.AddIfNotPresent(item);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.SymmetricExceptWithUniqueHashSet end.*/

            /*System.Collections.Generic.HashSet$1.SymmetricExceptWithEnumerable start.*/
            SymmetricExceptWithEnumerable: function (other) {
                var $t;
                var originalLastIndex = this._lastIndex;
                var intArrayLength = System.Collections.Generic.BitHelper.ToIntArrayLength(originalLastIndex);
                var itemsToRemove;
                var itemsAddedFromOther;
                var itemsToRemoveArray = System.Array.init(intArrayLength, 0, System.Int32);
                itemsToRemove = new System.Collections.Generic.BitHelper(itemsToRemoveArray, intArrayLength);
                var itemsAddedFromOtherArray = System.Array.init(intArrayLength, 0, System.Int32);
                itemsAddedFromOther = new System.Collections.Generic.BitHelper(itemsAddedFromOtherArray, intArrayLength);
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var location = { v : 0 };
                        var added = this.AddOrGetLocation(item, location);
                        if (added) {
                            itemsAddedFromOther.MarkBit(location.v);
                        } else {
                            if (location.v < originalLastIndex && !itemsAddedFromOther.IsMarked(location.v)) {
                                itemsToRemove.MarkBit(location.v);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                for (var i = 0; i < originalLastIndex; i = (i + 1) | 0) {
                    if (itemsToRemove.IsMarked(i)) {
                        this.remove(this._slots[System.Array.index(i, this._slots)].value);
                    }
                }
            },
            /*System.Collections.Generic.HashSet$1.SymmetricExceptWithEnumerable end.*/

            /*System.Collections.Generic.HashSet$1.AddOrGetLocation start.*/
            AddOrGetLocation: function (value, location) {
                var hashCode = this.InternalGetHashCode(value);
                var bucket = hashCode % this._buckets.length;
                for (var i = (this._buckets[System.Array.index(bucket, this._buckets)] - 1) | 0; i >= 0; i = this._slots[System.Array.index(i, this._slots)].next) {
                    if (this._slots[System.Array.index(i, this._slots)].hashCode === hashCode && this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2")](this._slots[System.Array.index(i, this._slots)].value, value)) {
                        location.v = i;
                        return false;
                    }
                }
                var index;
                if (this._freeList >= 0) {
                    index = this._freeList;
                    this._freeList = this._slots[System.Array.index(index, this._slots)].next;
                } else {
                    if (this._lastIndex === this._slots.length) {
                        this.IncreaseCapacity();
                        bucket = hashCode % this._buckets.length;
                    }
                    index = this._lastIndex;
                    this._lastIndex = (this._lastIndex + 1) | 0;
                }
                this._slots[System.Array.index(index, this._slots)].hashCode = hashCode;
                this._slots[System.Array.index(index, this._slots)].value = value;
                this._slots[System.Array.index(index, this._slots)].next = (this._buckets[System.Array.index(bucket, this._buckets)] - 1) | 0;
                this._buckets[System.Array.index(bucket, this._buckets)] = (index + 1) | 0;
                this._count = (this._count + 1) | 0;
                this._version = (this._version + 1) | 0;
                location.v = index;
                return true;
            },
            /*System.Collections.Generic.HashSet$1.AddOrGetLocation end.*/

            /*System.Collections.Generic.HashSet$1.CheckUniqueAndUnfoundElements start.*/
            CheckUniqueAndUnfoundElements: function (other, returnIfUnfound) {
                var $t, $t1;
                var result = new (System.Collections.Generic.HashSet$1.ElementCount(T))();
                if (this._count === 0) {
                    var numElementsInOther = 0;
                    $t = Bridge.getEnumerator(other, T);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            numElementsInOther = (numElementsInOther + 1) | 0;
                            break;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    result.uniqueCount = 0;
                    result.unfoundCount = numElementsInOther;
                    return result.$clone();
                }
                var originalLastIndex = this._lastIndex;
                var intArrayLength = System.Collections.Generic.BitHelper.ToIntArrayLength(originalLastIndex);
                var bitHelper;
                var bitArray = System.Array.init(intArrayLength, 0, System.Int32);
                bitHelper = new System.Collections.Generic.BitHelper(bitArray, intArrayLength);
                var unfoundCount = 0;
                var uniqueFoundCount = 0;
                $t1 = Bridge.getEnumerator(other, T);
                try {
                    while ($t1.moveNext()) {
                        var item1 = $t1.Current;
                        var index = this.InternalIndexOf(item1);
                        if (index >= 0) {
                            if (!bitHelper.IsMarked(index)) {
                                bitHelper.MarkBit(index);
                                uniqueFoundCount = (uniqueFoundCount + 1) | 0;
                            }
                        } else {
                            unfoundCount = (unfoundCount + 1) | 0;
                            if (returnIfUnfound) {
                                break;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                result.uniqueCount = uniqueFoundCount;
                result.unfoundCount = unfoundCount;
                return result.$clone();
            },
            /*System.Collections.Generic.HashSet$1.CheckUniqueAndUnfoundElements end.*/

            /*System.Collections.Generic.HashSet$1.ToArray start.*/
            ToArray: function () {
                var newArray = System.Array.init(this.Count, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                this.CopyTo(newArray);
                return newArray;
            },
            /*System.Collections.Generic.HashSet$1.ToArray end.*/

            /*System.Collections.Generic.HashSet$1.InternalGetHashCode start.*/
            InternalGetHashCode: function (item) {
                if (item == null) {
                    return 0;
                }
                return this._comparer[Bridge.geti(this._comparer, "System$Collections$Generic$IEqualityComparer$1$" + Bridge.getTypeAlias(T) + "$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2")](item) & System.Collections.Generic.HashSet$1(T).Lower31BitMask;
            },
            /*System.Collections.Generic.HashSet$1.InternalGetHashCode end.*/


        },
        overloads: {
            "Add(T)": "add",
            "Clear()": "clear",
            "Contains(T)": "contains",
            "CopyTo(T[], int)": "copyTo",
            "CopyTo(T[], int, int)": "CopyTo$1",
            "Remove(T)": "remove",
            "UnionWith(IEnumerable<T>)": "unionWith",
            "IntersectWith(IEnumerable<T>)": "intersectWith",
            "ExceptWith(IEnumerable<T>)": "exceptWith",
            "SymmetricExceptWith(IEnumerable<T>)": "symmetricExceptWith",
            "IsSubsetOf(IEnumerable<T>)": "isSubsetOf",
            "IsProperSubsetOf(IEnumerable<T>)": "isProperSubsetOf",
            "IsSupersetOf(IEnumerable<T>)": "isSupersetOf",
            "IsProperSupersetOf(IEnumerable<T>)": "isProperSupersetOf",
            "Overlaps(IEnumerable<T>)": "overlaps",
            "SetEquals(IEnumerable<T>)": "setEquals"
        }
    }; });
    /*System.Collections.Generic.HashSet$1 end.*/
