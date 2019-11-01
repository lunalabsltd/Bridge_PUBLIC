    //System.Runtime.CompilerServices.FormattableStringFactory start.
    Bridge.define("System.Runtime.CompilerServices.FormattableStringFactory", {
        statics: {
            methods: {
                //System.Runtime.CompilerServices.FormattableStringFactory.Create:static start.
                Create: function (format, $arguments) {
                    if ($arguments === void 0) { $arguments = []; }
                    if (format == null) {
                        throw new System.ArgumentNullException.$ctor1("format");
                    }

                    if ($arguments == null) {
                        throw new System.ArgumentNullException.$ctor1("arguments");
                    }

                    return new System.Runtime.CompilerServices.FormattableStringFactory.ConcreteFormattableString(format, $arguments);
                },
                //System.Runtime.CompilerServices.FormattableStringFactory.Create:static end.


            }
        }
    });
    //System.Runtime.CompilerServices.FormattableStringFactory end.
