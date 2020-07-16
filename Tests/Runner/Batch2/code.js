/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 17.9.8-luna
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2019 Object.NET, Inc.
 * @compiler Bridge.NET 17.9.8-luna
 */
Bridge.assembly("Bridge.ClientTest.Batch2", function ($asm, globals) {
    "use strict";

    /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385", {
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.TestIsTypedArrayForByte:static start.*/
                TestIsTypedArrayForByte: function () {
                    var value = System.Array.init(new Uint8Array(3), System.Byte);
                    Bridge.Test.NUnit.Assert.True(Bridge.is(value, Uint8Array));
                    Bridge.Test.NUnit.Assert.False(Bridge.is(value, Int32Array));
                },
                /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.TestIsTypedArrayForByte:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499", {
        methods: {
            /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499.TestObjectStringCoalesceWorks start.*/
            TestObjectStringCoalesceWorks: function () {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7, $t8, $t9, $t10, $t11, $t12, $t13, $t14, $t15, $t16, $t17, $t18, $t19;
                var def = Bridge.box(1, System.Int32);
                var app = null;
                var o1 = "";
                var o2 = "test";
                var o3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual(1, Bridge.unbox(($t = app, $t !== null ? $t : def)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t1 = o1, $t1 !== null ? $t1 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t2 = o1, $t2 !== null ? $t2 : "test")));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t3 = o3, $t3 !== null ? $t3 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t4 = o3, $t4 !== null ? $t4 : "test")));

                var s1 = "";
                var s2 = "test";
                var s3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t5 = s1, $t5 !== null ? $t5 : s2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t6 = s1, $t6 !== null ? $t6 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t7 = s1, $t7 !== null ? $t7 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t8 = "", $t8 !== null ? $t8 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t9 = s3, $t9 !== null ? $t9 : s2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t10 = s3, $t10 !== null ? $t10 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t11 = s3, $t11 !== null ? $t11 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t12 = null, $t12 !== null ? $t12 : "test"));

                var i1 = 0;
                var i2 = 1;
                var i3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual(0, ($t13 = i1, $t13 !== null ? $t13 : i2));
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.unbox(($t14 = i1, $t14 !== null ? Bridge.box($t14, System.Int32, System.Nullable.toString, System.Nullable.getHashCode) : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, ($t15 = i1, $t15 !== null ? $t15 : 1));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t16 = i3, $t16 !== null ? $t16 : i2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t17 = i3, $t17 !== null ? Bridge.box($t17, System.Int32, System.Nullable.toString, System.Nullable.getHashCode) : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t18 = i3, $t18 !== null ? $t18 : 1));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t19 = null, $t19 !== null ? $t19 : i2));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499.TestObjectStringCoalesceWorks end.*/


        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N1122 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N1122", {
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestClippingInJavaScriptOverflowMode:static start.*/
                TestClippingInJavaScriptOverflowMode: function () {
                    var x = System.Double.max;

                    var y1 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, y1, "int");

                    var y2 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, y2, "uint");

                    var z1 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, z1, "long");

                    var z2 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, z2, "ulong");
                },
                /*Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestClippingInJavaScriptOverflowMode:static end.*/

                /*Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestIntegerDivisionInJavaScriptOverflowMode:static start.*/
                TestIntegerDivisionInJavaScriptOverflowMode: function () {
                    var x = 1.1;

                    var y1 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(y1), "int");

                    var y2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(y2), "uint");

                    var z1 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(z1), "long");

                    var z2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(z2), "ulong");
                },
                /*Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestIntegerDivisionInJavaScriptOverflowMode:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N1122 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N1204 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N1204", {
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.BridgeIssues.N1204.TestStrictNullChecksOptionForNulls:static start.*/
                TestStrictNullChecksOptionForNulls: function () {
                    var temp = { };
                    var temp1 = temp;
                    var temp2 = { };
                    var l = System.Int64(5);
                    var ol = System.Int64(5);
                    var oi = Bridge.box(5, System.Int32);
                    var varNull = null;
                    var varUndefined = temp["this-prop-undefined"];

                    Bridge.Test.NUnit.Assert.False(varNull === varUndefined, "varNull == varUndefined");
                    Bridge.Test.NUnit.Assert.True(varNull === null, "varNull == null");
                    Bridge.Test.NUnit.Assert.False(varUndefined === null, "varUndefined == null");
                    Bridge.Test.NUnit.Assert.True(undefined === varUndefined, "Script.Undefined == varUndefined");
                    Bridge.Test.NUnit.Assert.True(temp === temp1, "temp == temp1");
                    Bridge.Test.NUnit.Assert.False(temp === temp2, "temp == temp2");
                    Bridge.Test.NUnit.Assert.True(l.equals(System.Int64(5)), "l == 5");
                    Bridge.Test.NUnit.Assert.False(ol === oi, "ol == oi");

                    Bridge.Test.NUnit.Assert.False(varUndefined === varNull, "varUndefined == varNull");
                    Bridge.Test.NUnit.Assert.True(null === varNull, "null == varNull");
                    Bridge.Test.NUnit.Assert.False(null === varUndefined, "null == varUndefined");
                    Bridge.Test.NUnit.Assert.True(varUndefined === undefined, "varUndefined == Script.Undefined");
                    Bridge.Test.NUnit.Assert.True(temp1 === temp, "temp1 == temp");
                    Bridge.Test.NUnit.Assert.False(temp2 === temp, "temp2 == temp");
                    Bridge.Test.NUnit.Assert.True(System.Int64(5).equals(l), "5 == l");
                    Bridge.Test.NUnit.Assert.False(oi === ol, "oi == ol");
                },
                /*Bridge.ClientTest.Batch2.BridgeIssues.N1204.TestStrictNullChecksOptionForNulls:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N1204 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N3075 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N3075", {
        methods: {
            /*Bridge.ClientTest.Batch2.BridgeIssues.N3075.TestRawModifier start.*/
            TestRawModifier: function () {
                var Apple = 1;
                Bridge.Test.NUnit.Assert.AreEqual(Apple, Apple);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N3075.TestRawModifier end.*/


        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N3075 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N3075+SomeType start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N3075.SomeType", {
        $kind: "nested enum",
        statics: {
            fields: {
                Apple: "Apple"
            }
        },
        $utype: System.String
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N3075+SomeType end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N772 start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772", {
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.BridgeIssues.N772.TestUseCase:static start.*/
                TestUseCase: function () {
                    //These arrays depend on "useTypedArray" bridge.json option
                    var byteArray = System.Array.init(new Uint8Array(1), System.Byte);
                    var sbyteArray = System.Array.init(new Int8Array(2), System.SByte);
                    var shortArray = System.Array.init(new Int16Array(3), System.Int16);
                    var ushortArray = System.Array.init(new Uint16Array(4), System.UInt16);
                    var intArray = System.Array.init(new Int32Array(5), System.Int32);
                    var uintArray = System.Array.init(new Uint32Array(6), System.UInt32);
                    var floatArray = System.Array.init(new Float32Array(7), System.Single);
                    var doubleArray = System.Array.init(new Float64Array(8), System.Double);

                    //These arrays do not depend on "useTypedArray" bridge.json option
                    var stringArray = System.Array.init(9, null, System.String);
                    var decimalArray = System.Array.init(10, System.Decimal(0.0), System.Decimal);

                    byteArray[System.Array.index(0, byteArray)] = 1;
                    sbyteArray[System.Array.index(0, sbyteArray)] = 2;
                    shortArray[System.Array.index(0, shortArray)] = 3;
                    ushortArray[System.Array.index(0, ushortArray)] = 4;
                    intArray[System.Array.index(0, intArray)] = 5;
                    uintArray[System.Array.index(0, uintArray)] = 6;
                    floatArray[System.Array.index(0, floatArray)] = 7;
                    doubleArray[System.Array.index(0, doubleArray)] = 8;

                    stringArray[System.Array.index(0, stringArray)] = "9";
                    decimalArray[System.Array.index(0, decimalArray)] = System.Decimal(10.0);

                    Bridge.Test.NUnit.Assert.AreEqual(1, byteArray[System.Array.index(0, byteArray)], "get byteArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(2, sbyteArray[System.Array.index(0, sbyteArray)], "get sbyteArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(3, shortArray[System.Array.index(0, shortArray)], "get shortArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(4, ushortArray[System.Array.index(0, ushortArray)], "get ushortArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(5, intArray[System.Array.index(0, intArray)], "get intArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(6, uintArray[System.Array.index(0, uintArray)], "get uintArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(7, floatArray[System.Array.index(0, floatArray)], "get floatArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(8, doubleArray[System.Array.index(0, doubleArray)], "get doubleArray[0]");

                    Bridge.Test.NUnit.Assert.AreEqual("9", stringArray[System.Array.index(0, stringArray)], "get stringArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal(10.0), decimalArray[System.Array.index(0, decimalArray)], "get decimalArray[0]");
                },
                /*Bridge.ClientTest.Batch2.BridgeIssues.N772.TestUseCase:static end.*/


            }
        },
        methods: {
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.TypePropertiesAreCorrect start.*/
            TypePropertiesAreCorrect: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 3]), System.Int32);
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, Array), "is Array should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, Int32Array), "is int[] should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.ICollection), "is ICollection should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.IEnumerable), "is IEnumerable should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.ICloneable), "is ICloneable should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.ICollection$1(System.Int32)), "is ICollection<int> should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.IEnumerable$1(System.Int32)), "is IEnumerable<int> should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.IList$1(System.Int32)), "is IList<int> should be true");
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.TypePropertiesAreCorrect end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.LengthWorks start.*/
            LengthWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.init(new Int32Array(0), System.Int32).length);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.init(["x"], System.String).length);
                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.init(["x", "y"], System.String).length);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.LengthWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.RankIsOne start.*/
            RankIsOne: function () {
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.getRank(System.Array.init(new Int32Array(0), System.Int32)));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.RankIsOne end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetLengthWorks start.*/
            GetLengthWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLength(System.Array.init(new Int32Array(0), System.Int32), 0));
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.getLength(System.Array.init(["x"], System.String), 0));
                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.getLength(System.Array.init(["x", "y"], System.String), 0));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetLengthWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetLowerBound start.*/
            GetLowerBound: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(new Int32Array(0), System.Int32), 0));
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(["x"], System.String), 0));
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(["x", "y"], System.String), 0));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetLowerBound end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetUpperBoundWorks start.*/
            GetUpperBoundWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(-1, (System.Array.getLength(System.Array.init(new Int32Array(0), System.Int32), 0) - 1));
                Bridge.Test.NUnit.Assert.AreEqual(0, (System.Array.getLength(System.Array.init(["x"], System.String), 0) - 1));
                Bridge.Test.NUnit.Assert.AreEqual(1, (System.Array.getLength(System.Array.init(["x", "y"], System.String), 0) - 1));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetUpperBoundWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GettingValueByIndexWorks start.*/
            GettingValueByIndexWorks: function () {
                var $t, $t1;
                Bridge.Test.NUnit.Assert.AreEqual("x", ($t = System.Array.init(["x", "y"], System.String))[System.Array.index(0, $t)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", ($t1 = System.Array.init(["x", "y"], System.String))[System.Array.index(1, $t1)]);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GettingValueByIndexWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetValueWorks start.*/
            GetValueWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("x", Bridge.unbox(System.Array.get(System.Array.init(["x", "y"], System.String), 0)));
                Bridge.Test.NUnit.Assert.AreEqual("y", Bridge.unbox(System.Array.get(System.Array.init(["x", "y"], System.String), 1)));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.GetValueWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SettingValueByIndexWorks start.*/
            SettingValueByIndexWorks: function () {
                var arr = System.Array.init(2, null, System.String);
                arr[System.Array.index(0, arr)] = "x";
                arr[System.Array.index(1, arr)] = "y";
                Bridge.Test.NUnit.Assert.AreEqual("x", arr[System.Array.index(0, arr)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", arr[System.Array.index(1, arr)]);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SettingValueByIndexWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SetValueWorks start.*/
            SetValueWorks: function () {
                var arr = System.Array.init(2, null, System.String);
                System.Array.set(arr, "x", 0);
                System.Array.set(arr, "y", 1);
                Bridge.Test.NUnit.Assert.AreEqual("x", arr[System.Array.index(0, arr)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", arr[System.Array.index(1, arr)]);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SetValueWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWorks start.*/
            ForeachWorks: function () {
                var $t;
                var result = "";
                $t = Bridge.getEnumerator(System.Array.init(["x", "y"], System.String));
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        result = (result || "") + (s || "");
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                Bridge.Test.NUnit.Assert.AreEqual("xy", result);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.CloneWorks start.*/
            CloneWorks: function () {
                var arr = System.Array.init(["x", "y"], System.String);
                var arr2 = System.Array.clone(arr);
                Bridge.Test.NUnit.Assert.False(arr === arr2);
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.unbox(arr2), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.CloneWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ConcatWorks start.*/
            ConcatWorks: function () {
                var arr = System.Array.init(["a", "b"], System.String);
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b", "c"], System.String), System.Linq.Enumerable.from(arr, System.String).concat(System.Array.init(["c"], System.String)).ToArray(System.String));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b", "c", "d"], System.String), System.Linq.Enumerable.from(arr, System.String).concat(System.Array.init(["c", "d"], System.String)).ToArray(System.String));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b"], System.String), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ConcatWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ContainsWorks start.*/
            ContainsWorks: function () {
                var arr = System.Array.init(["x", "y"], System.String);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(arr, "x", System.String));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(arr, "z", System.String));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ContainsWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ContainsUsesEqualsMethod start.*/
            ContainsUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ContainsUsesEqualsMethod end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.AllWithArrayItemFilterCallbackWorks start.*/
            AllWithArrayItemFilterCallbackWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.Linq.Enumerable.from(System.Array.init(new Int32Array([1, 2, 3]), System.Int32), System.Int32).all($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f1));
                Bridge.Test.NUnit.Assert.False(System.Linq.Enumerable.from(System.Array.init(new Int32Array([1, 2, 3]), System.Int32), System.Int32).all($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f2));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.AllWithArrayItemFilterCallbackWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SliceWithoutEndWorks start.*/
            SliceWithoutEndWorks: function () {
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["c", "d"], System.String), System.Array.init(["a", "b", "c", "d"], System.String).slice(2));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["b", "c"], System.String), System.Array.init(["a", "b", "c", "d"], System.String).slice(1, 3));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SliceWithoutEndWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWithArrayItemCallbackWorks start.*/
            ForeachWithArrayItemCallbackWorks: function () {
                var result = "";
                System.Array.init(["a", "b", "c"], System.String).forEach(function (s) {
                        result = (result || "") + (s || "");
                    });
                Bridge.Test.NUnit.Assert.AreEqual("abc", result);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWithArrayItemCallbackWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithoutStartIndexWorks start.*/
            IndexOfWithoutStartIndexWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.init(["a", "b", "c", "b"], System.String).indexOf("b"));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithoutStartIndexWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithoutStartIndexUsesEqualsMethod start.*/
            IndexOfWithoutStartIndexUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithoutStartIndexUsesEqualsMethod end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithStartIndexWorks start.*/
            IndexOfWithStartIndexWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.init(["a", "b", "c", "b"], System.String).indexOf("b", 2));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IndexOfWithStartIndexWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.JoinWithoutDelimiterWorks start.*/
            JoinWithoutDelimiterWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("a,b,c,b", System.Array.init(["a", "b", "c", "b"], System.String).join(","));

                Bridge.Test.NUnit.Assert.AreEqual("a|b|c|b", System.Array.init(["a", "b", "c", "b"], System.String).join("|"));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.JoinWithoutDelimiterWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ReverseWorks start.*/
            ReverseWorks: function () {
                var arr = System.Array.init(new Int32Array([1, 3, 4, 1, 3, 2]), System.Int32);
                arr.reverse();
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([2, 3, 1, 4, 3, 1]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ReverseWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.AnyWithArrayItemFilterCallbackWorks start.*/
            AnyWithArrayItemFilterCallbackWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.Linq.Enumerable.from(System.Array.init(new Int32Array([1, 2, 3, 4]), System.Int32), System.Int32).any($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f3));
                Bridge.Test.NUnit.Assert.False(System.Linq.Enumerable.from(System.Array.init(new Int32Array([1, 2, 3, 4]), System.Int32), System.Int32).any($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f4));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.AnyWithArrayItemFilterCallbackWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch1Works start.*/
            BinarySearch1Works: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 3, 3, 4, 5]), System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 0, arr.length, 6) < 0);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch1Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch2Works start.*/
            BinarySearch2Works: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 3, 3, 4, 5]), System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.binarySearch(arr, 3, 2, 3));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 2, 2, 4) < 0);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch2Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch3Works start.*/
            BinarySearch3Works: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 3, 3, 4, 5]), System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.binarySearch(arr, 0, arr.length, 6, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch3Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch4Works start.*/
            BinarySearch4Works: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 3, 3, 4, 5]), System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.binarySearch(arr, 3, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 3, 2, 4, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()) < 0);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearch4Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearchExceptionsWorks start.*/
            BinarySearchExceptionsWorks: function () {
                var arr1 = null;
                var arr2 = System.Array.init(new Int32Array([1, 2, 3, 3, 4, 5]), System.Int32);

                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr1, 0, arr1.length, 1);
                });
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr2, -1, 1, 1);
                });
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr2, 1, 6, 1);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.BinarySearchExceptionsWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SortWithDefaultCompareWorks start.*/
            SortWithDefaultCompareWorks: function () {
                var arr = System.Array.init(new Int32Array([1, 6, 6, 4, 2]), System.Int32);
                arr.sort();
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([1, 2, 4, 6, 6]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SortWithDefaultCompareWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort1Works start.*/
            Sort1Works: function () {
                var arr = System.Array.init(new Int32Array([1, 6, 6, 4, 2]), System.Int32);
                System.Array.sort(arr);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([1, 2, 4, 6, 6]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort1Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort2Works start.*/
            Sort2Works: function () {
                var arr = System.Array.init(new Int32Array([1, 6, 6, 4, 2]), System.Int32);
                System.Array.sort(arr, 2, 3);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([1, 6, 2, 4, 6]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort2Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort3Works start.*/
            Sort3Works: function () {
                var arr = System.Array.init(new Int32Array([1, 2, 6, 3, 6, 7]), System.Int32);
                System.Array.sort(arr, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([1, 2, 6, 6, 3, 7]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort3Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort4Works start.*/
            Sort4Works: function () {
                var arr = System.Array.init(new Int32Array([1, 6, 6, 4, 2]), System.Int32);
                System.Array.sort(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(new Int32Array([6, 6, 4, 2, 1]), System.Int32), arr);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.Sort4Works end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SortExceptionsWorks start.*/
            SortExceptionsWorks: function () {
                var arr1 = null;

                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.sort(arr1);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.SortExceptionsWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWhenCastToIListWorks start.*/
            ForeachWhenCastToIListWorks: function () {
                var $t;
                var list = System.Array.init(["x", "y"], System.String);
                var result = "";
                $t = Bridge.getEnumerator(list, System.String);
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        result = (result || "") + (s || "");
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                Bridge.Test.NUnit.Assert.AreEqual("xy", result);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ForeachWhenCastToIListWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionCountWorks start.*/
            ICollectionCountWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.getCount(l, System.String));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionCountWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionAddWorks start.*/
            ICollectionAddWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.add(l, "a", System.String);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionAddWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionClearWorks start.*/
            ICollectionClearWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.clear(l, System.String);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionClearWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionContainsWorks start.*/
            ICollectionContainsWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(l, "y", System.String));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(l, "a", System.String));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionContainsWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionContainsUsesEqualsMethod start.*/
            ICollectionContainsUsesEqualsMethod: function () {
                var l = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionContainsUsesEqualsMethod end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionRemoveWorks start.*/
            ICollectionRemoveWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.remove(l, "y", System.String);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.ICollectionRemoveWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexingWorks start.*/
            IListIndexingWorks: function () {
                var $t;
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual("y", System.Array.getItem(l, 1, System.String));
                System.Array.setItem(l, 1, "a", System.String);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(["x", "a", "z"], System.String), ($t = System.String, System.Linq.Enumerable.from(l, $t).ToArray($t)));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexingWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexOfWorks start.*/
            IListIndexOfWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOf(l, "y", 0, null, System.String));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOf(l, "a", 0, null, System.String));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexOfWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexOfUsesEqualsMethod start.*/
            IListIndexOfUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListIndexOfUsesEqualsMethod end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListInsertWorks start.*/
            IListInsertWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.insert(l, 1, "a", System.String);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListInsertWorks end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListRemoveAtWorks start.*/
            IListRemoveAtWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.removeAt(l, 1, System.String);
                });
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772.IListRemoveAtWorks end.*/


        }
    });

    Bridge.ns("Bridge.ClientTest.Batch2.BridgeIssues.N772", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772, {
        f1: function (x) {
            return x > 0;
        },
        f2: function (x) {
            return x > 1;
        },
        f3: function (i) {
            return i > 1;
        },
        f4: function (i) {
            return i > 5;
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N772 end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772.C", {
        $kind: "nested class",
        fields: {
            i: 0
        },
        ctors: {
            ctor: function (i) {
                this.$initialize();
                this.i = i;
            }
        },
        methods: {
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C.equals start.*/
            equals: function (o) {
                return Bridge.is(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C) && this.i === Bridge.cast(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C).i;
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C.equals end.*/

            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C.getHashCode start.*/
            getHashCode: function () {
                return this.i;
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C.getHashCode end.*/


        },
        overloads: {
            "Equals(object)": "equals",
            "GetHashCode()": "getHashCode"
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N772+C end.*/

    /*Bridge.ClientTest.Batch2.BridgeIssues.N772+TestReverseComparer start.*/
    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer", {
        inherits: [System.Collections.Generic.IComparer$1(System.Int32)],
        $kind: "nested class",
        alias: ["compare", ["System$Collections$Generic$IComparer$1$System$Int32$compare", "System$Collections$Generic$IComparer$1$compare"]],
        methods: {
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+TestReverseComparer.compare start.*/
            compare: function (x, y) {
                return x === y ? 0 : (x > y ? -1 : 1);
            },
            /*Bridge.ClientTest.Batch2.BridgeIssues.N772+TestReverseComparer.compare end.*/


        },
        overloads: {
            "Compare(int, int)": "compare"
        }
    });
    /*Bridge.ClientTest.Batch2.BridgeIssues.N772+TestReverseComparer end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests", {
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass:static start.*/
                Bypass: function (o) {
                    return o;
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests", {
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestInt32:static start.*/
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.Int32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max2, ((max2 = Bridge.Int.check(max2 + 1, System.Int32))));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.mul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.Int32), System.Int32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = Bridge.Int.check(max3 + 1, System.Int32)))), System.Int32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.Int32))), System.Int32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max, 1), System.Int32));
                    }, "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.Int32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, ((min1 = Bridge.Int.check(min1 - 1, System.Int32))));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(-min, System.Int32);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.Int32), System.Int32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = Bridge.Int.check(min3 - 1, System.Int32)))), System.Int32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.Int32))), System.Int32));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(-min, System.Int32), System.Int32));
                    }, "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestUInt32:static start.*/
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.UInt32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max1, ((max1 = Bridge.Int.check(max1 + 1, System.UInt32))));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.umul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.UInt32), System.UInt32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = Bridge.Int.check(max3 + 1, System.UInt32)))), System.UInt32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max, 1), System.UInt32));
                    }, "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.UInt32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, ((min1 = Bridge.Int.check(min1 - 1, System.UInt32))));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.UInt32), System.UInt32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = Bridge.Int.check(min3 - 1, System.UInt32)))), System.UInt32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestUInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestLong:static start.*/
                TestLong: function () {
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.Int64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.Int64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.Int64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.neg(1);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg(1));
                    }, "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestLong:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestULong:static start.*/
                TestULong: function () {
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.UInt64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.UInt64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.UInt64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests.TestULong:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedInsideUncheckedTests end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests", {
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestInt32:static start.*/
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.Int32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max2, ((max2 = Bridge.Int.check(max2 + 1, System.Int32))));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.mul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.Int32), System.Int32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = Bridge.Int.check(max3 + 1, System.Int32)))), System.Int32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.Int32))), System.Int32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max, 1), System.Int32));
                    }, "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.Int32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, ((min1 = Bridge.Int.check(min1 - 1, System.Int32))));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(-min, System.Int32);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.Int32), System.Int32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = Bridge.Int.check(min3 - 1, System.Int32)))), System.Int32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.Int32))), System.Int32));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(-min, System.Int32), System.Int32));
                    }, "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestUInt32:static start.*/
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.UInt32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max1, ((max1 = Bridge.Int.check(max1 + 1, System.UInt32))));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.umul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.UInt32), System.UInt32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = Bridge.Int.check(max3 + 1, System.UInt32)))), System.UInt32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max, 1), System.UInt32));
                    }, "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.UInt32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, ((min1 = Bridge.Int.check(min1 - 1, System.UInt32))));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.UInt32), System.UInt32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = Bridge.Int.check(min3 - 1, System.UInt32)))), System.UInt32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestUInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestLong:static start.*/
                TestLong: function () {
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.Int64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.Int64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.Int64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.neg(1);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg(1));
                    }, "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestLong:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestULong:static start.*/
                TestULong: function () {
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.UInt64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.UInt64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.UInt64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests.TestULong:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+CheckedTests end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests", {
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestInt32:static start.*/
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) | 0;
                    var rMax2 = Bridge.identity(max1, ((max1 = (max1 + 1) | 0)));
                    var rMax3 = ((max2 = (max2 + 1) | 0));
                    var rMax4 = Bridge.Int.mul(2, max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = (max3 + 1) | 0))), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, ((min1 = (min1 - 1) | 0)));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = (min3 - 1) | 0))), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestUInt32:static start.*/
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) >>> 0;
                    var rMax2 = Bridge.identity(max1, ((max1 = (max1 + 1) >>> 0)));
                    var rMax3 = ((max2 = (max2 + 1) >>> 0));
                    var rMax4 = Bridge.Int.umul(2, max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = (max3 + 1) >>> 0))), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, ((min1 = (min1 - 1) >>> 0)));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = (min3 - 1) >>> 0))), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestUInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestLong:static start.*/
                TestLong: function () {
                    var $t;
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.Int64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.Int64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestLong:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestULong:static start.*/
                TestULong: function () {
                    var $t;
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.UInt64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.UInt64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests.TestULong:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedInsideCheckedTests end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests", {
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestInt32:static start.*/
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) | 0;
                    var rMax2 = Bridge.identity(max1, ((max1 = (max1 + 1) | 0)));
                    var rMax3 = ((max2 = (max2 + 1) | 0));
                    var rMax4 = Bridge.Int.mul(2, max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = (max3 + 1) | 0))), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, ((min1 = (min1 - 1) | 0)));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = (min3 - 1) | 0))), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestUInt32:static start.*/
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) >>> 0;
                    var rMax2 = Bridge.identity(max1, ((max1 = (max1 + 1) >>> 0)));
                    var rMax3 = ((max2 = (max2 + 1) >>> 0));
                    var rMax4 = Bridge.Int.umul(2, max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = (max3 + 1) >>> 0))), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, ((min1 = (min1 - 1) >>> 0)));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = (min3 - 1) >>> 0))), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestUInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestLong:static start.*/
                TestLong: function () {
                    var $t;
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.Int64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.Int64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestLong:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestULong:static start.*/
                TestULong: function () {
                    var $t;
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.UInt64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.UInt64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests.TestULong:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+UncheckedTests end.*/

    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests start.*/
    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests", {
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestInt32:static start.*/
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = Bridge.identity(max1, ((max1 = max1 + 1)));
                    var rMax3 = ((max2 = max2 + 1));
                    var rMax4 = 2 * max;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = max3 + 1))), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, ((min1 = min1 - 1)));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = -min;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = min3 - 1))), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(-min, System.Int32)), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestUInt32:static start.*/
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = Bridge.identity(max1, ((max1 = max1 + 1)));
                    var rMax3 = ((max2 = max2 + 1));
                    var rMax4 = 2 * max;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("8589934590", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, ((max3 = max3 + 1))), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("8589934590", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, ((min1 = min1 - 1)));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, ((min3 = min3 - 1))), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestUInt32:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestLong:static start.*/
                TestLong: function () {
                    var $t;
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.Int64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.Int64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestLong:static end.*/

                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestULong:static start.*/
                TestULong: function () {
                    var $t;
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max.add(System.UInt64(1));
                    var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                    var rMax3 = (max2 = max2.inc());
                    var rMax4 = System.UInt64(2).mul(max);
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                },
                /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests.TestULong:static end.*/


            }
        }
    });
    /*Bridge.ClientTest.Batch2.CheckedUncheckedTests+WithNoUncheckedKeywordTests end.*/

    /*Bridge.ClientTest.Batch2.Constants start.*/
    Bridge.define("Bridge.ClientTest.Batch2.Constants", {
        statics: {
            fields: {
                BATCH_NAME: null,
                MODULE_ISSUES: null,
                MODULE_CHECKED_UNCKECKED: null
            },
            ctors: {
                init: function () {
                    this.BATCH_NAME = "Batch2";
                    this.MODULE_ISSUES = "Issues2";
                    this.MODULE_CHECKED_UNCKECKED = "Checked/Unckecked";
                }
            }
        }
    });
    /*Bridge.ClientTest.Batch2.Constants end.*/
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjMwNzUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7OztvQkFXWUEsWUFBZUE7b0JBQ2ZBLDhCQUFZQTtvQkFDWkEsK0JBQWFBOzs7Ozs7Ozs7Ozs7Ozs7O2dCQ0ZiQTtnQkFDQUEsVUFBaUJBO2dCQUNqQkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDJDQUF5QkEsMkNBQU9BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUMxQkEsZ0RBQThCQSw2Q0FBTUE7Z0JBQ3BDQSxnREFBOEJBOztnQkFFOUJBO2dCQUNBQTtnQkFDQUEsU0FBWUE7O2dCQUVaQSw0Q0FBMEJBLGdDQUFNQTtnQkFDaENBLDRDQUEwQkEsNkNBQU1BO2dCQUNoQ0EsNENBQTBCQTtnQkFFMUJBLDRDQUEwQkE7Z0JBRTFCQSxnREFBOEJBLGdDQUFNQTtnQkFDcENBLGdEQUE4QkEsZ0RBQU1BO2dCQUNwQ0EsZ0RBQThCQTtnQkFDOUJBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFVQTs7Z0JBRVZBLDJDQUF5QkEsbUNBQU1BO2dCQUMvQkEsMkNBQXlCQSxpSUFBTUE7Z0JBQy9CQSwyQ0FBeUJBO2dCQUN6QkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSxnREFBOEJBLGlJQUFNQTtnQkFDcENBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLHFDQUFRQTs7Ozs7Ozs7Ozs7Ozs7O29CQ2xDakNBLFFBQVFBOztvQkFFUkEsU0FB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QUFPQTtvQkFDekVBLHlGQUFpRUEsc0RBQU9BLENBQUVBO29CQUMxRUEsMEZBQWtFQSxzREFBT0EsQUFBQ0E7Ozs7Ozs7b0JBTTFFQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEscUJBQUlBO29CQUNoQkEsdUVBQStDQTtvQkFDL0NBLDBGQUFrRUE7b0JBQ2xFQSx1RUFBK0NBO29CQUMvQ0EsMEZBQWtFQTs7b0JBRWxFQSx1RUFBK0NBLHNEQUFPQTtvQkFDdERBLDBGQUFrRUEsc0RBQU9BO29CQUN6RUEsdUVBQStDQSxzREFBT0EsQ0FBRUE7b0JBQ3hEQSwwRkFBa0VBLHNEQUFPQSxxQkFBSUE7O29CQUU3RUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLDBGQUFrRUE7b0JBQ2xFQSx1RUFBK0NBO29CQUMvQ0EsMEZBQWtFQTs7b0JBRWxFQSwwRkFBa0VBLHNEQUFPQTtvQkFDekVBLHVFQUErQ0Esc0RBQU9BO29CQUN0REEsMEZBQWtFQSxzREFBT0EsQ0FBRUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxyXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTM4NSAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgQnJpZGdlMTM4NVxyXG4gICAge1xyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SXNUeXBlZEFycmF5Rm9yQnl0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QgdmFsdWUgPSBuZXcgYnl0ZVszXTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFsdWUgaXMgYnl0ZVtdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhbHVlIGlzIGludFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXHJcbntcclxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXHJcbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxNDk5IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgIHB1YmxpYyBjbGFzcyBCcmlkZ2UxNDk5XHJcbiAgICB7XHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgVGVzdE9iamVjdFN0cmluZ0NvYWxlc2NlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqZWN0IGRlZiA9IDE7XHJcbiAgICAgICAgICAgIEJyaWRnZTE0OTkgYXBwID0gbnVsbDtcclxuICAgICAgICAgICAgb2JqZWN0IG8xID0gXCJcIjtcclxuICAgICAgICAgICAgb2JqZWN0IG8yID0gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIG9iamVjdCBvMyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgYXBwID8/IGRlZik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBvMSA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBvMSA/PyBcInRlc3RcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbzMgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG8zID8/IFwidGVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHN0cmluZyBzMSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHN0cmluZyBzMiA9IFwidGVzdFwiO1xyXG4gICAgICAgICAgICBzdHJpbmcgczMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IHMyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IFwidGVzdFwiKTtcclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTYyXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBcIlwiID8/IFwidGVzdFwiKTtcclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTYyXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gczIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBcInRlc3RcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbnVsbCA/PyBcInRlc3RcIik7XHJcblxyXG4gICAgICAgICAgICBpbnQ/IGkxID0gMDtcclxuICAgICAgICAgICAgaW50PyBpMiA9IDE7XHJcbiAgICAgICAgICAgIGludD8gaTMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IGkyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IDEpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgaTMgPz8gaTIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIGkzID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGkzID8/IDEpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgbnVsbCA/PyBpMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcblxyXG51c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICAvLyBCcmlkZ2VbIzExMjJdXHJcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxyXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTEyMiAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgTjExMjJcclxuICAgIHtcclxuICAgICAgICBbVGVzdChFeHBlY3RlZENvdW50ID0gNCldXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RDbGlwcGluZ0luSmF2YVNjcmlwdE92ZXJmbG93TW9kZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IGRvdWJsZS5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciB5MSA9IChpbnQpTWF0aC5GbG9vcih4IC8gMC4yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB5MSwgXCJpbnRcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgeTIgPSAodWludClNYXRoLkZsb29yKHggLyAwLjIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHkyLCBcInVpbnRcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgejEgPSAobG9uZylNYXRoLkZsb29yKHggLyAwLjIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHoxLCBcImxvbmdcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgejIgPSAodWxvbmcpTWF0aC5GbG9vcih4IC8gMC4yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB6MiwgXCJ1bG9uZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSA0KV1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludGVnZXJEaXZpc2lvbkluSmF2YVNjcmlwdE92ZXJmbG93TW9kZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IDEuMTtcclxuXHJcbiAgICAgICAgICAgIGludCB5MSA9IChpbnQpKDEgLyB4KTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHkxLlRvU3RyaW5nKCksIFwiaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgdWludCB5MiA9ICh1aW50KSgxIC8geCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB5Mi5Ub1N0cmluZygpLCBcInVpbnRcIik7XHJcblxyXG4gICAgICAgICAgICBsb25nIHoxID0gKGxvbmcpKDEgLyB4KTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHoxLlRvU3RyaW5nKCksIFwibG9uZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHVsb25nIHoyID0gKHVsb25nKSgxIC8geCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB6Mi5Ub1N0cmluZygpLCBcInVsb25nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcclxue1xyXG4gICAgLy8gQnJpZGdlWyMxMjA0XVxyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzEyMDQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgcHVibGljIGNsYXNzIE4xMjA0XHJcbiAgICB7XHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RTdHJpY3ROdWxsQ2hlY2tzT3B0aW9uRm9yTnVsbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqZWN0IHRlbXAgPSBuZXcgb2JqZWN0KCk7XHJcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wMSA9IHRlbXA7XHJcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wMiA9IG5ldyBvYmplY3QoKTtcclxuICAgICAgICAgICAgbG9uZyBsID0gNUw7XHJcbiAgICAgICAgICAgIG9iamVjdCBvbCA9IDVMO1xyXG4gICAgICAgICAgICBvYmplY3Qgb2kgPSA1O1xyXG4gICAgICAgICAgICBvYmplY3QgdmFyTnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIG9iamVjdCB2YXJVbmRlZmluZWQgPSB0ZW1wW1widGhpcy1wcm9wLXVuZGVmaW5lZFwiXTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJOdWxsID09IHZhclVuZGVmaW5lZCwgXCJ2YXJOdWxsID09IHZhclVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFyTnVsbCA9PSBudWxsLCBcInZhck51bGwgPT0gbnVsbFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhclVuZGVmaW5lZCA9PSBudWxsLCBcInZhclVuZGVmaW5lZCA9PSBudWxsXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTY3JpcHQuVW5kZWZpbmVkID09IHZhclVuZGVmaW5lZCwgXCJTY3JpcHQuVW5kZWZpbmVkID09IHZhclVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUodGVtcCA9PSB0ZW1wMSwgXCJ0ZW1wID09IHRlbXAxXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodGVtcCA9PSB0ZW1wMiwgXCJ0ZW1wID09IHRlbXAyXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsID09IDUsIFwibCA9PSA1XCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2Uob2wgPT0gb2ksIFwib2wgPT0gb2lcIik7XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyVW5kZWZpbmVkID09IHZhck51bGwsIFwidmFyVW5kZWZpbmVkID09IHZhck51bGxcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKG51bGwgPT0gdmFyTnVsbCwgXCJudWxsID09IHZhck51bGxcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShudWxsID09IHZhclVuZGVmaW5lZCwgXCJudWxsID09IHZhclVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFyVW5kZWZpbmVkID09IFNjcmlwdC5VbmRlZmluZWQsIFwidmFyVW5kZWZpbmVkID09IFNjcmlwdC5VbmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHRlbXAxID09IHRlbXAsIFwidGVtcDEgPT0gdGVtcFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHRlbXAyID09IHRlbXAsIFwidGVtcDIgPT0gdGVtcFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoNSA9PSBsLCBcIjUgPT0gbFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG9pID09IG9sLCBcIm9pID09IG9sXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcclxue1xyXG4gICAgLy8gQnJpZGdlWyMzMDc1XVxyXG4gICAgLy8gcmVwcm9kdWNpYWJsZSBpZiBzb3VyY2UgbWFwIGdlbmVyYXRpb24gaXMgZW5hYmxlZFxyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzMwNzUgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgcHVibGljIGNsYXNzIE4zMDc1XHJcbiAgICB7XHJcbiAgICAgICAgW0VudW0oRW1pdC5TdHJpbmdOYW1lUHJlc2VydmVDYXNlKV1cclxuICAgICAgICBwdWJsaWMgZW51bSBTb21lVHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXBwbGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZW1wbGF0ZShcInswOnJhd31cIildXHJcbiAgICAgICAgcHVibGljIGV4dGVybiBzdGF0aWMgaW50IFRlc3QoU29tZVR5cGUgZWxlbWVudFR5cGUpO1xyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBUZXN0UmF3TW9kaWZpZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIEFwcGxlID0gMTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKEFwcGxlLCBUZXN0KFNvbWVUeXBlLkFwcGxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICAvLyBCcmlkZ2VbIzc3Ml1cclxuICAgIC8vIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvbiBpcyB0cnVlIGluIHRoaXMgcHJvamVjdFxyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzc3MiAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgTjc3MlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgY2xhc3MgQ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGludCBpO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIEMoaW50IGkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEVxdWFscyhvYmplY3QgbylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gaXMgQyAmJiBpID09ICgoQylvKS5pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IEdldEhhc2hDb2RlKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFR5cGVQcm9wZXJ0aWVzQXJlQ29ycmVjdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QgYXJyID0gbmV3W10geyAxLCAyLCAzIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBBcnJheSwgXCJpcyBBcnJheSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIGludFtdLCBcImlzIGludFtdIHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNvbGxlY3Rpb24sIFwiaXMgSUNvbGxlY3Rpb24gc2hvdWxkIGJlIHRydWVcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJRW51bWVyYWJsZSwgXCJpcyBJRW51bWVyYWJsZSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDbG9uZWFibGUsIFwiaXMgSUNsb25lYWJsZSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDb2xsZWN0aW9uPGludD4sIFwiaXMgSUNvbGxlY3Rpb248aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElFbnVtZXJhYmxlPGludD4sIFwiaXMgSUVudW1lcmFibGU8aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElMaXN0PGludD4sIFwiaXMgSUxpc3Q8aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIExlbmd0aFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkxlbmd0aCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uTGVuZ3RoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uTGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJhbmtJc09uZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3IGludFswXS5SYW5rKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldExlbmd0aFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkdldExlbmd0aCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uR2V0TGVuZ3RoKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TGVuZ3RoKDApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldExvd2VyQm91bmQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TG93ZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiIH0uR2V0TG93ZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldExvd2VyQm91bmQoMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0VXBwZXJCb3VuZFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgbmV3IGludFswXS5HZXRVcHBlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VXBwZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBHZXR0aW5nVmFsdWVCeUluZGV4V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9WzBdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9WzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldFZhbHVlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldHRpbmdWYWx1ZUJ5SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcclxuICAgICAgICAgICAgYXJyWzBdID0gXCJ4XCI7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IFwieVwiO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInlcIiwgYXJyWzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFZhbHVlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ldyBzdHJpbmdbMl07XHJcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInhcIiwgMCk7XHJcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInlcIiwgMSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInhcIiwgYXJyWzBdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBhcnJbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcyBpbiBuZXdbXSB7IFwieFwiLCBcInlcIiB9KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4eVwiLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xvbmVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcclxuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuQ2xvbmUoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGFyciA9PSBhcnIyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKGFycjIsIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb25jYXRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcImFcIiwgXCJiXCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db25jYXQ8c3RyaW5nPihhcnIsbmV3W10geyBcImNcIiB9KS5Ub0FycmF5KCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfSwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db25jYXQ8c3RyaW5nPihhcnIsbmV3W10geyBcImNcIiwgXCJkXCIgfSkuVG9BcnJheSgpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29udGFpbnNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInhcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInpcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29udGFpbnNVc2VzRXF1YWxzTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENbXSBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxONzcyLkM+KGFycixuZXcgQygyKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxONzcyLkM+KGFycixuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWxsV2l0aEFycmF5SXRlbUZpbHRlckNhbGxiYWNrV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5BbGw8aW50PihuZXdbXSB7IDEsIDIsIDMgfSwoRnVuYzxpbnQsYm9vbD4pKHggPT4geCA+IDApKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChGdW5jPGludCxib29sPikoeCA9PiB4ID4gMSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNsaWNlV2l0aG91dEVuZFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImNcIiwgXCJkXCIgfSwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiB9LlNsaWNlKDIpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYlwiLCBcImNcIiB9LCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiIH0uU2xpY2UoMSwgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdpdGhBcnJheUl0ZW1DYWxsYmFja1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xyXG5TeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkZvckVhY2g8c3RyaW5nPiggICAgICAgICAgICBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwoQWN0aW9uPHN0cmluZz4pKHMgPT4gcmVzdWx0ICs9IHMpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYWJjXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbmRleE9mV2l0aG91dFN0YXJ0SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkluZGV4T2YoXCJiXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRob3V0U3RhcnRJbmRleFVzZXNFcXVhbHNNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxONzcyLkM+KGFyciwgbmV3IEMoMikpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBBcnJheS5JbmRleE9mPE43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhTdGFydEluZGV4V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiLCAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBKb2luV2l0aG91dERlbGltaXRlcldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImEsYixjLGJcIiwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkpvaW4oXCIsXCIpKTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImF8YnxjfGJcIiwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkpvaW4oXCJ8XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJldmVyc2VXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAzLCA0LCAxLCAzLCAyIH07XHJcbiAgICAgICAgICAgIGFyci5SZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDIsIDMsIDEsIDQsIDMsIDEgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFueVdpdGhBcnJheUl0ZW1GaWx0ZXJDYWxsYmFja1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQW55PGludD4obmV3W10geyAxLCAyLCAzLCA0IH0sKEZ1bmM8aW50LGJvb2w+KShpID0+IGkgPiAxKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Bbnk8aW50PihuZXdbXSB7IDEsIDIsIDMsIDQgfSwoRnVuYzxpbnQsYm9vbD4pKGkgPT4gaSA+IDUpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2gxV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMykpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDYpIDwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2gyV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgMiwgMykpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDIsIDIsIDQpIDwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGNsYXNzIFRlc3RSZXZlcnNlQ29tcGFyZXIgOiBJQ29tcGFyZXI8aW50PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIGludCBDb21wYXJlKGludCB4LCBpbnQgeSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT0geSA/IDAgOiAoeCA+IHkgPyAtMSA6IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2gzV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgNiwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoNFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIDIsIDMsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCA0LCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSA8IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoRXhjZXB0aW9uc1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludFtdIGFycjEgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgYXJyMiA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoQWN0aW9uKSgoKSA9PiB7IEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFycjEsIDEpOyB9KSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKEFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAtMSwgMSwgMSk7IH0pKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoQWN0aW9uKSgoKSA9PiB7IEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFycjIsIDEsIDYsIDEpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0V2l0aERlZmF1bHRDb21wYXJlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xyXG4gICAgICAgICAgICBhcnIuSnNTb3J0KCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDQsIDYsIDYgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQxV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xyXG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgMiwgNCwgNiwgNiB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydDJXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XHJcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIDIsIDMpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCA2LCAyLCA0LCA2IH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0M1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDYsIDMsIDYsIDcgfTtcclxuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgMiwgMywgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDYsIDYsIDMsIDcgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQ0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xyXG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgNiwgNiwgNCwgMiwgMSB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydEV4Y2VwdGlvbnNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRbXSBhcnIxID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKEFjdGlvbikoKCkgPT4geyBBcnJheS5Tb3J0PGludD4oYXJyMSk7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvcmVhY2hXaGVuQ2FzdFRvSUxpc3RXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGxpc3QgPSBuZXdbXSB7IFwieFwiLCBcInlcIiB9O1xyXG4gICAgICAgICAgICBzdHJpbmcgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHMgaW4gbGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieHlcIiwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ291bnRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIGwuQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25BZGRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgbC5BZGQoXCJhXCIpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNsZWFyV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IGwuQ2xlYXIoKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db250YWluc1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsLkNvbnRhaW5zKFwieVwiKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShsLkNvbnRhaW5zKFwiYVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNvbnRhaW5zVXNlc0VxdWFsc01ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxDPiBsID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwuQ29udGFpbnMobmV3IEMoMikpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGwuQ29udGFpbnMobmV3IEMoNCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uUmVtb3ZlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlKFwieVwiKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RJbmRleGluZ1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGxbMV0pO1xyXG4gICAgICAgICAgICBsWzFdID0gXCJhXCI7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IFwieFwiLCBcImFcIiwgXCJ6XCIgfSwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0FycmF5PHN0cmluZz4obCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RJbmRleE9mV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBsLkluZGV4T2YoXCJ5XCIpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBsLkluZGV4T2YoXCJhXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZlVzZXNFcXVhbHNNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxONzcyLkM+KGFyciwgbmV3IEMoMikpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBBcnJheS5JbmRleE9mPE43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RJbnNlcnRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgbC5JbnNlcnQoMSwgXCJhXCIpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdFJlbW92ZUF0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlQXQoMSk7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSAxMCldXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVc2VDYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVGhlc2UgYXJyYXlzIGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cclxuICAgICAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBieXRlWzFdO1xyXG4gICAgICAgICAgICB2YXIgc2J5dGVBcnJheSA9IG5ldyBzYnl0ZVsyXTtcclxuICAgICAgICAgICAgdmFyIHNob3J0QXJyYXkgPSBuZXcgc2hvcnRbM107XHJcbiAgICAgICAgICAgIHZhciB1c2hvcnRBcnJheSA9IG5ldyB1c2hvcnRbNF07XHJcbiAgICAgICAgICAgIHZhciBpbnRBcnJheSA9IG5ldyBpbnRbNV07XHJcbiAgICAgICAgICAgIHZhciB1aW50QXJyYXkgPSBuZXcgdWludFs2XTtcclxuICAgICAgICAgICAgdmFyIGZsb2F0QXJyYXkgPSBuZXcgZmxvYXRbN107XHJcbiAgICAgICAgICAgIHZhciBkb3VibGVBcnJheSA9IG5ldyBkb3VibGVbOF07XHJcblxyXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkbyBub3QgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG4gICAgICAgICAgICB2YXIgc3RyaW5nQXJyYXkgPSBuZXcgc3RyaW5nWzldO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbEFycmF5ID0gbmV3IGRlY2ltYWxbMTBdO1xyXG5cclxuICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gMTtcclxuICAgICAgICAgICAgc2J5dGVBcnJheVswXSA9IDI7XHJcbiAgICAgICAgICAgIHNob3J0QXJyYXlbMF0gPSAzO1xyXG4gICAgICAgICAgICB1c2hvcnRBcnJheVswXSA9IDQ7XHJcbiAgICAgICAgICAgIGludEFycmF5WzBdID0gNTtcclxuICAgICAgICAgICAgdWludEFycmF5WzBdID0gNjtcclxuICAgICAgICAgICAgZmxvYXRBcnJheVswXSA9IDc7XHJcbiAgICAgICAgICAgIGRvdWJsZUFycmF5WzBdID0gODtcclxuXHJcbiAgICAgICAgICAgIHN0cmluZ0FycmF5WzBdID0gXCI5XCI7XHJcbiAgICAgICAgICAgIGRlY2ltYWxBcnJheVswXSA9IDEwbTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBieXRlQXJyYXlbMF0sIFwiZ2V0IGJ5dGVBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIHNieXRlQXJyYXlbMF0sIFwiZ2V0IHNieXRlQXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBzaG9ydEFycmF5WzBdLCBcImdldCBzaG9ydEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNCwgdXNob3J0QXJyYXlbMF0sIFwiZ2V0IHVzaG9ydEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNSwgaW50QXJyYXlbMF0sIFwiZ2V0IGludEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNiwgdWludEFycmF5WzBdLCBcImdldCB1aW50QXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg3LCBmbG9hdEFycmF5WzBdLCBcImdldCBmbG9hdEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoOCwgZG91YmxlQXJyYXlbMF0sIFwiZ2V0IGRvdWJsZUFycmF5WzBdXCIpO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiOVwiLCBzdHJpbmdBcnJheVswXSwgXCJnZXQgc3RyaW5nQXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxMG0sIGRlY2ltYWxBcnJheVswXSwgXCJnZXQgZGVjaW1hbEFycmF5WzBdXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG51c2luZyBCcmlkZ2UuQ2xpZW50VGVzdEhlbHBlcjtcclxuXHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDJcclxue1xyXG4gICAgLy8gQnJpZGdlWyMxMDkyXVxyXG4gICAgLy8gXCJvdmVyZmxvd01vZGVcIjogIFwiSmF2YXNjcmlwdFwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG4gICAgcHVibGljIGNsYXNzIENoZWNrZWRVbmNoZWNrZWRUZXN0c1xyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG9iamVjdCBCeXBhc3Mob2JqZWN0IG8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIkNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MisrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDM7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxyXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiQ2hlY2tlZEluc2lkZVVuY2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICAgICAgcHVibGljIGNsYXNzIENoZWNrZWRJbnNpZGVVbmNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDIrKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IC1taW47IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChBY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKEFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXHJcbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJVbmNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBVbmNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxyXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiVW5jaGVja2VkSW5zaWRlQ2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICAgICAgcHVibGljIGNsYXNzIFVuY2hlY2tlZEluc2lkZUNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIldpdGhOb1VuY2hlY2tlZEtleXdvcmQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBXaXRoTm9VbmNoZWNrZWRLZXl3b3JkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0OFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDhcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDlcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDlcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDlcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTZcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NlwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjg1ODk5MzQ1OTBcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk2XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NlwiLCBCeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiODU4OTkzNDU5MFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMVwiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0xXCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
