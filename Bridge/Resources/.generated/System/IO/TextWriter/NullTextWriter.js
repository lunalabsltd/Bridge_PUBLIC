    //System.IO.TextWriter.NullTextWriter start.
    Bridge.define("System.IO.TextWriter.NullTextWriter", {
        inherits: [System.IO.TextWriter],
        $kind: "nested class",
        props: {
            Encoding: {
                get: function () {
                    return System.Text.Encoding.Default;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, System.Globalization.CultureInfo.invariantCulture);
            }
        },
        methods: {
            //System.IO.TextWriter.NullTextWriter.Write$3 start.
            Write$3: function (buffer, index, count) { },
            //System.IO.TextWriter.NullTextWriter.Write$3 end.

            //System.IO.TextWriter.NullTextWriter.Write$10 start.
            Write$10: function (value) { },
            //System.IO.TextWriter.NullTextWriter.Write$10 end.

            //System.IO.TextWriter.NullTextWriter.WriteLine start.
            WriteLine: function () { },
            //System.IO.TextWriter.NullTextWriter.WriteLine end.

            //System.IO.TextWriter.NullTextWriter.WriteLine$11 start.
            WriteLine$11: function (value) { },
            //System.IO.TextWriter.NullTextWriter.WriteLine$11 end.

            //System.IO.TextWriter.NullTextWriter.WriteLine$9 start.
            WriteLine$9: function (value) { },
            //System.IO.TextWriter.NullTextWriter.WriteLine$9 end.


        }
    });
    //System.IO.TextWriter.NullTextWriter end.
