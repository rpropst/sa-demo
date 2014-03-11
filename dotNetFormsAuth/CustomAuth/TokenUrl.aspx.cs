using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Web.Configuration;

using Janrain;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CustomAuth
{
    public partial class TokenUrl : System.Web.UI.Page
    {
        private string Code { get; set; }
        private Config _janrainConfig { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            // 1. Get authorization code that Capture returned to us
            this.Code = Request.QueryString["code"];

            // Set up the configuration for our particular app
            _janrainConfig = new Config("https://janrainlab.dev.janraincapture.com", "22xcaaga55yyb8d4t4akdy4vwmnezn2t", "fgpbwwc4asc7jufbtvd6sx2xdze7t6a4");

            // 2. Exchange the auth code for an access token
            string result = AuthenticateUser();
            // Get the result into an object
            AuthResult authResult = JsonConvert.DeserializeObject<AuthResult>(result);
            // Add the access token to the config object (so it can be used for the /entity call
            _janrainConfig.AccessToken = authResult.access_token;

            // 3. Retrieve the profile data
            string profileData = GetProfile();
            // Get the entity result into an object
            EntityResult entityResult = JsonConvert.DeserializeObject<EntityResult>(profileData);
            // Create a user profile object from the data returned by Capture
            UserProfile user = entityResult.result;

            // 4. Authorize the user in ASP.NET
            //    Here, we are passing in the user's email as the username, but you can pass in whatever makes sense

            // Create FormsAuth ticket
            // FormsAuthenticationTicket ticket = new FormsAuthenticationTicket("CustomAuth", false, Int32.Parse(authResult.expires_in));
            //FormsAuthentication.
            FormsAuthentication.RedirectFromLoginPage(user.Email, false);
        }

        protected string AuthenticateUser()
        {
            // Authenticater auth = new Authenticater(new Config("https://pfizer-pse.janraincapture.com", "mw273mf5ewn44aduc72693rsqwhdth6x", "5j2pw6ab2zymm3aqchyt8jxveysh3n3c"));
            Authenticater auth = new Authenticater(_janrainConfig);

            string redirectUri = HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority);

            if (HttpContext.Current.Request.Url.Port == 80)
                redirectUri += "/customauth";

            redirectUri += "/" + WebConfigurationManager.AppSettings["TokenUrlPage"];

            string result = auth.GetToken(this.Code, redirectUri);

            return result;
        }

        protected string GetProfile()
        {
            Entity e = new Entity(_janrainConfig);

            string result = e.Get();

            return result;
        }

        protected object ParseResultJson(string jsonResult)
        {
            JObject o = JObject.Parse(jsonResult);

            return o;
        }
    }
}