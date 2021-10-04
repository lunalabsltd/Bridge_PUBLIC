    /*System.IO.StringReader start.*/
    Bridge.define("System.IO.StringReader", {
        inherits: [System.IO.TextReader],
        fields: {
            _s: null,
            _pos: 0,
            _length: 0
        },
        ctors: {
            ctor: function (s) {
                this.$initialize();
                System.IO.TextReader.ctor.call(this);
                if (s == null) {
                    throw new System.ArgumentNullException.$ctor1("s");
                }
                this._s = s;
                this._length = s == null ? 0 : s.length;
            }
        },
        methods: {
            /*System.IO.StringReader.Close start.*/
            Close: function () {
                this.Dispose$1(true);
            },
            /*System.IO.StringReader.Close end.*/

            /*System.IO.StringReader.Dispose$1 start.*/
            Dispose$1: function (disposing) {
                this._s = null;
                this._pos = 0;
                this._length = 0;
                System.IO.TextReader.prototype.Dispose$1.call(this, disposing);
            },
            /*System.IO.StringReader.Dispose$1 end.*/

            /*System.IO.StringReader.Peek start.*/
            Peek: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                if (this._pos === this._length) {
                    return -1;
                }
                return this._s.charCodeAt(this._pos);
            },
            /*System.IO.StringReader.Peek end.*/

            /*System.IO.StringReader.Read start.*/
            Read: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                if (this._pos === this._length) {
                    return -1;
                }
                return this._s.charCodeAt(Bridge.identity(this._pos, ((this._pos = (this._pos + 1) | 0))));
            },
            /*System.IO.StringReader.Read end.*/

            /*System.IO.StringReader.Read$1 start.*/
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
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }

                var n = (this._length - this._pos) | 0;
                if (n > 0) {
                    if (n > count) {
                        n = count;
                    }
                    System.String.copyTo(this._s, this._pos, buffer, index, n);
                    this._pos = (this._pos + n) | 0;
                }
                return n;
            },
            /*System.IO.StringReader.Read$1 end.*/

            /*System.IO.StringReader.ReadToEnd start.*/
            ReadToEnd: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                var s;
                if (this._pos === 0) {
                    s = this._s;
                } else {
                    s = this._s.substr(this._pos, ((this._length - this._pos) | 0));
                }
                this._pos = this._length;
                return s;
            },
            /*System.IO.StringReader.ReadToEnd end.*/

            /*System.IO.StringReader.ReadLine start.*/
            ReadLine: function () {
                if (this._s == null) {
                    System.IO.__Error.ReaderClosed();
                }
                var i = this._pos;
                while (i < this._length) {
                    var ch = this._s.charCodeAt(i);
                    if (ch === 13 || ch === 10) {
                        var result = this._s.substr(this._pos, ((i - this._pos) | 0));
                        this._pos = (i + 1) | 0;
                        if (ch === 13 && this._pos < this._length && this._s.charCodeAt(this._pos) === 10) {
                            this._pos = (this._pos + 1) | 0;
                        }
                        return result;
                    }
                    i = (i + 1) | 0;
                }
                if (i > this._pos) {
                    var result1 = this._s.substr(this._pos, ((i - this._pos) | 0));
                    this._pos = i;
                    return result1;
                }
                return null;
            },
            /*System.IO.StringReader.ReadLine end.*/


        },
        overloads: {
            "Dispose(bool)": "Dispose$1",
            "Read(char[], int, int)": "Read$1"
        }
    });
    /*System.IO.StringReader end.*/
