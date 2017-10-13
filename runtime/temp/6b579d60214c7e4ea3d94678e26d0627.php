<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/notice.html";i:1504856048;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/headertwo.html";i:1504837739;}*/ ?>
<!DOCTYPE html>
<html dir="ltr" lang="zh-CN">
<head>
    <meta charset="utf-8">
    <!-- v12657 -->
    <title>公告 &ndash; 帮助中心</title>

    <meta name="csrf-param" content="authenticity_token"/>
    

    <!-- Entypo pictograms by Daniel Bruce — www.entypo.com -->
    <link rel="stylesheet" media="all" href="__CSS__/application1.css" id="stylesheet"/>
    <link rel="stylesheet" type="text/css"
          href="__CSS__/styleb.css?brand_id=114094285894&amp;locale=zh-cn"/>

    <link rel="shortcut icon" type="image/x-icon"
          href="__IMG__/sVb00HtCeEN6BSWx06ealQ-CgpEMlj90UqAOCAuAABH-Ky3X3s603.jpg"/>

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

    <script type="text/javascript"
            src="__JS__/scriptb.js?brand_id=114094285894&amp;locale=zh-cn"></script>
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

                    <a href="/home/index/help">帮助中心</a>

                </li>

                <li title="公告">

                    公告

                </li>

            </ol>

            <form role="search" class="search" data-search="" action="/" accept-charset="UTF-8" method="get">
            <input name="utf8" type="hidden" value="&#x2713;"/>
            <input type="search" name="query" id="query" placeholder="搜索" aria-label="搜索"/>
            </form>
        </nav>

        <div class="category-container">
            <div class="category-content">
                <header class="page-header">
                    <h1>公告</h1>

                </header>

                <div class="section-tree">

                    <section class="section">
                        <h3 class="section-tree-title">
                            <a href="/home/index/notice_yw/t/1">业务公告</a>

                        </h3>
<br/>
                        <ul class="article-list">

                            <?php foreach($notice1 as $v): ?>
                            <li class="article-list-item">

                                <a href="/home/index/help_c/d/<?php echo $v['id']; ?>"
                                   class="article-list-link"><?php echo $v['title']; ?></a>
                            </li>
    <?php endforeach; ?>
                            <!-- <li class="article-list-item">
                            
                                <a href="notice_c.html"
                                   class="article-list-link">星云币三折秒杀，即将开启！</a>
                            </li>
                            
                            <li class="article-list-item">
                            
                                <a href="notice_c.html"
                                   class="article-list-link">波场[TRON]于8月22日20：00开启锁定</a>
                            </li>
                            
                            <li class="article-list-item">
                            
                                <a href="notice_c.html"
                                   class="article-list-link">Aeternity第一轮投资者硬件钱包奖励领取开启</a>
                            </li>
                            
                            <li class="article-list-item">
                            
                                <a href="notice_c.html"
                                   class="article-list-link">路印协议福利，又争取了5000ETH额度，第三波开启</a>
                            </li>
                            
                            <li class="article-list-item">
                            
                                <a href="notice_c.html"
                                   class="article-list-link">关于唯链重新开启锁定的声明</a>
                            </li>
                             -->
                        </ul>

                        <a href="/home/index/notice_yw/t/1"
                           class="see-all-articles">
                            查看所有 <?php echo $num1; ?> 篇文章
                        </a>


                    </section>

                    <section class="section">
                        <h3 class="section-tree-title">
                            <a href="/home/index/notice_yw/t/2">18ico公告</a>

                        </h3>
<br/>
                        <ul class="article-list">
                        <li class="article-list-item">

                                <a href=""
                                   class="article-list-link"></a>
                            </li>
                            <?php foreach($notice2 as $v): if(!empty($v)): ?>
                            <li class="article-list-item">

                                <a href="/home/index/notice_c/d/<?php echo $v['id']; ?>"
                                   class="article-list-link"><?php echo $v['title']; ?></a>
                            </li>
                            <?php endif; endforeach; ?>
                         <!--    <li class="article-list-item">
                         
                             <a href="notice_c.html"
                                class="article-list-link">18ico新版上线，首创7天无理由退币</a>
                         </li>
                         
                         <li class="article-list-item">
                         
                             <a href="notice_c.html"
                                class="article-list-link">2017年7月17日起启用全新充值地址</a>
                         </li> -->

                        </ul>


                    </section>

                </div>
            </div>
        </div>
    </div>

</main>

<footer class="footer">
    <div class="footer-inner">
        <a title="主页" href="/home/index/help">帮助中心</a>

        <div class="footer-language-selector">

            <div class="dropdown language-selector" aria-haspopup="true">
                <a class="dropdown-toggle">
                    简体中文
                </a>
                <span class="dropdown-menu dropdown-menu-end" role="menu">

              <a href="#"
                 dir="ltr" rel="nofollow" role="menuitem">
                English (US)
              </a>

          </span>
            </div>

        </div>
    </div>
</footer>


<!-- / -->

<script type="text/javascript"
        src="__JS__/zh-cn-b.js"></script>
<script src="__JS__/host.js" data-brand-id="114094285894"
        data-return-to="https://18ico.zendesk.com/hc/zh-cn/categories/115000110013-%E5%85%AC%E5%91%8A" data-theme="hc"
        data-locale="10" data-auth-origin="114094285894,false,true"></script>


<script type="text/javascript">

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
            "csrf_token": "vQKPMKJYONaCJIo9BdJwRaZaHk6x9J5bGclQCbX9zzaqiE/sQltVNY3Qdk4p/qy8qo2WsYO6j0kWMCsRXHDBWA==",
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
        "current_path": "/hc/zh-cn/categories/115000110013-%E5%85%AC%E5%91%8A",
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

        Tracker.track("category_viewed", "BAh7BzoQY2F0ZWdvcnlfaWRsKwi9a4rGGgA6C2xvY2FsZUkiCnpoLWNuBjoGRVQ=--b913e3f0b57f19b02963f8943933aeb289000f23");
    })();

</script>
</body>
</html>