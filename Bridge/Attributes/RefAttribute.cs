using System;

namespace Bridge
{
    /// <summary>
    /// Instructs Bridge to not clone struct arguments.
    /// </summary>
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Parameter)]
    public class RefAttribute : Attribute
    {
    }
}
