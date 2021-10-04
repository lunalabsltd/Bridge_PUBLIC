    /*System.Text.EncodingInfo start.*/
    Bridge.define("System.Text.EncodingInfo", {
        props: {
            CodePage: 0,
            Name: null,
            DisplayName: null
        },
        ctors: {
            ctor: function (codePage, name, displayName) {
                var $t;
                this.$initialize();
                this.CodePage = codePage;
                this.Name = name;
                this.DisplayName = ($t = displayName, $t != null ? $t : name);
            }
        },
        methods: {
            /*System.Text.EncodingInfo.GetEncoding start.*/
            GetEncoding: function () {
                return System.Text.Encoding.GetEncoding(this.CodePage);
            },
            /*System.Text.EncodingInfo.GetEncoding end.*/

            /*System.Text.EncodingInfo.getHashCode start.*/
            getHashCode: function () {
                return this.CodePage;
            },
            /*System.Text.EncodingInfo.getHashCode end.*/

            /*System.Text.EncodingInfo.equals start.*/
            equals: function (o) {
                var that = Bridge.as(o, System.Text.EncodingInfo);
                return System.Nullable.eq(this.CodePage, (that != null ? that.CodePage : null));
            },
            /*System.Text.EncodingInfo.equals end.*/


        },
        overloads: {
            "GetHashCode()": "getHashCode",
            "Equals(object)": "equals"
        }
    });
    /*System.Text.EncodingInfo end.*/
