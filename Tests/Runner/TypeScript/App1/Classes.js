Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    /*Classes.Animal start.*/
    Bridge.define("Classes.Animal", {
        fields: {
            Name: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Name = "Animal";
            },
            $ctor1: function (name) {
                this.$initialize();
                this.Name = name;
            }
        },
        methods: {
            /*Classes.Animal.GetName start.*/
            GetName: function () {
                return this.Name;
            },
            /*Classes.Animal.GetName end.*/

            /*Classes.Animal.Move start.*/
            Move: function () {
                return 1;
            },
            /*Classes.Animal.Move end.*/


        }
    });
    /*Classes.Animal end.*/

    /*Classes.MovePoint start.*/
    Bridge.define("Classes.MovePoint", {
        statics: {
            methods: {
                /*Classes.MovePoint.Move:static start.*/
                Move: function (p, dx, dy) {
                    return Classes.StaticClass.Move(p.$clone(), dx, dy);
                },
                /*Classes.MovePoint.Move:static end.*/


            }
        },
        props: {
            Point: null
        },
        ctors: {
            init: function () {
                this.Point = new Classes.Point();
            }
        },
        methods: {
            /*Classes.MovePoint.Move start.*/
            Move: function (dx, dy) {
                this.Point = Classes.MovePoint.Move(this.Point.$clone(), dx, dy);
            },
            /*Classes.MovePoint.Move end.*/


        }
    });
    /*Classes.MovePoint end.*/

    /*Classes.Point start.*/
    Bridge.define("Classes.Point", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Classes.Point(); }
            }
        },
        fields: {
            X: 0,
            Y: 0
        },
        ctors: {
            $ctor1: function (x, y) {
                this.$initialize();
                this.X = x;
                this.Y = y;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1852403652, this.X, this.Y]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Classes.Point)) {
                    return false;
                }
                return Bridge.equals(this.X, o.X) && Bridge.equals(this.Y, o.Y);
            },
            $clone: function (to) {
                var s = to || new Classes.Point();
                s.X = this.X;
                s.Y = this.Y;
                return s;
            }
        }
    });
    /*Classes.Point end.*/

    /*Classes.StaticClass start.*/
    Bridge.define("Classes.StaticClass", {
        statics: {
            methods: {
                /*Classes.StaticClass.Move:static start.*/
                Move: function (p, dx, dy) {
                    return new Classes.Point.$ctor1(((p.X + dx) | 0), ((p.Y + dy) | 0));
                },
                /*Classes.StaticClass.Move:static end.*/


            }
        }
    });
    /*Classes.StaticClass end.*/

    /*Classes.Dog start.*/
    Bridge.define("Classes.Dog", {
        inherits: [Classes.Animal],
        ctors: {
            ctor: function (name) {
                this.$initialize();
                Classes.Animal.$ctor1.call(this, name);
            }
        },
        methods: {
            /*Classes.Dog.Move$1 start.*/
            Move$1: function () {
                return 20;
            },
            /*Classes.Dog.Move$1 end.*/


        },
        overloads: {
            "Move()": "Move$1"
        }
    });
    /*Classes.Dog end.*/

    /*Classes.Employee start.*/
    Bridge.define("Classes.Employee", {
        inherits: [Classes.Animal],
        fields: {
            Name$1: null,
            Id: 0
        },
        ctors: {
            ctor: function (name, id) {
                this.$initialize();
                Classes.Animal.$ctor1.call(this, name);
                this.Name$1 = name;
                this.Id = id;
            }
        }
    });
    /*Classes.Employee end.*/

    /*Classes.Snake start.*/
    Bridge.define("Classes.Snake", {
        inherits: [Classes.Animal],
        ctors: {
            ctor: function (name) {
                this.$initialize();
                Classes.Animal.$ctor1.call(this, name);
            }
        },
        methods: {
            /*Classes.Snake.Move start.*/
            Move: function () {
                return 5;
            },
            /*Classes.Snake.Move end.*/


        }
    });
    /*Classes.Snake end.*/
});
