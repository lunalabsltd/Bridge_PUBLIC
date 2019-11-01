    //System.IO.__Error start.
    Bridge.define("System.IO.__Error", {
        statics: {
            methods: {
                //System.IO.__Error.EndOfFile:static start.
                EndOfFile: function () {
                    throw new System.IO.EndOfStreamException.$ctor1("IO.EOF_ReadBeyondEOF");
                },
                //System.IO.__Error.EndOfFile:static end.

                //System.IO.__Error.FileNotOpen:static start.
                FileNotOpen: function () {
                    throw new System.Exception("ObjectDisposed_FileClosed");
                },
                //System.IO.__Error.FileNotOpen:static end.

                //System.IO.__Error.StreamIsClosed:static start.
                StreamIsClosed: function () {
                    throw new System.Exception("ObjectDisposed_StreamClosed");
                },
                //System.IO.__Error.StreamIsClosed:static end.

                //System.IO.__Error.MemoryStreamNotExpandable:static start.
                MemoryStreamNotExpandable: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_MemStreamNotExpandable");
                },
                //System.IO.__Error.MemoryStreamNotExpandable:static end.

                //System.IO.__Error.ReaderClosed:static start.
                ReaderClosed: function () {
                    throw new System.Exception("ObjectDisposed_ReaderClosed");
                },
                //System.IO.__Error.ReaderClosed:static end.

                //System.IO.__Error.ReadNotSupported:static start.
                ReadNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnreadableStream");
                },
                //System.IO.__Error.ReadNotSupported:static end.

                //System.IO.__Error.SeekNotSupported:static start.
                SeekNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnseekableStream");
                },
                //System.IO.__Error.SeekNotSupported:static end.

                //System.IO.__Error.WrongAsyncResult:static start.
                WrongAsyncResult: function () {
                    throw new System.ArgumentException.$ctor1("Arg_WrongAsyncResult");
                },
                //System.IO.__Error.WrongAsyncResult:static end.

                //System.IO.__Error.EndReadCalledTwice:static start.
                EndReadCalledTwice: function () {
                    throw new System.ArgumentException.$ctor1("InvalidOperation_EndReadCalledMultiple");
                },
                //System.IO.__Error.EndReadCalledTwice:static end.

                //System.IO.__Error.EndWriteCalledTwice:static start.
                EndWriteCalledTwice: function () {
                    throw new System.ArgumentException.$ctor1("InvalidOperation_EndWriteCalledMultiple");
                },
                //System.IO.__Error.EndWriteCalledTwice:static end.

                //System.IO.__Error.WriteNotSupported:static start.
                WriteNotSupported: function () {
                    throw new System.NotSupportedException.$ctor1("NotSupported_UnwritableStream");
                },
                //System.IO.__Error.WriteNotSupported:static end.

                //System.IO.__Error.WriterClosed:static start.
                WriterClosed: function () {
                    throw new System.Exception("ObjectDisposed_WriterClosed");
                },
                //System.IO.__Error.WriterClosed:static end.


            }
        }
    });
    //System.IO.__Error end.
