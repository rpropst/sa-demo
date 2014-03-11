using System;
using System.Collections.Generic;
using System.Collections;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

using System.Web;

using RestSharp;

namespace Janrain
{
    public enum HttpVerb
    {
        GET,
        POST,
        PUT,
        DELETE
    }

    class RestClient
    {
        public string EndPoint { get; set; }  // The URI for the REST method (ex. https://customer.janraincapture.com)
        public string Command { get; set; }   // The REST method (ex. /entity)
        public HttpVerb Method { get; set; }
        public string ContentType { get; set; }
        public string PostData { get; set; }

        // Debugging data

        public string Variables { get; set; }
        public string Uri { get; set; }

        private Dictionary<string, string> _params;

        public RestClient()
        {
            _params = new Dictionary<string, string>();
            EndPoint = string.Empty;
            Command = string.Empty;
            Method = HttpVerb.GET;
            ContentType = "text/xml";
            PostData = string.Empty;
        }

        public RestClient(string endpoint)
        {
            _params = new Dictionary<string, string>();
            EndPoint = endpoint;
            Command = string.Empty;
            Method = HttpVerb.GET;
            ContentType = "text/xml";
            PostData = string.Empty;
        }

        public RestClient(string endpoint, HttpVerb method)
        {
            _params = new Dictionary<string, string>();
            EndPoint = endpoint;
            Command = string.Empty;
            Method = method;
            ContentType = "text/xml";
            PostData = string.Empty;
        }

        public RestClient(string endpoint, string command)
        {
            _params = new Dictionary<string, string>();
            EndPoint = endpoint;
            Command = command;
            Method = HttpVerb.GET;
            ContentType = "text/xml";
            PostData = string.Empty;
        }

        public RestClient(string endpoint, string command, HttpVerb method)
        {
            _params = new Dictionary<string, string>();
            EndPoint = endpoint;
            Command = command;
            Method = method;
            ContentType = "text/xml";
            PostData = string.Empty;
        }

        public RestClient(string endpoint, string command, HttpVerb method, string postData)
        {
            _params = new Dictionary<string, string>();
            EndPoint = endpoint;
            Command = command;
            Method = method;
            ContentType = "text/xml";
            PostData = postData;
        }

        public void AddParameter(string param, string value)
        {
            if((param != string.Empty) && value != string.Empty)
                //_params.Add(param, HttpUtility.UrlEncode(value));
                _params.Add(param, value);
        }

        public string MakeRequest()
        {

            string parms = CreateParameterString();

            this.Variables = parms;

            this.Uri = this.EndPoint + parms;

            // return this.Uri;

            // Using RestSharp

            var client = new RestSharp.RestClient(this.EndPoint);

            var request = new RestRequest(this.Command, RestSharp.Method.POST);

            if (_params.Count > 0)
            {
                foreach (KeyValuePair<string, string> item in _params)
                {
                    request.AddParameter(item.Key, item.Value);
                }
            }

            IRestResponse response = client.Execute(request);

            return response.Content;

            // Ancient .NET way follows
            /*
            var request = (HttpWebRequest)WebRequest.Create(this.Uri);

            request.Method = Method.ToString();
            request.ContentLength = 0;
            request.ContentType = ContentType;

            if (!string.IsNullOrEmpty(PostData) && Method == HttpVerb.POST)
            {
                var encoding = new UTF8Encoding();
                var bytes = Encoding.GetEncoding("iso-8859-1").GetBytes(PostData);
                request.ContentLength = bytes.Length;

                using (var writeStream = request.GetRequestStream())
                {
                    writeStream.Write(bytes, 0, bytes.Length);
                }
            }

            using (var response = (HttpWebResponse)request.GetResponse())
            {
                var responseValue = string.Empty;

                if (response.StatusCode != HttpStatusCode.OK)
                {
                    var message = String.Format("Request failed. Received HTTP {0}", response.StatusCode);
                    throw new ApplicationException(message);
                }

                // grab the response

                using (var responseStream = response.GetResponseStream())
                {
                    if (responseStream != null)
                        using (var reader = new StreamReader(responseStream))
                        {
                            responseValue = reader.ReadToEnd();
                        }
                }

                return responseValue;
            }
            */
        }

        private string CreateParameterString()
        {
            string result = string.Empty;

            if (_params.Count > 0)
            {
                result = "?";

                string parameter = string.Empty;

                foreach (KeyValuePair<string, string> item in _params)
                {
                    parameter = item.Key + "=" + item.Value;
                    result += parameter + "&";
                }

                result = result.TrimEnd(new char[] { '&' });
            }

            return result;
        }
    }
}
