/**
 * @compiler Bridge.NET 17.9.8-luna
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch2", function ($asm, globals) {
    

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner", {
        /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Main:static start.*/
        main: function Main () {
            Bridge.Test.Runtime.ContextHelper.Init();
            QUnit.module("Checked/Unckecked");
            QUnit.test("CheckedInsideUnchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestUInt32);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestLong);
            QUnit.test("CheckedInsideUnchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests.TestULong);
            QUnit.test("Checked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestInt32);
            QUnit.test("Checked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestUInt32);
            QUnit.test("Checked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestLong);
            QUnit.test("Checked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests.TestULong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestUInt32);
            QUnit.test("UncheckedInsideChecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestLong);
            QUnit.test("UncheckedInsideChecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests.TestULong);
            QUnit.test("Unchecked - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestInt32);
            QUnit.test("Unchecked - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestUInt32);
            QUnit.test("Unchecked - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestLong);
            QUnit.test("Unchecked - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests.TestULong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestUInt32", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestUInt32);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestLong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestLong);
            QUnit.test("WithNoUncheckedKeyword - Batch2 TestULong", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests.TestULong);
            QUnit.module("Issues2");
            QUnit.test("#1385 - Batch2 TestIsTypedArrayForByte", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385.TestIsTypedArrayForByte);
            QUnit.test("#1499 - Batch2 TestObjectStringCoalesceWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499.TestObjectStringCoalesceWorks);
            QUnit.test("#1122 - Batch2 TestClippingInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.TestClippingInJavaScriptOverflowMode);
            QUnit.test("#1122 - Batch2 TestIntegerDivisionInJavaScriptOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122.TestIntegerDivisionInJavaScriptOverflowMode);
            QUnit.test("#1204 - Batch2 TestStrictNullChecksOptionForNulls", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204.TestStrictNullChecksOptionForNulls);
            QUnit.test("#3075 - Batch2 TestRawModifier", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N3075.TestRawModifier);
            QUnit.test("#772 - Batch2 TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.TypePropertiesAreCorrect);
            QUnit.test("#772 - Batch2 LengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.LengthWorks);
            QUnit.test("#772 - Batch2 RankIsOne", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.RankIsOne);
            QUnit.test("#772 - Batch2 GetLengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetLengthWorks);
            QUnit.test("#772 - Batch2 GetLowerBound", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetLowerBound);
            QUnit.test("#772 - Batch2 GetUpperBoundWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetUpperBoundWorks);
            QUnit.test("#772 - Batch2 GettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GettingValueByIndexWorks);
            QUnit.test("#772 - Batch2 GetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.GetValueWorks);
            QUnit.test("#772 - Batch2 SettingValueByIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SettingValueByIndexWorks);
            QUnit.test("#772 - Batch2 SetValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SetValueWorks);
            QUnit.test("#772 - Batch2 ForeachWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWorks);
            QUnit.test("#772 - Batch2 CloneWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.CloneWorks);
            QUnit.test("#772 - Batch2 ConcatWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ConcatWorks);
            QUnit.test("#772 - Batch2 ContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ContainsWorks);
            QUnit.test("#772 - Batch2 ContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ContainsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 AllWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.AllWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 SliceWithoutEndWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SliceWithoutEndWorks);
            QUnit.test("#772 - Batch2 ForeachWithArrayItemCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWithArrayItemCallbackWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithoutStartIndexWorks);
            QUnit.test("#772 - Batch2 IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IndexOfWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IndexOfWithStartIndexWorks);
            QUnit.test("#772 - Batch2 JoinWithoutDelimiterWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.JoinWithoutDelimiterWorks);
            QUnit.test("#772 - Batch2 ReverseWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ReverseWorks);
            QUnit.test("#772 - Batch2 AnyWithArrayItemFilterCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.AnyWithArrayItemFilterCallbackWorks);
            QUnit.test("#772 - Batch2 BinarySearch1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch1Works);
            QUnit.test("#772 - Batch2 BinarySearch2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch2Works);
            QUnit.test("#772 - Batch2 BinarySearch3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch3Works);
            QUnit.test("#772 - Batch2 BinarySearch4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearch4Works);
            QUnit.test("#772 - Batch2 BinarySearchExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.BinarySearchExceptionsWorks);
            QUnit.test("#772 - Batch2 SortWithDefaultCompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SortWithDefaultCompareWorks);
            QUnit.test("#772 - Batch2 Sort1Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort1Works);
            QUnit.test("#772 - Batch2 Sort2Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort2Works);
            QUnit.test("#772 - Batch2 Sort3Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort3Works);
            QUnit.test("#772 - Batch2 Sort4Works", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.Sort4Works);
            QUnit.test("#772 - Batch2 SortExceptionsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.SortExceptionsWorks);
            QUnit.test("#772 - Batch2 ForeachWhenCastToIListWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ForeachWhenCastToIListWorks);
            QUnit.test("#772 - Batch2 ICollectionCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionCountWorks);
            QUnit.test("#772 - Batch2 ICollectionAddWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionAddWorks);
            QUnit.test("#772 - Batch2 ICollectionClearWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionClearWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionContainsWorks);
            QUnit.test("#772 - Batch2 ICollectionContainsUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionContainsUsesEqualsMethod);
            QUnit.test("#772 - Batch2 ICollectionRemoveWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.ICollectionRemoveWorks);
            QUnit.test("#772 - Batch2 IListIndexingWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexingWorks);
            QUnit.test("#772 - Batch2 IListIndexOfWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexOfWorks);
            QUnit.test("#772 - Batch2 IListIndexOfUsesEqualsMethod", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListIndexOfUsesEqualsMethod);
            QUnit.test("#772 - Batch2 IListInsertWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListInsertWorks);
            QUnit.test("#772 - Batch2 IListRemoveAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.IListRemoveAtWorks);
            QUnit.test("#772 - Batch2 TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772.TestUseCase);
        },
        /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Main:static end.*/


    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385.TestIsTypedArrayForByte:static start.*/
                TestIsTypedArrayForByte: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1385, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsTypedArrayForByte()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385.TestIsTypedArrayForByte();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385.TestIsTypedArrayForByte:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385", $t.File = "Batch2\\BridgeIssues\\N1385.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1385 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499.TestObjectStringCoalesceWorks:static start.*/
                TestObjectStringCoalesceWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.Bridge1499, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectStringCoalesceWorks()", $t.Line = "9", $t));
                    t.Fixture.TestObjectStringCoalesceWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499.TestObjectStringCoalesceWorks:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499", $t.File = "Batch2\\BridgeIssues\\N1499.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+Bridge1499 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestInt32:static start.*/
                TestInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "186", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestUInt32:static start.*/
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "230", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestUInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestUInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestLong:static start.*/
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "272", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestLong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestLong:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestULong:static start.*/
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedInsideUncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "316", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests.TestULong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.TestULong:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedInsideUncheckedTests end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestInt32:static start.*/
                TestInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestUInt32:static start.*/
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "62", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestUInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestUInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestLong:static start.*/
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "101", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestLong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestLong:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestULong:static start.*/
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.CheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "142", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests.TestULong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.TestULong:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+CheckedTests end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.TestClippingInJavaScriptOverflowMode:static start.*/
                TestClippingInJavaScriptOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClippingInJavaScriptOverflowMode()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestClippingInJavaScriptOverflowMode();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.TestClippingInJavaScriptOverflowMode:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.TestIntegerDivisionInJavaScriptOverflowMode:static start.*/
                TestIntegerDivisionInJavaScriptOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIntegerDivisionInJavaScriptOverflowMode()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1122.TestIntegerDivisionInJavaScriptOverflowMode();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.TestIntegerDivisionInJavaScriptOverflowMode:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N1122", $t.File = "Batch2\\BridgeIssues\\N1122.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1122 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204.TestStrictNullChecksOptionForNulls:static start.*/
                TestStrictNullChecksOptionForNulls: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N1204).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N1204, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStrictNullChecksOptionForNulls()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N1204.TestStrictNullChecksOptionForNulls();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204.TestStrictNullChecksOptionForNulls:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N1204", $t.File = "Batch2\\BridgeIssues\\N1204.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N1204 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N3075", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N3075)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075.TestRawModifier:static start.*/
                TestRawModifier: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N3075).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N3075, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRawModifier()", $t.Line = "24", $t));
                    t.Fixture.TestRawModifier();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075.TestRawModifier:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N3075", $t.File = "Batch2\\BridgeIssues\\N3075.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N3075 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772 start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.TypePropertiesAreCorrect:static start.*/
                TypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "35", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.TypePropertiesAreCorrect:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.LengthWorks:static start.*/
                LengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LengthWorks()", $t.Line = "49", $t));
                    t.Fixture.LengthWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.LengthWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.RankIsOne:static start.*/
                RankIsOne: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RankIsOne()", $t.Line = "57", $t));
                    t.Fixture.RankIsOne();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.RankIsOne:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetLengthWorks:static start.*/
                GetLengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetLengthWorks()", $t.Line = "63", $t));
                    t.Fixture.GetLengthWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetLengthWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetLowerBound:static start.*/
                GetLowerBound: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetLowerBound()", $t.Line = "71", $t));
                    t.Fixture.GetLowerBound();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetLowerBound:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetUpperBoundWorks:static start.*/
                GetUpperBoundWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUpperBoundWorks()", $t.Line = "79", $t));
                    t.Fixture.GetUpperBoundWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetUpperBoundWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GettingValueByIndexWorks:static start.*/
                GettingValueByIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GettingValueByIndexWorks()", $t.Line = "87", $t));
                    t.Fixture.GettingValueByIndexWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GettingValueByIndexWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetValueWorks:static start.*/
                GetValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetValueWorks()", $t.Line = "94", $t));
                    t.Fixture.GetValueWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetValueWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SettingValueByIndexWorks:static start.*/
                SettingValueByIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SettingValueByIndexWorks()", $t.Line = "101", $t));
                    t.Fixture.SettingValueByIndexWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SettingValueByIndexWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SetValueWorks:static start.*/
                SetValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetValueWorks()", $t.Line = "111", $t));
                    t.Fixture.SetValueWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SetValueWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWorks:static start.*/
                ForeachWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWorks()", $t.Line = "121", $t));
                    t.Fixture.ForeachWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.CloneWorks:static start.*/
                CloneWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CloneWorks()", $t.Line = "132", $t));
                    t.Fixture.CloneWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.CloneWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ConcatWorks:static start.*/
                ConcatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConcatWorks()", $t.Line = "141", $t));
                    t.Fixture.ConcatWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ConcatWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ContainsWorks:static start.*/
                ContainsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContainsWorks()", $t.Line = "150", $t));
                    t.Fixture.ContainsWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ContainsWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ContainsUsesEqualsMethod:static start.*/
                ContainsUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContainsUsesEqualsMethod()", $t.Line = "158", $t));
                    t.Fixture.ContainsUsesEqualsMethod();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ContainsUsesEqualsMethod:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.AllWithArrayItemFilterCallbackWorks:static start.*/
                AllWithArrayItemFilterCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AllWithArrayItemFilterCallbackWorks()", $t.Line = "166", $t));
                    t.Fixture.AllWithArrayItemFilterCallbackWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.AllWithArrayItemFilterCallbackWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SliceWithoutEndWorks:static start.*/
                SliceWithoutEndWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SliceWithoutEndWorks()", $t.Line = "173", $t));
                    t.Fixture.SliceWithoutEndWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SliceWithoutEndWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWithArrayItemCallbackWorks:static start.*/
                ForeachWithArrayItemCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWithArrayItemCallbackWorks()", $t.Line = "180", $t));
                    t.Fixture.ForeachWithArrayItemCallbackWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWithArrayItemCallbackWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithoutStartIndexWorks:static start.*/
                IndexOfWithoutStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithoutStartIndexWorks()", $t.Line = "188", $t));
                    t.Fixture.IndexOfWithoutStartIndexWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithoutStartIndexWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithoutStartIndexUsesEqualsMethod:static start.*/
                IndexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithoutStartIndexUsesEqualsMethod()", $t.Line = "194", $t));
                    t.Fixture.IndexOfWithoutStartIndexUsesEqualsMethod();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithoutStartIndexUsesEqualsMethod:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithStartIndexWorks:static start.*/
                IndexOfWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfWithStartIndexWorks()", $t.Line = "202", $t));
                    t.Fixture.IndexOfWithStartIndexWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IndexOfWithStartIndexWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.JoinWithoutDelimiterWorks:static start.*/
                JoinWithoutDelimiterWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "JoinWithoutDelimiterWorks()", $t.Line = "208", $t));
                    t.Fixture.JoinWithoutDelimiterWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.JoinWithoutDelimiterWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ReverseWorks:static start.*/
                ReverseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReverseWorks()", $t.Line = "216", $t));
                    t.Fixture.ReverseWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ReverseWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.AnyWithArrayItemFilterCallbackWorks:static start.*/
                AnyWithArrayItemFilterCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AnyWithArrayItemFilterCallbackWorks()", $t.Line = "224", $t));
                    t.Fixture.AnyWithArrayItemFilterCallbackWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.AnyWithArrayItemFilterCallbackWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch1Works:static start.*/
                BinarySearch1Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch1Works()", $t.Line = "231", $t));
                    t.Fixture.BinarySearch1Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch1Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch2Works:static start.*/
                BinarySearch2Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch2Works()", $t.Line = "240", $t));
                    t.Fixture.BinarySearch2Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch2Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch3Works:static start.*/
                BinarySearch3Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch3Works()", $t.Line = "257", $t));
                    t.Fixture.BinarySearch3Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch3Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch4Works:static start.*/
                BinarySearch4Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearch4Works()", $t.Line = "266", $t));
                    t.Fixture.BinarySearch4Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearch4Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearchExceptionsWorks:static start.*/
                BinarySearchExceptionsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "BinarySearchExceptionsWorks()", $t.Line = "275", $t));
                    t.Fixture.BinarySearchExceptionsWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.BinarySearchExceptionsWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SortWithDefaultCompareWorks:static start.*/
                SortWithDefaultCompareWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SortWithDefaultCompareWorks()", $t.Line = "286", $t));
                    t.Fixture.SortWithDefaultCompareWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SortWithDefaultCompareWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort1Works:static start.*/
                Sort1Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort1Works()", $t.Line = "294", $t));
                    t.Fixture.Sort1Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort1Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort2Works:static start.*/
                Sort2Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort2Works()", $t.Line = "302", $t));
                    t.Fixture.Sort2Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort2Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort3Works:static start.*/
                Sort3Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort3Works()", $t.Line = "310", $t));
                    t.Fixture.Sort3Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort3Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort4Works:static start.*/
                Sort4Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Sort4Works()", $t.Line = "318", $t));
                    t.Fixture.Sort4Works();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.Sort4Works:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SortExceptionsWorks:static start.*/
                SortExceptionsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SortExceptionsWorks()", $t.Line = "326", $t));
                    t.Fixture.SortExceptionsWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.SortExceptionsWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWhenCastToIListWorks:static start.*/
                ForeachWhenCastToIListWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWhenCastToIListWorks()", $t.Line = "334", $t));
                    t.Fixture.ForeachWhenCastToIListWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ForeachWhenCastToIListWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionCountWorks:static start.*/
                ICollectionCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionCountWorks()", $t.Line = "346", $t));
                    t.Fixture.ICollectionCountWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionCountWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionAddWorks:static start.*/
                ICollectionAddWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionAddWorks()", $t.Line = "353", $t));
                    t.Fixture.ICollectionAddWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionAddWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionClearWorks:static start.*/
                ICollectionClearWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionClearWorks()", $t.Line = "360", $t));
                    t.Fixture.ICollectionClearWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionClearWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionContainsWorks:static start.*/
                ICollectionContainsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionContainsWorks()", $t.Line = "367", $t));
                    t.Fixture.ICollectionContainsWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionContainsWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionContainsUsesEqualsMethod:static start.*/
                ICollectionContainsUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionContainsUsesEqualsMethod()", $t.Line = "375", $t));
                    t.Fixture.ICollectionContainsUsesEqualsMethod();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionContainsUsesEqualsMethod:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionRemoveWorks:static start.*/
                ICollectionRemoveWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ICollectionRemoveWorks()", $t.Line = "383", $t));
                    t.Fixture.ICollectionRemoveWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.ICollectionRemoveWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexingWorks:static start.*/
                IListIndexingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexingWorks()", $t.Line = "390", $t));
                    t.Fixture.IListIndexingWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexingWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexOfWorks:static start.*/
                IListIndexOfWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexOfWorks()", $t.Line = "399", $t));
                    t.Fixture.IListIndexOfWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexOfWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexOfUsesEqualsMethod:static start.*/
                IListIndexOfUsesEqualsMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListIndexOfUsesEqualsMethod()", $t.Line = "407", $t));
                    t.Fixture.IListIndexOfUsesEqualsMethod();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListIndexOfUsesEqualsMethod:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListInsertWorks:static start.*/
                IListInsertWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListInsertWorks()", $t.Line = "415", $t));
                    t.Fixture.IListInsertWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListInsertWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListRemoveAtWorks:static start.*/
                IListRemoveAtWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IListRemoveAtWorks()", $t.Line = "422", $t));
                    t.Fixture.IListRemoveAtWorks();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.IListRemoveAtWorks:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.TestUseCase:static start.*/
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.BridgeIssues.N772).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.N772, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "429", $t));
                    Bridge.ClientTest.Batch2.BridgeIssues.N772.TestUseCase();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.TestUseCase:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.BridgeIssues.N772", $t.File = "Batch2\\BridgeIssues\\N772.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+N772 end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestInt32:static start.*/
                TestInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "561", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestUInt32:static start.*/
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "613", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestUInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestUInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestLong:static start.*/
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "665", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestLong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestLong:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestULong:static start.*/
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedInsideCheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "717", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests.TestULong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.TestULong:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedInsideCheckedTests end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestInt32:static start.*/
                TestInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "363", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestUInt32:static start.*/
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "412", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestUInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestUInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestLong:static start.*/
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "461", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestLong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestLong:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestULong:static start.*/
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.UncheckedTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "510", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests.TestULong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.TestULong:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+UncheckedTests end.*/

    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests start.*/
    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests)],
        $kind: "nested class",
        statics: {
            methods: {
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestInt32:static start.*/
                TestInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInt32()", $t.Line = "771", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestUInt32:static start.*/
                TestUInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUInt32()", $t.Line = "817", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestUInt32();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestUInt32:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestLong:static start.*/
                TestLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLong()", $t.Line = "863", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestLong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestLong:static end.*/

                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestULong:static start.*/
                TestULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch2Runner.WithNoUncheckedKeywordTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULong()", $t.Line = "909", $t));
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests.TestULong();
                },
                /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.TestULong:static end.*/


            }
        },
        fields: {
            context: null
        },
        methods: {
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.GetContext start.*/
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch2", $t.ClassName = "Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests", $t.File = "Batch2\\CheckedUncheckedTests.cs", $t);
                }
                return this.context;
            },
            /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests.GetContext end.*/


        }
    });
    /*Bridge.Test.Runtime.BridgeClientTestBatch2Runner+WithNoUncheckedKeywordTests end.*/
});
