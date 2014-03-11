using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Janrain
{
    public class Config
    {
        public string Endpoint { get; set; }
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string TypeName { get; set; }
        public string AccessToken { get; set; }

        public Config(string endpoint, string id, string secret)
        {
            Endpoint = endpoint;
            ClientId = id;
            ClientSecret = secret;
            TypeName = "user";
        }

        public Config(string endpoint, string accessToken)
        {
            Endpoint = endpoint;
            AccessToken = accessToken;
            TypeName = "user";
        }
    }
}
