using System.Collections.Generic;
using System.IO;
using System.Text;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.TypeMapper
{
    public class TypeMapper
    {
        private static List<Method> _methods = new List<Method>();
        public void AddMethodToMap(MemberResolveResult member_rr, string jsName)
        {
            _methods.Add(new Method(member_rr, jsName));
        }

        public void Save()
        {
            var filename = $"{Directory.GetCurrentDirectory()}/typemap.json";
            if (File.Exists(filename))
            {
                File.Delete(filename);
            }

            using (StreamWriter sw = File.AppendText(filename))
            {
                sw.WriteLine("[");
                for (int i = 0; i < _methods.Count; i++)
                {
                    var method = _methods[i];
                    var sb = new StringBuilder();
                    sb.Append(method.ToJson());
                    if (i != _methods.Count - 1)
                    {
                        sb.Append(",");
                    }
                    sw.WriteLine(sb.ToString());
                }
                sw.WriteLine("]");
            }
        }
    }
}