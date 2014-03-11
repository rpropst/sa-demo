using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Janrain
{
    public class Authenticater
    {
        private Config _configuration;
        private RestClient _restClient;

        private const string OAUTH_TOKEN_COMMAND = "/oauth/token";

        public Authenticater(Config configuration)
        {
            if(configuration != null)
                _configuration = configuration;
            //_restClient = new RestClient(_configuration.Endpoint, HttpVerb.POST);
            _restClient = new RestClient(_configuration.Endpoint, OAUTH_TOKEN_COMMAND, HttpVerb.POST);
            _restClient.AddParameter("client_id", _configuration.ClientId);
            _restClient.AddParameter("client_secret", _configuration.ClientSecret);
        }

        public string GetToken(string code, string redirectUri)
        {
            // string endpoint = _configuration.Endpoint + OAUTH_TOKEN_COMMAND;
            string endpoint = _configuration.Endpoint;

            _restClient.EndPoint = endpoint;

            _restClient.AddParameter("grant_type", "authorization_code");
            _restClient.AddParameter("redirect_uri", redirectUri);
            _restClient.AddParameter("code", code);

            string response = _restClient.MakeRequest();

            return response;
        }
    }
}
