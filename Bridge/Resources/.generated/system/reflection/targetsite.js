    /*System.Reflection.TargetSite start.*/
    Bridge.define("System.Reflection.TargetSite", {
        fields: {
            methodName: null
        },
        ctors: {
            ctor: function (methodName) {
                this.$initialize();
                System.Object.call(this);
                this.methodName = methodName;
            }
        },
        methods: {
            /*System.Reflection.TargetSite.toString start.*/
            toString: function () {
                return this.methodName;
            },
            /*System.Reflection.TargetSite.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*System.Reflection.TargetSite end.*/
