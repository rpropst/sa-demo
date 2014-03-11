using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Janrain
{
    public class EntityResult
    {
        public UserProfile result { get; set; }
        public string stat { get; set; }
        public transaction_state transaction_state { get; set; }
    }
}
