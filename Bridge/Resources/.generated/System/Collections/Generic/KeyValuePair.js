    /*System.Collections.Generic.KeyValuePair$2 start.*/
    Bridge.define("System.Collections.Generic.KeyValuePair$2", function (TKey, TValue) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.KeyValuePair$2(TKey,TValue))(); }
            }
        },
        fields: {
            key$1: Bridge.getDefaultValue(TKey),
            value$1: Bridge.getDefaultValue(TValue)
        },
        props: {
            key: {
                get: function () {
                    return this.key$1;
                }
            },
            value: {
                get: function () {
                    return this.value$1;
                }
            }
        },
        ctors: {
            init: function () {
                this.key$1 = Bridge.getDefaultValue(TKey);
                this.value$1 = Bridge.getDefaultValue(TValue);
            },
            $ctor1: function (key, value) {
                this.$initialize();
                this.key$1 = key;
                this.value$1 = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            /*System.Collections.Generic.KeyValuePair$2.toString start.*/
            toString: function () {
                var s = System.Text.StringBuilderCache.Acquire();
                s.append(String.fromCharCode(91));
                if (this.key != null) {
                    s.append(Bridge.toString(this.key));
                }
                s.append(", ");
                if (this.value != null) {
                    s.append(Bridge.toString(this.value));
                }
                s.append(String.fromCharCode(93));
                return System.Text.StringBuilderCache.GetStringAndRelease(s);
            },
            /*System.Collections.Generic.KeyValuePair$2.toString end.*/

            /*System.Collections.Generic.KeyValuePair$2.Deconstruct start.*/
            Deconstruct: function (key, value) {
                key.v = this.key;
                value.v = this.value;
            },
            /*System.Collections.Generic.KeyValuePair$2.Deconstruct end.*/

            getHashCode: function () {
                var h = Bridge.addHash([5072499452, this.key$1, this.value$1]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.Generic.KeyValuePair$2(TKey,TValue))) {
                    return false;
                }
                return Bridge.equals(this.key$1, o.key$1) && Bridge.equals(this.value$1, o.value$1);
            },
            $clone: function (to) { return this; }
        },
        overloads: {
            "ToString()": "toString"
        }
    }; });
    /*System.Collections.Generic.KeyValuePair$2 end.*/
