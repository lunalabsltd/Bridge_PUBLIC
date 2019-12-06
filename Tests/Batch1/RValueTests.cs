using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System;


namespace Bridge.ClientTest.Batch1
{
    [Category(Constants.MODULE_RVALUE)]
    [TestFixture(TestNameFormat = "RValue - {0}")]
    public class RValueTests
    {
        public static Int32 defaultValue = 10;

        private struct MyStruct
        {
            public int x;
            public float y;

            public float sum()
            {
                return x + y;
            }
        }

        private class MyClass
        {
            public int x;
            public float y;

            public float sub()
            {
                return x - y;
            }
        }

        public struct MyInt
        {
            public int Value;

            public void Increment() => Value++;
        }

        [Test]
        public void SimpleStructCheck()
        {
            var t = new MyStruct();
            t.x = 5;
            t.y = 7;

            var rT = MainFunction<MyStruct>(t);

            t.x--;
            t.y++;

            Assert.AreNotEqual(t.x, rT.x);
            Assert.AreNotEqual(t.y, rT.y);

            var newEx = MainFunction<MyStruct>(new MyStruct() { x = 8, y = -7 });

            Assert.AreEqual(newEx.x, 8);
            Assert.AreEqual(newEx.y, -7);

            BoxingTest(t);
            Assert.AreEqual(t.x, 4);
            Assert.AreEqual(t.y, 8);

            var newT = GetFoo <MyStruct>();
            Assert.NotNull(newT);

            var newC = new InheritnceClass();
            Assert.NotNull(newC.foo);
        }

        [Test]
        public void SimpleClassCheck()
        {
            var t = new MyClass();
            t.x = 5;
            t.y = 7;

            var rT = MainFunction<MyClass>(t);

            t.x--;
            t.y++;

            Assert.AreEqual(t.x, rT.x);
            Assert.AreEqual(t.y, rT.y);

            var newEx = MainFunction<MyClass>(new MyClass() { x = 8, y = -7 });

            Assert.AreEqual(newEx.x, 8);
            Assert.AreEqual(newEx.y, -7);
        }

        [Test]
        public void SimpleTypeTest()
        {
            int x = MainFunction(defaultValue);
            Assert.AreEqual(x, defaultValue);
            x++;
            Assert.AreNotEqual(x, defaultValue);
        }

        [Test]
        public void RefOutGenericCheck()
        {
            MyInt? num = new MyInt(), num2;
            Set(out num2, ref num);
            num.Value.Increment();

            Assert.AreEqual(num2.Value.Value, 0);
        }

        public static void Set<T>(out T target, ref T input) => target = input;

        private T MainFunction<T>(T value)
        {
            return value;
        }

        private object BoxingTest(object value)
        {
            var x = (MyStruct)value;
            x.x++;
            x.y--;

            return x;
        }

        private T GetFoo<T>()
        {
            var foo = default(T);

            return foo;
        }
#pragma warning disable 0649
        private class BaseClass<T>
        {
            public T foo;
        }
#pragma warning restore 0649
        private class InheritnceClass : BaseClass<MyStruct>
        {
            
        }
    }
}
