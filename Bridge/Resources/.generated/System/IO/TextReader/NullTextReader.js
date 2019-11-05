    //System.IO.TextReader+NullTextReader start.
    Bridge.define("System.IO.TextReader.NullTextReader", {
        inherits: [System.IO.TextReader],
        $kind: "nested class",
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
            }
        },
        methods: {
            //System.IO.TextReader+NullTextReader.Read$1 start.
            Read$1: function (buffer, index, count) {
                return 0;
            },
            //System.IO.TextReader+NullTextReader.Read$1 end.

            //System.IO.TextReader+NullTextReader.ReadLine start.
            ReadLine: function () {
                return null;
            },
            //System.IO.TextReader+NullTextReader.ReadLine end.


        }
    });
    //System.IO.TextReader+NullTextReader end.
