using System;

namespace Bridge.DebugProject
{
    public class DiscardTest
    {
        private void Start()
        {
            var myString = MyTupleReturningMethod(out _);

            Console.WriteLine(myString);
        }

        private string MyTupleReturningMethod(out int a)
        {
            a = 0;
            return "example";
        }
    }
}