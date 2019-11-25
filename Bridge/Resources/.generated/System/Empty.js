    /*System.Empty start.*/
    Bridge.define("System.Empty", {
        statics: {
            fields: {
                Value: null
            },
            ctors: {
                init: function () {
                    this.Value = new System.Empty();
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            /*System.Empty.toString start.*/
            toString: function () {
                return "";
            },
            /*System.Empty.toString end.*/


        }
    });
    /*System.Empty end.*/
