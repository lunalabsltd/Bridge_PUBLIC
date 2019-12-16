namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public class AssemblyName
    {
        private readonly string displayName;

        public AssemblyName(string assemblyName)
        {
            this.displayName = assemblyName;
        }

        public override string ToString()
        {
            return this.displayName;
        }
    }
}
