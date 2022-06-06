using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;

namespace Bridge.TypeMapper
{
    public class TypeMapper
    {
        private static List<Method> _methods = new List<Method>();

        public void Save()
        {
            var fileName = $"{Directory.GetCurrentDirectory()}/typemap.json";
            var data = JsonSerializer.Serialize(_methods);
            File.WriteAllText(fileName, data);
        }

        public void AddMethodToMap(MemberResolveResult mrr, string fullName)
        {
            var methodInfo = mrr.Member as DefaultResolvedMethod;
            var method = new Method(methodInfo, fullName);
            _methods.Add(method);
        }
    }
}