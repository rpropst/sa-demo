<?php 

   $token = $_POST['token'];
    require 'api_key.php';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://rpxnow.com/api/v2/auth_info');
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, array('token' => $token,
        'apiKey' => $apiKey));
    curl_setopt($curl, CURLOPT_FAILONERROR, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $profileString = curl_exec($curl);
    if (!$profileString) {
    echo '<p>Curl error: ' . curl_error($curl);
    echo '<p>HTTP code: ' . curl_errno($curl);
} else {
    $profile = json_decode($profileString);
    if (property_exists($profile, 'err')) {
        echo '<p>Engage error: ' . $profile->err->msg;
    } else {
        if (property_exists($profile->profile, 'displayName')) {
            $_SESSION['userName'] = $profile->profile->displayName;
        } else {
            $_SESSION['userName'] = '(Anonymous Coward)';
        }
    }
}
    curl_close($curl);

?>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Test Token URL Page</title>

    <link rel="stylesheet" type="text/css" href="common.css" />        

    <script type="text/javascript">
        (function() {
            if (typeof window.janrain !== 'object') window.janrain = {};
            if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};
            if (typeof window.janrain.settings.share !== 'object') window.janrain.settings.share = {};
            if (typeof window.janrain.settings.packages !== 'object') janrain.settings.packages = [];
            janrain.settings.packages.push('share');
        
            /* _______________ can edit below this line _______________ */
        
            janrain.settings.share.providers = ["email","facebook","twitter","linkedin"];
            janrain.settings.share.providersEmail = ["google"];
            janrain.settings.share.modes = ["broadcast","contact"];
            janrain.settings.share.attributionDisplay = true;
            janrain.settings.share.message = "Ohhh, Grumpy Cat!";
            janrain.settings.share.title = "";
            janrain.settings.share.url = "";
            janrain.settings.share.description = "";
            janrain.settings.facebookPermissions = [ "publish_actions",  ];
        
            // Modal Styles
            janrain.settings.share.modalBackgroundColor = "#000000";
            janrain.settings.share.modalBorderRadius = "5";
            janrain.settings.share.modalOpacity = "0.5";
            janrain.settings.share.modalWidth = "5";
        
        
            // Body Styles
            janrain.settings.share.bodyBackgroundColor = "#009DDC";
            janrain.settings.share.bodyBackgroundColorOverride = false;
            janrain.settings.share.bodyColor = "#333333";
            janrain.settings.share.bodyContentBackgroundColor = "#ffffff";
            janrain.settings.share.bodyFontFamily = "Helvetica";
            janrain.settings.share.bodyTabBackgroundColor = "#f8f8f8";
            janrain.settings.share.bodyTabColor = "#000000";
        
        
            // Element Styles
            janrain.settings.share.elementBackgroundColor = "#f6f6f6";
            janrain.settings.share.elementBorderColor = "#cccccc";
            janrain.settings.share.elementBorderRadius = "3";
            janrain.settings.share.elementButtonBorderRadius = "6";
            janrain.settings.share.elementButtonBoxShadow = "3";
            janrain.settings.share.elementColor = "#333333";
            janrain.settings.share.elementHoverBackgroundColor = "#eeeeee";
            janrain.settings.share.elementLinkColor = "#009DDC";
        
            /* _______________ can edit above this line _______________ */
        
            function isReady() { janrain.ready = true; };
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", isReady, false);
            } else {
                window.attachEvent('onload', isReady);
            }
        
            var e = document.createElement('script');
            e.type = 'text/javascript';
            e.id = 'janrainWidgets';
        
            if (document.location.protocol === 'https:') {
                e.src = 'https://rpxnow.com/js/lib/manuel-02/widget.js';
            } else {
                e.src = 'http://widget-cdn.rpxnow.com/js/lib/manuel-02/widget.js';
            }
        
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(e, s);
        })();
    </script>

    <script>
        var janrainShareOnload = function() 
        {
                
            janrain.engage.share.setImage("http://localhost/janrain101/les_mis.png");
            var customShareProvider_pinterest = janrain.engage.share.createBlankProvider("Pinterest", 4);
            var tab_pinterest = customShareProvider_pinterest.tab;
            var page_pinterest = customShareProvider_pinterest.page;
            tab_pinterest.innerHTML = "<div class='janrain-share-providerslist-provider-image janrain-provider-icon-grayscale-Pinterest'></div><span>Pinterest</span><span class='janrain-share-providerslist-provider-arrow'></span>";
            page_pinterest.innerHTML = "<div class='janrain-share-providerpage-titlebroadcast' id='janrain-share-providerpages-titlebroadcast-Pinterest'><span>Share On Pinterest</span></div><div class='janrain-share-providerpage-content'><div class='janrain-share-preview'><div class='janrain-share-input-container janrain-share-preview-titleinput'><div class='janrain-share-input-title'></div><input placeholder='' class='janrain-share-input janrain-share-preview-input' id='janrain-share-Pinterest-titleinput'><div class='janrain-share-input-clear' id='janrain-share-preview-input-clear-Pinterest'>x</div><div class='janrain-share-input-button janrain-share-input-button-disabled' id='janrain-share-preview-input-button-Pinterest'>+</div><div class='janrain-share-input-note' style=''>It appears the URL has been modified. <span>Restore?</span></div><div class='janrain-share-input-counter'>0</div><div class='janrain-share-preview-edit'>Edit</div><div class='janrain-share-preview-done'>Done</div></div><div class='janrain-share-input-container janrain-share-preview-message'><div class='janrain-share-input-title'></div><img id='pinPreview' src='les_mis.png' /><a href='//pinterest.com/pin/create/button/?url=http%3A%2F%2Flocalhost%2Fjanrain101%2Findex.php&media=http%3A%2F%2Flocalhost%2Fjanrain101%2Fles_mis.png&description=Les%20Mis%C3%A9rable%3F%20More%20Miserable!' data-pin-do='buttonPin' data-pin-config='none' target='_blank'><img src='//assets.pinterest.com/images/pidgets/pin_it_button.png' /></a><div class='janrain-share-input-clear' id='janrain-share-preview-input-clear-Pinterest'>x</div><div class='janrain-share-input-button janrain-share-input-button-disabled' id='janrain-share-preview-input-button-Pinterest'>+</div><div class='janrain-share-input-note' style=''>It appears the URL has been modified. <span>Restore?</span></div><div class='janrain-share-input-counter janrain-share-input-counter-excess'>-20</div><div class='janrain-share-preview-edit'>Edit</div><div class='janrain-share-preview-done'>Done</div></div><div class='janrain-share-preview-page'><div class='janrain-share-preview-imagecontainer' style='display: none;'><img class='janrain-share-preview-image'></div><div class='janrain-share-preview-titlecontainer'><div class='janrain-share-preview-title' id='janrain-share-Pinterest-title' style=''></div><a data-pin-do='embedPin' href='http://pinterest.com/pin/513551163728863189'></a><div class='janrain-share-preview-description' id='janrain-share-Pinterest-description' style=''></div></div></div></div></div><div class='janrain-share-login'><span class='janrain-share-login-prefs' id='janrain-share-login-prefs-facebook'><span class='janrain-share-login-prefs-name janrain-share-login-prefs-name-100' id='janrain-share-login-prefs-facebook-name'>Manuel Tomás Cruz</span><div class='janrain-share-bubble' style='display: none;'><div class='janrain-share-bubble-arrow'></div><div class='janrain-share-bubble-logout' id='janrain-share-bubble-logout-32'>Switch accounts</div></div></span><span class='janrain-share-login-message' id='janrain-share-login-message-facebook'></span><span class='janrain-share-login-messagefail' id='janrain-share-login-messagefail-facebook'>Connecting to Facebook failed. %TAG%View Error%GAT%</span><span class='janrain-share-login-messageemail' id='janrain-share-login-messageemail-facebook'></span><span class='janrain-share-login-messageemailshort' id='janrain-share-login-messageemailshort-facebook'></span><div class='janrain-share-login-buttons'><div class='janrain-share-login-button janrain-share-login-button-broadcast janrain-share-login-button-facebook' id='janrain-share-login-button-broadcast-facebook-facebook'><div class='janrain-share-login-button-image janrain-provider-icon-16 janrain-provider-icon-facebook'></div><img class='janrain-share-login-button-userimage' alt='' src='https://graph.facebook.com/100003998292702/picture?type=large' style=''><span class='janrain-share-login-button-text'>Share On Your Timeline</span></div><div class='janrain-share-login-button janrain-share-login-button-contact janrain-share-login-button-facebook' id='janrain-share-login-button-contact-facebook-facebook'><div class='janrain-share-login-button-image janrain-provider-icon-16 janrain-provider-icon-facebook'></div><img class='janrain-share-login-button-userimage' alt='' src='https://graph.facebook.com/100003998292702/picture?type=large' style=''><span class='janrain-share-login-button-text'>Share on Friend's Timelines</span></div></div></div>";
        
        }
    </script>

    <script type="text/javascript">
        // Pinterest code
        (function(d){
            var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
            p.type = 'text/javascript';
            p.async = true;
            p.src = '//assets.pinterest.com/js/pinit.js';
            f.parentNode.insertBefore(p, f);
        }(document));
    </script> 

    <style>
        /* Custom Share Provider Styles */

        #janrain-share-providerpage-Pinterest {
            background-color: #EA000D;
        }

        #janrain-share-providerslist-provider-Pinterest .janrain-share-providerslist-provider-arrow {
            border-color: transparent#FF0000 transparent transparent;
        } 

        .janrain-provider-icon-grayscale-Pinterest {
            background-image: url(http://localhost/janrain101/pinterest_bw_32.jpeg);
            height: 32px;
            width: 32px;
        }            

        .janrain-share-providerslist-provider-selected .janrain-share-providerslist-provider-image .janrain-provider-icon-Pinterest {
            background-image: url(http://localhost/janrain101/pinterest_32.jpeg);
            height: 32px;
            width: 32px;
        } 

        /* .janrain-share-providerslist-provider-selected .janrain-share-providerslist-provider-image {
            background-image: url(http://localhost/janrain101/pinterest_32.jpeg);
            height: 32px;
            width: 32px;
        } */


        #pinPreview { display: inline-block;
                      vertical-align: middle;
                      width: 210px;
                      padding: 10px;
                      box-shadow: 0 0 4px #ccc;
                      box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
                      margin: 20px 20px 20px 40px;
                      font-family: "Adelle Sans Regular", sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      border: 0;
                      box-sizing: border-box;
                      text-align: center;
                      zoom: 1;
                      color: #2d2828;
        }
    </style>

</head>

<body>

    <?php
    
    session_start();
    if (property_exists($profile->profile, 'displayName')) {
        $_SESSION['userName'] = $profile->profile->displayName;
    } else {
        $_SESSION['userName'] = '(Anonymous Coward)';
    }
    echo '<p class="text">Hi there ' . $_SESSION['userName'] . '!</p>';

    ?>

    <div id="janrainEngageShare" class="text"><img src="les_mis.png" /><img src="share.png" /></div>

</body>
</html>
