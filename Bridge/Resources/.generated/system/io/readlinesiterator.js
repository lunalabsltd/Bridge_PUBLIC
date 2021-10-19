    /*System.IO.ReadLinesIterator start.*/
    Bridge.define("System.IO.ReadLinesIterator", {
        inherits: [System.IO.Iterator$1(System.String)],
        statics: {
            methods: {
                /*System.IO.ReadLinesIterator.CreateIterator:static start.*/
                CreateIterator: function (path, encoding) {
                    return System.IO.ReadLinesIterator.CreateIterator$1(path, encoding, null);
                },
                /*System.IO.ReadLinesIterator.CreateIterator:static end.*/

                /*System.IO.ReadLinesIterator.CreateIterator$1:static start.*/
                CreateIterator$1: function (path, encoding, reader) {
                    return new System.IO.ReadLinesIterator(path, encoding, reader || new System.IO.StreamReader.$ctor9(path, encoding));
                },
                /*System.IO.ReadLinesIterator.CreateIterator$1:static end.*/


            }
        },
        fields: {
            _path: null,
            _encoding: null,
            _reader: null
        },
        alias: ["moveNext", "System$Collections$IEnumerator$moveNext"],
        ctors: {
            ctor: function (path, encoding, reader) {
                this.$initialize();
                System.IO.Iterator$1(System.String).ctor.call(this);

                this._path = path;
                this._encoding = encoding;
                this._reader = reader;
            }
        },
        methods: {
            /*System.IO.ReadLinesIterator.moveNext start.*/
            moveNext: function () {
                if (this._reader != null) {
                    this.current = this._reader.ReadLine();
                    if (this.current != null) {
                        return true;
                    }

                    this.Dispose();
                }

                return false;
            },
            /*System.IO.ReadLinesIterator.moveNext end.*/

            /*System.IO.ReadLinesIterator.Clone start.*/
            Clone: function () {
                return System.IO.ReadLinesIterator.CreateIterator$1(this._path, this._encoding, this._reader);
            },
            /*System.IO.ReadLinesIterator.Clone end.*/

            /*System.IO.ReadLinesIterator.Dispose$1 start.*/
            Dispose$1: function (disposing) {
                try {
                    if (disposing) {
                        if (this._reader != null) {
                            this._reader.Dispose();
                        }
                    }
                } finally {
                    this._reader = null;
                    System.IO.Iterator$1(System.String).prototype.Dispose$1.call(this, disposing);
                }
            },
            /*System.IO.ReadLinesIterator.Dispose$1 end.*/


        },
        overloads: {
            "MoveNext()": "moveNext",
            "Dispose(bool)": "Dispose$1"
        }
    });
    /*System.IO.ReadLinesIterator end.*/
