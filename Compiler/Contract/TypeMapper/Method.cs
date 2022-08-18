using System;
using System.Text;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    [Serializable]
    public class Method
    {
        [JsonProperty("signature")]
        public string Signature { get; set; }

        [JsonProperty("jsName")]
        public string JsName { get; set; }

        public Method(DefaultResolvedMethod methodInfo, string jsMethodName)
        {
            this.JsName = jsMethodName;

            var sb = new StringBuilder();
            if (methodInfo.IsConstructor)
            {
                sb.Append(methodInfo.DeclaringType.Name);
            }
            else
            {
                sb.Append(methodInfo.Name);
            }
            sb.Append("(");

            for (int i = 0; i < methodInfo.Parameters.Count; i++)
            {
                var paramInfo = methodInfo.Parameters[i];
                var param = new Parameter(paramInfo);
                var parameterSignature = GetParameterSignature(param);
                sb.Append(parameterSignature);

                if (i != methodInfo.Parameters.Count - 1)
                {
                    sb.Append(", ");
                }
            }

            sb.Append(")");

            this.Signature = sb.ToString();
        }

        private string GetParameterSignature(Parameter param)
        {
            return $"{param.Type} {param.Name}";
        }
    }
}