    /*System.Reflection.AssemblyName start.*/
    Bridge.define("System.Reflection.AssemblyName", {
        fields: {
            displayName: null
        },
        ctors: {
            ctor: function (assemblyName) {
                this.$initialize();
                this.displayName = assemblyName;
            }
        },
        methods: {
            /*System.Reflection.AssemblyName.toString start.*/
            toString: function () {
                return this.displayName;
            },
            /*System.Reflection.AssemblyName.toString end.*/


        }
    });
    /*System.Reflection.AssemblyName end.*/
