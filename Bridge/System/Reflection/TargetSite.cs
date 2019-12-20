namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public class TargetSite : MethodBase
    {
        private readonly string methodName;

        public TargetSite(string methodName)
        {
            this.methodName = methodName;
        }

        public override string ToString()
        {
            return this.methodName;
        }
    }
}
