    //System.BitConverter start.
    Bridge.define("System.BitConverter", {
        statics: {
            fields: {
                isLittleEndian: false,
                arg_ArrayPlusOffTooSmall: null
            },
            ctors: {
                init: function () {
                    this.isLittleEndian = System.BitConverter.getIsLittleEndian();
                    this.arg_ArrayPlusOffTooSmall = "Destination array is not long enough to copy all the items in the collection. Check array index and length.";
                }
            },
            methods: {
                //System.BitConverter.getBytes:static start.
                getBytes: function (value) {
                    return value ? System.Array.init([1], System.Byte) : System.Array.init([0], System.Byte);
                },
                //System.BitConverter.getBytes:static end.

                //System.BitConverter.getBytes$1:static start.
                getBytes$1: function (value) {
                    return System.BitConverter.getBytes$3(Bridge.Int.sxs(value & 65535));
                },
                //System.BitConverter.getBytes$1:static end.

                //System.BitConverter.getBytes$3:static start.
                getBytes$3: function (value) {
                    var view = System.BitConverter.view(2);
                    view.setInt16(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$3:static end.

                //System.BitConverter.getBytes$4:static start.
                getBytes$4: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setInt32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$4:static end.

                //System.BitConverter.getBytes$5:static start.
                getBytes$5: function (value) {
                    var view = System.BitConverter.getView(value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$5:static end.

                //System.BitConverter.getBytes$7:static start.
                getBytes$7: function (value) {
                    var view = System.BitConverter.view(2);
                    view.setUint16(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$7:static end.

                //System.BitConverter.getBytes$8:static start.
                getBytes$8: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setUint32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$8:static end.

                //System.BitConverter.getBytes$9:static start.
                getBytes$9: function (value) {
                    var view = System.BitConverter.getView(System.Int64.clip64(value));

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$9:static end.

                //System.BitConverter.getBytes$6:static start.
                getBytes$6: function (value) {
                    var view = System.BitConverter.view(4);
                    view.setFloat32(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$6:static end.

                //System.BitConverter.getBytes$2:static start.
                getBytes$2: function (value) {
                    if (isNaN(value)) {
                        if (System.BitConverter.isLittleEndian) {
                            return System.Array.init([0, 0, 0, 0, 0, 0, 248, 255], System.Byte);
                        } else {
                            return System.Array.init([255, 248, 0, 0, 0, 0, 0, 0], System.Byte);
                        }
                    }

                    var view = System.BitConverter.view(8);
                    view.setFloat64(0, value);

                    return System.BitConverter.getViewBytes(view);
                },
                //System.BitConverter.getBytes$2:static end.

                //System.BitConverter.toChar:static start.
                toChar: function (value, startIndex) {
                    return ((System.BitConverter.toInt16(value, startIndex)) & 65535);
                },
                //System.BitConverter.toChar:static end.

                //System.BitConverter.toInt16:static start.
                toInt16: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 2);

                    var view = System.BitConverter.view(2);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getInt16(0);
                },
                //System.BitConverter.toInt16:static end.

                //System.BitConverter.toInt32:static start.
                toInt32: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 4);

                    var view = System.BitConverter.view(4);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getInt32(0);
                },
                //System.BitConverter.toInt32:static end.

                //System.BitConverter.toInt64:static start.
                toInt64: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 8);

                    var low = System.BitConverter.toInt32(value, startIndex);
                    var high = System.BitConverter.toInt32(value, ((startIndex + 4) | 0));

                    if (System.BitConverter.isLittleEndian) {
                        return System.Int64([low, high]);
                    }

                    return System.Int64([high, low]);
                },
                //System.BitConverter.toInt64:static end.

                //System.BitConverter.toUInt16:static start.
                toUInt16: function (value, startIndex) {
                    return ((System.BitConverter.toInt16(value, startIndex)) & 65535);
                },
                //System.BitConverter.toUInt16:static end.

                //System.BitConverter.toUInt32:static start.
                toUInt32: function (value, startIndex) {
                    return ((System.BitConverter.toInt32(value, startIndex)) >>> 0);
                },
                //System.BitConverter.toUInt32:static end.

                //System.BitConverter.toUInt64:static start.
                toUInt64: function (value, startIndex) {
                    var l = System.BitConverter.toInt64(value, startIndex);

                    return System.UInt64([l.value.low, l.value.high]);
                },
                //System.BitConverter.toUInt64:static end.

                //System.BitConverter.toSingle:static start.
                toSingle: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 4);

                    var view = System.BitConverter.view(4);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getFloat32(0);
                },
                //System.BitConverter.toSingle:static end.

                //System.BitConverter.toDouble:static start.
                toDouble: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 8);

                    var view = System.BitConverter.view(8);

                    System.BitConverter.setViewBytes(view, value, -1, startIndex);

                    return view.getFloat64(0);
                },
                //System.BitConverter.toDouble:static end.

                //System.BitConverter.toString$2:static start.
                toString$2: function (value, startIndex, length) {
                    if (value == null) {
                        throw new System.ArgumentNullException.$ctor1("value");
                    }

                    if (startIndex < 0 || startIndex >= value.length && startIndex > 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                    }

                    if (length < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("length");
                    }

                    if (startIndex > ((value.length - length) | 0)) {
                        throw new System.ArgumentException.$ctor1(System.BitConverter.arg_ArrayPlusOffTooSmall);
                    }

                    if (length === 0) {
                        return "";
                    }

                    if (length > (715827882)) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("length", Bridge.toString((715827882)));
                    }

                    var chArrayLength = Bridge.Int.mul(length, 3);

                    var chArray = System.Array.init(chArrayLength, 0, System.Char);
                    var i = 0;
                    var index = startIndex;

                    for (i = 0; i < chArrayLength; i = (i + 3) | 0) {
                        var b = value[System.Array.index(Bridge.identity(index, ((index = (index + 1) | 0))), value)];
                        chArray[System.Array.index(i, chArray)] = System.BitConverter.getHexValue(((Bridge.Int.div(b, 16)) | 0));
                        chArray[System.Array.index(((i + 1) | 0), chArray)] = System.BitConverter.getHexValue(b % 16);
                        chArray[System.Array.index(((i + 2) | 0), chArray)] = 45;
                    }

                    return System.String.fromCharArray(chArray, 0, ((chArray.length - 1) | 0));
                },
                //System.BitConverter.toString$2:static end.

                //System.BitConverter.toString:static start.
                toString: function (value) {
                    if (value == null) {
                        throw new System.ArgumentNullException.$ctor1("value");
                    }

                    return System.BitConverter.toString$2(value, 0, value.length);
                },
                //System.BitConverter.toString:static end.

                //System.BitConverter.toString$1:static start.
                toString$1: function (value, startIndex) {
                    if (value == null) {
                        throw new System.ArgumentNullException.$ctor1("value");
                    }

                    return System.BitConverter.toString$2(value, startIndex, ((value.length - startIndex) | 0));
                },
                //System.BitConverter.toString$1:static end.

                //System.BitConverter.toBoolean:static start.
                toBoolean: function (value, startIndex) {
                    System.BitConverter.checkArguments(value, startIndex, 1);

                    return (value[System.Array.index(startIndex, value)] === 0) ? false : true;
                },
                //System.BitConverter.toBoolean:static end.

                //System.BitConverter.doubleToInt64Bits:static start.
                doubleToInt64Bits: function (value) {
                    var view = System.BitConverter.view(8);
                    view.setFloat64(0, value);

                    return System.Int64([view.getInt32(4), view.getInt32(0)]);
                },
                //System.BitConverter.doubleToInt64Bits:static end.

                //System.BitConverter.int64BitsToDouble:static start.
                int64BitsToDouble: function (value) {
                    var view = System.BitConverter.getView(value);

                    return view.getFloat64(0);
                },
                //System.BitConverter.int64BitsToDouble:static end.

                //System.BitConverter.getHexValue:static start.
                getHexValue: function (i) {
                    if (i < 10) {
                        return ((((i + 48) | 0)) & 65535);
                    }

                    return ((((((i - 10) | 0) + 65) | 0)) & 65535);
                },
                //System.BitConverter.getHexValue:static end.

                //System.BitConverter.getViewBytes:static start.
                getViewBytes: function (view, count, startIndex) {
                    if (count === void 0) { count = -1; }
                    if (startIndex === void 0) { startIndex = 0; }
                    if (count === -1) {
                        count = view.byteLength;
                    }

                    var r = System.Array.init(count, 0, System.Byte);

                    if (System.BitConverter.isLittleEndian) {
                        for (var i = (count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            r[System.Array.index(i, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));
                        }
                    } else {
                        for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                            r[System.Array.index(i1, r)] = view.getUint8(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)));
                        }
                    }

                    return r;
                },
                //System.BitConverter.getViewBytes:static end.

                //System.BitConverter.setViewBytes:static start.
                setViewBytes: function (view, value, count, startIndex) {
                    if (count === void 0) { count = -1; }
                    if (startIndex === void 0) { startIndex = 0; }
                    if (count === -1) {
                        count = view.byteLength;
                    }

                    if (System.BitConverter.isLittleEndian) {
                        for (var i = (count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            view.setUint8(i, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);
                        }
                    } else {
                        for (var i1 = 0; i1 < count; i1 = (i1 + 1) | 0) {
                            view.setUint8(i1, value[System.Array.index(Bridge.identity(startIndex, (startIndex = (startIndex + 1) | 0)), value)]);
                        }
                    }
                },
                //System.BitConverter.setViewBytes:static end.

                //System.BitConverter.view:static start.
                view: function (length) {
                    var buffer = new ArrayBuffer(length);
                    var view = new DataView(buffer);

                    return view;
                },
                //System.BitConverter.view:static end.

                //System.BitConverter.getView:static start.
                getView: function (value) {
                    var view = System.BitConverter.view(8);

                    view.setInt32(4, value.value.low);
                    view.setInt32(0, value.value.high);

                    return view;
                },
                //System.BitConverter.getView:static end.

                //System.BitConverter.getIsLittleEndian:static start.
                getIsLittleEndian: function () {
                    var view = System.BitConverter.view(2);

                    view.setUint8(0, 170);
                    view.setUint8(1, 187);

                    if (view.getUint16(0) === 43707) {
                        return true;
                    }

                    return false;
                },
                //System.BitConverter.getIsLittleEndian:static end.

                //System.BitConverter.checkArguments:static start.
                checkArguments: function (value, startIndex, size) {
                    if (value == null) {
                        throw new System.ArgumentNullException.$ctor1("null");
                    }

                    if (System.Int64((startIndex >>> 0)).gte(System.Int64(value.length))) {
                        throw new System.ArgumentOutOfRangeException.$ctor1("startIndex");
                    }

                    if (startIndex > ((value.length - size) | 0)) {
                        throw new System.ArgumentException.$ctor1(System.BitConverter.arg_ArrayPlusOffTooSmall);
                    }
                },
                //System.BitConverter.checkArguments:static end.


            }
        }
    });
    //System.BitConverter end.
