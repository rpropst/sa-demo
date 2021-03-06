﻿function janrainDefaultSettings() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    window.janrain.settings = {
        actionText: ' ',
        appUrl: 'https://janrain-training.rpxnow.com',
        tokenAction: 'event',
        tokenUrl: 'http://localhost:49251/',
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
            keepProfileCookieAfterLogout: true,
            modalCloseHtml: '<span class="janrain-icon-16 janrain-icon-ex2"></span>',
            redirectUri: 'http://localhost:49251/',
            responseType: 'token',
            setProfileCookie: true,
            transactionTimeout: 10000,
            noModalBorderInlineCss: true
        }
    };
};

function janrainInitLoad() {
    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", isReady, false);
    } else {
        window.attachEvent('onload', isReady);
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';

    var url = document.location.protocol === 'https:' ? 'https://' : 'http://';
    //url += 'd16s8pqtk4uodx.cloudfront.net';
    //url += '/janrain-training/load.js';
    url += 'localhost:49251/scripts/load.js';
    e.src = url;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
}

function janrainInjectCaptureWidget(targetId, widgetHtml) {
    var s = document.getElementById(targetId);
    var e = document.createElement('div');
    e.id = 'janrainCaptureWidget';
    e.innerHTML = widgetHtml;
    s.parentNode.insertBefore(e, s);
}


(function () {
    janrainDefaultSettings();
    janrain.settings.capture.registerFlow = 'socialRegistration';

    janrainInitLoad();

    janrainInjectCaptureWidget('janrainCaptureDevScript', '<div style="display:none;" id="signIn">\n' +
'    <div class="capture_header">\n' +
'        <h1>Sign Up / Sign In</h1>\n' +
'    </div>\n' +
'    <div class="capture_signin">\n' +
'        <h2>With your existing account from...</h2>\n' +
'        {* loginWidget *} <br />\n' +
'    </div>\n' +
'    <div class="capture_backgroundColor">\n' +
'        <div class="capture_signin">\n' +
'            <h2>With a traditional account...</h2>\n' +
'                {* #userInformationForm *}\n' +
'                    {* traditionalSignIn_emailAddress *}\n' +
'                    {* traditionalSignIn_password *}\n' +
'                    <div class="capture_rightText">\n' +
'                        {* traditionalSignIn_signInButton *}{* traditionalSignIn_createButton *}\n' +
'                    </div>\n' +
'                {* /userInformationForm *}\n' +
'        </div>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="returnSocial">\n' +
'    <div class="capture_header">\n' +
'        <h1>Sign In</h1>\n' +
'    </div>\n' +
'    <div class="capture_signin">\n' +
'        <h2>Welcome Back {* welcomeName *}</h2>\n' +
'        {* loginWidget *}\n' +
'        <div class="capture_centerText switchLink"><a href="#" data-cancelcapturereturnexperience="true">Use another account</a></div>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="returnTraditional">\n' +
'    <div class="capture_header">\n' +
'        <h1>Sign In</h1>\n' +
'    </div>\n' +
'    <h2 class="capture_centerText">Welcome back {* displayNameStorageData *}!</h2>\n' +
'            <div class="capture_backgroundColor">\n' +
'                {* #userInformationForm *}\n' +
'                    {* traditionalSignIn_emailAddress *}\n' +
'                    {* traditionalSignIn_password *}\n' +
'                    <div class="capture_form_item capture_rightText">\n' +
'                        {* traditionalSignIn_signInButton *}\n' +
'                    </div>\n' +
'                {* /userInformationForm *}\n' +
'        <div class="capture_centerText switchLink"><a href="#" data-cancelcapturereturnexperience="true">Use another account</a></div>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="socialRegistration">\n' +
'    <div class="capture_header">\n' +
'        <h1>Almost Done!</h1>\n' +
'    </div>\n' +
'      <h2>Please confirm the information below before signing in.</h2>\n' +
'        {* #socialRegistrationForm *}\n' +
'            {* socialRegistration_firstName *}\n' +
'            {* socialRegistration_lastName *}\n' +
'            {* socialRegistration_emailAddress *}\n' +
'            {* socialRegistration_displayName *}\n' +
'            By clicking "Sign in", you confirm that you accept our\n' +
'                <a href="#">terms of service</a> and have read and understand\n' +
'                <a href="#">privacy policy</a>.\n' +
'            <div class="capture_footer">\n' +
'                <div class="capture_left">\n' +
'                    {* backButton *}\n' +
'                </div>\n' +
'                <div class="capture_right">\n' +
'                {* socialRegistration_signInButton *}\n' +
'                </div>\n' +
'            </div>\n' +
'        {* /socialRegistrationForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="registrationNewVerification">\n' +
'    <div class="capture_header">\n' +
'        <h1>Thank you for registering!</h1>\n' +
'    </div>\n' +
'    <p>We have sent a confirmation email to {* emailAddressData *}. Please check your email and click on the link to activate your account.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="#" onclick="window.location.reload()" class="capture_btn capture_primary">Close</a>\n' +
'        </div>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="traditionalRegistration">\n' +
'    <div class="capture_header">\n' +
'        <h1>Almost Done!</h1>\n' +
'    </div>\n' +
'    <p>Please confirm the information below before signing in. Already have an account? <a href="#" data-capturescreen="signIn">Sign In.</a>\n' +
'    </p>\n' +
'        {* #registrationForm *}\n' +
'            {* traditionalRegistration_firstName *}\n' +
'            {* traditionalRegistration_lastName *}\n' +
'            {* traditionalRegistration_emailAddress *}\n' +
'            {* traditionalRegistration_password *}\n' +
'            {* traditionalRegistration_passwordConfirm *}\n' +
'            {* traditionalRegistration_displayName *}\n' +
'            By clicking "Create Account", you confirm that you accept our\n' +
'                <a href="#">terms of service</a> and have read and understand\n' +
'                <a href="#">privacy policy</a>.\n' +
'            <div class="capture_footer">\n' +
'                <div class="capture_left">\n' +
'                    {* backButton *}\n' +
'                </div>\n' +
'                <div class="capture_right">\n' +
'                {* createAccountButton *}\n' +
'                </div>\n' +
'            </div>\n' +
'        {* /registrationForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="forgotPassword">\n' +
'    <div class="capture_header">\n' +
'        <h1>Create a new password</h1>\n' +
'    </div>\n' +
'    <h2>We\'ll send you a link to create a new password.</h2>\n' +
'    {* #forgotPasswordForm *}\n' +
'        {* traditionalSignIn_emailAddress *}\n' +
'        <div class="capture_footer">\n' +
'            <div class="capture_left">\n' +
'                {* backButton *}\n' +
'            </div>\n' +
'            <div class="capture_right">\n' +
'                {* forgotPassword_sendButton *}\n' +
'            </div>\n' +
'        </div>\n' +
'    {* /forgotPasswordForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="forgotPasswordSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>Create a new password</h1>\n' +
'    </div>\n' +
'      <p>We\'ve sent an email with instructions to create a new password. Your existing password has not been changed.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="mergeAccounts">\n' +
'    {* mergeAccounts *}\n' +
'</div>\n' +
'<div style="display:none;" id="traditionalAuthenticateMerge">\n' +
'    <div class="capture_header">\n' +
'        <h1>Sign in to complete account merge</h1>\n' +
'    </div>\n' +
'    <div class="capture_signin">\n' +
'    {* #tradAuthenticateMergeForm *}\n' +
'        {* traditionalSignIn_emailAddress *}\n' +
'        {* mergePassword *}\n' +
'        <div class="capture_footer">\n' +
'            <div class="capture_left">\n' +
'                {* backButton *}\n' +
'            </div>\n' +
'            <div class="capture_right">\n' +
'                {* traditionalSignIn_signInButton *}\n' +
'            </div>\n' +
'        </div>\n' +
'     {* /tradAuthenticateMergeForm *}\n' +
'    </div>\n' +
'</div>');
})();
