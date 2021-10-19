Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*Interfaces.Interface1 start.*/
    Bridge.define("Interfaces.Interface1", {
        $kind: "interface"
    });
    /*Interfaces.Interface1 end.*/

    /*Interfaces.Interface4 start.*/
    Bridge.define("Interfaces.Interface4", {
        $kind: "interface"
    });
    /*Interfaces.Interface4 end.*/

    /*Interfaces.Interface6 start.*/
    Bridge.define("Interfaces.Interface6", {
        $kind: "interface"
    });
    /*Interfaces.Interface6 end.*/

    /*Interfaces.Interface61 start.*/
    Bridge.define("Interfaces.Interface61", {
        $kind: "interface"
    });
    /*Interfaces.Interface61 end.*/

    /*Interfaces.Interface62 start.*/
    Bridge.define("Interfaces.Interface62", {
        $kind: "interface"
    });
    /*Interfaces.Interface62 end.*/

    /*Interfaces.Class1 start.*/
    Bridge.define("Interfaces.Class1", {
        inherits: [Interfaces.Interface1],
        fields: {
            Field: 0,
            property: 0
        },
        props: {
            Property: {
                get: function () {
                    return this.property;
                },
                set: function (value) {
                    this.property = value;
                }
            }
        },
        alias: ["Property", "Interfaces$Interface1$Property"],
        ctors: {
            init: function () {
                this.Field = 200;
                this.property = 100;
            }
        }
    });
    /*Interfaces.Class1 end.*/

    /*Interfaces.Interface2 start.*/
    Bridge.define("Interfaces.Interface2", {
        inherits: [Interfaces.Interface1],
        $kind: "interface"
    });
    /*Interfaces.Interface2 end.*/

    /*Interfaces.Class4 start.*/
    Bridge.define("Interfaces.Class4", {
        inherits: [Interfaces.Interface4],
        alias: [
            "Method6", "Interfaces$Interface4$Method6",
            "Method7", "Interfaces$Interface4$Method7",
            "Method8", "Interfaces$Interface4$Method8",
            "Method9", "Interfaces$Interface4$Method9",
            "Method10", "Interfaces$Interface4$Method10"
        ],
        methods: {
            /*Interfaces.Class4.Method6 start.*/
            Method6: function (b) {
                b.v = true;
            },
            /*Interfaces.Class4.Method6 end.*/

            /*Interfaces.Class4.Method7 start.*/
            Method7: function (i, b) {
                b.v = true;
            },
            /*Interfaces.Class4.Method7 end.*/

            /*Interfaces.Class4.Method8 start.*/
            Method8: function (s) {
                s.v = (s.v || "") + "Method8";
            },
            /*Interfaces.Class4.Method8 end.*/

            /*Interfaces.Class4.Method9 start.*/
            Method9: function (i, s) {
                s.v = (s.v || "") + i;
            },
            /*Interfaces.Class4.Method9 end.*/

            /*Interfaces.Class4.Method10 start.*/
            Method10: function (i, b, s) {
                b.v = true;
                s.v = (s.v || "") + i;
            },
            /*Interfaces.Class4.Method10 end.*/


        }
    });
    /*Interfaces.Class4 end.*/

    /*Interfaces.Class6 start.*/
    Bridge.define("Interfaces.Class6", {
        inherits: [Interfaces.Interface6],
        props: {
            Property: 0,
            MethodProperty: 0
        },
        alias: [
            "Property", "Interfaces$Interface6$Property",
            "GetProperty", "Interfaces$Interface6$GetProperty",
            "SetProperty$1", "Interfaces$Interface6$SetProperty$1",
            "SetProperty", "Interfaces$Interface6$SetProperty"
        ],
        methods: {
            /*Interfaces.Class6.GetProperty start.*/
            GetProperty: function () {
                return this.MethodProperty;
            },
            /*Interfaces.Class6.GetProperty end.*/

            /*Interfaces.Class6.SetProperty$1 start.*/
            SetProperty$1: function (s) {
                this.MethodProperty = s.length;
            },
            /*Interfaces.Class6.SetProperty$1 end.*/

            /*Interfaces.Class6.SetProperty start.*/
            SetProperty: function (i) {
                this.MethodProperty = i;
            },
            /*Interfaces.Class6.SetProperty end.*/


        },
        overloads: {
            "SetProperty(string)": "SetProperty$1"
        }
    });
    /*Interfaces.Class6 end.*/

    /*Interfaces.Class2 start.*/
    Bridge.define("Interfaces.Class2", {
        inherits: [Interfaces.Class1,Interfaces.Interface2],
        alias: [
            "Method1", "Interfaces$Interface2$Method1",
            "Method2", "Interfaces$Interface2$Method2",
            "Method3", "Interfaces$Interface2$Method3",
            "Method4", "Interfaces$Interface2$Method4"
        ],
        methods: {
            /*Interfaces.Class2.Method1 start.*/
            Method1: function () {
                this.Field = 1;
                this.Property = 2;
            },
            /*Interfaces.Class2.Method1 end.*/

            /*Interfaces.Class2.Method2 start.*/
            Method2: function (s) {
                this.Field = s.length;
            },
            /*Interfaces.Class2.Method2 end.*/

            /*Interfaces.Class2.Method3 start.*/
            Method3: function () {
                return this.Field;
            },
            /*Interfaces.Class2.Method3 end.*/

            /*Interfaces.Class2.Method4 start.*/
            Method4: function (i) {
                this.Field = i.Interfaces$Interface1$Property;

                return true;
            },
            /*Interfaces.Class2.Method4 end.*/


        }
    });
    /*Interfaces.Class2 end.*/

    /*Interfaces.Interface3 start.*/
    Bridge.define("Interfaces.Interface3", {
        inherits: [Interfaces.Interface2],
        $kind: "interface"
    });
    /*Interfaces.Interface3 end.*/

    /*Interfaces.Class3 start.*/
    Bridge.define("Interfaces.Class3", {
        inherits: [Interfaces.Class2,Interfaces.Interface3],
        alias: ["Method5", "Interfaces$Interface3$Method5"],
        methods: {
            /*Interfaces.Class3.Method5 start.*/
            Method5: function (i) {
                return i;
            },
            /*Interfaces.Class3.Method5 end.*/


        }
    });
    /*Interfaces.Class3 end.*/
});
