    /*System.Diagnostics.Debugger start.*/
    Bridge.define("System.Diagnostics.Debugger", {
        statics: {
            fields: {
                DefaultCategory: null
            },
            props: {
                IsAttached: {
                    get: function () {
                        return true;
                    }
                }
            },
            methods: {
                /*System.Diagnostics.Debugger.IsLogging:static start.*/
                IsLogging: function () {
                    return true;
                },
                /*System.Diagnostics.Debugger.IsLogging:static end.*/

                /*System.Diagnostics.Debugger.Launch:static start.*/
                Launch: function () {
                    return true;
                },
                /*System.Diagnostics.Debugger.Launch:static end.*/

                /*System.Diagnostics.Debugger.Log:static start.*/
                Log: function (level, category, message) { },
                /*System.Diagnostics.Debugger.Log:static end.*/

                /*System.Diagnostics.Debugger.NotifyOfCrossThreadDependency:static start.*/
                NotifyOfCrossThreadDependency: function () { },
                /*System.Diagnostics.Debugger.NotifyOfCrossThreadDependency:static end.*/


            }
        }
    });
    /*System.Diagnostics.Debugger end.*/
