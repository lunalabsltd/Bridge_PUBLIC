using System;
using System.Collections.Generic;
using System.Text;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;

namespace Bridge.TypeMapper
{
    [Serializable]
    public class Method
    {
        public string name { get; set; }
        public string @class { get; set; }
        public string jsName { get; set; }
        public Parameter[] parameters { get; set; }

        public Method(DefaultResolvedMethod methodInfo, string jsName)
        {
            this.name = methodInfo.Name;
            this.@class = methodInfo.DeclaringType.Name;
            this.jsName = jsName;

            this.parameters = new Parameter[methodInfo.Parameters.Count];
            for (int i = 0; i < methodInfo.Parameters.Count; i++)
            {
                var paramInfo = methodInfo.Parameters[i];
                var param = new Parameter(paramInfo);
                this.parameters[i] = param;
            }
        }
    }
}