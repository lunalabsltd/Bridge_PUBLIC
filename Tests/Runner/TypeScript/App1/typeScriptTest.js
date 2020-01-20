Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*TypeScript.Issues.N2493Operation1 start.*/
    Bridge.define("N2493Operation1", {
        methods: {
            /*TypeScript.Issues.N2493Operation1.Add start.*/
            Add: function (n) {
                return ((n + 1) | 0);
            },
            /*TypeScript.Issues.N2493Operation1.Add end.*/


        }
    });
    /*TypeScript.Issues.N2493Operation1 end.*/

    /*TypeScript.Issues.N2493Operation2 start.*/
    Bridge.define("Operation2", {
        methods: {
            /*TypeScript.Issues.N2493Operation2.Add start.*/
            Add: function (n) {
                return ((n + 2) | 0);
            },
            /*TypeScript.Issues.N2493Operation2.Add end.*/


        }
    });
    /*TypeScript.Issues.N2493Operation2 end.*/
});
