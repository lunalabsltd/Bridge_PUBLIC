using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Bridge.Contract;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    public class TypeMapper
    {
        private ITranslator _translator;

        public TypeMapper(ITranslator translator)
        {
            _translator = translator;
        }

        private static List<Method> _methods = new List<Method>();

        public void Save()
        {
            var typeMapDir = _translator.AssemblyInfo.TypeMapPath;
            var fileName = Path.Combine(typeMapDir, "typemap.json");
            var data = JsonConvert.SerializeObject(_methods, Formatting.Indented);

            if (!Directory.Exists(typeMapDir))
            {
                Directory.CreateDirectory(typeMapDir);
            }
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