    //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString start.
    Bridge.define("System.Runtime.CompilerServices.FormattableStringFactory.ConcreteFormattableString", {
        inherits: [System.FormattableString],
        $kind: "nested class",
        fields: {
            _format: null,
            _arguments: null
        },
        props: {
            Format: {
                get: function () {
                    return this._format;
                }
            },
            ArgumentCount: {
                get: function () {
                    return this._arguments.length;
                }
            }
        },
        ctors: {
            ctor: function (format, $arguments) {
                this.$initialize();
                System.FormattableString.ctor.call(this);
                this._format = format;
                this._arguments = $arguments;
            }
        },
        methods: {
            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.GetArguments start.
            GetArguments: function () {
                return this._arguments;
            },
            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.GetArguments end.

            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.GetArgument start.
            GetArgument: function (index) {
                return this._arguments[System.Array.index(index, this._arguments)];
            },
            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.GetArgument end.

            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.ToString start.
            ToString: function (formatProvider) {
                return System.String.formatProvider.apply(System.String, [formatProvider, this._format].concat(this._arguments));
            },
            //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString.ToString end.


        }
    });
    //System.Runtime.CompilerServices.FormattableStringFactory+ConcreteFormattableString end.
