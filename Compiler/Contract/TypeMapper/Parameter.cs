using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.TypeMapper
{
    public class Parameter
    {
        public string Name
        {
            get;
            set;
        }

        public string Type
        {
            get;
            set;
        }

        public Parameter(IParameter parameter)
        {
            Name = parameter.Name;
            Type = parameter.Type.ToString();
        }

        public string ToJson()
        {
            return $"{{ \"name\":\"{Name}\", \"type\":\"{Type}\" }}";
        }
    }
}