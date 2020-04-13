using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests consists in just checking whether URI's .ToString() does
    /// not return "[Object object]" but the actual instantiated URL.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3301 - {0}")]
    public class Bridge3301
    {
        /// <summary>
        /// Just checks whether an URI's ToString() matches its provided URL
        /// string.
        /// </summary>
        [Test]
        public static void TestUriToString()
        {
            var uriStr = "https://deck.net/";
            var uri = new Uri(uriStr);
            Assert.AreEqual(uriStr, uri.ToString(), "URI ToString() returns the same string used to initialize it.");
        }

        /// <summary>
        /// Checks whether URI`s EscapeUriString() & EscapeDataString() escapes correctly
        /// </summary>
        [Test]
        public static void TestEscape()
        {
            var planeText = "http://exmaple.org?param=arg1 &arg2";
            var escapeUriString = Uri.EscapeUriString(planeText);
            Assert.AreEqual("http://exmaple.org?param=arg1%20&arg2", escapeUriString, "Uri.EscapeUriString() works correctly.");
            var escapeDataString = Uri.EscapeDataString(planeText);
            Assert.AreEqual("http%3A%2F%2Fexmaple.org%3Fparam%3Darg1%20%26arg2", escapeDataString, "Uri.EscapeDataString() works correctly.");
        }
    }
}