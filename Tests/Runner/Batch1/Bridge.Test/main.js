Bridge.assembly("Bridge.Test.Bridge.ClientTest", function ($asm, globals) {
    

    /*Bridge.Test.Runtime.TestFixture$1 start.*/
    Bridge.define("Bridge.Test.Runtime.TestFixture$1", function (T) { return {
        statics: {
            fields: {
                instanceFabric: null,
                fixtureFabric: Bridge.getDefaultValue(T)
            },
            props: {
                FixtureFabric: {
                    get: function () {
                        if (Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric == null) {
                            Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = Bridge.createInstance(T);
                        }

                        return Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric;
                    },
                    set: function (value) {
                        Bridge.Test.Runtime.TestFixture$1(T).fixtureFabric = value;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.fixtureFabric = Bridge.getDefaultValue(T);
                }
            },
            methods: {
                /*Bridge.Test.Runtime.TestFixture$1.InstanceFabric:static start.*/
                InstanceFabric: function (type) {
                    if (Bridge.Test.Runtime.TestFixture$1(T).instanceFabric == null) {
                        Bridge.Test.Runtime.TestFixture$1(T).instanceFabric = Bridge.cast(Bridge.createInstance(type), Bridge.Test.Runtime.TestFixture$1(T));
                    }

                    return Bridge.Test.Runtime.TestFixture$1(T).instanceFabric;
                },
                /*Bridge.Test.Runtime.TestFixture$1.InstanceFabric:static end.*/

                /*Bridge.Test.Runtime.TestFixture$1.BeforeTest:static start.*/
                BeforeTest: function (needInstance, assert, type, expectedCount, testContext) {
                    var $t;
                    if (expectedCount === void 0) { expectedCount = null; }
                    if (testContext === void 0) { testContext = null; }
                    Bridge.Test.NUnit.Assert.assert = assert;

                    if (System.Nullable.hasValue(expectedCount)) {
                        assert.expect(System.Nullable.getValue(expectedCount));
                    }

                    var instance = Bridge.Test.Runtime.TestFixture$1(T).InstanceFabric(type);
                    instance.Fixture = needInstance ? Bridge.Test.Runtime.TestFixture$1(T).FixtureFabric : Bridge.getDefaultValue(T);

                    var fixtureContext = instance.GetContext();

                    if (testContext != null || fixtureContext != null) {
                        Bridge.Test.Runtime.ContextHelper.SetContext(assert, ($t = new Bridge.Test.Runtime.Context(), $t.FixtureCtx = fixtureContext, $t.TestCtx = testContext, $t));
                    }

                    try {
                        instance.SetUp();
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                        assert.ok(false, "The test failed SetUp");

                        throw $e1;
                    }

                    return instance;
                },
                /*Bridge.Test.Runtime.TestFixture$1.BeforeTest:static end.*/


            }
        },
        props: {
            Fixture: Bridge.getDefaultValue(T)
        },
        ctors: {
            init: function () {
                this.Fixture = Bridge.getDefaultValue(T);
            }
        },
        methods: {
            /*Bridge.Test.Runtime.TestFixture$1.GetContext start.*/
            GetContext: function () {
                return null;
            },
            /*Bridge.Test.Runtime.TestFixture$1.GetContext end.*/

            /*Bridge.Test.Runtime.TestFixture$1.SetUp start.*/
            SetUp: function () { },
            /*Bridge.Test.Runtime.TestFixture$1.SetUp end.*/

            /*Bridge.Test.Runtime.TestFixture$1.TearDown start.*/
            TearDown: function () { },
            /*Bridge.Test.Runtime.TestFixture$1.TearDown end.*/


        }
    }; });
    /*Bridge.Test.Runtime.TestFixture$1 end.*/

    /*Bridge.Test.Runtime.Context start.*/
    Bridge.define("Bridge.Test.Runtime.Context", {
        fields: {
            FixtureCtx: null,
            TestCtx: null,
            Stack: null
        }
    });
    /*Bridge.Test.Runtime.Context end.*/

    /*Bridge.Test.Runtime.ContextHelper start.*/
    Bridge.define("Bridge.Test.Runtime.ContextHelper", {
        statics: {
            fields: {
                contextName: null
            },
            ctors: {
                init: function () {
                    this.contextName = "BridgeTestContext";
                }
            },
            methods: {
                /*Bridge.Test.Runtime.ContextHelper.SetContext:static start.*/
                SetContext: function (assert, ctx) {
                    if (assert == null) {
                        return;
                    }

                    assert[Bridge.Test.Runtime.ContextHelper.contextName] = ctx;
                },
                /*Bridge.Test.Runtime.ContextHelper.SetContext:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetTestId:static start.*/
                GetTestId: function (details) {
                    return Bridge.as(details.testId, System.String);
                },
                /*Bridge.Test.Runtime.ContextHelper.GetTestId:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetAssert:static start.*/
                GetAssert: function () {
                    var a = Bridge.unbox(QUnit.config.current.assert);

                    return a;
                },
                /*Bridge.Test.Runtime.ContextHelper.GetAssert:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetContext$1:static start.*/
                GetContext$1: function (assert) {
                    if (assert == null) {
                        return null;
                    }

                    return Bridge.as(assert[Bridge.Test.Runtime.ContextHelper.contextName], Bridge.Test.Runtime.Context);
                },
                /*Bridge.Test.Runtime.ContextHelper.GetContext$1:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetContext:static start.*/
                GetContext: function () {
                    return Bridge.Test.Runtime.ContextHelper.GetContext$1(Bridge.Test.Runtime.ContextHelper.GetAssert());
                },
                /*Bridge.Test.Runtime.ContextHelper.GetContext:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetTestOutput:static start.*/
                GetTestOutput: function (testId) {
                    if (testId == null) {
                        return null;
                    }

                    return document.getElementById("qunit-test-output-" + (testId || ""));
                },
                /*Bridge.Test.Runtime.ContextHelper.GetTestOutput:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetQUnitSource:static start.*/
                GetQUnitSource: function (output) {
                    if (output == null) {
                        return null;
                    }

                    var source = output.getElementsByClassName("qunit-source");

                    if (source == null || source.length <= 0) {
                        return null;
                    }

                    return source[0];
                },
                /*Bridge.Test.Runtime.ContextHelper.GetQUnitSource:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.AdjustSourceElement:static start.*/
                AdjustSourceElement: function (ctx, testItem) {
                    var $t;
                    if (testItem == null) {
                        return null;
                    }

                    var fc = ctx.FixtureCtx;
                    var tc = ctx.TestCtx;

                    var project = null;
                    var file = null;
                    var method = null;
                    var line = null;

                    if (fc != null) {
                        project = fc.Project;
                        file = fc.File;
                        method = fc.ClassName;
                    }

                    if (tc != null) {
                        if (tc.File != null) {
                            file = tc.File;
                        }

                        if (tc.Method != null) {
                            method = ((($t = method, $t != null ? $t : "")) || "") + "." + (tc.Method || "");
                        }

                        line = tc.Line;
                    }

                    if (project != null || file != null || method != null) {
                        var qunitSourceName = Bridge.Test.Runtime.ContextHelper.GetQUnitSource(testItem);

                        if (qunitSourceName == null) {
                            return null;
                        }

                        var html = "";

                        if (project != null) {
                            html = (html || "") + ((" <strong>Project: </strong>" + (project || "")) || "");
                        }

                        if (method != null) {
                            html = (html || "") + ((" at " + (Bridge.Test.Runtime.ContextHelper.AdjustTags(method) || "")) || "");
                        }

                        if (file != null) {
                            html = (html || "") + " in ";

                            if (System.String.startsWith(file, "file:")) {
                                html = (html || "") + ((System.String.format("<a href = \"{0}\" target = \"_blank\">{0}</a>", [file])) || "");
                            } else {
                                html = (html || "") + (file || "");
                            }
                        }

                        if (line != null) {
                            html = (html || "") + ((": line " + (line || "")) || "");
                        }

                        var assertList = null;

                        var els = testItem.getElementsByTagName("ol");
                        if (els != null && els.length > 0) {
                            assertList = els[0];
                        }

                        var testTitle = testItem.firstChild;

                        qunitSourceName.insertAdjacentHTML("afterbegin", (html || "") + "<br/>");
                        //testItem.InsertBefore(csSourceName, qunitSourceName);

                        if (assertList != null) {
                            testTitle.addEventListener("click", function () {
                                // A Qunit fix to make source element collapsed the same as assert list
                                Bridge.Test.Runtime.ContextHelper.ToggleClass(assertList, "qunit-collapsed", [qunitSourceName]);
                            }, false);
                        }

                        return qunitSourceName;
                    }

                    return null;
                },
                /*Bridge.Test.Runtime.ContextHelper.AdjustSourceElement:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetTestSource:static start.*/
                GetTestSource: function (output) {
                    if (output == null) {
                        return null;
                    }

                    var source = output.getElementsByClassName("test-source");

                    if (source == null || source.length <= 0) {
                        return null;
                    }

                    return source[0];
                },
                /*Bridge.Test.Runtime.ContextHelper.GetTestSource:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.GetTestSource$1:static start.*/
                GetTestSource$1: function (testId) {
                    var output = Bridge.Test.Runtime.ContextHelper.GetTestOutput(testId);

                    return Bridge.Test.Runtime.ContextHelper.GetTestSource(output);
                },
                /*Bridge.Test.Runtime.ContextHelper.GetTestSource$1:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.UpdateTestSource:static start.*/
                UpdateTestSource: function (testSource, stack) {
                    if (testSource != null) {
                        testSource.innerHTML = "<th>Source: </th><td><pre> " + (stack || "") + "  </pre></td>";
                    }
                },
                /*Bridge.Test.Runtime.ContextHelper.UpdateTestSource:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.AdjustTags:static start.*/
                AdjustTags: function (s) {
                    if (s == null) {
                        return null;
                    }

                    return System.String.replaceAll(System.String.replaceAll(s, "<", "&lt;"), ">", "&gt;");
                },
                /*Bridge.Test.Runtime.ContextHelper.AdjustTags:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.HasClass:static start.*/
                HasClass: function (el, name) {
                    return System.String.indexOf((" " + (el.className || "") + " "), " " + (name || "") + " ") >= 0;
                },
                /*Bridge.Test.Runtime.ContextHelper.HasClass:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.AddClass:static start.*/
                AddClass: function (el, name) {
                    if (!Bridge.Test.Runtime.ContextHelper.HasClass(el, name)) {
                        el.className = (el.className || "") + ((el.className != null ? " " : "") || "") + (name || "");
                    }
                },
                /*Bridge.Test.Runtime.ContextHelper.AddClass:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.RemoveClass:static start.*/
                RemoveClass: function (el, name) {
                    var set = " " + (el.className || "") + " ";

                    while (System.String.indexOf(set, " " + (name || "") + " ") >= 0) {
                        set = System.String.replaceAll(set, " " + (name || "") + " ", " ");
                    }

                    el.className = set.trim();
                },
                /*Bridge.Test.Runtime.ContextHelper.RemoveClass:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.ToggleClass$1:static start.*/
                ToggleClass$1: function (el, name, force) {
                    if (force === void 0) { force = false; }
                    if (force || !Bridge.Test.Runtime.ContextHelper.HasClass(el, name)) {
                        Bridge.Test.Runtime.ContextHelper.AddClass(el, name);
                    } else {
                        Bridge.Test.Runtime.ContextHelper.RemoveClass(el, name);
                    }
                },
                /*Bridge.Test.Runtime.ContextHelper.ToggleClass$1:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.ToggleClass:static start.*/
                ToggleClass: function (src, name, dest) {
                    var $t;
                    if (dest === void 0) { dest = []; }
                    if (src == null) {
                        return;
                    }

                    var has = Bridge.Test.Runtime.ContextHelper.HasClass(src, name);

                    $t = Bridge.getEnumerator(dest);
                    try {
                        while ($t.moveNext()) {
                            var el = $t.Current;
                            if (has) {
                                Bridge.Test.Runtime.ContextHelper.AddClass(el, name);
                            } else {
                                Bridge.Test.Runtime.ContextHelper.RemoveClass(el, name);
                            }

                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*Bridge.Test.Runtime.ContextHelper.ToggleClass:static end.*/

                /*Bridge.Test.Runtime.ContextHelper.Init:static start.*/
                Init: function () {
                    // Check that required elements exist and created if required
                    var ensure = $asm.$.Bridge.Test.Runtime.ContextHelper.f1;

                    ensure("qunit-fixture");
                    ensure("qunit");
                },
                /*Bridge.Test.Runtime.ContextHelper.Init:static end.*/


            }
        }
    });

    Bridge.ns("Bridge.Test.Runtime.ContextHelper", $asm.$);

    Bridge.apply($asm.$.Bridge.Test.Runtime.ContextHelper, {
        f1: function (n) {
            var fx = document.getElementById(n);
            if (fx == null) {
                fx = document.createElement("div");
                fx.id = n;
                document.body.insertBefore(fx, document.body.firstChild);
            }
        }
    });
    /*Bridge.Test.Runtime.ContextHelper end.*/

    /*Bridge.Test.Runtime.FixtureContext start.*/
    Bridge.define("Bridge.Test.Runtime.FixtureContext", {
        fields: {
            Project: null,
            ClassName: null,
            File: null
        }
    });
    /*Bridge.Test.Runtime.FixtureContext end.*/

    /*Bridge.Test.Runtime.NUnit.Assert start.*/
    Bridge.define("Bridge.Test.NUnit.Assert", {
        statics: {
            fields: {
                assert: null,
                stackOffset: 0
            },
            ctors: {
                init: function () {
                    this.stackOffset = 2;
                }
            },
            methods: {
                /*Bridge.Test.Runtime.NUnit.Assert.SetStack:static start.*/
                SetStack: function (offset) {
                    if (offset === void 0) { offset = 0; }
                    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext$1(Bridge.Test.NUnit.Assert.assert);

                    if (ctx == null) {
                        return;
                    }

                    ctx.Stack = QUnit.stack(((Bridge.Test.NUnit.Assert.stackOffset + offset) | 0));
                },
                /*Bridge.Test.Runtime.NUnit.Assert.SetStack:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Async:static start.*/
                Async: function () {
                    return Bridge.Test.NUnit.Assert.assert.async();
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Async:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreEqual:static start.*/
                AreEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreDeepEqual:static start.*/
                AreDeepEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.deepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreDeepEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreStrictEqual:static start.*/
                AreStrictEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.strictEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreStrictEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreNotEqual:static start.*/
                AreNotEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreNotEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreNotDeepEqual:static start.*/
                AreNotDeepEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notDeepEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreNotDeepEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.AreNotStrictEqual:static start.*/
                AreNotStrictEqual: function (expected, actual, description) {
                    if (description === void 0) { description = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notStrictEqual(Bridge.unbox(actual), Bridge.unbox(expected), description);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.AreNotStrictEqual:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.True:static start.*/
                True: function (condition, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(condition, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.True:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.False:static start.*/
                False: function (condition, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(condition, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.False:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Fail:static start.*/
                Fail: function (message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(true, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Fail:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Throws$1:static start.*/
                Throws$1: function (block, message) {
                    if (message === void 0) { message = ""; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Throws$1:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Throws$2:static start.*/
                Throws$2: function (T, block, message, stackOffset) {
                    if (message === void 0) { message = ""; }
                    if (stackOffset === void 0) { stackOffset = 0; }
                    if (Bridge.referenceEquals(message, "") && stackOffset === 0) {
                        stackOffset = 1;
                    }

                    var actual = null;
                    var expected = Bridge.Reflection.getTypeFullName(T);

                    try {
                        block();
                    } catch (ex) {
                        ex = System.Exception.create(ex);
                        actual = Bridge.Reflection.getTypeFullName(Bridge.getType(ex));
                    }

                    Bridge.Test.NUnit.Assert.SetStack(stackOffset);

                    if (!Bridge.referenceEquals(actual, expected)) {
                        Bridge.Test.NUnit.Assert.assert.equal(actual, expected, message);
                    } else {
                        Bridge.Test.NUnit.Assert.assert.ok(true, message);
                    }
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Throws$2:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Throws$3:static start.*/
                Throws$3: function (block, expected, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, Bridge.unbox(expected), message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Throws$3:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Throws$4:static start.*/
                Throws$4: function (block, expected, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.throws(block, expected, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Throws$4:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.Null:static start.*/
                Null: function (anObject, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.ok(anObject == null, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.Null:static end.*/

                /*Bridge.Test.Runtime.NUnit.Assert.NotNull:static start.*/
                NotNull: function (anObject, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.SetStack();
                    Bridge.Test.NUnit.Assert.assert.notOk(anObject == null, message);
                },
                /*Bridge.Test.Runtime.NUnit.Assert.NotNull:static end.*/


            }
        }
    });
    /*Bridge.Test.Runtime.NUnit.Assert end.*/

    /*Bridge.Test.Runtime.TestContext start.*/
    Bridge.define("Bridge.Test.Runtime.TestContext", {
        fields: {
            File: null,
            Method: null,
            Line: null
        }
    });
    /*Bridge.Test.Runtime.TestContext end.*/
});

QUnit.testDone(function (details) {
    // It will add a UI elements to show CS source for the Test (If CS source data found in the context)

    //if (details.Failed <= 0)
    //{
    //    return;
    //}

    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext();

    if (ctx == null || (ctx.TestCtx == null && ctx.FixtureCtx == null)) {
        return;
    }

    var testId = Bridge.Test.Runtime.ContextHelper.GetTestId(details);

    if (testId == null) {
        return;
    }

    var testItem = Bridge.Test.Runtime.ContextHelper.GetTestOutput(testId);

    if (testItem != null) {
        Bridge.Test.Runtime.ContextHelper.AdjustSourceElement(ctx, testItem);
    }
});
QUnit.log(function (details) {
    // It will update a UI elements to show test source (JS) for the assertion (If the JS source (Stack) data found in the context)

    var ctx = Bridge.Test.Runtime.ContextHelper.GetContext();

    if (ctx == null || ctx.Stack == null) {
        return;
    }

    var testId = Bridge.Test.Runtime.ContextHelper.GetTestId(details);

    var source = Bridge.Test.Runtime.ContextHelper.GetTestSource$1(testId);

    Bridge.Test.Runtime.ContextHelper.UpdateTestSource(source, ctx.Stack);
});
