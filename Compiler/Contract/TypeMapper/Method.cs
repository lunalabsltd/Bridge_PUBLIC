using System;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    [Serializable]
    public class Method
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("className")]
        public string ClassName { get; set; }

        [JsonProperty("jsName")]
        public string JSName { get; set; }

        [JsonProperty("parameters")]
        public Parameter[] Parameters { get; set; }

        public Method(DefaultResolvedMethod methodInfo, string jsName)
        {
            this.Name = methodInfo.Name;
            this.ClassName = methodInfo.DeclaringType.Name;
            this.JSName = jsName;

            this.Parameters = new Parameter[methodInfo.Parameters.Count];
            for (int i = 0; i < methodInfo.Parameters.Count; i++)
            {
                var paramInfo = methodInfo.Parameters[i];
                var param = new Parameter(paramInfo);
                this.Parameters[i] = param;
            }
        }
    }
}