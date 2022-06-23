using System.Collections.Generic;
using Newtonsoft.Json;

namespace Bridge.TypeMapper
{
    public class Class
    {
        [JsonProperty("jsClassName")]
        public string JsClassName { get; set; }

        [JsonProperty("originalClassName")]
        public string OriginalClassName { get; set; }

        [JsonProperty("constructors")]
        public List<Method> Constructors;

        [JsonProperty("methods")]
        public List<Method> Methods;

        public Class(string className, string jsClassName)
        {
            OriginalClassName = className;
            JsClassName = jsClassName;
            Constructors = new List<Method>();
            Methods = new List<Method>();
        }

        public void AddConstructor(Method method)
        {
            Constructors.Add(method);
        }

        public void AddMethod(Method method)
        {
            Methods.Add(method);
        }
    }
}