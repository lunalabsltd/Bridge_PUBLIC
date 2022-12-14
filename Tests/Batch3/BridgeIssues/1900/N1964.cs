using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1964 - {0}")]
    public class Bridge1964
    {
        private static string GetCharCode(string s, bool isLast = true)
        {
            if (s == null)
            {
                return "null";
            }

            if (s.Length < 1)
            {
                return "empty";
            }

            var i = isLast ? s.Length - 1 : 0;

            return s[i].ToString("X");
        }

        [Test]
        public void TestStringIsNullOrWhiteSpaceCase()
        {
            var p = new string[]
                {
                    null,
                    "",
                    ((char)0x0009).ToString(), // Horizontal Tab
                    ((char)0x000A).ToString(), // Line Feed
                    ((char)0x000B).ToString(), // Vertical Tab
                    ((char)0x000C).ToString(), // Form Feed
                    ((char)0x000D).ToString(), // Carriage Return
                    ((char)0x0020).ToString(), // Space
                    ((char)0x0085).ToString(), // Horizontal ellipsis
                    ((char)0x00A0).ToString(), // NO-BREAK SPACE As a space, but often not adjusted
                };

            string s;
            string c;

            for (int i = 0; i < p.Length; i++)
            {
                s = p[i];
                c = GetCharCode(s);
                Assert.True(String.IsNullOrWhiteSpace(s), "White-spaces table 1. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = "a" + p[i];
                c = GetCharCode(s);
                Assert.False(String.IsNullOrWhiteSpace(s), "Non white-spaces table 1. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = p[i] + "b";
                c = GetCharCode(s, false);
                Assert.False(String.IsNullOrWhiteSpace(s), "Non white-spaces table 2. Index:" + i + " Char code:" + c);
            }
        }
    }
}