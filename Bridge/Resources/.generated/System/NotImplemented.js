    /*System.NotImplemented start.*/
    Bridge.define("System.NotImplemented", {
        statics: {
            props: {
                ByDesign: {
                    get: function () {
                        return new System.NotImplementedException.ctor();
                    }
                }
            },
            methods: {
                /*System.NotImplemented.ByDesignWithMessage:static start.*/
                ByDesignWithMessage: function (message) {
                    return new System.NotImplementedException.$ctor1(message);
                },
                /*System.NotImplemented.ByDesignWithMessage:static end.*/


            }
        }
    });
    /*System.NotImplemented end.*/
