    /*System.Collections.Generic.SortedSet$1 start.*/
    Bridge.define("System.Collections.Generic.SortedSet$1", function (T) { return {
        inherits: [System.Collections.Generic.ISet$1(T),System.Collections.Generic.ICollection$1(T),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(T)],
        statics: {
            fields: {
                ComparerName: null,
                CountName: null,
                ItemsName: null,
                VersionName: null,
                TreeName: null,
                NodeValueName: null,
                EnumStartName: null,
                ReverseName: null,
                EnumVersionName: null,
                minName: null,
                maxName: null,
                lBoundActiveName: null,
                uBoundActiveName: null,
                StackAllocThreshold: 0
            },
            ctors: {
                init: function () {
                    this.ComparerName = "Comparer";
                    this.CountName = "Count";
                    this.ItemsName = "Items";
                    this.VersionName = "Version";
                    this.TreeName = "Tree";
                    this.NodeValueName = "Item";
                    this.EnumStartName = "EnumStarted";
                    this.ReverseName = "Reverse";
                    this.EnumVersionName = "EnumVersion";
                    this.minName = "Min";
                    this.maxName = "Max";
                    this.lBoundActiveName = "lBoundActive";
                    this.uBoundActiveName = "uBoundActive";
                    this.StackAllocThreshold = 100;
                }
            },
            methods: {
                /*System.Collections.Generic.SortedSet$1.GetSibling:static start.*/
                GetSibling: function (node, parent) {
                    if (Bridge.referenceEquals(parent.Left, node)) {
                        return parent.Right;
                    }
                    return parent.Left;
                },
                /*System.Collections.Generic.SortedSet$1.GetSibling:static end.*/

                /*System.Collections.Generic.SortedSet$1.Is2Node:static start.*/
                Is2Node: function (node) {
                    return System.Collections.Generic.SortedSet$1(T).IsBlack(node) && System.Collections.Generic.SortedSet$1(T).IsNullOrBlack(node.Left) && System.Collections.Generic.SortedSet$1(T).IsNullOrBlack(node.Right);
                },
                /*System.Collections.Generic.SortedSet$1.Is2Node:static end.*/

                /*System.Collections.Generic.SortedSet$1.Is4Node:static start.*/
                Is4Node: function (node) {
                    return System.Collections.Generic.SortedSet$1(T).IsRed(node.Left) && System.Collections.Generic.SortedSet$1(T).IsRed(node.Right);
                },
                /*System.Collections.Generic.SortedSet$1.Is4Node:static end.*/

                /*System.Collections.Generic.SortedSet$1.IsBlack:static start.*/
                IsBlack: function (node) {
                    return (node != null && !node.IsRed);
                },
                /*System.Collections.Generic.SortedSet$1.IsBlack:static end.*/

                /*System.Collections.Generic.SortedSet$1.IsNullOrBlack:static start.*/
                IsNullOrBlack: function (node) {
                    return (node == null || !node.IsRed);
                },
                /*System.Collections.Generic.SortedSet$1.IsNullOrBlack:static end.*/

                /*System.Collections.Generic.SortedSet$1.IsRed:static start.*/
                IsRed: function (node) {
                    return (node != null && node.IsRed);
                },
                /*System.Collections.Generic.SortedSet$1.IsRed:static end.*/

                /*System.Collections.Generic.SortedSet$1.Merge2Nodes:static start.*/
                Merge2Nodes: function (parent, child1, child2) {
                    parent.IsRed = false;
                    child1.IsRed = true;
                    child2.IsRed = true;
                },
                /*System.Collections.Generic.SortedSet$1.Merge2Nodes:static end.*/

                /*System.Collections.Generic.SortedSet$1.RotateLeft:static start.*/
                RotateLeft: function (node) {
                    var x = node.Right;
                    node.Right = x.Left;
                    x.Left = node;
                    return x;
                },
                /*System.Collections.Generic.SortedSet$1.RotateLeft:static end.*/

                /*System.Collections.Generic.SortedSet$1.RotateLeftRight:static start.*/
                RotateLeftRight: function (node) {
                    var child = node.Left;
                    var grandChild = child.Right;

                    node.Left = grandChild.Right;
                    grandChild.Right = node;
                    child.Right = grandChild.Left;
                    grandChild.Left = child;
                    return grandChild;
                },
                /*System.Collections.Generic.SortedSet$1.RotateLeftRight:static end.*/

                /*System.Collections.Generic.SortedSet$1.RotateRight:static start.*/
                RotateRight: function (node) {
                    var x = node.Left;
                    node.Left = x.Right;
                    x.Right = node;
                    return x;
                },
                /*System.Collections.Generic.SortedSet$1.RotateRight:static end.*/

                /*System.Collections.Generic.SortedSet$1.RotateRightLeft:static start.*/
                RotateRightLeft: function (node) {
                    var child = node.Right;
                    var grandChild = child.Left;

                    node.Right = grandChild.Left;
                    grandChild.Left = node;
                    child.Left = grandChild.Right;
                    grandChild.Right = child;
                    return grandChild;
                },
                /*System.Collections.Generic.SortedSet$1.RotateRightLeft:static end.*/

                /*System.Collections.Generic.SortedSet$1.RotationNeeded:static start.*/
                RotationNeeded: function (parent, current, sibling) {
                    if (System.Collections.Generic.SortedSet$1(T).IsRed(sibling.Left)) {
                        if (Bridge.referenceEquals(parent.Left, current)) {
                            return System.Collections.Generic.TreeRotation.RightLeftRotation;
                        }
                        return System.Collections.Generic.TreeRotation.RightRotation;
                    } else {
                        if (Bridge.referenceEquals(parent.Left, current)) {
                            return System.Collections.Generic.TreeRotation.LeftRotation;
                        }
                        return System.Collections.Generic.TreeRotation.LeftRightRotation;
                    }
                },
                /*System.Collections.Generic.SortedSet$1.RotationNeeded:static end.*/

                /*System.Collections.Generic.SortedSet$1.CreateSetComparer:static start.*/
                CreateSetComparer: function () {
                    return new (System.Collections.Generic.SortedSetEqualityComparer$1(T)).ctor();
                },
                /*System.Collections.Generic.SortedSet$1.CreateSetComparer:static end.*/

                /*System.Collections.Generic.SortedSet$1.CreateSetComparer$1:static start.*/
                CreateSetComparer$1: function (memberEqualityComparer) {
                    return new (System.Collections.Generic.SortedSetEqualityComparer$1(T)).$ctor3(memberEqualityComparer);
                },
                /*System.Collections.Generic.SortedSet$1.CreateSetComparer$1:static end.*/

                /*System.Collections.Generic.SortedSet$1.SortedSetEquals:static start.*/
                SortedSetEquals: function (set1, set2, comparer) {
                    var $t, $t1;
                    if (set1 == null) {
                        return (set2 == null);
                    } else if (set2 == null) {
                        return false;
                    }

                    if (System.Collections.Generic.SortedSet$1(T).AreComparersEqual(set1, set2)) {
                        if (set1.Count !== set2.Count) {
                            return false;
                        }

                        return set1.setEquals(set2);
                    } else {
                        var found = false;
                        $t = Bridge.getEnumerator(set1);
                        try {
                            while ($t.moveNext()) {
                                var item1 = $t.Current;
                                found = false;
                                $t1 = Bridge.getEnumerator(set2);
                                try {
                                    while ($t1.moveNext()) {
                                        var item2 = $t1.Current;
                                        if (comparer[Bridge.geti(comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item1, item2) === 0) {
                                            found = true;
                                            break;
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t1, System.IDisposable)) {
                                        $t1.System$IDisposable$Dispose();
                                    }
                                }
                                if (!found) {
                                    return false;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                        return true;
                    }

                },
                /*System.Collections.Generic.SortedSet$1.SortedSetEquals:static end.*/

                /*System.Collections.Generic.SortedSet$1.AreComparersEqual:static start.*/
                AreComparersEqual: function (set1, set2) {
                    return Bridge.equals(set1.Comparer, set2.Comparer);
                },
                /*System.Collections.Generic.SortedSet$1.AreComparersEqual:static end.*/

                /*System.Collections.Generic.SortedSet$1.Split4Node:static start.*/
                Split4Node: function (node) {
                    node.IsRed = true;
                    node.Left.IsRed = false;
                    node.Right.IsRed = false;
                },
                /*System.Collections.Generic.SortedSet$1.Split4Node:static end.*/

                /*System.Collections.Generic.SortedSet$1.ConstructRootFromSortedArray:static start.*/
                ConstructRootFromSortedArray: function (arr, startIndex, endIndex, redNode) {





                    var size = (((endIndex - startIndex) | 0) + 1) | 0;
                    if (size === 0) {
                        return null;
                    }
                    var root = null;
                    if (size === 1) {
                        root = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(startIndex, arr)], false);
                        if (redNode != null) {
                            root.Left = redNode;
                        }
                    } else if (size === 2) {
                        root = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(startIndex, arr)], false);
                        root.Right = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(endIndex, arr)], false);
                        root.Right.IsRed = true;
                        if (redNode != null) {
                            root.Left = redNode;
                        }
                    } else if (size === 3) {
                        root = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(((startIndex + 1) | 0), arr)], false);
                        root.Left = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(startIndex, arr)], false);
                        root.Right = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(endIndex, arr)], false);
                        if (redNode != null) {
                            root.Left.Left = redNode;

                        }
                    } else {
                        var midpt = (((Bridge.Int.div((((startIndex + endIndex) | 0)), 2)) | 0));
                        root = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(midpt, arr)], false);
                        root.Left = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(arr, startIndex, ((midpt - 1) | 0), redNode);
                        if (size % 2 === 0) {
                            root.Right = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(arr, ((midpt + 2) | 0), endIndex, new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(arr[System.Array.index(((midpt + 1) | 0), arr)], true));
                        } else {
                            root.Right = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(arr, ((midpt + 1) | 0), endIndex, null);
                        }
                    }
                    return root;

                },
                /*System.Collections.Generic.SortedSet$1.ConstructRootFromSortedArray:static end.*/

                /*System.Collections.Generic.SortedSet$1.log2:static start.*/
                log2: function (value) {
                    var c = 0;
                    while (value > 0) {
                        c = (c + 1) | 0;
                        value = value >> 1;
                    }
                    return c;
                },
                /*System.Collections.Generic.SortedSet$1.log2:static end.*/


            }
        },
        fields: {
            root: null,
            comparer: null,
            count: 0,
            version: 0
        },
        props: {
            Count: {
                get: function () {
                    this.VersionCheck();
                    return this.count;
                }
            },
            Comparer: {
                get: function () {
                    return this.comparer;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
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
                    return null;
                }
            },
            Min: {
                get: function () {
                    var ret = Bridge.getDefaultValue(T);
                    this.InOrderTreeWalk(function (n) {
                        ret = n.Item;
                        return false;
                    });
                    return ret;
                }
            },
            Max: {
                get: function () {
                    var ret = Bridge.getDefaultValue(T);
                    this.InOrderTreeWalk$1(function (n) {
                        ret = n.Item;
                        return false;
                    }, true);
                    return ret;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "add", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$add",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator",
            "unionWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$unionWith",
            "intersectWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$intersectWith",
            "exceptWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$exceptWith",
            "symmetricExceptWith", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$symmetricExceptWith",
            "isSubsetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isSubsetOf",
            "isProperSubsetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isProperSubsetOf",
            "isSupersetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isSupersetOf",
            "isProperSupersetOf", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$isProperSupersetOf",
            "setEquals", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$setEquals",
            "overlaps", "System$Collections$Generic$ISet$1$" + Bridge.getTypeAlias(T) + "$overlaps"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.comparer = new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn);

            },
            $ctor1: function (comparer) {
                this.$initialize();
                if (comparer == null) {
                    this.comparer = new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn);
                } else {
                    this.comparer = comparer;
                }
            },
            $ctor2: function (collection) {
                System.Collections.Generic.SortedSet$1(T).$ctor3.call(this, collection, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn));
            },
            $ctor3: function (collection, comparer) {
                System.Collections.Generic.SortedSet$1(T).$ctor1.call(this, comparer);

                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                var baseSortedSet = Bridge.as(collection, System.Collections.Generic.SortedSet$1(T));
                var baseTreeSubSet = Bridge.as(collection, System.Collections.Generic.SortedSet$1.TreeSubSet(T));
                if (baseSortedSet != null && baseTreeSubSet == null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, baseSortedSet)) {
                    if (baseSortedSet.Count === 0) {
                        this.count = 0;
                        this.version = 0;
                        this.root = null;
                        return;
                    }


                    var theirStack = new (System.Collections.Generic.Stack$1(System.Collections.Generic.SortedSet$1.Node(T))).$ctor2(((Bridge.Int.mul(2, System.Collections.Generic.SortedSet$1(T).log2(baseSortedSet.Count)) + 2) | 0));
                    var myStack = new (System.Collections.Generic.Stack$1(System.Collections.Generic.SortedSet$1.Node(T))).$ctor2(((Bridge.Int.mul(2, System.Collections.Generic.SortedSet$1(T).log2(baseSortedSet.Count)) + 2) | 0));
                    var theirCurrent = baseSortedSet.root;
                    var myCurrent = (theirCurrent != null ? new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(theirCurrent.Item, theirCurrent.IsRed) : null);
                    this.root = myCurrent;
                    while (theirCurrent != null) {
                        theirStack.Push(theirCurrent);
                        myStack.Push(myCurrent);
                        myCurrent.Left = (theirCurrent.Left != null ? new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(theirCurrent.Left.Item, theirCurrent.Left.IsRed) : null);
                        theirCurrent = theirCurrent.Left;
                        myCurrent = myCurrent.Left;
                    }
                    while (theirStack.Count !== 0) {
                        theirCurrent = theirStack.Pop();
                        myCurrent = myStack.Pop();
                        var theirRight = theirCurrent.Right;
                        var myRight = null;
                        if (theirRight != null) {
                            myRight = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(theirRight.Item, theirRight.IsRed);
                        }
                        myCurrent.Right = myRight;

                        while (theirRight != null) {
                            theirStack.Push(theirRight);
                            myStack.Push(myRight);
                            myRight.Left = (theirRight.Left != null ? new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(theirRight.Left.Item, theirRight.Left.IsRed) : null);
                            theirRight = theirRight.Left;
                            myRight = myRight.Left;
                        }
                    }
                    this.count = baseSortedSet.count;
                    this.version = 0;
                } else {

                    var els = new (System.Collections.Generic.List$1(T)).$ctor1(collection);
                    els.Sort$1(this.comparer);
                    for (var i = 1; i < els.Count; i = (i + 1) | 0) {
                        if (this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](els.getItem(i), els.getItem(((i - 1) | 0))) === 0) {
                            els.removeAt(i);
                            i = (i - 1) | 0;
                        }
                    }
                    this.root = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(els.ToArray(), 0, ((els.Count - 1) | 0), null);
                    this.count = els.Count;
                    this.version = 0;
                }
            }
        },
        methods: {
            /*System.Collections.Generic.SortedSet$1.AddAllElements start.*/
            AddAllElements: function (collection) {
                var $t;

                $t = Bridge.getEnumerator(collection, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!this.contains(item)) {
                            this.add(item);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.SortedSet$1.AddAllElements end.*/

            /*System.Collections.Generic.SortedSet$1.RemoveAllElements start.*/
            RemoveAllElements: function (collection) {
                var $t;
                var min = this.Min;
                var max = this.Max;
                $t = Bridge.getEnumerator(collection, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!(this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, min) < 0 || this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, max) > 0) && this.contains(item)) {
                            this.remove(item);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.SortedSet$1.RemoveAllElements end.*/

            /*System.Collections.Generic.SortedSet$1.ContainsAllElements start.*/
            ContainsAllElements: function (collection) {
                var $t;
                $t = Bridge.getEnumerator(collection, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!this.contains(item)) {
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
            /*System.Collections.Generic.SortedSet$1.ContainsAllElements end.*/

            /*System.Collections.Generic.SortedSet$1.InOrderTreeWalk start.*/
            InOrderTreeWalk: function (action) {
                return this.InOrderTreeWalk$1(action, false);
            },
            /*System.Collections.Generic.SortedSet$1.InOrderTreeWalk end.*/

            /*System.Collections.Generic.SortedSet$1.InOrderTreeWalk$1 start.*/
            InOrderTreeWalk$1: function (action, reverse) {
                if (this.root == null) {
                    return true;
                }

                var stack = new (System.Collections.Generic.Stack$1(System.Collections.Generic.SortedSet$1.Node(T))).$ctor2(Bridge.Int.mul(2, (System.Collections.Generic.SortedSet$1(T).log2(((this.Count + 1) | 0)))));
                var current = this.root;
                while (current != null) {
                    stack.Push(current);
                    current = (reverse ? current.Right : current.Left);
                }
                while (stack.Count !== 0) {
                    current = stack.Pop();
                    if (!action(current)) {
                        return false;
                    }

                    var node = (reverse ? current.Left : current.Right);
                    while (node != null) {
                        stack.Push(node);
                        node = (reverse ? node.Right : node.Left);
                    }
                }
                return true;
            },
            /*System.Collections.Generic.SortedSet$1.InOrderTreeWalk$1 end.*/

            /*System.Collections.Generic.SortedSet$1.BreadthFirstTreeWalk start.*/
            BreadthFirstTreeWalk: function (action) {
                if (this.root == null) {
                    return true;
                }

                var processQueue = new (System.Collections.Generic.List$1(System.Collections.Generic.SortedSet$1.Node(T))).ctor();
                processQueue.add(this.root);
                var current;

                while (processQueue.Count !== 0) {
                    current = processQueue.getItem(0);
                    processQueue.removeAt(0);
                    if (!action(current)) {
                        return false;
                    }
                    if (current.Left != null) {
                        processQueue.add(current.Left);
                    }
                    if (current.Right != null) {
                        processQueue.add(current.Right);
                    }
                }
                return true;
            },
            /*System.Collections.Generic.SortedSet$1.BreadthFirstTreeWalk end.*/

            /*System.Collections.Generic.SortedSet$1.VersionCheck start.*/
            VersionCheck: function () { },
            /*System.Collections.Generic.SortedSet$1.VersionCheck end.*/

            /*System.Collections.Generic.SortedSet$1.IsWithinRange start.*/
            IsWithinRange: function (item) {
                return true;

            },
            /*System.Collections.Generic.SortedSet$1.IsWithinRange end.*/

            /*System.Collections.Generic.SortedSet$1.add start.*/
            add: function (item) {
                return this.AddIfNotPresent(item);
            },
            /*System.Collections.Generic.SortedSet$1.add end.*/

            /*System.Collections.Generic.SortedSet$1.System$Collections$Generic$ICollection$1$add start.*/
            System$Collections$Generic$ICollection$1$add: function (item) {
                this.AddIfNotPresent(item);
            },
            /*System.Collections.Generic.SortedSet$1.System$Collections$Generic$ICollection$1$add end.*/

            /*System.Collections.Generic.SortedSet$1.AddIfNotPresent start.*/
            AddIfNotPresent: function (item) {
                if (this.root == null) {
                    this.root = new (System.Collections.Generic.SortedSet$1.Node(T)).$ctor1(item, false);
                    this.count = 1;
                    this.version = (this.version + 1) | 0;
                    return true;
                }

                var current = this.root;
                var parent = { v : null };
                var grandParent = null;
                var greatGrandParent = null;

                this.version = (this.version + 1) | 0;


                var order = 0;
                while (current != null) {
                    order = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, current.Item);
                    if (order === 0) {
                        this.root.IsRed = false;
                        return false;
                    }

                    if (System.Collections.Generic.SortedSet$1(T).Is4Node(current)) {
                        System.Collections.Generic.SortedSet$1(T).Split4Node(current);
                        if (System.Collections.Generic.SortedSet$1(T).IsRed(parent.v)) {
                            this.InsertionBalance(current, parent, grandParent, greatGrandParent);
                        }
                    }
                    greatGrandParent = grandParent;
                    grandParent = parent.v;
                    parent.v = current;
                    current = (order < 0) ? current.Left : current.Right;
                }

                var node = new (System.Collections.Generic.SortedSet$1.Node(T)).ctor(item);
                if (order > 0) {
                    parent.v.Right = node;
                } else {
                    parent.v.Left = node;
                }

                if (parent.v.IsRed) {
                    this.InsertionBalance(node, parent, grandParent, greatGrandParent);
                }

                this.root.IsRed = false;
                this.count = (this.count + 1) | 0;
                return true;
            },
            /*System.Collections.Generic.SortedSet$1.AddIfNotPresent end.*/

            /*System.Collections.Generic.SortedSet$1.remove start.*/
            remove: function (item) {
                return this.DoRemove(item);
            },
            /*System.Collections.Generic.SortedSet$1.remove end.*/

            /*System.Collections.Generic.SortedSet$1.DoRemove start.*/
            DoRemove: function (item) {

                if (this.root == null) {
                    return false;
                }



                this.version = (this.version + 1) | 0;

                var current = this.root;
                var parent = null;
                var grandParent = null;
                var match = null;
                var parentOfMatch = null;
                var foundMatch = false;
                while (current != null) {
                    if (System.Collections.Generic.SortedSet$1(T).Is2Node(current)) {
                        if (parent == null) {
                            current.IsRed = true;
                        } else {
                            var sibling = System.Collections.Generic.SortedSet$1(T).GetSibling(current, parent);
                            if (sibling.IsRed) {
                                if (Bridge.referenceEquals(parent.Right, sibling)) {
                                    System.Collections.Generic.SortedSet$1(T).RotateLeft(parent);
                                } else {
                                    System.Collections.Generic.SortedSet$1(T).RotateRight(parent);
                                }

                                parent.IsRed = true;
                                sibling.IsRed = false;
                                this.ReplaceChildOfNodeOrRoot(grandParent, parent, sibling);
                                grandParent = sibling;
                                if (Bridge.referenceEquals(parent, match)) {
                                    parentOfMatch = sibling;
                                }

                                sibling = (Bridge.referenceEquals(parent.Left, current)) ? parent.Right : parent.Left;
                            }

                            if (System.Collections.Generic.SortedSet$1(T).Is2Node(sibling)) {
                                System.Collections.Generic.SortedSet$1(T).Merge2Nodes(parent, current, sibling);
                            } else {
                                var rotation = System.Collections.Generic.SortedSet$1(T).RotationNeeded(parent, current, sibling);
                                var newGrandParent = null;
                                switch (rotation) {
                                    case System.Collections.Generic.TreeRotation.RightRotation: 
                                        sibling.Left.IsRed = false;
                                        newGrandParent = System.Collections.Generic.SortedSet$1(T).RotateRight(parent);
                                        break;
                                    case System.Collections.Generic.TreeRotation.LeftRotation: 
                                        sibling.Right.IsRed = false;
                                        newGrandParent = System.Collections.Generic.SortedSet$1(T).RotateLeft(parent);
                                        break;
                                    case System.Collections.Generic.TreeRotation.RightLeftRotation: 
                                        newGrandParent = System.Collections.Generic.SortedSet$1(T).RotateRightLeft(parent);
                                        break;
                                    case System.Collections.Generic.TreeRotation.LeftRightRotation: 
                                        newGrandParent = System.Collections.Generic.SortedSet$1(T).RotateLeftRight(parent);
                                        break;
                                }

                                newGrandParent.IsRed = parent.IsRed;
                                parent.IsRed = false;
                                current.IsRed = true;
                                this.ReplaceChildOfNodeOrRoot(grandParent, parent, newGrandParent);
                                if (Bridge.referenceEquals(parent, match)) {
                                    parentOfMatch = newGrandParent;
                                }
                                grandParent = newGrandParent;
                            }
                        }
                    }

                    var order = foundMatch ? -1 : this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, current.Item);
                    if (order === 0) {
                        foundMatch = true;
                        match = current;
                        parentOfMatch = parent;
                    }

                    grandParent = parent;
                    parent = current;

                    if (order < 0) {
                        current = current.Left;
                    } else {
                        current = current.Right;
                    }
                }

                if (match != null) {
                    this.ReplaceNode(match, parentOfMatch, parent, grandParent);
                    this.count = (this.count - 1) | 0;
                }

                if (this.root != null) {
                    this.root.IsRed = false;
                }
                return foundMatch;
            },
            /*System.Collections.Generic.SortedSet$1.DoRemove end.*/

            /*System.Collections.Generic.SortedSet$1.clear start.*/
            clear: function () {
                this.root = null;
                this.count = 0;
                this.version = (this.version + 1) | 0;
            },
            /*System.Collections.Generic.SortedSet$1.clear end.*/

            /*System.Collections.Generic.SortedSet$1.contains start.*/
            contains: function (item) {

                return this.FindNode(item) != null;
            },
            /*System.Collections.Generic.SortedSet$1.contains end.*/

            /*System.Collections.Generic.SortedSet$1.CopyTo start.*/
            CopyTo: function (array) {
                this.CopyTo$1(array, 0, this.Count);
            },
            /*System.Collections.Generic.SortedSet$1.CopyTo end.*/

            /*System.Collections.Generic.SortedSet$1.copyTo start.*/
            copyTo: function (array, index) {
                this.CopyTo$1(array, index, this.Count);
            },
            /*System.Collections.Generic.SortedSet$1.copyTo end.*/

            /*System.Collections.Generic.SortedSet$1.CopyTo$1 start.*/
            CopyTo$1: function (array, index, count) {
                if (array == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.array);
                }

                if (index < 0) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$1(System.ExceptionArgument.index);
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if (index > array.length || count > ((array.length - index) | 0)) {
                    throw new System.ArgumentException.ctor();
                }
                count = (count + index) | 0;

                this.InOrderTreeWalk(function (node) {
                    if (index >= count) {
                        return false;
                    } else {
                        array[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), array)] = node.Item;
                        return true;
                    }
                });
            },
            /*System.Collections.Generic.SortedSet$1.CopyTo$1 end.*/

            /*System.Collections.Generic.SortedSet$1.System$Collections$ICollection$copyTo start.*/
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    System.ThrowHelper.ThrowArgumentNullException(System.ExceptionArgument.array);
                }

                if (System.Array.getRank(array) !== 1) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_RankMultiDimNotSupported);
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_NonZeroLowerBound);
                }

                if (index < 0) {
                    System.ThrowHelper.ThrowArgumentOutOfRangeException$2(System.ExceptionArgument.arrayIndex, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                }

                if (((array.length - index) | 0) < this.Count) {
                    System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Arg_ArrayPlusOffTooSmall);
                }

                var tarray = Bridge.as(array, System.Array.type(T));
                if (tarray != null) {
                    this.copyTo(tarray, index);
                } else {
                    var objects = Bridge.as(array, System.Array.type(System.Object));
                    if (objects == null) {
                        System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                    }

                    try {
                        this.InOrderTreeWalk(function (node) {
                            objects[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), objects)] = node.Item;
                            return true;
                        });
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.ArrayTypeMismatchException)) {
                            System.ThrowHelper.ThrowArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                        } else {
                            throw $e1;
                        }
                    }
                }
            },
            /*System.Collections.Generic.SortedSet$1.System$Collections$ICollection$copyTo end.*/

            /*System.Collections.Generic.SortedSet$1.GetEnumerator start.*/
            GetEnumerator: function () {
                return new (System.Collections.Generic.SortedSet$1.Enumerator(T)).$ctor1(this);
            },
            /*System.Collections.Generic.SortedSet$1.GetEnumerator end.*/

            /*System.Collections.Generic.SortedSet$1.System$Collections$Generic$IEnumerable$1$GetEnumerator start.*/
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return new (System.Collections.Generic.SortedSet$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.SortedSet$1.System$Collections$Generic$IEnumerable$1$GetEnumerator end.*/

            /*System.Collections.Generic.SortedSet$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.SortedSet$1.Enumerator(T)).$ctor1(this).$clone();
            },
            /*System.Collections.Generic.SortedSet$1.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.Generic.SortedSet$1.InsertionBalance start.*/
            InsertionBalance: function (current, parent, grandParent, greatGrandParent) {
                var parentIsOnRight = (Bridge.referenceEquals(grandParent.Right, parent.v));
                var currentIsOnRight = (Bridge.referenceEquals(parent.v.Right, current));

                var newChildOfGreatGrandParent;
                if (parentIsOnRight === currentIsOnRight) {
                    newChildOfGreatGrandParent = currentIsOnRight ? System.Collections.Generic.SortedSet$1(T).RotateLeft(grandParent) : System.Collections.Generic.SortedSet$1(T).RotateRight(grandParent);
                } else {
                    newChildOfGreatGrandParent = currentIsOnRight ? System.Collections.Generic.SortedSet$1(T).RotateLeftRight(grandParent) : System.Collections.Generic.SortedSet$1(T).RotateRightLeft(grandParent);
                    parent.v = greatGrandParent;
                }
                grandParent.IsRed = true;
                newChildOfGreatGrandParent.IsRed = false;

                this.ReplaceChildOfNodeOrRoot(greatGrandParent, grandParent, newChildOfGreatGrandParent);
            },
            /*System.Collections.Generic.SortedSet$1.InsertionBalance end.*/

            /*System.Collections.Generic.SortedSet$1.ReplaceChildOfNodeOrRoot start.*/
            ReplaceChildOfNodeOrRoot: function (parent, child, newChild) {
                if (parent != null) {
                    if (Bridge.referenceEquals(parent.Left, child)) {
                        parent.Left = newChild;
                    } else {
                        parent.Right = newChild;
                    }
                } else {
                    this.root = newChild;
                }
            },
            /*System.Collections.Generic.SortedSet$1.ReplaceChildOfNodeOrRoot end.*/

            /*System.Collections.Generic.SortedSet$1.ReplaceNode start.*/
            ReplaceNode: function (match, parentOfMatch, succesor, parentOfSuccesor) {
                if (Bridge.referenceEquals(succesor, match)) {
                    succesor = match.Left;
                } else {
                    if (succesor.Right != null) {
                        succesor.Right.IsRed = false;
                    }

                    if (!Bridge.referenceEquals(parentOfSuccesor, match)) {
                        parentOfSuccesor.Left = succesor.Right;
                        succesor.Right = match.Right;
                    }

                    succesor.Left = match.Left;
                }

                if (succesor != null) {
                    succesor.IsRed = match.IsRed;
                }

                this.ReplaceChildOfNodeOrRoot(parentOfMatch, match, succesor);

            },
            /*System.Collections.Generic.SortedSet$1.ReplaceNode end.*/

            /*System.Collections.Generic.SortedSet$1.FindNode start.*/
            FindNode: function (item) {
                var current = this.root;
                while (current != null) {
                    var order = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, current.Item);
                    if (order === 0) {
                        return current;
                    } else {
                        current = (order < 0) ? current.Left : current.Right;
                    }
                }

                return null;
            },
            /*System.Collections.Generic.SortedSet$1.FindNode end.*/

            /*System.Collections.Generic.SortedSet$1.InternalIndexOf start.*/
            InternalIndexOf: function (item) {
                var current = this.root;
                var count = 0;
                while (current != null) {
                    var order = this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, current.Item);
                    if (order === 0) {
                        return count;
                    } else {
                        current = (order < 0) ? current.Left : current.Right;
                        count = (order < 0) ? (((Bridge.Int.mul(2, count) + 1) | 0)) : (((Bridge.Int.mul(2, count) + 2) | 0));
                    }
                }
                return -1;
            },
            /*System.Collections.Generic.SortedSet$1.InternalIndexOf end.*/

            /*System.Collections.Generic.SortedSet$1.FindRange start.*/
            FindRange: function (from, to) {
                return this.FindRange$1(from, to, true, true);
            },
            /*System.Collections.Generic.SortedSet$1.FindRange end.*/

            /*System.Collections.Generic.SortedSet$1.FindRange$1 start.*/
            FindRange$1: function (from, to, lowerBoundActive, upperBoundActive) {
                var current = this.root;
                while (current != null) {
                    if (lowerBoundActive && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](from, current.Item) > 0) {
                        current = current.Right;
                    } else {
                        if (upperBoundActive && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](to, current.Item) < 0) {
                            current = current.Left;
                        } else {
                            return current;
                        }
                    }
                }

                return null;
            },
            /*System.Collections.Generic.SortedSet$1.FindRange$1 end.*/

            /*System.Collections.Generic.SortedSet$1.UpdateVersion start.*/
            UpdateVersion: function () {
                this.version = (this.version + 1) | 0;
            },
            /*System.Collections.Generic.SortedSet$1.UpdateVersion end.*/

            /*System.Collections.Generic.SortedSet$1.ToArray start.*/
            ToArray: function () {
                var newArray = System.Array.init(this.Count, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                this.CopyTo(newArray);
                return newArray;
            },
            /*System.Collections.Generic.SortedSet$1.ToArray end.*/

            /*System.Collections.Generic.SortedSet$1.unionWith start.*/
            unionWith: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                var s = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                var t = Bridge.as(this, System.Collections.Generic.SortedSet$1.TreeSubSet(T));

                if (t != null) {
                    this.VersionCheck();
                }

                if (s != null && t == null && this.count === 0) {
                    var dummy = new (System.Collections.Generic.SortedSet$1(T)).$ctor3(s, this.comparer);
                    this.root = dummy.root;
                    this.count = dummy.count;
                    this.version = (this.version + 1) | 0;
                    return;
                }


                if (s != null && t == null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, s) && (s.Count > ((Bridge.Int.div(this.Count, 2)) | 0))) {
                    var merged = System.Array.init(((s.Count + this.Count) | 0), function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                    var c = 0;
                    var mine = this.GetEnumerator();
                    var theirs = s.GetEnumerator();
                    var mineEnded = !mine.moveNext(), theirsEnded = !theirs.moveNext();
                    while (!mineEnded && !theirsEnded) {
                        var comp = ($t = this.Comparer)[Bridge.geti($t, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](mine.Current, theirs.Current);
                        if (comp < 0) {
                            merged[System.Array.index(Bridge.identity(c, ((c = (c + 1) | 0))), merged)] = mine.Current;
                            mineEnded = !mine.moveNext();
                        } else if (comp === 0) {
                            merged[System.Array.index(Bridge.identity(c, ((c = (c + 1) | 0))), merged)] = theirs.Current;
                            mineEnded = !mine.moveNext();
                            theirsEnded = !theirs.moveNext();
                        } else {
                            merged[System.Array.index(Bridge.identity(c, ((c = (c + 1) | 0))), merged)] = theirs.Current;
                            theirsEnded = !theirs.moveNext();
                        }
                    }

                    if (!mineEnded || !theirsEnded) {
                        var remaining = (mineEnded ? theirs : mine);
                        do {
                            merged[System.Array.index(Bridge.identity(c, ((c = (c + 1) | 0))), merged)] = remaining.Current;
                        } while (remaining.moveNext());
                    }


                    this.root = null;


                    this.root = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(merged, 0, ((c - 1) | 0), null);
                    this.count = c;
                    this.version = (this.version + 1) | 0;
                } else {
                    this.AddAllElements(other);
                }
            },
            /*System.Collections.Generic.SortedSet$1.unionWith end.*/

            /*System.Collections.Generic.SortedSet$1.intersectWith start.*/
            intersectWith: function (other) {
                var $t, $t1;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.Count === 0) {
                    return;
                }


                var s = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                var t = Bridge.as(this, System.Collections.Generic.SortedSet$1.TreeSubSet(T));
                if (t != null) {
                    this.VersionCheck();
                }
                if (s != null && t == null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, s)) {


                    var merged = System.Array.init(this.Count, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                    var c = 0;
                    var mine = this.GetEnumerator();
                    var theirs = s.GetEnumerator();
                    var mineEnded = !mine.moveNext(), theirsEnded = !theirs.moveNext();
                    var max = this.Max;
                    var min = this.Min;

                    while (!mineEnded && !theirsEnded && ($t = this.Comparer)[Bridge.geti($t, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](theirs.Current, max) <= 0) {
                        var comp = ($t1 = this.Comparer)[Bridge.geti($t1, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](mine.Current, theirs.Current);
                        if (comp < 0) {
                            mineEnded = !mine.moveNext();
                        } else if (comp === 0) {
                            merged[System.Array.index(Bridge.identity(c, ((c = (c + 1) | 0))), merged)] = theirs.Current;
                            mineEnded = !mine.moveNext();
                            theirsEnded = !theirs.moveNext();
                        } else {
                            theirsEnded = !theirs.moveNext();
                        }
                    }


                    this.root = null;

                    this.root = System.Collections.Generic.SortedSet$1(T).ConstructRootFromSortedArray(merged, 0, ((c - 1) | 0), null);
                    this.count = c;
                    this.version = (this.version + 1) | 0;
                } else {
                    this.IntersectWithEnumerable(other);
                }
            },
            /*System.Collections.Generic.SortedSet$1.intersectWith end.*/

            /*System.Collections.Generic.SortedSet$1.IntersectWithEnumerable start.*/
            IntersectWithEnumerable: function (other) {
                var $t;
                var toSave = new (System.Collections.Generic.List$1(T)).$ctor2(this.Count);
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (this.contains(item)) {
                            toSave.add(item);
                            this.remove(item);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.clear();
                this.AddAllElements(toSave);

            },
            /*System.Collections.Generic.SortedSet$1.IntersectWithEnumerable end.*/

            /*System.Collections.Generic.SortedSet$1.exceptWith start.*/
            exceptWith: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.count === 0) {
                    return;
                }

                if (Bridge.referenceEquals(other, this)) {
                    this.clear();
                    return;
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));

                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    if (!(this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](asSorted.Max, this.Min) < 0 || this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](asSorted.Min, this.Max) > 0)) {
                        var min = this.Min;
                        var max = this.Max;
                        $t = Bridge.getEnumerator(other, T);
                        try {
                            while ($t.moveNext()) {
                                var item = $t.Current;
                                if (this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, min) < 0) {
                                    continue;
                                }
                                if (this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](item, max) > 0) {
                                    break;
                                }
                                this.remove(item);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                } else {
                    this.RemoveAllElements(other);
                }
            },
            /*System.Collections.Generic.SortedSet$1.exceptWith end.*/

            /*System.Collections.Generic.SortedSet$1.symmetricExceptWith start.*/
            symmetricExceptWith: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.Count === 0) {
                    this.unionWith(other);
                    return;
                }

                if (Bridge.referenceEquals(other, this)) {
                    this.clear();
                    return;
                }


                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));

                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    this.SymmetricExceptWithSameEC$1(asSorted);
                } else if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    this.SymmetricExceptWithSameEC$1(asHash);
                } else {
                    var elements = (new (System.Collections.Generic.List$1(T)).$ctor1(other)).ToArray();
                    System.Array.sort(elements, this.Comparer);
                    this.SymmetricExceptWithSameEC(elements);
                }
            },
            /*System.Collections.Generic.SortedSet$1.symmetricExceptWith end.*/

            /*System.Collections.Generic.SortedSet$1.SymmetricExceptWithSameEC$1 start.*/
            SymmetricExceptWithSameEC$1: function (other) {
                var $t;
                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (this.contains(item)) {
                            this.remove(item);
                        } else {
                            this.add(item);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*System.Collections.Generic.SortedSet$1.SymmetricExceptWithSameEC$1 end.*/

            /*System.Collections.Generic.SortedSet$1.SymmetricExceptWithSameEC start.*/
            SymmetricExceptWithSameEC: function (other) {
                if (other.length === 0) {
                    return;
                }
                var last = other[System.Array.index(0, other)];
                for (var i = 0; i < other.length; i = (i + 1) | 0) {
                    while (i < other.length && i !== 0 && this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](other[System.Array.index(i, other)], last) === 0) {
                        i = (i + 1) | 0;
                    }
                    if (i >= other.length) {
                        break;
                    }
                    if (this.contains(other[System.Array.index(i, other)])) {
                        this.remove(other[System.Array.index(i, other)]);
                    } else {
                        this.add(other[System.Array.index(i, other)]);
                    }
                    last = other[System.Array.index(i, other)];
                }
            },
            /*System.Collections.Generic.SortedSet$1.SymmetricExceptWithSameEC end.*/

            /*System.Collections.Generic.SortedSet$1.isSubsetOf start.*/
            isSubsetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.Count === 0) {
                    return true;
                }


                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    if (this.Count > asSorted.Count) {
                        return false;
                    }
                    return this.IsSubsetOfSortedSetWithSameEC(asSorted);
                } else {

                    var result = this.CheckUniqueAndUnfoundElements(other, false);
                    return (result.uniqueCount === this.Count && result.unfoundCount >= 0);
                }
            },
            /*System.Collections.Generic.SortedSet$1.isSubsetOf end.*/

            /*System.Collections.Generic.SortedSet$1.IsSubsetOfSortedSetWithSameEC start.*/
            IsSubsetOfSortedSetWithSameEC: function (asSorted) {
                var $t;
                var prunedOther = asSorted.GetViewBetween(this.Min, this.Max);
                $t = Bridge.getEnumerator(this);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (!prunedOther.contains(item)) {
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
            /*System.Collections.Generic.SortedSet$1.IsSubsetOfSortedSetWithSameEC end.*/

            /*System.Collections.Generic.SortedSet$1.isProperSubsetOf start.*/
            isProperSubsetOf: function (other) {
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if ((Bridge.as(other, System.Collections.ICollection)) != null) {
                    if (this.Count === 0) {
                        return System.Array.getCount((Bridge.as(other, System.Collections.ICollection))) > 0;
                    }
                }



                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    return asHash.isProperSupersetOf(this);
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    if (this.Count >= asSorted.Count) {
                        return false;
                    }
                    return this.IsSubsetOfSortedSetWithSameEC(asSorted);
                }


                var result = this.CheckUniqueAndUnfoundElements(other, false);
                return (result.uniqueCount === this.Count && result.unfoundCount > 0);
            },
            /*System.Collections.Generic.SortedSet$1.isProperSubsetOf end.*/

            /*System.Collections.Generic.SortedSet$1.isSupersetOf start.*/
            isSupersetOf: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if ((Bridge.as(other, System.Collections.ICollection)) != null && System.Array.getCount((Bridge.as(other, System.Collections.ICollection))) === 0) {
                    return true;
                }


                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    return asHash.isSubsetOf(this);
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    if (this.Count < asSorted.Count) {
                        return false;
                    }
                    var pruned = this.GetViewBetween(asSorted.Min, asSorted.Max);
                    $t = Bridge.getEnumerator(asSorted);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (!pruned.contains(item)) {
                                return false;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return true;
                }
                return this.ContainsAllElements(other);
            },
            /*System.Collections.Generic.SortedSet$1.isSupersetOf end.*/

            /*System.Collections.Generic.SortedSet$1.isProperSupersetOf start.*/
            isProperSupersetOf: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.Count === 0) {
                    return false;
                }

                if ((Bridge.as(other, System.Collections.ICollection)) != null && System.Array.getCount((Bridge.as(other, System.Collections.ICollection))) === 0) {
                    return true;
                }



                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    return asHash.isProperSubsetOf(this);
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(asSorted, this)) {
                    if (asSorted.Count >= this.Count) {
                        return false;
                    }
                    var pruned = this.GetViewBetween(asSorted.Min, asSorted.Max);
                    $t = Bridge.getEnumerator(asSorted);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (!pruned.contains(item)) {
                                return false;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return true;
                }


                var result = this.CheckUniqueAndUnfoundElements(other, true);
                return (result.uniqueCount < this.Count && result.unfoundCount === 0);
            },
            /*System.Collections.Generic.SortedSet$1.isProperSupersetOf end.*/

            /*System.Collections.Generic.SortedSet$1.setEquals start.*/
            setEquals: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    return asHash.setEquals(this);
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted)) {
                    var mine = this.GetEnumerator().$clone();
                    var theirs = asSorted.GetEnumerator().$clone();
                    var mineEnded = !mine.System$Collections$IEnumerator$moveNext();
                    var theirsEnded = !theirs.System$Collections$IEnumerator$moveNext();
                    while (!mineEnded && !theirsEnded) {
                        if (($t = this.Comparer)[Bridge.geti($t, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](mine[Bridge.geti(mine, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")], theirs[Bridge.geti(theirs, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]) !== 0) {
                            return false;
                        }
                        mineEnded = !mine.System$Collections$IEnumerator$moveNext();
                        theirsEnded = !theirs.System$Collections$IEnumerator$moveNext();
                    }
                    return mineEnded && theirsEnded;
                }

                var result = this.CheckUniqueAndUnfoundElements(other, true);
                return (result.uniqueCount === this.Count && result.unfoundCount === 0);
            },
            /*System.Collections.Generic.SortedSet$1.setEquals end.*/

            /*System.Collections.Generic.SortedSet$1.overlaps start.*/
            overlaps: function (other) {
                var $t;
                if (other == null) {
                    throw new System.ArgumentNullException.$ctor1("other");
                }

                if (this.Count === 0) {
                    return false;
                }

                if ((Bridge.as(other, System.Collections.Generic.ICollection$1(T)) != null) && System.Array.getCount((Bridge.as(other, System.Collections.Generic.ICollection$1(T))), T) === 0) {
                    return false;
                }

                var asSorted = Bridge.as(other, System.Collections.Generic.SortedSet$1(T));
                if (asSorted != null && System.Collections.Generic.SortedSet$1(T).AreComparersEqual(this, asSorted) && (this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](this.Min, asSorted.Max) > 0 || this.comparer[Bridge.geti(this.comparer, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](this.Max, asSorted.Min) < 0)) {
                    return false;
                }

                var asHash = Bridge.as(other, System.Collections.Generic.HashSet$1(T));
                if (asHash != null && Bridge.equals(this.comparer, new (System.Collections.Generic.Comparer$1(T))(System.Collections.Generic.Comparer$1.$default.fn)) && Bridge.equals(asHash.Comparer, System.Collections.Generic.EqualityComparer$1(T).def)) {
                    return asHash.overlaps(this);
                }

                $t = Bridge.getEnumerator(other, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (this.contains(item)) {
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
            /*System.Collections.Generic.SortedSet$1.overlaps end.*/

            /*System.Collections.Generic.SortedSet$1.CheckUniqueAndUnfoundElements start.*/
            CheckUniqueAndUnfoundElements: function (other, returnIfUnfound) {
                var $t, $t1;
                var result = new (System.Collections.Generic.SortedSet$1.ElementCount(T))();

                if (this.Count === 0) {
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


                var originalLastIndex = this.Count;
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
            /*System.Collections.Generic.SortedSet$1.CheckUniqueAndUnfoundElements end.*/

            /*System.Collections.Generic.SortedSet$1.RemoveWhere start.*/
            RemoveWhere: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException.$ctor1("match");
                }
                var matches = new (System.Collections.Generic.List$1(T)).$ctor2(this.Count);

                this.BreadthFirstTreeWalk(function (n) {
                    if (match(n.Item)) {
                        matches.add(n.Item);
                    }
                    return true;
                });
                var actuallyRemoved = 0;
                for (var i = (matches.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.remove(matches.getItem(i))) {
                        actuallyRemoved = (actuallyRemoved + 1) | 0;
                    }
                }

                return actuallyRemoved;

            },
            /*System.Collections.Generic.SortedSet$1.RemoveWhere end.*/

            /*System.Collections.Generic.SortedSet$1.Reverse start.*/
            Reverse: function () {
                return new (Bridge.GeneratorEnumerable$1(T))(Bridge.fn.bind(this, function ()  {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        e,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(T))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        e = new (System.Collections.Generic.SortedSet$1.Enumerator(T)).$ctor2(this, true);
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( e.moveNext() ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = e.Current;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }));
            },
            /*System.Collections.Generic.SortedSet$1.Reverse end.*/

            /*System.Collections.Generic.SortedSet$1.GetViewBetween start.*/
            GetViewBetween: function (lowerValue, upperValue) {
                var $t;
                if (($t = this.Comparer)[Bridge.geti($t, "System$Collections$Generic$IComparer$1$" + Bridge.getTypeAlias(T) + "$compare", "System$Collections$Generic$IComparer$1$compare")](lowerValue, upperValue) > 0) {
                    throw new System.ArgumentException.$ctor1("lowerBound is greater than upperBound");
                }
                return new (System.Collections.Generic.SortedSet$1.TreeSubSet(T)).$ctor1(this, lowerValue, upperValue, true, true);
            },
            /*System.Collections.Generic.SortedSet$1.GetViewBetween end.*/

            /*System.Collections.Generic.SortedSet$1.TryGetValue start.*/
            TryGetValue: function (equalValue, actualValue) {
                var node = this.FindNode(equalValue);
                if (node != null) {
                    actualValue.v = node.Item;
                    return true;
                }
                actualValue.v = Bridge.getDefaultValue(T);
                return false;
            },
            /*System.Collections.Generic.SortedSet$1.TryGetValue end.*/


        }
    }; });
    /*System.Collections.Generic.SortedSet$1 end.*/
