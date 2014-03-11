function janrainDefaultSettings() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    window.janrain.settings = {
        actionText: ' ',
        appUrl: 'https://janrain-training.rpxnow.com',
        tokenAction: 'event',
        tokenUrl: 'http://localhost/',
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
            redirectUri: 'http://localhost/',
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
    url += 'd16s8pqtk4uodx.cloudfront.net';
    url += '/janrain-training/load.js';
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
    janrain.settings.capture.screenToRender = 'resetPasswordRequestCode';

    janrainInitLoad();

    janrainInjectCaptureWidget('janrainCaptureDevScript', '<div style="display:none;" id="resetPassword">\n' +
'    <div class="capture_header">\n' +
'        <h1>Change password</h1>\n' +
'    </div>\n' +
'    {* newPasswordForm *}\n' +
'        {* newpassword *}\n' +
'        {* newpasswordConfirm *}\n' +
'        <div class="capture_footer">\n' +
'            {* submitButton *}\n' +
'        </div>\n' +
'    {* /newPasswordForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="resetPasswordSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>Your password has been changed</h1>\n' +
'    </div>\n' +
'    <p>Password has been successfully updated.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="index.html" class="capture_btn capture_primary">Sign in</a>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="resetPasswordRequestCode">\n' +
'    <div class="capture_header">\n' +
'        <h1>Create a new password</h1>\n' +
'    </div>\n' +
'    <p>We didn\'t recognize that password reset code. Enter your email address to get a new one.</p>\n' +
'    {* #resetPasswordForm *}\n' +
'        {* traditionalSignIn_emailAddress *}\n' +
'        <div class="capture_footer">\n' +
'            {* forgotPassword_sendButton *}\n' +
'        </div>\n' +
'    {* /resetPasswordForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="resetPasswordRequestCodeSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>Create a new password</h1>\n' +
'    </div>\n' +
'      <p>We\'ve sent an email with instructions to create a new password. Your existing password has not been changed.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>\n' +
'    </div>\n' +
'</div>');
})();
