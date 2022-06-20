using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Bridge.Contract;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    public class TypeMapper
    {
        private ITranslator _translator;

        private Dictionary<string, Class> classes;

        public TypeMapper(ITranslator translator)
        {
            _translator = translator;
            classes = new Dictionary<string, Class>();
        }

        public void Save()
        {
            var typeMapDir = _translator.AssemblyInfo.TypeMapPath;
            var fileName = Path.Combine(typeMapDir, "typemap.json");
            var wrapper = new Wrapper(classes.Values.ToList());
            var data = JsonConvert.SerializeObject(wrapper, Formatting.None);

            if (!Directory.Exists(typeMapDir))
            {
                Directory.CreateDirectory(typeMapDir);
            }
            File.WriteAllText(fileName, data);
        }

        public void AddMethodToMap(MemberResolveResult mrr, string jsFullName, bool isCtor = false)
        {
            var @class = UpsertClass(mrr, jsFullName);
            var method = CreateMethod(mrr, jsFullName);
            if (!isCtor)
            {
                @class.AddMethod(method);
            }
            else
            {
                @class.AddConstructor(method);
            }
        }

        private Method CreateMethod(MemberResolveResult mrr, string jsFullName)
        {
            var jsFullNameParts = jsFullName.Split('.');
            var jsMethodName = jsFullNameParts[jsFullNameParts.Length - 1];

            var methodInfo = mrr.Member as DefaultResolvedMethod;

            return new Method(methodInfo, jsMethodName);
        }

        private Class UpsertClass(MemberResolveResult mrr, string jsFullName)
        {
            var jsFullNameParts = jsFullName.Split('.');
            var jsClassName = jsFullNameParts[jsFullNameParts.Length - 2];
            var className = GetOriginalClassName(mrr);

            if (!classes.ContainsKey(className))
            {
                classes.Add(className, new Class(className, jsClassName));
            }

            return classes[className];
        }

        private string GetOriginalClassName(MemberResolveResult mrr)
        {
            var methodInfo = mrr.Member as DefaultResolvedMethod;
            var typeArguments = methodInfo.DeclaringType.TypeArguments;
            var className = methodInfo.DeclaringType.FullName;
            if (typeArguments.Count > 0)
            {
                var sb = new StringBuilder(className);
                sb.Append("<");
                for (int i = 0; i < typeArguments.Count; i++)
                {
                    var arg = typeArguments[i];
                    sb.Append(arg.Name);

                    if (i != typeArguments.Count - 1)
                    {
                        sb.Append(", ");
                    }
                }
                sb.Append(">");
                className = sb.ToString();
            }

            return className;
        }

        private class Wrapper
        {
            public List<Class> Classes
            {
                get;
                set;
            }

            public Wrapper(List<Class> classes)
            {
                Classes = classes;
            }
        }
    }
}