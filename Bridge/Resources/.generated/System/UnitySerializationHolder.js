    //System.UnitySerializationHolder start.
    Bridge.define("System.UnitySerializationHolder", {
        inherits: [System.Runtime.Serialization.ISerializable,System.Runtime.Serialization.IObjectReference],
        statics: {
            fields: {
                NullUnity: 0
            },
            ctors: {
                init: function () {
                    this.NullUnity = 2;
                }
            }
        },
        alias: ["GetRealObject", "System$Runtime$Serialization$IObjectReference$GetRealObject"],
        methods: {
            //System.UnitySerializationHolder.GetRealObject start.
            GetRealObject: function (context) {
                throw System.NotImplemented.ByDesign;

            },
            //System.UnitySerializationHolder.GetRealObject end.


        }
    });
    //System.UnitySerializationHolder end.
