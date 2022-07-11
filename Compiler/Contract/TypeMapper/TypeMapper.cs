using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
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
            var typeMapPath = _translator.AssemblyInfo.TypeMapPath;
            var typeMapDir = Path.GetDirectoryName(_translator.AssemblyInfo.TypeMapPath);
            var wrapper = new Wrapper(classes.Values.ToList());
            var data = JsonConvert.SerializeObject(wrapper, Formatting.None);

            if (!Directory.Exists(typeMapDir))
            {
                Directory.CreateDirectory(typeMapDir);
            }
            File.WriteAllText(typeMapPath, data);
        }

        public void AddClassToMap(ITypeInfo typeInfo)
        {
            if (!typeInfo.JsName.Contains("$"))
            {
                return;
            }

            var typeArguments = typeInfo.Type.TypeArguments;
            var className = GetClassName(typeInfo.Name, typeArguments);
            var jsClassName = typeInfo.JsName;
            var regex = new Regex(@"\(.*\)");
            jsClassName = regex.Replace(jsClassName, "");
            var c = new Class(className, jsClassName);

            if (!classes.ContainsKey(className))
            {
                classes.Add(className, c);
            }
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
            var methodInfo = mrr.Member as DefaultResolvedMethod;
            var jsMethodName = jsFullName.Split('.').Last();
            var pattern = @"\:static";
            var regex = new Regex(pattern);
            jsMethodName = regex.Replace(jsMethodName, "");

            return new Method(methodInfo, jsMethodName);
        }

        private Class UpsertClass(MemberResolveResult mrr, string jsFullName)
        {
            var originalClassName = GetOriginalClassName(mrr);
            var fullClassName = GetFullClassName(mrr);
            var jsFullNameParts = jsFullName.Split('.');
            var jsClassNameWordsCount = jsFullNameParts.Length - 1;
            var jsClassNameBuilder = new StringBuilder(jsFullNameParts[0]);
            for (int i = 1; i < jsClassNameWordsCount; i++)
            {
                jsClassNameBuilder.Append($".{jsFullNameParts[i]}");
            }

            var jsClassName = jsClassNameBuilder.ToString();
            var pattern = @"\(.*\)";
            var regex = new Regex(pattern);
            jsClassName = regex.Replace(jsClassName, "");

            if (!classes.ContainsKey(fullClassName))
            {
                classes.Add(fullClassName, new Class(originalClassName, jsClassName));
            }

            return classes[fullClassName];
        }

        private string GetOriginalClassName(MemberResolveResult mrr)
        {
            var methodInfo = mrr.Member as DefaultResolvedMethod;
            var typeArguments = methodInfo.DeclaringType.TypeArguments;
            return GetClassName(methodInfo.DeclaringType.Name, typeArguments);
        }

        private string GetFullClassName(MemberResolveResult mrr)
        {
            var methodInfo = mrr.Member as DefaultResolvedMethod;
            var typeArguments = methodInfo.DeclaringType.TypeArguments;
            return GetClassName(methodInfo.DeclaringType.FullName, typeArguments);
        }

        private string GetClassName(string className, IList<IType> typeArguments)
        {
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