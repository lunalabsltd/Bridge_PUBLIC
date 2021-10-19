    /*System.IO.TextReader start.*/
    Bridge.define("System.IO.TextReader", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.TextReader.NullTextReader();
                }
            },
            methods: {
                /*System.IO.TextReader.Synchronized:static start.*/
                Synchronized: function (reader) {
                    if (reader == null) {
                        throw new System.ArgumentNullException.$ctor1("reader");
                    }

                    return reader;
                },
                /*System.IO.TextReader.Synchronized:static end.*/


            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            /*System.IO.TextReader.Close start.*/
            Close: function () {
                this.Dispose$1(true);
            },
            /*System.IO.TextReader.Close end.*/

            /*System.IO.TextReader.Dispose start.*/
            Dispose: function () {
                this.Dispose$1(true);
            },
            /*System.IO.TextReader.Dispose end.*/

            /*System.IO.TextReader.Dispose$1 start.*/
            Dispose$1: function (disposing) { },
            /*System.IO.TextReader.Dispose$1 end.*/

            /*System.IO.TextReader.Peek start.*/
            Peek: function () {

                return -1;
            },
            /*System.IO.TextReader.Peek end.*/

            /*System.IO.TextReader.Read start.*/
            Read: function () {
                return -1;
            },
            /*System.IO.TextReader.Read end.*/

            /*System.IO.TextReader.Read$1 start.*/
            Read$1: function (buffer, index, count) {
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

                var n = 0;
                do {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    buffer[System.Array.index(((index + Bridge.identity(n, ((n = (n + 1) | 0)))) | 0), buffer)] = ch & 65535;
                } while (n < count);
                return n;
            },
            /*System.IO.TextReader.Read$1 end.*/

            /*System.IO.TextReader.ReadToEndAsync start.*/
            ReadToEndAsync: function () {
                return System.Threading.Tasks.Task.fromResult(this.ReadToEnd(), System.String);
            },
            /*System.IO.TextReader.ReadToEndAsync end.*/

            /*System.IO.TextReader.ReadToEnd start.*/
            ReadToEnd: function () {

                var chars = System.Array.init(4096, 0, System.Char);
                var len;
                var sb = new System.Text.StringBuilder("", 4096);
                while (((len = this.Read$1(chars, 0, chars.length))) !== 0) {
                    sb.append(System.String.fromCharArray(chars, 0, len));
                }
                return sb.toString();
            },
            /*System.IO.TextReader.ReadToEnd end.*/

            /*System.IO.TextReader.ReadBlock start.*/
            ReadBlock: function (buffer, index, count) {

                var i, n = 0;
                do {
                    n = (n + ((i = this.Read$1(buffer, ((index + n) | 0), ((count - n) | 0))))) | 0;
                } while (i > 0 && n < count);
                return n;
            },
            /*System.IO.TextReader.ReadBlock end.*/

            /*System.IO.TextReader.ReadLine start.*/
            ReadLine: function () {
                var sb = new System.Text.StringBuilder();
                while (true) {
                    var ch = this.Read();
                    if (ch === -1) {
                        break;
                    }
                    if (ch === 13 || ch === 10) {
                        if (ch === 13 && this.Peek() === 10) {
                            this.Read();
                        }
                        return sb.toString();
                    }
                    sb.append(String.fromCharCode((ch & 65535)));
                }
                if (sb.getLength() > 0) {
                    return sb.toString();
                }
                return null;
            },
            /*System.IO.TextReader.ReadLine end.*/


        },
        overloads: {
            "Dispose(bool)": "Dispose$1",
            "Read(char[], int, int)": "Read$1"
        }
    });
    /*System.IO.TextReader end.*/
