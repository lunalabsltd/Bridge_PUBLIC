Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*Generics.GenericClass$1 start.*/
    Bridge.define("Generics.GenericClass$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericClass$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericClass$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericClass$1 end.*/

    /*Generics.INamedEntity start.*/
    Bridge.define("Generics.INamedEntity", {
        props: {
            Name: null
        }
    });
    /*Generics.INamedEntity end.*/

    /*Generics.GenericNew$1 start.*/
    Bridge.define("Generics.GenericNew$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericNew$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericNew$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericNew$1 end.*/

    /*Generics.GenericNewAndClass$1 start.*/
    Bridge.define("Generics.GenericNewAndClass$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericNewAndClass$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericNewAndClass$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericNewAndClass$1 end.*/

    /*Generics.GenericStruct$1 start.*/
    Bridge.define("Generics.GenericStruct$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericStruct$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericStruct$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericStruct$1 end.*/

    /*Generics.implementation start.*/
    Bridge.define("Generics.implementation", {
        statics: {
            fields: {
                SimpleGenericInt: null,
                SimpleDoubleGenericIntString: null,
                GenericINamedEntity: null,
                GenericNamedEntity: null,
                GenericClassObject: null,
                GenericClassNamedEntity: null,
                GenericNew: null,
                GenericNewAndClass: null
            },
            ctors: {
                init: function () {
                    this.SimpleGenericInt = new (Generics.SimpleGeneric$1(System.Int32))(1);
                    this.SimpleDoubleGenericIntString = new (Generics.SimpleDoubleGeneric$2(System.Int32,System.String)).ctor();
                    this.GenericINamedEntity = new (Generics.GenericINamedEntity$1(Generics.INamedEntity))(new Generics.NamedEntity());
                    this.GenericNamedEntity = new (Generics.GenericNamedEntity$1(Generics.NamedEntity))(new Generics.NamedEntity());
                    this.GenericClassObject = new (Generics.GenericClass$1(System.Object))(Bridge.box(2, System.Int32));
                    this.GenericClassNamedEntity = new (Generics.GenericClass$1(Generics.NamedEntity))(new Generics.NamedEntity());
                    this.GenericNew = new (Generics.GenericNew$1(Generics.NewClass))(new Generics.NewClass());
                    this.GenericNewAndClass = new (Generics.GenericNewAndClass$1(Generics.NewClass))(new Generics.NewClass());
                }
            }
        }
    });
    /*Generics.implementation end.*/

    /*Generics.NewClass start.*/
    Bridge.define("Generics.NewClass", {
        fields: {
            Data: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Data = 30;
            }
        }
    });
    /*Generics.NewClass end.*/

    /*Generics.SimpleDoubleGeneric$2 start.*/
    Bridge.define("Generics.SimpleDoubleGeneric$2", function (T, K) { return {
        fields: {
            InstanceT: Bridge.getDefaultValue(T),
            InstanceK: Bridge.getDefaultValue(K)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (instanceT, instanceK) {
                this.$initialize();
                this.InstanceT = instanceT;
                this.InstanceK = instanceK;
            }
        },
        methods: {
            /*Generics.SimpleDoubleGeneric$2.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.SimpleDoubleGeneric$2.GetSomething end.*/

            /*Generics.SimpleDoubleGeneric$2.GetSomethingMore start.*/
            GetSomethingMore: function (input) {
                return input;
            },
            /*Generics.SimpleDoubleGeneric$2.GetSomethingMore end.*/


        }
    }; });
    /*Generics.SimpleDoubleGeneric$2 end.*/

    /*Generics.SimpleGeneric$1 start.*/
    Bridge.define("Generics.SimpleGeneric$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.SimpleGeneric$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.SimpleGeneric$1.GetSomething end.*/


        }
    }; });
    /*Generics.SimpleGeneric$1 end.*/

    /*Generics.GenericINamedEntity$1 start.*/
    Bridge.define("Generics.GenericINamedEntity$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericINamedEntity$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericINamedEntity$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericINamedEntity$1 end.*/

    /*Generics.NamedEntity start.*/
    Bridge.define("Generics.NamedEntity", {
        inherits: [Generics.INamedEntity],
        props: {
            Name$1: null
        }
    });
    /*Generics.NamedEntity end.*/

    /*Generics.GenericNamedEntity$1 start.*/
    Bridge.define("Generics.GenericNamedEntity$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            /*Generics.GenericNamedEntity$1.GetSomething start.*/
            GetSomething: function (input) {
                return input;
            },
            /*Generics.GenericNamedEntity$1.GetSomething end.*/


        }
    }; });
    /*Generics.GenericNamedEntity$1 end.*/
});
