using Bridge.Test.NUnit;


namespace Bridge.ClientTest.Batch1
{
    [Category(Constants.MODULE_RVALUE)]
    [TestFixture(TestNameFormat = "RValue - {0}")]
    public class RValueTests
    {
        private const int DEFAULT_VALUE = 10;

        private struct MyStruct
        {
            public int X
            {
                get;
                set;
            }

            public float Y
            {
                get;
                set;
            }
        }

        private class MyClass
        {
            public int X
            {
                get;
                set;
            }

            public float Y
            {
                get;
                set;
            }
        }

        public struct MyInt
        {
            public int Value
            {
                get;
                set;
            }

            public void Increment() => Value++;
        }

        [Test]
        public void TestSimpleStruct()
        {
            var t = new MyStruct
            {
                X = 5,
                Y = 7
            };

            var rT = ReturnParameter(t);

            t.X--;
            t.Y++;

            Assert.AreNotEqual(t.X, rT.X);
            Assert.AreNotEqual(t.Y, rT.Y);

            var newEx = ReturnParameter(new MyStruct
            {
                X = 8,
                Y = -7
            });

            Assert.AreEqual(newEx.X, 8);
            Assert.AreEqual(newEx.Y, -7);

            ChangeMyStruct(t);
            Assert.AreEqual(t.X, 4);
            Assert.AreEqual(t.Y, 8);

            var newT = GetDefault<MyStruct>();
            Assert.NotNull(newT);

            var newC = new InheritanceClass();
            Assert.NotNull(newC.Foo);

            var newC2 = new InheritanceClass();
            newC.Foo.X = 1;
            newC2.Foo.X = 2;
            Assert.True(newC.Foo.X == 1);
            Assert.True(newC2.Foo.X == 2);
        }

        [Test]
        public void TestSimpleClass()
        {
            var t = new MyClass
            {
                X = 5,
                Y = 7
            };

            var rT = ReturnParameter(t);

            t.X--;
            t.Y++;

            Assert.AreEqual(t.X, rT.X);
            Assert.AreEqual(t.Y, rT.Y);

            var newEx = ReturnParameter(new MyClass
            {
                X = 8,
                Y = -7
            });

            Assert.AreEqual(newEx.X, 8);
            Assert.AreEqual(newEx.Y, -7);
        }

        [Test]
        public void TestSimpleType()
        {
            var x = ReturnParameter(DEFAULT_VALUE);
            Assert.AreEqual(x, DEFAULT_VALUE);
            x++;
            Assert.AreNotEqual(x, DEFAULT_VALUE);
        }

        [Test]
        public void TestRefOutGeneric()
        {
            MyInt? num = new MyInt(), num2;
            Set(out num2, ref num);
            num?.Increment();

            Assert.AreEqual(num2?.Value, 0);
        }

        [Test]
        public void TestSimpleType2()
        {
            var x = ReturnParameterFromMethod(10);
            Assert.AreEqual(x, 10);
        }

        private static void Set<T>(out T target, ref T input) => target = input;

        private static T ReturnParameter<T>(T value)
        {
            return value;
        }

        private static T ReturnParameterFromMethod<T>(T value)
        {
            var instance = new BaseClass<T>()
            {
                Foo = value
            };
            return instance.GetFoo();
        }

        private static void ChangeMyStruct(object value)
        {
            var x = (MyStruct)value;
            x.X++;
            x.Y--;
        }

        private static T GetDefault<T>()
        {
            var foo = default(T);

            return foo;
        }

        public class TestClass
        {
            public float val;
        }

#pragma warning disable 0649
        private class BaseClass<T>
        {
            private T _fooCached;
            public T FooProperty
            {
                get => _fooCached;
                set => _fooCached = value;
            }
            public T FooAuto { get; set; }
            public T Foo;

// Rider compiler check
// The private field 'field' is assigned but its value is never used
// FooWithInitializer
#pragma warning disable CS0414
            public T FooWithInitializer = default(T);
#pragma warning restore CS0414
            public MyStruct Boo;
            public T GetFoo()
            {
                return GetFooInner(Foo);
            }

            private T GetFooInner<K>(K argument)
            {
                return Foo;
            }
        }

        private class InheritanceClass : BaseClass<MyStruct>
        {
            public MyStruct S1;
        }

        public class Object
        {
            public string str;
        }

#pragma warning restore 0649
    }
}
