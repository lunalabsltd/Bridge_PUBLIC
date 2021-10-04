    /*System.FormattableString start.*/
    Bridge.define("System.FormattableString", {
        inherits: [System.IFormattable],
        statics: {
            methods: {
                /*System.FormattableString.Invariant:static start.*/
                Invariant: function (formattable) {
                    if (formattable == null) {
                        throw new System.ArgumentNullException.$ctor1("formattable");
                    }

                    return formattable.ToString(System.Globalization.CultureInfo.invariantCulture);
                },
                /*System.FormattableString.Invariant:static end.*/


            }
        },
        methods: {
            /*System.FormattableString.System$IFormattable$format start.*/
            System$IFormattable$format: function (ignored, formatProvider) {
                return this.ToString(formatProvider);
            },
            /*System.FormattableString.System$IFormattable$format end.*/

            /*System.FormattableString.toString start.*/
            toString: function () {
                return this.ToString(System.Globalization.CultureInfo.getCurrentCulture());
            },
            /*System.FormattableString.toString end.*/


        },
        overloads: {
            "ToString()": "toString"
        }
    });
    /*System.FormattableString end.*/
