    /*System.Collections.Generic.LinkedList$1 start.*/
    Bridge.define("System.Collections.Generic.LinkedList$1", function (T) { return {
        inherits: [System.Collections.Generic.ICollection$1(T),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(T)],
        statics: {
            fields: {
                VersionName: null,
                CountName: null,
                ValuesName: null
            },
            ctors: {
                init: function () {
                    this.VersionName = "Version";
                    this.CountName = "Count";
                    this.ValuesName = "Data";
                }
            }
        },
        fields: {
            head: null,
            count: 0,
            version: 0
        },
        props: {
            Count: {
                get: function () {
                    return this.count;
                }
            },
            First: {
                get: function () {
                    return this.head;
                }
            },
            Last: {
                get: function () {
                    return this.head == null ? null : this.head.prev;
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
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (collection) {
                var $t;
                this.$initialize();
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                $t = Bridge.getEnumerator(collection, T);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        this.AddLast(item);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            /*System.Collections.Generic.LinkedList$1.System$Collections$Generic$ICollection$1$add start.*/
            System$Collections$Generic$ICollection$1$add: function (value) {
                this.AddLast(value);
            },
            /*System.Collections.Generic.LinkedList$1.System$Collections$Generic$ICollection$1$add end.*/

            /*System.Collections.Generic.LinkedList$1.AddAfter start.*/
            AddAfter: function (node, value) {
                this.ValidateNode(node);
                var result = new (System.Collections.Generic.LinkedListNode$1(T)).$ctor1(node.list, value);
                this.InternalInsertNodeBefore(node.next, result);
                return result;
            },
            /*System.Collections.Generic.LinkedList$1.AddAfter end.*/

            /*System.Collections.Generic.LinkedList$1.AddAfter$1 start.*/
            AddAfter$1: function (node, newNode) {
                this.ValidateNode(node);
                this.ValidateNewNode(newNode);
                this.InternalInsertNodeBefore(node.next, newNode);
                newNode.list = this;
            },
            /*System.Collections.Generic.LinkedList$1.AddAfter$1 end.*/

            /*System.Collections.Generic.LinkedList$1.AddBefore start.*/
            AddBefore: function (node, value) {
                this.ValidateNode(node);
                var result = new (System.Collections.Generic.LinkedListNode$1(T)).$ctor1(node.list, value);
                this.InternalInsertNodeBefore(node, result);
                if (Bridge.referenceEquals(node, this.head)) {
                    this.head = result;
                }
                return result;
            },
            /*System.Collections.Generic.LinkedList$1.AddBefore end.*/

            /*System.Collections.Generic.LinkedList$1.AddBefore$1 start.*/
            AddBefore$1: function (node, newNode) {
                this.ValidateNode(node);
                this.ValidateNewNode(newNode);
                this.InternalInsertNodeBefore(node, newNode);
                newNode.list = this;
                if (Bridge.referenceEquals(node, this.head)) {
                    this.head = newNode;
                }
            },
            /*System.Collections.Generic.LinkedList$1.AddBefore$1 end.*/

            /*System.Collections.Generic.LinkedList$1.AddFirst start.*/
            AddFirst: function (value) {
                var result = new (System.Collections.Generic.LinkedListNode$1(T)).$ctor1(this, value);
                if (this.head == null) {
                    this.InternalInsertNodeToEmptyList(result);
                } else {
                    this.InternalInsertNodeBefore(this.head, result);
                    this.head = result;
                }
                return result;
            },
            /*System.Collections.Generic.LinkedList$1.AddFirst end.*/

            /*System.Collections.Generic.LinkedList$1.AddFirst$1 start.*/
            AddFirst$1: function (node) {
                this.ValidateNewNode(node);

                if (this.head == null) {
                    this.InternalInsertNodeToEmptyList(node);
                } else {
                    this.InternalInsertNodeBefore(this.head, node);
                    this.head = node;
                }
                node.list = this;
            },
            /*System.Collections.Generic.LinkedList$1.AddFirst$1 end.*/

            /*System.Collections.Generic.LinkedList$1.AddLast start.*/
            AddLast: function (value) {
                var result = new (System.Collections.Generic.LinkedListNode$1(T)).$ctor1(this, value);
                if (this.head == null) {
                    this.InternalInsertNodeToEmptyList(result);
                } else {
                    this.InternalInsertNodeBefore(this.head, result);
                }
                return result;
            },
            /*System.Collections.Generic.LinkedList$1.AddLast end.*/

            /*System.Collections.Generic.LinkedList$1.AddLast$1 start.*/
            AddLast$1: function (node) {
                this.ValidateNewNode(node);

                if (this.head == null) {
                    this.InternalInsertNodeToEmptyList(node);
                } else {
                    this.InternalInsertNodeBefore(this.head, node);
                }
                node.list = this;
            },
            /*System.Collections.Generic.LinkedList$1.AddLast$1 end.*/

            /*System.Collections.Generic.LinkedList$1.clear start.*/
            clear: function () {
                var current = this.head;
                while (current != null) {
                    var temp = current;
                    current = current.Next;
                    temp.Invalidate();
                }

                this.head = null;
                this.count = 0;
                this.version = (this.version + 1) | 0;
            },
            /*System.Collections.Generic.LinkedList$1.clear end.*/

            /*System.Collections.Generic.LinkedList$1.contains start.*/
            contains: function (value) {
                return this.Find(value) != null;
            },
            /*System.Collections.Generic.LinkedList$1.contains end.*/

            /*System.Collections.Generic.LinkedList$1.copyTo start.*/
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (index < 0 || index > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.Count) {
                    throw new System.ArgumentException.ctor();
                }

                var node = this.head;
                if (node != null) {
                    do {
                        array[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), array)] = node.item;
                        node = node.next;
                    } while (!Bridge.referenceEquals(node, this.head));
                }
            },
            /*System.Collections.Generic.LinkedList$1.copyTo end.*/

            /*System.Collections.Generic.LinkedList$1.System$Collections$ICollection$copyTo start.*/
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.ctor();
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException.ctor();
                }

                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.Count) {
                    throw new System.ArgumentException.ctor();
                }

                var tArray = Bridge.as(array, System.Array.type(T));
                if (tArray != null) {
                    this.copyTo(tArray, index);
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
                    var node = this.head;
                    try {
                        if (node != null) {
                            do {
                                objects[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), objects)] = node.item;
                                node = node.next;
                            } while (!Bridge.referenceEquals(node, this.head));
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        if (Bridge.is($e1, System.ArrayTypeMismatchException)) {
                            throw new System.ArgumentException.ctor();
                        } else {
                            throw $e1;
                        }
                    }
                }
            },
            /*System.Collections.Generic.LinkedList$1.System$Collections$ICollection$copyTo end.*/

            /*System.Collections.Generic.LinkedList$1.Find start.*/
            Find: function (value) {
                var node = this.head;
                var c = System.Collections.Generic.EqualityComparer$1(T).def;
                if (node != null) {
                    if (value != null) {
                        do {
                            if (c.equals2(node.item, value)) {
                                return node;
                            }
                            node = node.next;
                        } while (!Bridge.referenceEquals(node, this.head));
                    } else {
                        do {
                            if (node.item == null) {
                                return node;
                            }
                            node = node.next;
                        } while (!Bridge.referenceEquals(node, this.head));
                    }
                }
                return null;
            },
            /*System.Collections.Generic.LinkedList$1.Find end.*/

            /*System.Collections.Generic.LinkedList$1.FindLast start.*/
            FindLast: function (value) {
                if (this.head == null) {
                    return null;
                }

                var last = this.head.prev;
                var node = last;
                var c = System.Collections.Generic.EqualityComparer$1(T).def;
                if (node != null) {
                    if (value != null) {
                        do {
                            if (c.equals2(node.item, value)) {
                                return node;
                            }

                            node = node.prev;
                        } while (!Bridge.referenceEquals(node, last));
                    } else {
                        do {
                            if (node.item == null) {
                                return node;
                            }
                            node = node.prev;
                        } while (!Bridge.referenceEquals(node, last));
                    }
                }
                return null;
            },
            /*System.Collections.Generic.LinkedList$1.FindLast end.*/

            /*System.Collections.Generic.LinkedList$1.GetEnumerator start.*/
            GetEnumerator: function () {
                return new (System.Collections.Generic.LinkedList$1.Enumerator(T)).$ctor1(this);
            },
            /*System.Collections.Generic.LinkedList$1.GetEnumerator end.*/

            /*System.Collections.Generic.LinkedList$1.System$Collections$Generic$IEnumerable$1$GetEnumerator start.*/
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return this.GetEnumerator().$clone();
            },
            /*System.Collections.Generic.LinkedList$1.System$Collections$Generic$IEnumerable$1$GetEnumerator end.*/

            /*System.Collections.Generic.LinkedList$1.System$Collections$IEnumerable$GetEnumerator start.*/
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this.GetEnumerator().$clone();
            },
            /*System.Collections.Generic.LinkedList$1.System$Collections$IEnumerable$GetEnumerator end.*/

            /*System.Collections.Generic.LinkedList$1.remove start.*/
            remove: function (value) {
                var node = this.Find(value);
                if (node != null) {
                    this.InternalRemoveNode(node);
                    return true;
                }
                return false;
            },
            /*System.Collections.Generic.LinkedList$1.remove end.*/

            /*System.Collections.Generic.LinkedList$1.Remove start.*/
            Remove: function (node) {
                this.ValidateNode(node);
                this.InternalRemoveNode(node);
            },
            /*System.Collections.Generic.LinkedList$1.Remove end.*/

            /*System.Collections.Generic.LinkedList$1.RemoveFirst start.*/
            RemoveFirst: function () {
                if (this.head == null) {
                    throw new System.InvalidOperationException.ctor();
                }
                this.InternalRemoveNode(this.head);
            },
            /*System.Collections.Generic.LinkedList$1.RemoveFirst end.*/

            /*System.Collections.Generic.LinkedList$1.RemoveLast start.*/
            RemoveLast: function () {
                if (this.head == null) {
                    throw new System.InvalidOperationException.ctor();
                }
                this.InternalRemoveNode(this.head.prev);
            },
            /*System.Collections.Generic.LinkedList$1.RemoveLast end.*/

            /*System.Collections.Generic.LinkedList$1.InternalInsertNodeBefore start.*/
            InternalInsertNodeBefore: function (node, newNode) {
                newNode.next = node;
                newNode.prev = node.prev;
                node.prev.next = newNode;
                node.prev = newNode;
                this.version = (this.version + 1) | 0;
                this.count = (this.count + 1) | 0;
            },
            /*System.Collections.Generic.LinkedList$1.InternalInsertNodeBefore end.*/

            /*System.Collections.Generic.LinkedList$1.InternalInsertNodeToEmptyList start.*/
            InternalInsertNodeToEmptyList: function (newNode) {
                System.Diagnostics.Debug.Assert$1(this.head == null && this.count === 0, "LinkedList must be empty when this method is called!");
                newNode.next = newNode;
                newNode.prev = newNode;
                this.head = newNode;
                this.version = (this.version + 1) | 0;
                this.count = (this.count + 1) | 0;
            },
            /*System.Collections.Generic.LinkedList$1.InternalInsertNodeToEmptyList end.*/

            /*System.Collections.Generic.LinkedList$1.InternalRemoveNode start.*/
            InternalRemoveNode: function (node) {
                System.Diagnostics.Debug.Assert$1(Bridge.referenceEquals(node.list, this), "Deleting the node from another list!");
                System.Diagnostics.Debug.Assert$1(this.head != null, "This method shouldn't be called on empty list!");
                if (Bridge.referenceEquals(node.next, node)) {
                    System.Diagnostics.Debug.Assert$1(this.count === 1 && Bridge.referenceEquals(this.head, node), "this should only be true for a list with only one node");
                    this.head = null;
                } else {
                    node.next.prev = node.prev;
                    node.prev.next = node.next;
                    if (Bridge.referenceEquals(this.head, node)) {
                        this.head = node.next;
                    }
                }
                node.Invalidate();
                this.count = (this.count - 1) | 0;
                this.version = (this.version + 1) | 0;
            },
            /*System.Collections.Generic.LinkedList$1.InternalRemoveNode end.*/

            /*System.Collections.Generic.LinkedList$1.ValidateNewNode start.*/
            ValidateNewNode: function (node) {
                if (node == null) {
                    throw new System.ArgumentNullException.$ctor1("node");
                }

                if (node.list != null) {
                    throw new System.InvalidOperationException.ctor();
                }
            },
            /*System.Collections.Generic.LinkedList$1.ValidateNewNode end.*/

            /*System.Collections.Generic.LinkedList$1.ValidateNode start.*/
            ValidateNode: function (node) {
                if (node == null) {
                    throw new System.ArgumentNullException.$ctor1("node");
                }

                if (!Bridge.referenceEquals(node.list, this)) {
                    throw new System.InvalidOperationException.ctor();
                }
            },
            /*System.Collections.Generic.LinkedList$1.ValidateNode end.*/


        },
        overloads: {
            "AddAfter(LinkedListNode<T>, LinkedListNode<T>)": "AddAfter$1",
            "AddBefore(LinkedListNode<T>, LinkedListNode<T>)": "AddBefore$1",
            "AddFirst(LinkedListNode<T>)": "AddFirst$1",
            "AddLast(LinkedListNode<T>)": "AddLast$1",
            "Clear()": "clear",
            "Contains(T)": "contains",
            "CopyTo(T[], int)": "copyTo",
            "Remove(T)": "remove"
        }
    }; });
    /*System.Collections.Generic.LinkedList$1 end.*/
