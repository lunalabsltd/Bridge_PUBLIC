Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*Misc.A.Class1 start.*/
    Bridge.define("Misc.A.Class1", {
        methods: {
            /*Misc.A.Class1.GetInt start.*/
            GetInt: function (i) {
                return i;
            },
            /*Misc.A.Class1.GetInt end.*/


        }
    });
    /*Misc.A.Class1 end.*/

    /*Misc.A.EnumTest start.*/
    Bridge.define("Misc.A.EnumTest", {
        methods: {
            /*Misc.A.EnumTest.DoSomething start.*/
            DoSomething: function (m) {
                return m;
            },
            /*Misc.A.EnumTest.DoSomething end.*/


        }
    });
    /*Misc.A.EnumTest end.*/

    /*Misc.A.EnumTest+EnumA start.*/
    Bridge.define("Misc.A.EnumTest.EnumA", {
        $kind: "nested enum",
        statics: {
            fields: {
                M1: 0,
                M2: 1
            }
        }
    });
    /*Misc.A.EnumTest+EnumA end.*/
});
