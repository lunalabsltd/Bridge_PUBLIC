using System.Collections.Generic;

namespace Bridge.Contract.Dependencies
{
    public class Graph
    {
        private IDictionary<string, Node> nodes = new Dictionary<string, Node>();

        public bool AddDependency(string id, string usedId)
        {
            if (this.nodes.TryGetValue(id, out var node))
            {
                if (node.Dependencies.ContainsKey(usedId))
                {
                    return false;
                }
            }
            else
            {
                node = this.nodes[id] = new Node();
            }
            if (!this.nodes.TryGetValue(usedId, out var usedNode))
            {
                usedNode = this.nodes[usedId] = new Node();
            }
            node.Dependencies[usedId] = usedNode;
            return true;
        }

        public bool Use(string rootId)
        {
            if (!this.nodes.TryGetValue(rootId, out var root))
            {
                return false;
            }
            var queue = new Queue<Node>();
            root.IsUsed = true;
            queue.Enqueue(root);
            while (queue.Count > 0)
            {
                root = queue.Dequeue();
                foreach (var node in root.Dependencies.Values)
                {
                    if (node.IsUsed)
                    {
                        continue;
                    }
                    node.IsUsed = true;
                    queue.Enqueue(node);
                }
            }
            return true;
        }

        public bool IsUsed(string id)
        {
            return this.nodes.TryGetValue(id, out var node) && node.IsUsed;
        }
    }
}
