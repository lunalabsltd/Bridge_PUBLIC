    /*System.IO.TextWriter start.*/
    Bridge.define("System.IO.TextWriter", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                InitialNewLine: null,
                Null: null
            },
            ctors: {
                init: function () {
                    this.InitialNewLine = "\r\n";
                    this.Null = new System.IO.TextWriter.NullTextWriter();
                }
            },
            methods: {
                /*System.IO.TextWriter.Synchronized:static start.*/
                Synchronized: function (writer) {
                    if (writer == null) {
                        throw new System.ArgumentNullException.$ctor1("writer");
                    }

                    return writer;
                },
                /*System.IO.TextWriter.Synchronized:static end.*/


            }
        },
        fields: {
            CoreNewLine: null,
            InternalFormatProvider: null
        },
        props: {
            FormatProvider: {
                get: function () {
                    if (this.InternalFormatProvider == null) {
                        return System.Globalization.CultureInfo.getCurrentCulture();
                    } else {
                        return this.InternalFormatProvider;
                    }
                }
            },
            NewLine: {
                get: function () {
                    return System.String.fromCharArray(this.CoreNewLine);
                },
                set: function (value) {
                    if (value == null) {
                        value = System.IO.TextWriter.InitialNewLine;
                    }
                    this.CoreNewLine = System.String.toCharArray(value, 0, value.length);
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            init: function () {
                this.CoreNewLine = System.Array.init([13, 10], System.Char);
            },
            ctor: function () {
                this.$initialize();
                this.InternalFormatProvider = null;
            },
            $ctor1: function (formatProvider) {
                this.$initialize();
                this.InternalFormatProvider = formatProvider;
            }
        },
        methods: {
            /*System.IO.TextWriter.Close start.*/
            Close: function () {
                this.Dispose$1(true);
            },
            /*System.IO.TextWriter.Close end.*/

            /*System.IO.TextWriter.Dispose$1 start.*/
            Dispose$1: function (disposing) { },
            /*System.IO.TextWriter.Dispose$1 end.*/

            /*System.IO.TextWriter.Dispose start.*/
            Dispose: function () {
                this.Dispose$1(true);
            },
            /*System.IO.TextWriter.Dispose end.*/

            /*System.IO.TextWriter.Flush start.*/
            Flush: function () { },
            /*System.IO.TextWriter.Flush end.*/

            /*System.IO.TextWriter.Write$1 start.*/
            Write$1: function (value) { },
            /*System.IO.TextWriter.Write$1 end.*/

            /*System.IO.TextWriter.Write$2 start.*/
            Write$2: function (buffer) {
                if (buffer != null) {
                    this.Write$3(buffer, 0, buffer.length);
                }
            },
            /*System.IO.TextWriter.Write$2 end.*/

            /*System.IO.TextWriter.Write$3 start.*/
            Write$3: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    this.Write$1(buffer[System.Array.index(((index + i) | 0), buffer)]);
                }
            },
            /*System.IO.TextWriter.Write$3 end.*/

            /*System.IO.TextWriter.Write start.*/
            Write: function (value) {
                this.Write$10(value ? System.Boolean.trueString : System.Boolean.falseString);
            },
            /*System.IO.TextWriter.Write end.*/

            /*System.IO.TextWriter.Write$6 start.*/
            Write$6: function (value) {
                this.Write$10(System.Int32.format(value, "G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$6 end.*/

            /*System.IO.TextWriter.Write$15 start.*/
            Write$15: function (value) {
                this.Write$10(System.UInt32.format(value, "G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$15 end.*/

            /*System.IO.TextWriter.Write$7 start.*/
            Write$7: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$7 end.*/

            /*System.IO.TextWriter.Write$16 start.*/
            Write$16: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$16 end.*/

            /*System.IO.TextWriter.Write$9 start.*/
            Write$9: function (value) {
                this.Write$10(System.Single.format(value, "G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$9 end.*/

            /*System.IO.TextWriter.Write$5 start.*/
            Write$5: function (value) {
                this.Write$10(System.Double.format(value, "G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$5 end.*/

            /*System.IO.TextWriter.Write$4 start.*/
            Write$4: function (value) {
                this.Write$10(Bridge.Int.format(value, "G", this.FormatProvider));
            },
            /*System.IO.TextWriter.Write$4 end.*/

            /*System.IO.TextWriter.Write$10 start.*/
            Write$10: function (value) {
                if (value != null) {
                    this.Write$2(System.String.toCharArray(value, 0, value.length));
                }
            },
            /*System.IO.TextWriter.Write$10 end.*/

            /*System.IO.TextWriter.Write$8 start.*/
            Write$8: function (value) {
                if (value != null) {
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.Write$10(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.Write$10(Bridge.toString(value));
                    }
                }
            },
            /*System.IO.TextWriter.Write$8 end.*/

            /*System.IO.TextWriter.Write$11 start.*/
            Write$11: function (format, arg0) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, [arg0]));
            },
            /*System.IO.TextWriter.Write$11 end.*/

            /*System.IO.TextWriter.Write$12 start.*/
            Write$12: function (format, arg0, arg1) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            /*System.IO.TextWriter.Write$12 end.*/

            /*System.IO.TextWriter.Write$13 start.*/
            Write$13: function (format, arg0, arg1, arg2) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            /*System.IO.TextWriter.Write$13 end.*/

            /*System.IO.TextWriter.Write$14 start.*/
            Write$14: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.Write$10(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            },
            /*System.IO.TextWriter.Write$14 end.*/

            /*System.IO.TextWriter.WriteLine start.*/
            WriteLine: function () {
                this.Write$2(this.CoreNewLine);
            },
            /*System.IO.TextWriter.WriteLine end.*/

            /*System.IO.TextWriter.WriteLine$2 start.*/
            WriteLine$2: function (value) {
                this.Write$1(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$2 end.*/

            /*System.IO.TextWriter.WriteLine$3 start.*/
            WriteLine$3: function (buffer) {
                this.Write$2(buffer);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$3 end.*/

            /*System.IO.TextWriter.WriteLine$4 start.*/
            WriteLine$4: function (buffer, index, count) {
                this.Write$3(buffer, index, count);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$4 end.*/

            /*System.IO.TextWriter.WriteLine$1 start.*/
            WriteLine$1: function (value) {
                this.Write(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$1 end.*/

            /*System.IO.TextWriter.WriteLine$7 start.*/
            WriteLine$7: function (value) {
                this.Write$6(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$7 end.*/

            /*System.IO.TextWriter.WriteLine$16 start.*/
            WriteLine$16: function (value) {
                this.Write$15(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$16 end.*/

            /*System.IO.TextWriter.WriteLine$8 start.*/
            WriteLine$8: function (value) {
                this.Write$7(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$8 end.*/

            /*System.IO.TextWriter.WriteLine$17 start.*/
            WriteLine$17: function (value) {
                this.Write$16(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$17 end.*/

            /*System.IO.TextWriter.WriteLine$10 start.*/
            WriteLine$10: function (value) {
                this.Write$9(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$10 end.*/

            /*System.IO.TextWriter.WriteLine$6 start.*/
            WriteLine$6: function (value) {
                this.Write$5(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$6 end.*/

            /*System.IO.TextWriter.WriteLine$5 start.*/
            WriteLine$5: function (value) {
                this.Write$4(value);
                this.WriteLine();
            },
            /*System.IO.TextWriter.WriteLine$5 end.*/

            /*System.IO.TextWriter.WriteLine$11 start.*/
            WriteLine$11: function (value) {

                if (value == null) {
                    this.WriteLine();
                } else {
                    var vLen = value.length;
                    var nlLen = this.CoreNewLine.length;
                    var chars = System.Array.init(((vLen + nlLen) | 0), 0, System.Char);
                    System.String.copyTo(value, 0, chars, 0, vLen);
                    if (nlLen === 2) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                        chars[System.Array.index(((vLen + 1) | 0), chars)] = this.CoreNewLine[System.Array.index(1, this.CoreNewLine)];
                    } else if (nlLen === 1) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                    } else {
                        System.Array.copy(this.CoreNewLine, 0, chars, Bridge.Int.mul(vLen, 2), Bridge.Int.mul(nlLen, 2));
                    }
                    this.Write$3(chars, 0, ((vLen + nlLen) | 0));
                }
                /* 
                Write(value);  // We could call Write(String) on StreamWriter...
                WriteLine();
                */
            },
            /*System.IO.TextWriter.WriteLine$11 end.*/

            /*System.IO.TextWriter.WriteLine$9 start.*/
            WriteLine$9: function (value) {
                if (value == null) {
                    this.WriteLine();
                } else {
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.WriteLine$11(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.WriteLine$11(Bridge.toString(value));
                    }
                }
            },
            /*System.IO.TextWriter.WriteLine$9 end.*/

            /*System.IO.TextWriter.WriteLine$12 start.*/
            WriteLine$12: function (format, arg0) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, [arg0]));
            },
            /*System.IO.TextWriter.WriteLine$12 end.*/

            /*System.IO.TextWriter.WriteLine$13 start.*/
            WriteLine$13: function (format, arg0, arg1) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            /*System.IO.TextWriter.WriteLine$13 end.*/

            /*System.IO.TextWriter.WriteLine$14 start.*/
            WriteLine$14: function (format, arg0, arg1, arg2) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            /*System.IO.TextWriter.WriteLine$14 end.*/

            /*System.IO.TextWriter.WriteLine$15 start.*/
            WriteLine$15: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.WriteLine$11(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            },
            /*System.IO.TextWriter.WriteLine$15 end.*/


        }
    });
    /*System.IO.TextWriter end.*/
