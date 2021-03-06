<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:80:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/aboutUs.html";i:1504854750;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/headertwo.html";i:1504837739;}*/ ?>
<!DOCTYPE html>
<html dir="ltr" lang="zh-CN">
<head>
    <meta charset="utf-8">
    <!-- v12657 -->
    <title>关于我们 &ndash; 帮助中心</title>
    <meta name="csrf-param" content="authenticity_token"/>
    <meta name="csrf-token" content="oNqpk+Qgv6liRSEMbxQeegao45R3T3Yn/kJsFz+j/G/bcOLuiyVjKGC4+E0w59G5rk+hJ4dHjMGN8FeFC1E3HA=="/>
    <link rel="canonical" href="https://18ico.zendesk.com/hc/zh-cn/categories/115000124054-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC"/>
    <link rel="alternate" hreflang="en" href="https://18ico.zendesk.com/hc/en-us/categories/115000124054-About"/>
    <link rel="alternate" hreflang="zh" href="https://18ico.zendesk.com/hc/zh-cn/categories/115000124054-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC"/>
    <!-- Entypo pictograms by Daniel Bruce — www.entypo.com -->
    <link rel="stylesheet" media="all" href="__CSS__/application1.css" id="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="__CSS__/styleb.css"/>
    <link rel="shortcut icon" type="image/x-icon" href="//p14.zdassets.com/hc/settings_assets/1985079/115000040453/sVb00HtCeEN6BSWx06ealQ-CgpEMlj90UqAOCAuAABH-Ky3X3s603.jpg"/>
    <!--[if lt IE 9]>
    <script>
        //Enable HTML5 elements for <IE9
        'abbr article aside audio bdi canvas data datalist details dialog \
        figcaption figure footer header hgroup main mark meter nav output \
        progress section summary template time video'.replace(/\w+/g, function (n) {
            document.createElement(n)
        });
    </script>
    <![endif]-->
    <script src="__JS__/jquery.js"></script>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
    <script type="text/javascript" src="__JS__/scriptb.js"></script>
</head>
<body class="">
<header class="header">
    <div class="logo">
        <a href="index.html" alt="18ICO">
           <img src="/static/home/images/logo.png" alt="">
        </a>
    </div>
   <!--  <div class="nav-wrapper">
       <span class="icon-menu"></span>
       <nav class="user-nav" id="user-nav">
           <a class="submit-a-request" href="/home/login/login">提交请求</a>
       </nav>
       <a class="login" href="/home/login/login">登录</a>
   </div> -->
</header>
<main role="main">
    <div class="container-divider"></div>
    <div class="container">
        <nav class="sub-nav">
            <ol class="breadcrumbs">
                <li title="帮助中心">
                    <a href="help.html">帮助中心</a>
                </li>
                <li title="关于我们">
                    关于我们
                </li>
            </ol>
            <form role="search" class="search" data-search="" action="/hc/zh-cn/search" accept-charset="UTF-8" method="get">
                <input name="utf8" type="hidden" value="&#x2713;"/><input type="search" name="query" id="query" placeholder="搜索" aria-label="搜索"/>
            </form>
        </nav>
        <div class="category-container">
            <div class="category-content">
                <header class="page-header">
                    <h1>关于我们</h1>
                </header>
                <div class="section-tree">
                    <section class="section">
                        <h3 class="section-tree-title">
                            <a href="about18ico.html">关于18ico</a>
                        </h3>
                        <ul class="article-list">
                        <?php if(!empty($notice)): foreach($notice as $v): ?>
                           <li class="article-list-item">
                               <a href="/home/index/help_c/d/<?php echo $v['id']; ?>" class="article-list-link"><?php echo $v['title']; ?></a>
                           </li>
                           <?php endforeach; else: ?>
                           <li class="article-list-item">
                               <a href="#" class="article-list-link"></a>
                           </li>
                           <?php endif; ?>
                            <!-- <li class="article-list-item">
                                <a href="/home/index/rules?v=joinUs" class="article-list-link">加入我们</a>
                            </li> -->
                        </ul>
                    </section>
                    <section class="section">
                        <h3 class="section-tree-title">
                            <a href="termCondition.html">条款和协议</a>
                        </h3>
                        <ul class="article-list">
                            <li class="article-list-item">
                                <a href="/home/index/rules?v=conditions" class="article-list-link">
                                    18ico用户协议</a>
                            </li>
                            <li class="article-list-item">
                                <a href="/home/index/rules?v=condition-supporter" class="article-list-link">支持者风险协议</a>
                            </li>
                            <li class="article-list-item">
                                <a href="/home/index/rules?v=condition-init" class="article-list-link">发起者协议</a>
                            </li>
                            <li class="article-list-item">
                                <a href="/home/index/rules?v=condition-id" class="article-list-link">身份认证协议</a>
                            </li>
                            <li class="article-list-item">
                                <a href="/home/index/rules?v=condition-privacy" class="article-list-link">隐私权政策</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</main>
<footer class="footer">
    <div class="footer-inner">
        <a title="主页" href="help.html">帮助中心</a>
        <div class="footer-language-selector">
            <div class="dropdown language-selector" aria-haspopup="true">
                <a class="dropdown-toggle">
                    简体中文
                </a>
                <span class="dropdown-menu dropdown-menu-end" role="menu">
                  <a href="#" dir="ltr" rel="nofollow" role="menuitem">
                    English (US)
                  </a>
                </span>
            </div>
        </div>
    </div>
</footer>
<!-- / -->
<script type="text/javascript" src="__JS__/zh-cn-b.js"></script>
<script src="__JS__/host.js" data-brand-id="114094285894" data-return-to="https://18ico.zendesk.com/hc/zh-cn/categories/115000124054-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC" data-theme="hc" data-locale="10" data-auth-origin="114094285894,false,true"></script>
<script type="text/javascript">
    /*
      Greetings sourcecode lurker!
      This is for internal Zendesk and legacy usage,
      we don't support or guarantee any of these values
      so please don't build stuff on top of them.
    */
    HelpCenter = {};
    HelpCenter.account = {"subdomain": "18ico", "environment": "production", "name": "18ico"};
    HelpCenter.user = {
        "identifier": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        "email": null,
        "name": null,
        "role": "anonymous",
        "avatar_url": "https://assets.zendesk.com/hc/assets/default_avatar.png",
        "organizations": [],
        "groups": []
    };
    HelpCenter.internal = {
        "asset_url": "//p14.zdassets.com/hc/assets/",
        "current_session": {
            "locale": "zh-cn",
            "csrf_token": "UXDxUulRj4CzFiw9OH+Wxu5FXvzXjl/te6lwv0t+Oikq2rovhlRTAbHr9XxnjFkFRqIcTyeGpQsIG0stf4zxWg==",
            "shared_csrf_token": null
        },
        "settings": {"zopim_enabled": false, "spam_filter_enabled": true},
        "current_record_id": null,
        "current_record_url": null,
        "current_record_title": null,
        "search_results_count": null,
        "current_text_direction": "ltr",
        "current_brand_url": "https://18ico.zendesk.com",
        "current_host_mapping": null,
        "current_path": "/hc/zh-cn/categories/115000124054-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC",
        "authentication_domain": "https://18ico.zendesk.com",
        "show_autocomplete_breadcrumbs": true,
        "heap_analytics_id": null,
        "user_info_changing_enabled": false,
        "has_user_profiles_enabled": false,
        "has_anonymous_kb_voting": false,
        "has_advanced_upsell": false,
        "has_multi_language_help_center": true,
        "has_user_segments": true,
        "mobile_device": false,
        "mobile_site_enabled": false,
        "show_at_mentions": false,
        "has_copied_content": false,
        "embeddables_config": {
            "embeddables_web_widget": false,
            "embeddables_automatic_answers": false,
            "embeddables_connect_ipms": false
        },
        "plans_url": "https://18ico.zendesk.com/hc/admin/plan?locale=zh-cn",
        "manage_content_url": "https://18ico.zendesk.com/hc/zh-cn",
        "arrange_content_url": "https://18ico.zendesk.com/hc/admin/arrange_contents?locale=zh-cn",
        "general_settings_url": "https://18ico.zendesk.com/hc/admin/general_settings?locale=zh-cn",
        "user_segments_url": "https://18ico.zendesk.com/hc/admin/user_segments?locale=zh-cn",
        "has_community_enabled": false,
        "has_multiselect_field": false,
        "has_groups": true,
        "has_internal_sections": true,
        "has_organizations": true,
        "has_tag_restrictions": true,
        "has_answer_bot_web_form_enabled": false,
        "billing_url": "/access/return_to?return_to=https://18ico.zendesk.com/billing",
        "has_answer_bot_management": true,
        "answer_bot_management_url": "https://18ico.zendesk.com/hc/admin/answer_bot?locale=zh-cn",
        "is_account_owner": false,
        "guide_plan_state": "plan_advanced",
        "theming_center_url": "https://18ico.zendesk.com/theming"
    };
</script>
<script src="__JS__/hc_enduser-d0e2af67e71965e4d4d3.js"></script>
<script type="text/javascript">
    (function () {
        var Tracker = {};
        Tracker.track = function (eventName, data) {
            var url = "https://18ico.zendesk.com/hc/tracking/events?locale=zh-cn";
            var payload = {
                "event": eventName,
                "data": data,
                "referrer": document.referrer
            };
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
            xhr.send(JSON.stringify(payload));
        };
        Tracker.track("category_viewed", "BAh7BzoQY2F0ZWdvcnlfaWRsKwiWoorGGgA6C2xvY2FsZUkiCnpoLWNuBjoGRVQ=--a073bb48561f203fda539b0b3d1691c2256f4149");
    })();
</script>
</body>
</html>