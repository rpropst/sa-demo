using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Web.Script.Serialization;


namespace Janrain
{
    public class Entity
    {
        public enum IdType {
            UUID,
            ID
        }

        private Config _config;
        private RestClient _restClient;

        private const string ENTITY_COMMAND = "/entity";
        private const string ENTITY_CREATE_COMMAND = "/entity.create";
        private const string ENTITY_COUNT_COMMAND = "/entity.count";

        public Entity(Config config)
        {
            _config = config;
            _restClient = new RestClient(string.Empty, HttpVerb.POST);
            _restClient.AddParameter("client_id", _config.ClientId);
            _restClient.AddParameter("client_secret", _config.ClientSecret);
            _restClient.AddParameter("type_name", _config.TypeName);
        }

        public string Create()
        {
            return string.Empty;
        }

        public string Get()
        {
            string endpoint = _config.Endpoint + ENTITY_COMMAND;

            _restClient.EndPoint = endpoint;

            // Determine which authentication method to use
            if(string.IsNullOrEmpty(_config.AccessToken))
            {
                throw new ApplicationException("No credentials were provided. You must provide an access token when calling Get() with no parameters");
            } 

            _restClient.AddParameter("access_token", _config.AccessToken);

            // attribute_name

            // attributes

            // created

            // last updated

            string jsonResult = _restClient.MakeRequest();
            //JumpResult jr = (JumpResult)DeserializeResult(jsonResult);

            return jsonResult;
        }

        public string Get(string id, IdType type)
        {
            string endpoint = _config.Endpoint + ENTITY_COMMAND;

            _restClient.EndPoint = endpoint;

            // Determine which authentication method to use
            if(string.IsNullOrEmpty(_config.AccessToken))
            {
                // use client id/secret
                if(string.IsNullOrEmpty(_config.ClientId) || string.IsNullOrEmpty(_config.ClientSecret))
                {
                    throw new ApplicationException("No credentials were provided. You must either provide a Client ID and Secret or an access token");
                }
                _restClient.AddParameter("client_id", _config.ClientId);
                _restClient.AddParameter("client_secret", _config.ClientSecret);
            } 
            else 
            {
                _restClient.AddParameter("access_token", _config.AccessToken);
            }

            // id
            _restClient.AddParameter(type.ToString().ToLower(), id);

            // attribute_name

            // attributes

            // created

            // last updated

            string jsonResult = _restClient.MakeRequest();
            JumpResult jr = (JumpResult)DeserializeResult(jsonResult);

            return jr.result;
        }

        public string Get(string keyAttribute, string keyValue)
        {

            return string.Empty;
        }

        public string Count()
        {
            string endpoint = _config.Endpoint + ENTITY_COUNT_COMMAND;

            _restClient.EndPoint = endpoint;

            string jsonResult = _restClient.MakeRequest();
            JumpResult jr = (JumpResult)DeserializeResult(jsonResult);

            return jr.total_count;
        }

        private object DeserializeResult(string result)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();

            object resultObject = serializer.Deserialize<Janrain.JumpResult>(result);

            return resultObject;
        }



    }
}
