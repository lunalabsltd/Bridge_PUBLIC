using System.Collections.Generic;

namespace Bridge.Contract.Dependencies
{
    public class Node
    {
        public string Id;
        public bool IsUsed;
        public readonly IDictionary<string, Node> Dependencies = new Dictionary<string, Node>();
    }
}
