using System;
using ICSharpCode.NRefactory.TypeSystem;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    [Serializable]
    public class Parameter
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        public Parameter(IParameter paramInfo)
        {
            this.Name = paramInfo.Name;
            this.Type = GetType(paramInfo);
        }

        private string GetType(IParameter paramInfo)
        {
            var type = paramInfo.Type;
            if (type.FullName == "System.Single")
            {
                return "Float";
            }

            if (paramInfo.IsOut && type.Name.Contains("&"))
            {
                return type.Name.Replace('&', ' ').Trim();
            }

            if (paramInfo.IsRef && type.Name.Contains("&"))
            {
                return type.Name.Replace('&', ' ').Trim();
            }

            return type.Name;
        }
    }
}