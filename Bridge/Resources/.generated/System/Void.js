    /*System.Void start.*/
    Bridge.define("System.Void", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Void(); }
            }
        },
        methods: {
            $clone: function (to) { return this; }
        }
    });
    /*System.Void end.*/
