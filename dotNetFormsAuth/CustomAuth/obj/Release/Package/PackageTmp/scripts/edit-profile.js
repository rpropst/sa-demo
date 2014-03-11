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
    janrain.settings.capture.autoSave = false;

    janrainInitLoad();

    janrainInjectCaptureWidget('janrainCaptureDevScript', '<div style="display:none;" id="editProfile">\n' +
'    <h1>Edit Your Account</h1>\n' +
'    <div class="capture_grid_block">\n' +
'        <div class="capture_col_4">\n' +
'            <h3>Profile Photo</h3>\n' +
'            <div class="contentBoxWhiteShadow">\n' +
'                {* photoManager *}\n' +
'            </div>\n' +
'            <h3>Linked Accounts</h3>\n' +
'            <div class="contentBoxWhiteShadow">\n' +
'                {* linkedAccounts *}\n' +
'                {* linkAccountContainer *}\n' +
'                    <div class="capture_header">\n' +
'                        <h1>Link your accounts</h1>\n' +
'                    </div>\n' +
'                    <h2>Allows you to sign in to your account using that provider in the future.</h2>\n' +
'                    <div class="capture_signin">\n' +
'                        {* loginWidget *}\n' +
'                    </div>\n' +
'                {* /linkAccountContainer *}\n' +
'            </div>\n' +
'            <h3>Public Profile</h3>\n' +
'            <div class="contentBoxWhiteShadow">\n' +
'                {* publicProfileLink *}\n' +
'            </div>\n' +
'            <!-- Only show this if it was from a traditional login !-->\n' +
'            <h3 class="janrain_traditional_account_only">Password</h3>\n' +
'            <div class="janrain_traditional_account_only contentBoxWhiteShadow">\n' +
'                <a href="#" data-capturescreen="changePassword">Change Password</a>\n' +
'            </div>\n' +
'        </div>\n' +
'        <div class="capture_col_8">\n' +
'            <h3>Account Info</h3>\n' +
'            <div class="contentBoxWhiteShadow">\n' +
'                <div class="capture_grid_block">\n' +
'                    <div class="capture_center_col capture_col_8">\n' +
'                        <div class="capture_editCol">\n' +
'                            {* editProfileForm *}\n' +
'                                    {* displayName *}\n' +
'                                    {* profileBlurb *}\n' +
'                                    {* name *}\n' +
'                                    {* email *}\n' +
'                                    {* phone *}\n' +
'                                    {* addressDrop *}\n' +
'                                    {* gender *}\n' +
'                                    {* birthdate *}\n' +
'                                    <div class="capture_form_item">\n' +
'                                        {* saveButton *}\n' +
'                                        {* savedProfileMessage *}\n' +
'                                    </div>\n' +
'                            {* /editProfileForm *}\n' +
'                        </div>\n' +
'                    </div>\n' +
'                </div>\n' +
'            </div>\n' +
'        </div>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="changePassword">\n' +
'    <div class="capture_header">\n' +
'        <h1>Change password</h1>\n' +
'    </div>\n' +
'    {* newPasswordForm *}\n' +
'        {* oldpassword *}\n' +
'        {* newpassword *}\n' +
'        {* newpasswordConfirm *}\n' +
'        <div class="capture_footer">\n' +
'            {* saveButton *}\n' +
'        </div>\n' +
'    {* /newPasswordForm *}\n' +
'</div>\n' +
'<div style="display:none;" id="changePasswordSuccess">\n' +
'    <div class="capture_header">\n' +
'        <h1>You did it!</h1>\n' +
'    </div>\n' +
'      <p>Your password has been successfully changed.</p>\n' +
'    <div class="capture_footer">\n' +
'        <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>\n' +
'    </div>\n' +
'</div>\n' +
'<div style="display:none;" id="addLinkedAccount">\n' +
'    <div class="capture_header">\n' +
'        <h1>Link another account</h1>\n' +
'    </div>\n' +
'    <h3>Link any of these providers with your account.<br />Allows you to sign in to your {* siteName *} account using that provider in the future.</h3>\n' +
'    {* loginWidget *}\n' +
'</div>\n' +
'<div style="display: none;" id="publicProfileModal">\n' +
'    <div class="capture_header">\n' +
'        <h1>My profile</h1>\n' +
'    </div>\n' +
'    <div class="capture_grid_block">\n' +
'        <div class="capture_col_6">\n' +
'            <div class="capture_profile_pic">\n' +
'                <div id="profile_pic" class="capture_default">\n' +
'                    {* profilePhotoCustom *}\n' +
'                </div>\n' +
'            </div>\n' +
'        </div>\n' +
'        <div class="capture_col_6">\n' +
'            <h2>{* public_displayName *}</h2>\n' +
'            {* public_profileBlurb *}\n' +
'        </div>\n' +
'    </div>\n' +
'    {* public_name *}\n' +
'    {* public_emailAddress *}\n' +
'    {* public_phoneNumber *}\n' +
'    {* public_address *}\n' +
'    {* public_gender *}\n' +
'    {* public_birthdate *}\n' +
'    <div class="capture_footer">\n' +
'        <div class="capture_right">\n' +
'            <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>\n' +
'        </div>\n' +
'    </div>\n' +
'</div>\n' +
'<div id="janrainEngageEmbed"  style="display:none;"></div>');
})();
