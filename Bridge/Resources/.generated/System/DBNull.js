    //System.DBNull start.
    Bridge.define("System.DBNull", {
        inherits: [System.Runtime.Serialization.ISerializable,System.IConvertible],
        statics: {
            fields: {
                Value: null
            },
            ctors: {
                init: function () {
                    this.Value = new System.DBNull();
                }
            }
        },
        alias: [
            "ToString", "System$IConvertible$ToString",
            "GetTypeCode", "System$IConvertible$GetTypeCode"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            //System.DBNull.toString start.
            toString: function () {
                return "";
            },
            //System.DBNull.toString end.

            //System.DBNull.ToString start.
            ToString: function (provider) {
                return "";
            },
            //System.DBNull.ToString end.

            //System.DBNull.GetTypeCode start.
            GetTypeCode: function () {
                return System.TypeCode.DBNull;
            },
            //System.DBNull.GetTypeCode end.

            //System.DBNull.System$IConvertible$ToBoolean start.
            System$IConvertible$ToBoolean: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToBoolean end.

            //System.DBNull.System$IConvertible$ToChar start.
            System$IConvertible$ToChar: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToChar end.

            //System.DBNull.System$IConvertible$ToSByte start.
            System$IConvertible$ToSByte: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToSByte end.

            //System.DBNull.System$IConvertible$ToByte start.
            System$IConvertible$ToByte: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToByte end.

            //System.DBNull.System$IConvertible$ToInt16 start.
            System$IConvertible$ToInt16: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToInt16 end.

            //System.DBNull.System$IConvertible$ToUInt16 start.
            System$IConvertible$ToUInt16: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToUInt16 end.

            //System.DBNull.System$IConvertible$ToInt32 start.
            System$IConvertible$ToInt32: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToInt32 end.

            //System.DBNull.System$IConvertible$ToUInt32 start.
            System$IConvertible$ToUInt32: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToUInt32 end.

            //System.DBNull.System$IConvertible$ToInt64 start.
            System$IConvertible$ToInt64: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToInt64 end.

            //System.DBNull.System$IConvertible$ToUInt64 start.
            System$IConvertible$ToUInt64: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToUInt64 end.

            //System.DBNull.System$IConvertible$ToSingle start.
            System$IConvertible$ToSingle: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToSingle end.

            //System.DBNull.System$IConvertible$ToDouble start.
            System$IConvertible$ToDouble: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToDouble end.

            //System.DBNull.System$IConvertible$ToDecimal start.
            System$IConvertible$ToDecimal: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToDecimal end.

            //System.DBNull.System$IConvertible$ToDateTime start.
            System$IConvertible$ToDateTime: function (provider) {
                throw new System.InvalidCastException.$ctor1("Object cannot be cast from DBNull to other types.");
            },
            //System.DBNull.System$IConvertible$ToDateTime end.

            //System.DBNull.System$IConvertible$ToType start.
            System$IConvertible$ToType: function (type, provider) {
                return System.Convert.defaultToType(Bridge.cast(this, System.IConvertible), type, provider);
            },
            //System.DBNull.System$IConvertible$ToType end.


        }
    });
    //System.DBNull end.
