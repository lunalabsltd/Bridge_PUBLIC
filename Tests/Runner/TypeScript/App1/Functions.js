Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*Functions.DelegateClass start.*/
    Bridge.define("Functions.DelegateClass", {
        fields: {
            MethodVoidDelegate: null,
            MethodStringDelegate: null,
            MethodStringDelegateIntResult: null
        }
    });
    /*Functions.DelegateClass end.*/

    /*Functions.DelegateInterface start.*/
    Bridge.define("Functions.DelegateInterface", {
        $kind: "interface"
    });
    /*Functions.DelegateInterface end.*/

    /*Functions.Delegates start.*/
    Bridge.define("Functions.Delegates");
    /*Functions.Delegates end.*/

    /*Functions.MiddleBit start.*/
    Bridge.define("Functions.MiddleBit", {
        fields: {
            fn: null
        }
    });
    /*Functions.MiddleBit end.*/

    /*Functions.Parameters start.*/
    Bridge.define("Functions.Parameters", {
        methods: {
            /*Functions.Parameters.GetSomething start.*/
            GetSomething: function (i) {
                if (i === void 0) { i = 5; }
                return i;
            },
            /*Functions.Parameters.GetSomething end.*/

            /*Functions.Parameters.Join start.*/
            Join: function (numbers) {
                if (numbers === void 0) { numbers = []; }
                var s = "";
                for (var i = 0; i < numbers.length; i = (i + 1) | 0) {
                    s = (s || "") + numbers[System.Array.index(i, numbers)];
                }

                return s;
            },
            /*Functions.Parameters.Join end.*/


        }
    });
    /*Functions.Parameters end.*/
});
