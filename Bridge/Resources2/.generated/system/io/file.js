    /*System.IO.File start.*/
    Bridge.define("System.IO.File", {
        statics: {
            methods: {
                /*System.IO.File.OpenText:static start.*/
                OpenText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    return new System.IO.StreamReader.$ctor7(path);
                },
                /*System.IO.File.OpenText:static end.*/

                /*System.IO.File.OpenRead:static start.*/
                OpenRead: function (path) {
                    return new System.IO.FileStream.$ctor1(path, 3);
                },
                /*System.IO.File.OpenRead:static end.*/

                /*System.IO.File.ReadAllText:static start.*/
                ReadAllText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, System.Text.Encoding.UTF8, true);
                },
                /*System.IO.File.ReadAllText:static end.*/

                /*System.IO.File.ReadAllText$1:static start.*/
                ReadAllText$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, encoding, true);
                },
                /*System.IO.File.ReadAllText$1:static end.*/

                /*System.IO.File.InternalReadAllText:static start.*/
                InternalReadAllText: function (path, encoding, checkHost) {

                    var sr = new System.IO.StreamReader.$ctor12(path, encoding, true, System.IO.StreamReader.DefaultBufferSize, checkHost);
                    try {
                        return sr.ReadToEnd();
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$Dispose();
                        }
                    }
                },
                /*System.IO.File.InternalReadAllText:static end.*/

                /*System.IO.File.ReadAllBytes:static start.*/
                ReadAllBytes: function (path) {
                    return System.IO.File.InternalReadAllBytes(path, true);
                },
                /*System.IO.File.ReadAllBytes:static end.*/

                /*System.IO.File.InternalReadAllBytes:static start.*/
                InternalReadAllBytes: function (path, checkHost) {
                    var bytes;
                    var fs = new System.IO.FileStream.$ctor1(path, 3);
                    try {
                        var index = 0;
                        var fileLength = fs.Length;
                        if (fileLength.gt(System.Int64(2147483647))) {
                            throw new System.IO.IOException.$ctor1("IO.IO_FileTooLong2GB");
                        }
                        var count = System.Int64.clip32(fileLength);
                        bytes = System.Array.init(count, 0, System.Byte);
                        while (count > 0) {
                            var n = fs.Read(bytes, index, count);
                            if (n === 0) {
                                System.IO.__Error.EndOfFile();
                            }
                            index = (index + n) | 0;
                            count = (count - n) | 0;
                        }
                    }
                    finally {
                        if (Bridge.hasValue(fs)) {
                            fs.System$IDisposable$Dispose();
                        }
                    }
                    return bytes;
                },
                /*System.IO.File.InternalReadAllBytes:static end.*/

                /*System.IO.File.ReadAllLines:static start.*/
                ReadAllLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, System.Text.Encoding.UTF8);
                },
                /*System.IO.File.ReadAllLines:static end.*/

                /*System.IO.File.ReadAllLines$1:static start.*/
                ReadAllLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, encoding);
                },
                /*System.IO.File.ReadAllLines$1:static end.*/

                /*System.IO.File.InternalReadAllLines:static start.*/
                InternalReadAllLines: function (path, encoding) {

                    var line;
                    var lines = new (System.Collections.Generic.List$1(System.String)).ctor();

                    var sr = new System.IO.StreamReader.$ctor9(path, encoding);
                    try {
                        while (((line = sr.ReadLine())) != null) {
                            lines.add(line);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$Dispose();
                        }
                    }

                    return lines.ToArray();
                },
                /*System.IO.File.InternalReadAllLines:static end.*/

                /*System.IO.File.ReadLines:static start.*/
                ReadLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor3("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, System.Text.Encoding.UTF8);
                },
                /*System.IO.File.ReadLines:static end.*/

                /*System.IO.File.ReadLines$1:static start.*/
                ReadLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor3("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, encoding);
                },
                /*System.IO.File.ReadLines$1:static end.*/

                /*System.IO.File.OpenWrite:static start.*/
                OpenWrite: function (path) {
                    console.warn('Not implemented in Luna');
                    return null;
                },
                /*System.IO.File.OpenWrite:static end.*/


            }
        }
    });
    /*System.IO.File end.*/
