<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/help_c.html";i:1504839165;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/headertwo.html";i:1504837739;}*/ ?>

<!DOCTYPE html>
<html dir="ltr" lang="zh-CN">
<head>
    <meta charset="utf-8">
    <!-- v12657 -->
    <title><?php echo $notice['title']; ?> &ndash; 帮助中心</title>

    <meta name="csrf-param" content="authenticity_token" />
    <meta name="csrf-token" content="+0nleNuoXij0Kmd4oN706Sg60EFeekQ4CnRRe2aeV2KbNfsJIe1Ec/N6zirLnlk5ugvOXIDoVW6430oOBf1Gew==" />
    <meta name="description" content="1.网站登录不上请清理缓存或更换浏览器 2.如果不能进入个人中心或提币页面请带图反馈，仔细说明" />

    <!-- Entypo pictograms by Daniel Bruce — www.entypo.com -->
    <link rel="stylesheet" media="all" href="__CSS__/application1.css" id="stylesheet" />
    <link rel="stylesheet" type="text/css" href="__CSS__/styleb.css?brand_id=114094285894&amp;locale=zh-cn" />

    <link rel="shortcut icon" type="image/x-icon" href="__IMG__/sVb00HtCeEN6BSWx06ealQ-CgpEMlj90UqAOCAuAABH-Ky3X3s603.jpg" />

    <!--[if lt IE 9]>
    <script>
        //Enable HTML5 elements for <IE9
        'abbr article aside audio bdi canvas data datalist details dialog \
        figcaption figure footer header hgroup main mark meter nav output \
        progress section summary template time video'.replace(/\w+/g,function(n){document.createElement(n)});
    </script>
    <![endif]-->

    <script src="__JS__/jquery.js"></script>




    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />

    <script type="text/javascript" src="__JS__/scriptb.js?brand_id=114094285894&amp;locale=zh-cn"></script>
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

               
            </ol>

            <form role="search" class="search" data-search="" action="/hc/zh-cn/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="category" id="category" value="115000116313" />
                <input type="search" name="query" id="query" placeholder="搜索" aria-label="搜索" /></form>
        </nav>

        <div class="article-container" id="article-container">
            <section class="article-sidebar">
                <section class="section-articles collapsible-sidebar">
                    <h3 class="collapsible-sidebar-title sidenav-title">此组别内的文章</h3>
                    <ul>
                        <?php foreach($data as $v): ?>
                        <li>
                            <a href="help_c?d=<?php echo $v['id']; ?>" class="sidenav-item"><?php echo $v['title']; ?></a>
                        </li>

                        <?php endforeach; ?>
                    </ul>

                </section>
            </section>

            <article class="article">
                <header class="article-header">
                    <h1 title="关于网站登录等问题" class="article-title">
                        <?php echo $notice['title']; ?>

                    </h1>

                    <div class="article-author">
                        <div class="avatar article-avatar">

                            <span class="icon-agent"></span>

                            <img src="https://secure.gravatar.com/avatar/446187eed00547a23891acb35d47dceb?default=https%3A%2F%2Fassets.zendesk.com%2Fhc%2Fassets%2Fdefault_avatar.png&amp;r=g" alt="Avatar" class="user-avatar"/>
                        </div>
                        <div class="article-meta">

                            <?php echo $notice['auther']; ?>


                            <ul class="meta-group">
                                <li class="meta-data">更新于</li>
                                <li class="meta-data"><time datetime="2017-08-13T05:59:38Z" title="2017-08-13T05:59:38Z" data-datetime="relative"><?php echo date("Y-m-d h:i",($notice['updated_at'])); ?></time></li>
                                

                            </ul>
                        </div>
                    </div>
                    <button class="article-subscribe" onClick="javascript:alert('关注成功');$(this).text('已关注')" >关注</button>
                </header>

                <section class="article-info">
                    <div class="article-content">
                        <div class="article-body"><?php echo $notice['content']; ?></div>

                        <div class="article-attachments">
                            <ul class="attachments">

                            </ul>
                        </div>
                    </div>
                </section>

                <footer>
                    <div class="article-footer">
                        <div class="article-share"><ul class="share">
                            <li><a href="#" class="share-facebook">Facebook</a></li>
                            <li><a href="#" class="share-twitter">Twitter</a></li>
                            <li><a href="#" class="share-linkedin">LinkedIn</a></li>
                            <li><a href="#" class="share-googleplus">Google+</a></li>
                        </ul>
                        </div>

                    </div>

                   <!--  <div class="article-votes">
                       <span class="article-votes-question">这篇文章有帮助吗？</span>
                       <div class="article-votes-controls" role='radiogroup'>
                           <a role="radio" rel="nofollow" class="button article-vote article-vote-up" title="是" aria-selected="false" data-auth-action="signin" href="/hc/zh-cn/signin?return_to=https%3A%2F%2F18ico.zendesk.com%2Fhc%2Fzh-cn%2Farticles%2F115001238293-%25E5%2585%25B3%25E4%25BA%258E%25E7%25BD%2591%25E7%25AB%2599%25E7%2599%25BB%25E5%25BD%2595%25E7%25AD%2589%25E9%2597%25AE%25E9%25A2%2598"></a>
                           <a role="radio" rel="nofollow" class="button article-vote article-vote-down" title="否" aria-selected="false" data-auth-action="signin" href="/hc/zh-cn/signin?return_to=https%3A%2F%2F18ico.zendesk.com%2Fhc%2Fzh-cn%2Farticles%2F115001238293-%25E5%2585%25B3%25E4%25BA%258E%25E7%25BD%2591%25E7%25AB%2599%25E7%2599%25BB%25E5%25BD%2595%25E7%25AD%2589%25E9%2597%25AE%25E9%25A2%2598"></a>
                       </div>
                       <small class="article-votes-count">
                           <span class="article-vote-label">1 人中有 0 人觉得有帮助</span>
                       </small>
                   </div> -->


                    <div class="article-more-questions">
                        还有其它问题？<a href="#">提交请求</a>
                    </div>
                    <div class="article-return-to-top">
                        <a href="/home/index/index">返回首页<span class="icon-arrow-up"></span></a>
                    </div>
                </footer>

                <section class="article-relatives">
                    <div data-recent-articles></div>

                    <section class="related-articles">
                        <h3>推荐文章</h3>
                        <ul>
                             <?php foreach($data1 as $v): ?>
                                <li>
                                    <a href="help_c?d=<?php echo $v['id']; ?>" class="sidenav-item"><?php echo $v['title']; ?></a>
                                </li>

                            <?php endforeach; ?>
                          <!--   <li>
                              <a href="help_c.html">实名认证须知</a>
                          </li>
                          
                          <li>
                              <a href="help_c.html">如果发币了不提币，暂时放在18ico，等到要交易了再直接提取到交易平台，可以吗？</a>
                          </li>
                          
                          <li>
                              <a href="#">联系我们</a>
                          </li>
                          
                          <li>
                              <a href="help_c.html">锁定唯链（VeChain），享受早鸟福利！</a>
                          </li>
                          
                          <li>
                              <a href="help_c.html">18ico新版上线，首创7天无理由退币</a>
                          </li>
                           -->
                        </ul>
                    </section>


                </section>
                <!-- <div class="article-comments" id="article-comments">
                    <section class="comments">
                        <header class="comment-overview">
                            <h3 class="comment-heading">
                                评论
                            </h3>
                            <p class="comment-callout">0 条评论</p>
                
                        </header>
                
                        <ul id="comments" class="comment-list">
                
                        </ul>
                
                        <p class="comment-callout">请<a data-auth-action="signin" href="login.html">登录</a>写评论。</p>
                    </section>
                </div> -->
            </article>
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
<script src="__JS__/host.js" data-brand-id="114094285894" data-return-to="https://18ico.zendesk.com/hc/zh-cn/articles/115001238293-%E5%85%B3%E4%BA%8E%E7%BD%91%E7%AB%99%E7%99%BB%E5%BD%95%E7%AD%89%E9%97%AE%E9%A2%98" data-theme="hc" data-locale="10" data-auth-origin="114094285894,false,true"></script>


<script type="text/javascript">
    /*

      Greetings sourcecode lurker!

      This is for internal Zendesk and legacy usage,
      we don't support or guarantee any of these values
      so please don't build stuff on top of them.

    */

    HelpCenter = {};
    HelpCenter.account = {"subdomain":"18ico","environment":"production","name":"18ico"};
    HelpCenter.user = {"identifier":"da39a3ee5e6b4b0d3255bfef95601890afd80709","email":null,"name":null,"role":"anonymous","avatar_url":"https://assets.zendesk.com/hc/assets/default_avatar.png","organizations":[],"groups":[]};
    HelpCenter.internal = {"asset_url":"//p14.zdassets.com/hc/assets/","current_session":{"locale":"zh-cn","csrf_token":"MFVj6jY4p65IxRK2DJpeUN3XHsEl/Poc+VgVxIj51ztQKX2bzH299U+Vu+Rn2vOAT+YA3Ptu60pL8w6x65rGIg==","shared_csrf_token":null},"settings":{"zopim_enabled":false,"spam_filter_enabled":true},"current_record_id":"115001238293","current_record_url":"/hc/zh-cn/articles/115001238293-%E5%85%B3%E4%BA%8E%E7%BD%91%E7%AB%99%E7%99%BB%E5%BD%95%E7%AD%89%E9%97%AE%E9%A2%98","current_record_title":"关于网站登录等问题","search_results_count":null,"current_text_direction":"ltr","current_brand_url":"https://18ico.zendesk.com","current_host_mapping":null,"current_path":"/hc/zh-cn/articles/115001238293-%E5%85%B3%E4%BA%8E%E7%BD%91%E7%AB%99%E7%99%BB%E5%BD%95%E7%AD%89%E9%97%AE%E9%A2%98","authentication_domain":"https://18ico.zendesk.com","show_autocomplete_breadcrumbs":true,"heap_analytics_id":null,"user_info_changing_enabled":false,"has_user_profiles_enabled":false,"has_anonymous_kb_voting":false,"has_advanced_upsell":false,"has_multi_language_help_center":true,"has_user_segments":true,"mobile_device":false,"mobile_site_enabled":false,"show_at_mentions":false,"has_copied_content":false,"embeddables_config":{"embeddables_web_widget":false,"embeddables_automatic_answers":false,"embeddables_connect_ipms":false},"plans_url":"https://18ico.zendesk.com/hc/admin/plan?locale=zh-cn","manage_content_url":"https://18ico.zendesk.com/hc/zh-cn","arrange_content_url":"https://18ico.zendesk.com/hc/admin/arrange_contents?locale=zh-cn","general_settings_url":"https://18ico.zendesk.com/hc/admin/general_settings?locale=zh-cn","user_segments_url":"https://18ico.zendesk.com/hc/admin/user_segments?locale=zh-cn","has_community_enabled":false,"has_multiselect_field":false,"has_groups":true,"has_internal_sections":true,"has_organizations":true,"has_tag_restrictions":true,"has_answer_bot_web_form_enabled":false,"billing_url":"/access/return_to?return_to=https://18ico.zendesk.com/billing","has_answer_bot_management":true,"answer_bot_management_url":"https://18ico.zendesk.com/hc/admin/answer_bot?locale=zh-cn","is_account_owner":false,"guide_plan_state":"plan_advanced","theming_center_url":"https://18ico.zendesk.com/theming"};
</script>

<script src="__JS__/hc_enduser-d0e2af67e71965e4d4d3.js"></script>


<script type="text/javascript">
    (function() {
        var Tracker = {};

        Tracker.track = function(eventName, data) {
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

        Tracker.track("article_viewed", "BAh7BzoLbG9jYWxlSSIKemgtY24GOgZFVDoPYXJ0aWNsZV9pZGwrCBWjm8YaAA==--2aec196a165e289d91bce48213bff6a349d4a33b");
    })();

</script>
</body>
</html>