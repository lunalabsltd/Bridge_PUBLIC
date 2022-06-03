using System.Collections.Generic;
using System.Text;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;

namespace Bridge.TypeMapper
{
    public class Method
    {
        public string Name
        {
            get;
            set;
        }

        public string ClassName
        {
            get;
            set;
        }

        public string JSName
        {
            get;
            set;
        }

        public List<Parameter> Parameters;

        public Method(MemberResolveResult member_rr, string jsName)
        {
            JSName = jsName;
            var member = member_rr.Member as DefaultResolvedMethod;
            Name = member.Name;
            ClassName = GetClassName(member.FullName);
            Parameters = new List<Parameter>();
            foreach (var parameter in member.Parameters)
            {
                Parameters.Add(new Parameter(parameter));
            }
        }

        private string GetClassName(string fullname)
        {
            var words = fullname.Split('.');
            var sb = new StringBuilder();
            for (int i = 0; i < words.Length - 1; i++)
            {
                sb.Append(words[i]);
                if (i != words.Length - 2)
                {
                    sb.Append(".");
                }
            }

            return sb.ToString();
        }

        private string ParametersToJson()
        {
            var sb = new StringBuilder();
            sb.Append("[");
            for (int i = 0; i < Parameters.Count; i++)
            {
                var param = Parameters[i];
                sb.Append(param.ToJson());
                if (i != Parameters.Count - 1)
                {
                    sb.Append(",");
                }
            }
            sb.Append("]");

            return sb.ToString();
        }

        public string ToJson()
        {
            return $"{{ \"name\":\"{Name}\", \"class\":\"{ClassName}\", \"jsName\":\"{JSName}\", \"parameters\": {ParametersToJson()} }}";
        }
    }
}