using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.Bugs
{
    [Category("Luna")]
    [TestFixture(TestNameFormat = "EN-886 - {0}")] // specify how test name should be templated
    public class EN_886
    {
        private const string EXAMPLE_STRING = "example";

        [Test(ExpectedCount = 1)] // specify how many assertions should be done in test
        public void DiscardForOutVarInMethod()
        {
            var myString = MyMethodWithOutVar(out _);

            Assert.AreEqual(EXAMPLE_STRING, myString);
        }

        private string MyMethodWithOutVar(out int a)
        {
            a = 0;
            return EXAMPLE_STRING;
        }
    }
}