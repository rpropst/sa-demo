<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="~/Logon.aspx.cs" Inherits="CustomAuth.Logon" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Forms Authentication - Login</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        
	<!-- Add your own Capture event handlers. To see the full list, run the following in the browser console: janrain.events  -->
	<script type="text/javascript">
	    function janrainCaptureWidgetOnLoad() {
	        janrain.settings.capture.flowName = 'signIn';
	        janrain.settings.language = 'en';
	        janrain.settings.capture.stylesheets = ['styles/janrain.css'];
	        janrain.settings.capture.mobileStylesheets = ['styles/janrain-mobile.css'];

	        janrain.capture.ui.start();
	        janrain.settings.capture.redirectOnLogin = true;

	        console.log('calling init load');
	        janrainInitLoad();

	        janrain.events.onCaptureLoginSuccess.addHandler(function (result) {
	            janrain.capture.ui.modal.close();
	            if (window.console && window.console.log) console.log(result);
	            document.getElementById("capture_signin_link").style.display = 'none';
	            document.getElementById("capture_signout_link").style.display = '';
	            document.getElementById("capture_profile_link").style.display = '';

	            console.log("======= result from auth =======")
	            console.log(result);

	            document.forms[0].submit();

	        });

	        janrain.events.onCaptureSessionFound.addHandler(function (result) {
	            janrain.capture.ui.modal.close();
	            if (window.console && window.console.log) console.log(result);
	            document.getElementById("capture_signin_link").style.display = 'none';
	            document.getElementById("capture_signout_link").style.display = '';
	            document.getElementById("capture_profile_link").style.display = '';
	        });
	        janrain.events.onCaptureRegistrationSuccess.addHandler(function (result) {
	            janrain.capture.ui.modal.close();
	            if (window.console && window.console.log) console.log(result);
	            document.getElementById("capture_signin_link").style.display = 'none';
	            document.getElementById("capture_signout_link").style.display = '';
	            document.getElementById("capture_profile_link").style.display = '';

	        });
	        janrain.events.onCaptureSessionEnded.addHandler(function (result) {
	            document.getElementById("capture_signin_link").style.display = '';
	            document.getElementById("capture_signout_link").style.display = 'none';
	            document.getElementById("capture_profile_link").style.display = 'none';
	        });
	    }
	</script>

            <script type="text/javascript" id="janrainCaptureScript">

                function janrainDefaultSettings() {
                    var defaultSettings = {
                        language: 'en',
                        actionText: ' ',
                        appUrl: 'https://janrain-training.rpxnow.com',
                        tokenAction: 'event',
                        tokenUrl: '<% =this.TokenUrl %>',
                        borderColor: '#ffffff',
                        fontFamily: 'Helvetica, Lucida Grande, Verdana, sans-serif',
                        packages: ['login', 'capture'],
                        providersPerPage: 4,
                        width: 300,
                        capture: {
                            appId: 'd2u6tf4vjtsbhpuxp49myc9qp6',
                            captureServer: 'https://janrain-training.janraincapture.com',
                            clientId: 'wmvczj9fpc256md8rbedh8gr7udkgfbk',
                            flowVersion: 'HEAD',
                            // recaptchaPublicKey: '6LeVKb4SAAAAAGv-hg5i6gtiOV4XrLuCDsJOnYoP',
                            keepProfileCookieAfterLogout: true,
                            modalCloseHtml: '<span class="janrain-icon-16 janrain-icon-ex2"></span>',
                            redirectUri: '<% =this.TokenUrl %>',
                            responseType: 'code',
                            setProfileCookie: true,
                            transactionTimeout: 10000,
                            noModalBorderInlineCss: true,
                            returnExperienceUserData: ['displayName']
                        }
                    };
                    if (typeof window.janrain !== 'object') window.janrain = {};
                    if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};
                    window.janrain.settings = janrainMergeObjects(defaultSettings, window.janrain.settings);
                };

                function janrainReturnExperience() {
                    var span = document.getElementById('traditionalWelcomeName');
                    var name = janrain.capture.ui.getReturnExperienceData("displayName");
                    if (span && name) {
                        span.innerHTML = "Welcome back, " + name + "!";
                    }
                }

                function janrainInitLoad() {
                    function isReady() { janrain.ready = true; };

                    janrain.settings.providers = ['facebook', 'twitter', 'linkedin', 'google'];


                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", isReady, false);
                    } else {
                        window.attachEvent('onload', isReady);
                    }

                    var e = document.createElement('script');
                    e.type = 'text/javascript';
                    e.id = 'janrainAuthWidget'
                    var protocol = document.location.protocol;
                    var url;
                    if (protocol === 'https:') {
                        url = 'https://rpxnow.com/load/janrainlab';
                    } else if (protocol === 'http:') {
                        url = 'http://widgets-cdn.rpxnow.com/load/janrainlab';
                    }
                    if (url) {
                        e.src = url;
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(e, s);
                    }
                }

                function janrainInjectCaptureWidget(targetId, widgetHtml) {
                    var s = document.getElementById(targetId);
                    var e = document.createElement('div');
                    e.id = 'janrainCaptureWidget';
                    e.innerHTML = widgetHtml;
                    s.parentNode.insertBefore(e, s);
                }

                // merge 2 objects: properties in the 2nd object overwrite properties in the 1st
                function janrainMergeObjects(obj1, obj2) {
                    for (var item in obj2) {
                        if (obj2[item].constructor === Object && item in obj1 && obj1[item].constructor === Object) {
                            obj1[item] = janrainMergeObjects(obj1[item], obj2[item]);
                        }
                        else {
                            obj1[item] = obj2[item];
                        }
                    }
                    return obj1;
                }


                (function () {
                    janrainDefaultSettings();
                    janrain.settings.capture.registerFlow = 'socialRegistration';

                    janrainInitLoad();

                })();

        </script>
</head>
<body>

    	<!-- During the development process, the configuration code will be loaded from Janrain servers so that we can help you customize it. 
             When your site is ready to go live, the following script tag will be replaced with your customized javascript and HTML markup 
             to provide the fastest possible user experience.
	<script src="http://pse.janrain.com/customer_dev/1a709c1c476f/scripts/index.js" id="janrainCaptureDevScript"></script>
 
        -->
      <!--  <script src="scripts/index.js" id="janrainCaptureDevScript"></script> -->

    <!-- Janrain UI -->
    
	<!-- The following links are meant to simulate elements already existing on your page. -->
	<!-- Add the class 'capture_modal_open' to an anchor tag to initiate signin. -->
	<a href="#" id="A1" class="capture_modal_open">Sign In / Sign Up</a>

	<!-- Link to the profile page as needed -->
	<a href="edit-profile.html" id="A2" style="display:none">Edit Profile</a><br /><br />

	<!-- Add the class 'capture_end_session' for the log out link -->
	<a href="#" id="A3" class="capture_end_session" style="display:none">Sign Out</a>
        
         <div style="display:none;" id="signIn">  
     <div class="capture_header">  
         <h1>Sign Up / Sign In</h1>  
     </div>  
     <div class="capture_signin">  
         <h2>With your existing account from...</h2>  
         {* loginWidget *} <br />  
     </div>  
     <div class="capture_backgroundColor">  
         <div class="capture_signin">  
             <h2>With a traditional account...</h2>  
                 {* #userInformationForm *}  
                     {* traditionalSignIn_emailAddress *}  
                     {* traditionalSignIn_password *}  
                     <div class="capture_form_item">  
                         <a href="#" data-capturescreen="forgotPassword">Forgot your password?</a>  
                     </div>  
                     <div class="capture_rightText">  
                         {* traditionalSignIn_signInButton *}{* traditionalSignIn_createButton *}  
                     </div>  
                 {* /userInformationForm *}  
         </div>  
     </div>  
 </div>  
 <div style="display:none;" id="returnSocial">  
     <div class="capture_header">  
         <h1>Sign In</h1>  
     </div>  
     <div class="capture_signin">  
         <h2>Welcome back, {* welcomeName *}!</h2>  
         {* loginWidget *}  
         <div class="capture_centerText switchLink"><a href="#" data-cancelcapturereturnexperience="true">Use another account</a></div>  
     </div>  
 </div>  
 <div style="display:none;" id="returnTraditional">  
     <div class="capture_header">  
         <h1>Sign In</h1>  
     </div>  
     <h2 class="capture_centerText"><span id="traditionalWelcomeName">Welcome back!</span></h2>  
             <div class="capture_backgroundColor">  
                 {* #userInformationForm *}  
                     {* traditionalSignIn_emailAddress *}  
                     {* traditionalSignIn_password *}  
                     <div class="capture_form_item capture_rightText">  
                         {* traditionalSignIn_signInButton *}  
                     </div>  
                 {* /userInformationForm *}  
         <div class="capture_centerText switchLink"><a href="#" data-cancelcapturereturnexperience="true">Use another account</a></div>  
     </div>  
 </div>  
 <div style="display:none;" id="socialRegistration">  
     <div class="capture_header">  
         <h1>Almost Done!</h1>  
     </div>  
       <h2>Please confirm the information below before signing in.</h2>  
         {* #socialRegistrationForm *}  
             {* socialRegistration_firstName *}  
             {* socialRegistration_lastName *}  
             {* socialRegistration_emailAddress *}  
             {* socialRegistration_displayName *}  
             By clicking "Sign in", you confirm that you accept our  
                 <a href="#">terms of service</a> and have read and understand  
                 <a href="#">privacy policy</a>.  
             <div class="capture_footer">  
                 <div class="capture_left">  
                     {* backButton *}  
                 </div>  
                 <div class="capture_right">  
                 {* socialRegistration_signInButton *}  
                 </div>  
             </div>  
         {* /socialRegistrationForm *}  
 </div>  
 <div style="display:none;" id="registrationNewVerification">  
     <div class="capture_header">  
         <h1>Thank you for registering!</h1>  
     </div>  
     <p>We have sent a confirmation email to {* emailAddressData *}. Please check your email and click on the link to activate your account.</p>  
     <div class="capture_footer">  
         <a href="#" onclick="window.location.reload()" class="capture_btn capture_primary">Close</a>  
         </div>  
     </div>  
 <div style="display:none;" id="traditionalRegistration">  
     <div class="capture_header">  
         <h1>Almost Done!</h1>  
     </div>  
     <p>Please confirm the information below before signing in. Already have an account? <a href="#" data-capturescreen="signIn">Sign In.</a>  
     </p>  
         {* #registrationForm *}  
             {* traditionalRegistration_firstName *}  
             {* traditionalRegistration_lastName *}  
             {* traditionalRegistration_emailAddress *}  
             {* traditionalRegistration_password *}  
             {* traditionalRegistration_passwordConfirm *}  
             {* traditionalRegistration_displayName *}  
             By clicking "Create Account", you confirm that you accept our  
                 <a href="#">terms of service</a> and have read and understand  
                 <a href="#">privacy policy</a>.  
             <div class="capture_footer">  
                 <div class="capture_left">  
                     {* backButton *}  
                 </div>  
                 <div class="capture_right">  
                 {* createAccountButton *}  
                 </div>  
             </div>  
         {* /registrationForm *}  
 </div>  
 <div style="display:none;" id="forgotPassword">  
     <div class="capture_header">  
         <h1>Create a new password</h1>  
     </div>  
     <h2>We\ ll send you a link to create a new password.</h2>  
     {* #forgotPasswordForm *}  
         {* traditionalSignIn_emailAddress *}  
         <div class="capture_footer">  
             <div class="capture_left">  
                 {* backButton *}  
             </div>  
             <div class="capture_right">  
                 {* forgotPassword_sendButton *}  
             </div>  
         </div>  
     {* /forgotPasswordForm *}  
 </div>  
 <div style="display:none;" id="forgotPasswordSuccess">  
     <div class="capture_header">  
         <h1>Create a new password</h1>  
     </div>  
       <p>We\ ve sent an email with instructions to create a new password. Your existing password has not been changed.</p>  
     <div class="capture_footer">  
         <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>  
     </div>  
 </div>  
 <div style="display:none;" id="mergeAccounts">  
     {* mergeAccounts *}  
 </div>  
 <div style="display:none;" id="traditionalAuthenticateMerge">  
     <div class="capture_header">  
         <h1>Sign in to complete account merge</h1>  
     </div>  
     <div class="capture_signin">  
     {* #tradAuthenticateMergeForm *}  
         {* traditionalSignIn_emailAddress *}  
         {* mergePassword *}  
         <div class="capture_footer">  
             <div class="capture_left">  
                 {* backButton *}  
             </div>  
             <div class="capture_right">  
                 {* traditionalSignIn_signInButton *}  
             </div>  
         </div>  
      {* /tradAuthenticateMergeForm *}  
     </div>  
 </div> 

<!--
    <form id="form1" runat="server">
        <h3>
            Logon Page
        </h3>
        <table>
            <tr>
                <td>
                    E-mail address:
                </td>
                <td>
                    <asp:TextBox ID="UserEmail" runat="server" />
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1"
                        ControlToValidate="UserEmail"
                        Display="Dynamic"
                        ErrorMessage="Cannot be empty."
                        runat="server" />
                </td>
            </tr>
            <tr>
                <td>
                    Password:
                </td>
                <td>
                    <asp:TextBox ID="UserPass" TextMode="Password" runat="server" />
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2"
                        ControlToValidate="UserPass"
                        ErrorMessage="Cannot be Empty"
                        runat="server" />
                </td>
            </tr>
            <tr>
                <td>
                    Remember me?
                </td>
                <td>
                    <asp:CheckBox ID="Persist" runat="server" />
                </td>
            </tr>
        </table>
        <asp:Button ID="Submit1" OnClick="Submit1_Click" runat="server" Text="Log On" />
        <p>
            <asp:Label ID="Msg" ForeColor="Red" runat="server" />
        </p>
    <div>
    
    </div>
    </form>
    -->
</body>
</html>
