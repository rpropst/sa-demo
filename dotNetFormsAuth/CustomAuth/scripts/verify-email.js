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
    janrain.settings.capture.screenToRender = 'verifyEmail';

    janrainInitLoad();

    janrainInjectCaptureWidget('janrainCaptureDevScript', '<div style="display:none;" id="verifyEmail">\n' +
'    <div class="capture_header">\n' +
'        <h1>Resend Email Verification</h1>\n' +
'    </div>\n' +
'    <p>Sorry we could not verify that email address. Enter your email below and we\'ll send you another email.</p>\n' +
'    {* #resendVerificationForm *}\n' +
'        {* traditionalSignIn_emailAddress *}\n' +
'        <div class="capture_footer">\n' +
'            {* submitButton *}\n' +
'        </div>\n' +
'     {* /resendVerificationForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="resendVerificationSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>Your Verification Email Has Been Sent</h1>\n' +
'    </div>\n' +
'    <div class="hr"></div>\n' +
'    <p>Check your email for a link to reset your password.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="#" data-capturescreen="signIn" class="capture_btn capture_primary">Sign in</a>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="verifyEmailSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>You did it!</h1>\n' +
'    </div>\n' +
'    <p>Thank you for verifiying your email address.\n' +
'    <div class="capture_footer">\n' +
'        <a href="index.html" class="capture_btn capture_primary">Sign in</a>\n' +
'    </div>\n' +
'</div>');
})();
