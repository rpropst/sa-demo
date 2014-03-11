using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Web.Configuration;

using System.Web.Security;

namespace CustomAuth
{
    public partial class Logon : System.Web.UI.Page
    {
        public string TokenUrl { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.TokenUrl = HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority);

            if (HttpContext.Current.Request.Url.Port == 80)
                this.TokenUrl += "/customauth";

            this.TokenUrl += "/" + WebConfigurationManager.AppSettings["TokenUrlPage"];

        }

        protected void Submit1_Click(object sender, EventArgs e)
        {

            if ((UserEmail.Text == "jchen@contoso.com") && (UserPass.Text == "37Yj*99Ps"))
            {
                FormsAuthentication.RedirectFromLoginPage(UserEmail.Text, Persist.Checked);
            }
            else
            {
                Msg.Text = "Invalid credentials. Please try again.";
            }
        }
    }
}