    /*System.Threading.Thread start.*/
    Bridge.define("System.Threading.Thread", {
        statics: {
            props: {
                CurrentThread: {
                    get: function () {
                        return null;
                    }
                }
            }
        },
        props: {
            ManagedThreadId: {
                get: function () {
                    return 0;
                }
            }
        },
        ctors: {
            $ctor2: function (start) {
                this.$initialize();
                console.warn('Not implemented in Luna');
            },
            $ctor3: function (start, maxStackSize) {
                this.$initialize();
                console.warn('Not implemented in Luna');
            },
            ctor: function (start) {
                this.$initialize();
                console.warn('Not implemented in Luna');
            },
            $ctor1: function (start, maxStackSize) {
                this.$initialize();
                console.warn('Not implemented in Luna');
            }
        },
        methods: {
            /*System.Threading.Thread.start start.*/
            start: function () {
                console.warn('Not implemented in Luna');
            },
            /*System.Threading.Thread.start end.*/

            /*System.Threading.Thread.start$1 start.*/
            start$1: function (parameter) {
                console.warn('Not implemented in Luna');
            },
            /*System.Threading.Thread.start$1 end.*/


        },
        overloads: {
            "Start()": "start",
            "Start(object)": "start$1"
        }
    });
    /*System.Threading.Thread end.*/
