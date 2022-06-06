using System;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.TypeMapper
{
    [Serializable]
    public class Parameter
    {
        public string name { get; set; }
        public string type { get; set; }

        public Parameter(IParameter paramInfo)
        {
            this.name = paramInfo.Name;
            this.type = GetType(paramInfo.Type);
        }

        private string GetType(IType type)
        {
            if (type.FullName == "System.Single")
            {
                return "Float";
            }

            return type.Name;
        }
    }
}