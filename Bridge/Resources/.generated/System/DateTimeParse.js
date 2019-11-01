    //System.DateTimeParse start.
    Bridge.define("System.DateTimeParse", {
        statics: {
            methods: {
                //System.DateTimeParse.TryParseExact:static start.
                TryParseExact: function (s, format, dtfi, style, result) {
                    return System.DateTime.tryParseExact(s, format, null, result);

                },
                //System.DateTimeParse.TryParseExact:static end.

                //System.DateTimeParse.Parse:static start.
                Parse: function (s, dtfi, styles) {
                    return System.DateTime.parse(s, dtfi);
                },
                //System.DateTimeParse.Parse:static end.

                //System.DateTimeParse.Parse$1:static start.
                Parse$1: function (s, dtfi, styles, offset) {
                    throw System.NotImplemented.ByDesign;

                },
                //System.DateTimeParse.Parse$1:static end.

                //System.DateTimeParse.TryParse:static start.
                TryParse: function (s, dtfi, styles, result) {
                    return System.DateTime.tryParse(s, null, result);

                },
                //System.DateTimeParse.TryParse:static end.

                //System.DateTimeParse.TryParse$1:static start.
                TryParse$1: function (s, dtfi, styles, result, offset) {
                    throw System.NotImplemented.ByDesign;
                },
                //System.DateTimeParse.TryParse$1:static end.


            }
        }
    });
    //System.DateTimeParse end.
