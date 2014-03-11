using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Janrain
{
    public class capture
    {
        public string action { get; set; }
    }

    public class transaction_state
    {
        public capture capture { get; set; }
    }

    public class AuthResult
    {
        public string access_token { get; set; }
        public string expires_in { get; set; }
        public string refresh_token { get; set; }
        public string stat { get; set; }

        public transaction_state transaction_state { get; set; }
    }
}
