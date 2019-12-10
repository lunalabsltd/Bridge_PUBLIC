using System;

namespace Bridge
{
    /// <summary>
    /// Instructs Bridge to not clone struct arguments.
    /// </summary>
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Parameter)]
    public class RefAttribute : Attribute
    {
    }
}
