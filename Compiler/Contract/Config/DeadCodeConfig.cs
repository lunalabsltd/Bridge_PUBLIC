using System.Collections.Generic;

namespace Bridge.Contract
{
    public class DeadCodeConfig
    {
        public bool EliminateClasses
        {
            get
            {
                return this.Classes?.Count > 0;
            }
        }

        public List<string> Classes
        {
            get; set;
        }

        public List<string> Methods
        {
            get; set;
        }
    }
}
