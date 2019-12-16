namespace System.Reflection
{
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
