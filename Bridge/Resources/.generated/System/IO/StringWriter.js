    /*System.IO.StringWriter start.*/
    Bridge.define("System.IO.StringWriter", {
        inherits: [System.IO.TextWriter],
        statics: {
            fields: {
                m_encoding: null
            }
        },
        fields: {
            _sb: null,
            _isOpen: false
        },
        props: {
            Encoding: {
                get: function () {
                    if (System.IO.StringWriter.m_encoding == null) {
                        System.IO.StringWriter.m_encoding = new System.Text.UnicodeEncoding.$ctor1(false, false);
                    }
                    return System.IO.StringWriter.m_encoding;
                }
            }
        },
        ctors: {
            ctor: function () {
                System.IO.StringWriter.$ctor3.call(this, new System.Text.StringBuilder(), System.Globalization.CultureInfo.getCurrentCulture());
            },
            $ctor1: function (formatProvider) {
                System.IO.StringWriter.$ctor3.call(this, new System.Text.StringBuilder(), formatProvider);
            },
            $ctor2: function (sb) {
                System.IO.StringWriter.$ctor3.call(this, sb, System.Globalization.CultureInfo.getCurrentCulture());
            },
            $ctor3: function (sb, formatProvider) {
                this.$initialize();
                System.IO.TextWriter.$ctor1.call(this, formatProvider);
                if (sb == null) {
                    throw new System.ArgumentNullException.$ctor1("sb");
                }
                this._sb = sb;
                this._isOpen = true;
            }
        },
        methods: {
            /*System.IO.StringWriter.Close start.*/
            Close: function () {
                this.Dispose$1(true);
            },
            /*System.IO.StringWriter.Close end.*/

            /*System.IO.StringWriter.Dispose$1 start.*/
            Dispose$1: function (disposing) {
                this._isOpen = false;
                System.IO.TextWriter.prototype.Dispose$1.call(this, disposing);
            },
            /*System.IO.StringWriter.Dispose$1 end.*/

            /*System.IO.StringWriter.GetStringBuilder start.*/
            GetStringBuilder: function () {
                return this._sb;
            },
            /*System.IO.StringWriter.GetStringBuilder end.*/

            /*System.IO.StringWriter.Write$1 start.*/
            Write$1: function (value) {
                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }
                this._sb.append(String.fromCharCode(value));
            },
            /*System.IO.StringWriter.Write$1 end.*/

            /*System.IO.StringWriter.Write$3 start.*/
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

                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }

                this._sb.append(System.String.fromCharArray(buffer, index, count));
            },
            /*System.IO.StringWriter.Write$3 end.*/

            /*System.IO.StringWriter.Write$10 start.*/
            Write$10: function (value) {
                if (!this._isOpen) {
                    System.IO.__Error.WriterClosed();
                }
                if (value != null) {
                    this._sb.append(value);
                }
            },
            /*System.IO.StringWriter.Write$10 end.*/

            /*System.IO.StringWriter.toString start.*/
            toString: function () {
                return this._sb.toString();
            },
            /*System.IO.StringWriter.toString end.*/


        }
    });
    /*System.IO.StringWriter end.*/
