Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*TypeScript.Issues.N1060 start.*/
    Bridge.define("TypeScript.Issues.N1060");
    /*TypeScript.Issues.N1060 end.*/

    /*TypeScript.Issues.N1060+B$1 start.*/
    Bridge.define("TypeScript.Issues.N1060.B$1", function (T) { return {
        $kind: "nested class",
        methods: {
            /*TypeScript.Issues.N1060+B$1.GetC start.*/
            GetC: function () {
                return new (TypeScript.Issues.N1060.B$1.C(T))();
            },
            /*TypeScript.Issues.N1060+B$1.GetC end.*/


        }
    }; });
    /*TypeScript.Issues.N1060+B$1 end.*/

    /*TypeScript.Issues.N1060+B$1+C start.*/
    Bridge.define("TypeScript.Issues.N1060.B$1.C", function (T) { return {
        $kind: "nested class"
    }; });
    /*TypeScript.Issues.N1060+B$1+C end.*/

    /*TypeScript.Issues.N1640 start.*/
    Bridge.define("TypeScript.Issues.N1640");
    /*TypeScript.Issues.N1640 end.*/

    /*TypeScript.Issues.N1640+IGamePlay start.*/
    Bridge.define("TypeScript.Issues.N1640.IGamePlay", {
        $kind: "nested interface"
    });
    /*TypeScript.Issues.N1640+IGamePlay end.*/

    /*TypeScript.Issues.N2029Interface$1 start.*/
    Bridge.definei("TypeScript.Issues.N2029Interface$1", function (T) { return {
        $kind: "interface"
    }; });
    /*TypeScript.Issues.N2029Interface$1 end.*/

    /*TypeScript.Issues.N2030Attribute start.*/
    Bridge.define("TypeScript.Issues.N2030Attribute", {
        inherits: [System.Attribute],
        fields: {
            _isUnspecified: false
        },
        props: {
            IsUnspecified: {
                get: function () {
                    return this._isUnspecified;
                }
            }
        },
        ctors: {
            ctor: function (IsUnspecified) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this._isUnspecified = IsUnspecified;
            }
        }
    });
    /*TypeScript.Issues.N2030Attribute end.*/

    /*TypeScript.Issues.N2031DictionaryMap$2 start.*/
    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2", function (T1, T2) { return {
        fields: {
            _forward: null,
            _reverse: null
        },
        props: {
            Forward: null,
            Reverse: null
        },
        ctors: {
            init: function () {
                this._forward = new (System.Collections.Generic.Dictionary$2(T1,T2)).ctor();
                this._reverse = new (System.Collections.Generic.Dictionary$2(T2,T1)).ctor();
            },
            ctor: function () {
                this.$initialize();
                this.Forward = new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T1,T2))(this._forward);
                this.Reverse = new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T2,T1))(this._reverse);
            },
            $ctor1: function (initialValues) {
                if (initialValues === void 0) { initialValues = []; }
                var $t;

                TypeScript.Issues.N2031DictionaryMap$2(T1,T2).ctor.call(this);
                $t = Bridge.getEnumerator(initialValues);
                try {
                    while ($t.moveNext()) {
                        var value = $t.Current;
                        this.Add(value.key, value.value);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            /*TypeScript.Issues.N2031DictionaryMap$2.Add start.*/
            Add: function (t1, t2) {
                this._forward.add(t1, t2);
                this._reverse.add(t2, t1);
            },
            /*TypeScript.Issues.N2031DictionaryMap$2.Add end.*/


        }
    }; });
    /*TypeScript.Issues.N2031DictionaryMap$2 end.*/

    /*TypeScript.Issues.N2031DictionaryMap$2+Indexer$2 start.*/
    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2.Indexer$2", function (T1, T2, T3, T4) { return {
        $kind: "nested class",
        fields: {
            _dictionary: null
        },
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                this._dictionary = dictionary;
            }
        },
        methods: {
            getItem: function (index) {
                return this._dictionary.getItem(index);
            },
            setItem: function (index, value) {
                this._dictionary.setItem(index, value);
            },
            /*TypeScript.Issues.N2031DictionaryMap$2+Indexer$2.ContainsKey start.*/
            ContainsKey: function (index) {
                return this._dictionary.containsKey(index);
            },
            /*TypeScript.Issues.N2031DictionaryMap$2+Indexer$2.ContainsKey end.*/


        }
    }; });
    /*TypeScript.Issues.N2031DictionaryMap$2+Indexer$2 end.*/

    /*TypeScript.Issues.N2264 start.*/
    Bridge.define("TypeScript.Issues.N2264", {
        props: {
            Values: null
        },
        ctors: {
            ctor: function (queryParameters) {
                if (queryParameters === void 0) { queryParameters = null; }

                this.$initialize();
                this.Values = queryParameters;
            }
        }
    });
    /*TypeScript.Issues.N2264 end.*/

    /*TypeScript.Issues.N2438 start.*/
    Bridge.define("TypeScript.Issues.N2438", {
        fields: {
            isDefaultCtor: false
        },
        props: {
            Attribute: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.isDefaultCtor = true;
            },
            $ctor1: function (arg) {
                this.$initialize();
                this.Attribute = arg;
            }
        }
    });
    /*TypeScript.Issues.N2438 end.*/

    /*TypeScript.Issues.N2463 start.*/
    Bridge.define("TypeScript.Issues.N2463", {
        statics: {
            methods: {
                /*TypeScript.Issues.N2463.Do:static start.*/
                Do: function (dummy) {
                    dummy.Nothing = (dummy.Nothing + 1) | 0;
                    return dummy;
                },
                /*TypeScript.Issues.N2463.Do:static end.*/


            }
        }
    });
    /*TypeScript.Issues.N2463 end.*/

    /*TypeScript.Issues.N2474 start.*/
    Bridge.define("TypeScript.Issues.N2474");
    /*TypeScript.Issues.N2474 end.*/

    /*TypeScript.Issues.N2474+Enum start.*/
    Bridge.define("TypeScript.Issues.N2474.Enum", {
        $kind: "nested enum",
        statics: {
            fields: {
                Value: 1
            }
        }
    });
    /*TypeScript.Issues.N2474+Enum end.*/

    /*TypeScript.Issues.N2474+NameEnum start.*/
    Bridge.define("TypeScript.Issues.N2474.NameEnum", {
        $kind: "nested enum",
        statics: {
            fields: {
                value: 3
            }
        }
    });
    /*TypeScript.Issues.N2474+NameEnum end.*/

    /*TypeScript.Issues.N2474+NameLowerCase start.*/
    Bridge.define("TypeScript.Issues.N2474.NameLowerCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                value: 4
            }
        }
    });
    /*TypeScript.Issues.N2474+NameLowerCase end.*/

    /*TypeScript.Issues.N2474+NamePreserveCase start.*/
    Bridge.define("TypeScript.Issues.N2474.NamePreserveCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                Value: 5
            }
        }
    });
    /*TypeScript.Issues.N2474+NamePreserveCase end.*/

    /*TypeScript.Issues.N2474+NameUpperCase start.*/
    Bridge.define("TypeScript.Issues.N2474.NameUpperCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                VALUE: 6
            }
        }
    });
    /*TypeScript.Issues.N2474+NameUpperCase end.*/

    /*TypeScript.Issues.N2474+StringName start.*/
    Bridge.define("TypeScript.Issues.N2474.StringName", {
        $kind: "nested enum",
        statics: {
            fields: {
                value: "value"
            }
        },
        $utype: System.String
    });
    /*TypeScript.Issues.N2474+StringName end.*/

    /*TypeScript.Issues.N2474+StringNameLowerCase start.*/
    Bridge.define("TypeScript.Issues.N2474.StringNameLowerCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                value: "value"
            }
        },
        $utype: System.String
    });
    /*TypeScript.Issues.N2474+StringNameLowerCase end.*/

    /*TypeScript.Issues.N2474+StringNamePreserveCase start.*/
    Bridge.define("TypeScript.Issues.N2474.StringNamePreserveCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                Value: "Value"
            }
        },
        $utype: System.String
    });
    /*TypeScript.Issues.N2474+StringNamePreserveCase end.*/

    /*TypeScript.Issues.N2474+StringNameUpperCase start.*/
    Bridge.define("TypeScript.Issues.N2474.StringNameUpperCase", {
        $kind: "nested enum",
        statics: {
            fields: {
                VALUE: "VALUE"
            }
        },
        $utype: System.String
    });
    /*TypeScript.Issues.N2474+StringNameUpperCase end.*/

    /*TypeScript.Issues.N2474+ValueEnum start.*/
    Bridge.define("TypeScript.Issues.N2474.ValueEnum", {
        $kind: "nested enum",
        statics: {
            fields: {
                Value: 2
            }
        }
    });
    /*TypeScript.Issues.N2474+ValueEnum end.*/

    /*TypeScript.Issues.N2493Operation3 start.*/
    Bridge.define("TypeScript.Issues.N2493Operation3", {
        methods: {
            /*TypeScript.Issues.N2493Operation3.Add start.*/
            Add: function (n) {
                return ((n + 3) | 0);
            },
            /*TypeScript.Issues.N2493Operation3.Add end.*/


        }
    });
    /*TypeScript.Issues.N2493Operation3 end.*/

    /*TypeScript.Issues.N2653IZig start.*/
    Bridge.define("TypeScript.Issues.N2653IZig", {
        $kind: "interface"
    });
    /*TypeScript.Issues.N2653IZig end.*/

    /*TypeScript.Issues.N2661C start.*/
    Bridge.define("TypeScript.Issues.N2661C", {
        fields: {
            fn: null
        }
    });
    /*TypeScript.Issues.N2661C end.*/

    /*TypeScript.Issues.N2911 start.*/
    Bridge.define("TypeScript.Issues.N2911", {
        statics: {
            methods: {
                /*TypeScript.Issues.N2911.initButton_Clicked:static start.*/
                initButton_Clicked: function (arg) {
                    // Should build non generic TS initButton_Clicked(arg: MouseEvent): void;
                },
                /*TypeScript.Issues.N2911.initButton_Clicked:static end.*/


            }
        }
    });
    /*TypeScript.Issues.N2911 end.*/

    /*TypeScript.Issues.N3061 start.*/
    Bridge.define("TypeScript.Issues.N3061");
    /*TypeScript.Issues.N3061 end.*/

    /*TypeScript.Issues.N3061+IVehicle start.*/
    Bridge.define("TypeScript.Issues.N3061.IVehicle", {
        inherits: function () { return [System.IEquatable$1(TypeScript.Issues.N3061.IVehicle)]; },
        $kind: "nested interface"
    });
    /*TypeScript.Issues.N3061+IVehicle end.*/

    /*TypeScript.Issues.N1640+GamePlay start.*/
    Bridge.define("TypeScript.Issues.N1640.GamePlay", {
        inherits: [TypeScript.Issues.N1640.IGamePlay],
        $kind: "nested class",
        events: {
            OnGameEvent: null
        },
        alias: [
            "StartGame", "TypeScript$Issues$N1640$IGamePlay$StartGame",
            "addOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$addOnGameEvent",
            "removeOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$removeOnGameEvent"
        ],
        methods: {
            /*TypeScript.Issues.N1640+GamePlay.StartGame start.*/
            StartGame: function (s) {
                if (!Bridge.staticEquals(this.OnGameEvent, null)) {
                    this.OnGameEvent(this, s);
                }
            },
            /*TypeScript.Issues.N1640+GamePlay.StartGame end.*/

            /*TypeScript.Issues.N1640+GamePlay.Subscribe start.*/
            Subscribe: function (handler) {
                this.addOnGameEvent(handler);
            },
            /*TypeScript.Issues.N1640+GamePlay.Subscribe end.*/


        }
    });
    /*TypeScript.Issues.N1640+GamePlay end.*/

    /*TypeScript.Issues.N2029 start.*/
    Bridge.define("TypeScript.Issues.N2029", {
        inherits: [TypeScript.Issues.N2029Interface$1(System.Int32)],
        props: {
            Value1: 0
        },
        alias: ["Value1", "TypeScript$Issues$N2029Interface$1$System$Int32$Value1"]
    });
    /*TypeScript.Issues.N2029 end.*/

    /*TypeScript.Issues.N2653Zig start.*/
    Bridge.define("TypeScript.Issues.N2653Zig", {
        inherits: [TypeScript.Issues.N2653IZig],
        alias: ["zag", "TypeScript$Issues$N2653IZig$zag"],
        methods: {
            /*TypeScript.Issues.N2653Zig.zag start.*/
            zag: function () {
                return 1;
            },
            /*TypeScript.Issues.N2653Zig.zag end.*/


        }
    });
    /*TypeScript.Issues.N2653Zig end.*/

    /*TypeScript.Issues.N3061+Car start.*/
    Bridge.define("TypeScript.Issues.N3061.Car", {
        inherits: function () { return [TypeScript.Issues.N3061.IVehicle,System.IEquatable$1(TypeScript.Issues.N3061.Car)]; },
        $kind: "nested class",
        props: {
            Horses: 0
        },
        alias: [
            "Horses", "TypeScript$Issues$N3061$IVehicle$Horses",
            "equalsT$1", "System$IEquatable$1$TypeScript$Issues$N3061$IVehicle$equalsT"
        ],
        methods: {
            /*TypeScript.Issues.N3061+Car.equalsT$1 start.*/
            equalsT$1: function (vehicle) {
                return this.equalsT(Bridge.cast(vehicle, TypeScript.Issues.N3061.Car));
            },
            /*TypeScript.Issues.N3061+Car.equalsT$1 end.*/


        }
    });
    /*TypeScript.Issues.N3061+Car end.*/

    /*TypeScript.Issues.N3061+Tractor start.*/
    Bridge.define("TypeScript.Issues.N3061.Tractor", {
        inherits: [TypeScript.Issues.N3061.Car],
        $kind: "nested class",
        alias: ["equalsT", "System$IEquatable$1$TypeScript$Issues$N3061$Car$equalsT"],
        methods: {
            /*TypeScript.Issues.N3061+Tractor.equalsT start.*/
            equalsT: function (car) {
                return this.Horses === car.Horses;
            },
            /*TypeScript.Issues.N3061+Tractor.equalsT end.*/


        }
    });
    /*TypeScript.Issues.N3061+Tractor end.*/

    /*TypeScript.Issues.N3061+Truck start.*/
    Bridge.define("TypeScript.Issues.N3061.Truck", {
        inherits: [TypeScript.Issues.N3061.Car],
        $kind: "nested class",
        alias: ["equalsT", "System$IEquatable$1$TypeScript$Issues$N3061$Car$equalsT"],
        methods: {
            /*TypeScript.Issues.N3061+Truck.equalsT start.*/
            equalsT: function (car) {
                return this.Horses === car.Horses;
            },
            /*TypeScript.Issues.N3061+Truck.equalsT end.*/


        }
    });
    /*TypeScript.Issues.N3061+Truck end.*/
});
