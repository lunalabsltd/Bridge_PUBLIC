    /*System.Diagnostics.Debug start.*/
    Bridge.define("System.Diagnostics.Debug", {
        statics: {
            fields: {
                s_lock: null,
                s_indentLevel: 0,
                s_indentSize: 0,
                s_needIndent: false,
                s_indentString: null,
                s_ShowAssertDialog: null,
                s_WriteCore: null,
                s_shouldWriteToStdErr: false
            },
            props: {
                AutoFlush: {
                    get: function () {
                        return true;
                    },
                    set: function (value) { }
                },
                IndentLevel: {
                    get: function () {
                        return System.Diagnostics.Debug.s_indentLevel;
                    },
                    set: function (value) {
                        System.Diagnostics.Debug.s_indentLevel = value < 0 ? 0 : value;
                    }
                },
                IndentSize: {
                    get: function () {
                        return System.Diagnostics.Debug.s_indentSize;
                    },
                    set: function (value) {
                        System.Diagnostics.Debug.s_indentSize = value < 0 ? 0 : value;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.s_lock = { };
                    this.s_indentSize = 4;
                    this.s_ShowAssertDialog = System.Diagnostics.Debug.ShowAssertDialog;
                    this.s_WriteCore = System.Diagnostics.Debug.WriteCore;
                    this.s_shouldWriteToStdErr = Bridge.referenceEquals(System.Environment.GetEnvironmentVariable("COMPlus_DebugWriteToStdErr"), "1");
                }
            },
            methods: {
                /*System.Diagnostics.Debug.Close:static start.*/
                Close: function () { },
                /*System.Diagnostics.Debug.Close:static end.*/

                /*System.Diagnostics.Debug.Flush:static start.*/
                Flush: function () { },
                /*System.Diagnostics.Debug.Flush:static end.*/

                /*System.Diagnostics.Debug.Indent:static start.*/
                Indent: function () {
                    System.Diagnostics.Debug.IndentLevel = (System.Diagnostics.Debug.IndentLevel + 1) | 0;
                },
                /*System.Diagnostics.Debug.Indent:static end.*/

                /*System.Diagnostics.Debug.Unindent:static start.*/
                Unindent: function () {
                    System.Diagnostics.Debug.IndentLevel = (System.Diagnostics.Debug.IndentLevel - 1) | 0;
                },
                /*System.Diagnostics.Debug.Unindent:static end.*/

                /*System.Diagnostics.Debug.Print:static start.*/
                Print: function (message) {
                    System.Diagnostics.Debug.Write$2(message);
                },
                /*System.Diagnostics.Debug.Print:static end.*/

                /*System.Diagnostics.Debug.Print$1:static start.*/
                Print$1: function (format, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.Write$2(System.String.formatProvider.apply(System.String, [null, format].concat(args)));
                },
                /*System.Diagnostics.Debug.Print$1:static end.*/

                /*System.Diagnostics.Debug.Assert:static start.*/
                Assert: function (condition) {
                    System.Diagnostics.Debug.Assert$2(condition, "", "");
                },
                /*System.Diagnostics.Debug.Assert:static end.*/

                /*System.Diagnostics.Debug.Assert$1:static start.*/
                Assert$1: function (condition, message) {
                    System.Diagnostics.Debug.Assert$2(condition, message, "");
                },
                /*System.Diagnostics.Debug.Assert$1:static end.*/

                /*System.Diagnostics.Debug.Assert$2:static start.*/
                Assert$2: function (condition, message, detailMessage) {
                    if (!condition) {
                        var stackTrace;

                        try {
                            throw System.NotImplemented.ByDesign;
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                            stackTrace = "";
                        }

                        System.Diagnostics.Debug.WriteLine$2(System.Diagnostics.Debug.FormatAssert(stackTrace, message, detailMessage));
                        System.Diagnostics.Debug.s_ShowAssertDialog(stackTrace, message, detailMessage);
                    }
                },
                /*System.Diagnostics.Debug.Assert$2:static end.*/

                /*System.Diagnostics.Debug.Assert$3:static start.*/
                Assert$3: function (condition, message, detailMessageFormat, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.Assert$2(condition, message, System.String.format.apply(System.String, [detailMessageFormat].concat(args)));
                },
                /*System.Diagnostics.Debug.Assert$3:static end.*/

                /*System.Diagnostics.Debug.Fail:static start.*/
                Fail: function (message) {
                    System.Diagnostics.Debug.Assert$2(false, message, "");
                },
                /*System.Diagnostics.Debug.Fail:static end.*/

                /*System.Diagnostics.Debug.Fail$1:static start.*/
                Fail$1: function (message, detailMessage) {
                    System.Diagnostics.Debug.Assert$2(false, message, detailMessage);
                },
                /*System.Diagnostics.Debug.Fail$1:static end.*/

                /*System.Diagnostics.Debug.FormatAssert:static start.*/
                FormatAssert: function (stackTrace, message, detailMessage) {
                    var newLine = (System.Diagnostics.Debug.GetIndentString() || "") + ("\n" || "");
                    return "---- DEBUG ASSERTION FAILED ----" + (newLine || "") + "---- Assert Short Message ----" + (newLine || "") + (message || "") + (newLine || "") + "---- Assert Long Message ----" + (newLine || "") + (detailMessage || "") + (newLine || "") + (stackTrace || "");
                },
                /*System.Diagnostics.Debug.FormatAssert:static end.*/

                /*System.Diagnostics.Debug.WriteLine$2:static start.*/
                WriteLine$2: function (message) {
                    System.Diagnostics.Debug.Write$2((message || "") + ("\n" || ""));
                },
                /*System.Diagnostics.Debug.WriteLine$2:static end.*/

                /*System.Diagnostics.Debug.WriteLine:static start.*/
                WriteLine: function (value) {
                    System.Diagnostics.Debug.WriteLine$2(value != null ? Bridge.toString(value) : null);
                },
                /*System.Diagnostics.Debug.WriteLine:static end.*/

                /*System.Diagnostics.Debug.WriteLine$1:static start.*/
                WriteLine$1: function (value, category) {
                    System.Diagnostics.Debug.WriteLine$4(value != null ? Bridge.toString(value) : null, category);
                },
                /*System.Diagnostics.Debug.WriteLine$1:static end.*/

                /*System.Diagnostics.Debug.WriteLine$3:static start.*/
                WriteLine$3: function (format, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.WriteLine$2(System.String.formatProvider.apply(System.String, [null, format].concat(args)));
                },
                /*System.Diagnostics.Debug.WriteLine$3:static end.*/

                /*System.Diagnostics.Debug.WriteLine$4:static start.*/
                WriteLine$4: function (message, category) {
                    if (category == null) {
                        System.Diagnostics.Debug.WriteLine$2(message);
                    } else {
                        System.Diagnostics.Debug.WriteLine$2((category || "") + ":" + (message || ""));
                    }
                },
                /*System.Diagnostics.Debug.WriteLine$4:static end.*/

                /*System.Diagnostics.Debug.Write$2:static start.*/
                Write$2: function (message) {
                    System.Diagnostics.Debug.s_lock;
                    {
                        if (message == null) {
                            System.Diagnostics.Debug.s_WriteCore("");
                            return;
                        }
                        if (System.Diagnostics.Debug.s_needIndent) {
                            message = (System.Diagnostics.Debug.GetIndentString() || "") + (message || "");
                            System.Diagnostics.Debug.s_needIndent = false;
                        }
                        System.Diagnostics.Debug.s_WriteCore(message);
                        if (System.String.endsWith(message, "\n")) {
                            System.Diagnostics.Debug.s_needIndent = true;
                        }
                    }
                },
                /*System.Diagnostics.Debug.Write$2:static end.*/

                /*System.Diagnostics.Debug.Write:static start.*/
                Write: function (value) {
                    System.Diagnostics.Debug.Write$2(value != null ? Bridge.toString(value) : null);
                },
                /*System.Diagnostics.Debug.Write:static end.*/

                /*System.Diagnostics.Debug.Write$3:static start.*/
                Write$3: function (message, category) {
                    if (category == null) {
                        System.Diagnostics.Debug.Write$2(message);
                    } else {
                        System.Diagnostics.Debug.Write$2((category || "") + ":" + (message || ""));
                    }
                },
                /*System.Diagnostics.Debug.Write$3:static end.*/

                /*System.Diagnostics.Debug.Write$1:static start.*/
                Write$1: function (value, category) {
                    System.Diagnostics.Debug.Write$3(value != null ? Bridge.toString(value) : null, category);
                },
                /*System.Diagnostics.Debug.Write$1:static end.*/

                /*System.Diagnostics.Debug.WriteIf$2:static start.*/
                WriteIf$2: function (condition, message) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$2(message);
                    }
                },
                /*System.Diagnostics.Debug.WriteIf$2:static end.*/

                /*System.Diagnostics.Debug.WriteIf:static start.*/
                WriteIf: function (condition, value) {
                    if (condition) {
                        System.Diagnostics.Debug.Write(value);
                    }
                },
                /*System.Diagnostics.Debug.WriteIf:static end.*/

                /*System.Diagnostics.Debug.WriteIf$3:static start.*/
                WriteIf$3: function (condition, message, category) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$3(message, category);
                    }
                },
                /*System.Diagnostics.Debug.WriteIf$3:static end.*/

                /*System.Diagnostics.Debug.WriteIf$1:static start.*/
                WriteIf$1: function (condition, value, category) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$1(value, category);
                    }
                },
                /*System.Diagnostics.Debug.WriteIf$1:static end.*/

                /*System.Diagnostics.Debug.WriteLineIf:static start.*/
                WriteLineIf: function (condition, value) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine(value);
                    }
                },
                /*System.Diagnostics.Debug.WriteLineIf:static end.*/

                /*System.Diagnostics.Debug.WriteLineIf$1:static start.*/
                WriteLineIf$1: function (condition, value, category) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$1(value, category);
                    }
                },
                /*System.Diagnostics.Debug.WriteLineIf$1:static end.*/

                /*System.Diagnostics.Debug.WriteLineIf$2:static start.*/
                WriteLineIf$2: function (condition, message) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$2(message);
                    }
                },
                /*System.Diagnostics.Debug.WriteLineIf$2:static end.*/

                /*System.Diagnostics.Debug.WriteLineIf$3:static start.*/
                WriteLineIf$3: function (condition, message, category) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$4(message, category);
                    }
                },
                /*System.Diagnostics.Debug.WriteLineIf$3:static end.*/

                /*System.Diagnostics.Debug.GetIndentString:static start.*/
                GetIndentString: function () {
                    var $t;
                    var indentCount = Bridge.Int.mul(System.Diagnostics.Debug.IndentSize, System.Diagnostics.Debug.IndentLevel);
                    if (System.Nullable.eq((System.Diagnostics.Debug.s_indentString != null ? System.Diagnostics.Debug.s_indentString.length : null), indentCount)) {
                        return System.Diagnostics.Debug.s_indentString;
                    }
                    return ($t = System.String.fromCharCount(32, indentCount), System.Diagnostics.Debug.s_indentString = $t, $t);
                },
                /*System.Diagnostics.Debug.GetIndentString:static end.*/

                /*System.Diagnostics.Debug.ShowAssertDialog:static start.*/
                ShowAssertDialog: function (stackTrace, message, detailMessage) {
                    if (System.Diagnostics.Debugger.IsAttached) {
                        debugger;
                    } else {
                        var ex = new System.Diagnostics.Debug.DebugAssertException(message, detailMessage, stackTrace);
                        System.Environment.FailFast$1(ex.Message, ex);
                    }
                },
                /*System.Diagnostics.Debug.ShowAssertDialog:static end.*/

                /*System.Diagnostics.Debug.WriteCore:static start.*/
                WriteCore: function (message) {
                    System.Diagnostics.Debug.WriteToDebugger(message);

                    if (System.Diagnostics.Debug.s_shouldWriteToStdErr) {
                        System.Diagnostics.Debug.WriteToStderr(message);
                    }
                },
                /*System.Diagnostics.Debug.WriteCore:static end.*/

                /*System.Diagnostics.Debug.WriteToDebugger:static start.*/
                WriteToDebugger: function (message) {
                    if (System.Diagnostics.Debugger.IsLogging()) {
                        System.Diagnostics.Debugger.Log(0, null, message);
                    } else {
                        System.Console.WriteLine(message);

                    }
                },
                /*System.Diagnostics.Debug.WriteToDebugger:static end.*/

                /*System.Diagnostics.Debug.WriteToStderr:static start.*/
                WriteToStderr: function (message) {
                    System.Console.WriteLine(message);







                },
                /*System.Diagnostics.Debug.WriteToStderr:static end.*/


            }
        }
    });
    /*System.Diagnostics.Debug end.*/
