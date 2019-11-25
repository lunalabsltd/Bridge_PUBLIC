    /*System.IO.Stream+NullStream start.*/
    Bridge.define("System.IO.Stream.NullStream", {
        inherits: [System.IO.Stream],
        $kind: "nested class",
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanWrite: {
                get: function () {
                    return true;
                }
            },
            CanSeek: {
                get: function () {
                    return true;
                }
            },
            Length: {
                get: function () {
                    return System.Int64(0);
                }
            },
            Position: {
                get: function () {
                    return System.Int64(0);
                },
                set: function (value) { }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
            }
        },
        methods: {
            /*System.IO.Stream+NullStream.Dispose$1 start.*/
            Dispose$1: function (disposing) { },
            /*System.IO.Stream+NullStream.Dispose$1 end.*/

            /*System.IO.Stream+NullStream.Flush start.*/
            Flush: function () { },
            /*System.IO.Stream+NullStream.Flush end.*/

            /*System.IO.Stream+NullStream.BeginRead start.*/
            BeginRead: function (buffer, offset, count, callback, state) {
                if (!this.CanRead) {
                    System.IO.__Error.ReadNotSupported();
                }

                return this.BlockingBeginRead(buffer, offset, count, callback, state);
            },
            /*System.IO.Stream+NullStream.BeginRead end.*/

            /*System.IO.Stream+NullStream.EndRead start.*/
            EndRead: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException.$ctor1("asyncResult");
                }

                return System.IO.Stream.BlockingEndRead(asyncResult);
            },
            /*System.IO.Stream+NullStream.EndRead end.*/

            /*System.IO.Stream+NullStream.BeginWrite start.*/
            BeginWrite: function (buffer, offset, count, callback, state) {
                if (!this.CanWrite) {
                    System.IO.__Error.WriteNotSupported();
                }

                return this.BlockingBeginWrite(buffer, offset, count, callback, state);
            },
            /*System.IO.Stream+NullStream.BeginWrite end.*/

            /*System.IO.Stream+NullStream.EndWrite start.*/
            EndWrite: function (asyncResult) {
                if (asyncResult == null) {
                    throw new System.ArgumentNullException.$ctor1("asyncResult");
                }

                System.IO.Stream.BlockingEndWrite(asyncResult);
            },
            /*System.IO.Stream+NullStream.EndWrite end.*/

            /*System.IO.Stream+NullStream.Read start.*/
            Read: function (buffer, offset, count) {
                return 0;
            },
            /*System.IO.Stream+NullStream.Read end.*/

            /*System.IO.Stream+NullStream.ReadByte start.*/
            ReadByte: function () {
                return -1;
            },
            /*System.IO.Stream+NullStream.ReadByte end.*/

            /*System.IO.Stream+NullStream.Write start.*/
            Write: function (buffer, offset, count) { },
            /*System.IO.Stream+NullStream.Write end.*/

            /*System.IO.Stream+NullStream.WriteByte start.*/
            WriteByte: function (value) { },
            /*System.IO.Stream+NullStream.WriteByte end.*/

            /*System.IO.Stream+NullStream.Seek start.*/
            Seek: function (offset, origin) {
                return System.Int64(0);
            },
            /*System.IO.Stream+NullStream.Seek end.*/

            /*System.IO.Stream+NullStream.SetLength start.*/
            SetLength: function (length) { },
            /*System.IO.Stream+NullStream.SetLength end.*/


        }
    });
    /*System.IO.Stream+NullStream end.*/
