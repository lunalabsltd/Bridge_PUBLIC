    //System.IO.StreamReader.NullStreamReader start.
    Bridge.define("System.IO.StreamReader.NullStreamReader", {
        inherits: [System.IO.StreamReader],
        $kind: "nested class",
        props: {
            BaseStream: {
                get: function () {
                    return System.IO.Stream.Null;
                }
            },
            CurrentEncoding: {
                get: function () {
                    return System.Text.Encoding.Unicode;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.StreamReader.ctor.call(this);
                this.Init(System.IO.Stream.Null);
            }
        },
        methods: {
            //System.IO.StreamReader.NullStreamReader.Dispose$1 start.
            Dispose$1: function (disposing) { },
            //System.IO.StreamReader.NullStreamReader.Dispose$1 end.

            //System.IO.StreamReader.NullStreamReader.Peek start.
            Peek: function () {
                return -1;
            },
            //System.IO.StreamReader.NullStreamReader.Peek end.

            //System.IO.StreamReader.NullStreamReader.Read start.
            Read: function () {
                return -1;
            },
            //System.IO.StreamReader.NullStreamReader.Read end.

            //System.IO.StreamReader.NullStreamReader.Read$1 start.
            Read$1: function (buffer, index, count) {
                return 0;
            },
            //System.IO.StreamReader.NullStreamReader.Read$1 end.

            //System.IO.StreamReader.NullStreamReader.ReadLine start.
            ReadLine: function () {
                return null;
            },
            //System.IO.StreamReader.NullStreamReader.ReadLine end.

            //System.IO.StreamReader.NullStreamReader.ReadToEnd start.
            ReadToEnd: function () {
                return "";
            },
            //System.IO.StreamReader.NullStreamReader.ReadToEnd end.

            //System.IO.StreamReader.NullStreamReader.ReadBuffer start.
            ReadBuffer: function () {
                return 0;
            },
            //System.IO.StreamReader.NullStreamReader.ReadBuffer end.


        }
    });
    //System.IO.StreamReader.NullStreamReader end.
