<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:80:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/support.html";i:1504944824;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:84:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-header.html";i:1504950497;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-menu.html";i:1504766289;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        我支持的项目| 18ico-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/app-892a367653.css">
</head>
<body>
<script>
    const myalert = window.alert;
    window.alert = function(str){
        if(str == '获取国家列表出错啦！'){
            return false;
        }else{
            myalert(str);
        }  
    }

</script>
<header>
    <div id="header" class="no-fixed">
        <div class="header_info">
            <div class="header_info_left">
                <span>BTC/CNY:<span class="green-span"><?php echo config('market')['btc'];?></span></span>
                <span>ETH/CNY:<span class="green-span"><?php echo config('market')['eth'];?></span></span>
            </div>
            <div class="header_info_right">
                <?php if(empty(session('home_user'))): ?>
                <a href="/home/project/launch" class="send-ico"></a><!--发起项目 -->
                <a href="/home/login/login">登录</a>
                <a href="/home/login/register">注册</a>
                <a class="country_select locale-lang" data-lang="zh-CN"><img src="__IMG__/chinese_version.png" /></a>
                <a class="country_select locale-lang" data-lang="en"><img src="__IMG__/america_version.png" /></a>
                <?php else: ?>
                <a href="/home/project/launch" class="send-ico"></a>
                <a href="/home/user/index"><span class="user-info"><img src="__IMG__/user.png" /><?php echo session('home_user')['phone'];?></span></a>
                <a href="/home/login/login_end">注销</a>
                <a class="country_select locale-lang" data-lang="zh-CN"><img src="__IMG__/chinese_version.png" /></a>
                <a class="country_select locale-lang" data-lang="en"><img src="__IMG__/america_version.png" /></a>
                <?php endif; ?>
            </div>
        </div>
        <ul id="nav_list">
            <li> <a href="/home/index/index" class="" data-hover="首页"> 首页 </a> </li>
            <li> <a href="/home/index/items" class="" data-hover="ICO项目"> ICO项目 </a> </li>
            <!-- <li> <a href="/home/index/projects" class="" data-hover="链SHOW"> 链SHOW </a> </li> -->
            <li> <a href="/home/news/index" class="" data-hover="ICO新闻"> ICO新闻 </a> </li>
            <li> <a href="/home/index/help" class="" data-hover="帮助中心"> 帮助中心 </a> </li>
            <div id="line"></div>
        </ul>
        <div id="logo">
            <a href="/home/index/index">
                <img src="/static/home/images/logo.png" alt="logo图"/>
            </a>
            <span class="describe-span-divide">|</span>
            <span class="describe-span">中国第一ICO专业平台</span>
        </div>
    </div>
</header>
<script src="__JS__/jquery.js"></script>
<style>
    #logo a {
        padding: 0px 20px 0;
        margin: 0 -20px 0 40px;
    }
</style>
<div id="user_content">
    <section class="banner-body">
        <div class="banner-bg">
            <div class="banner-center clearfix">
                <div class="head-left">
                    <div class="user-avatar">
                        <img class="avatar-pic" src="<?php if($user['headimg']): ?><?php echo $user['headimg']; else: ?>__IMG__/default-avatar.png<?php endif; ?>">
                    </div>
                    <div class="head-info">
                        <span class="user-name"><?php echo $user['phone']; ?></span>
                        <p class="last-login-time">最近登录时间：<?php echo $user['updated_at']; ?></p>
                        <div class="svg-group">
                            <!-- <a href="javascript:" id="youxiang_yanzheng" title="邮箱验证">
                                <svg class="svg-icon" height="21" width="24" viewBox="0 0 24 21.29">

                                    <g fill="#FFF"><path d="M23.107.272c-.276-.168-.6-.27-.944-.27H1.836c-.347 0-.668.102-.945.27L12 10.626 23.107.272zM.173 1.072A1.826 1.826 0 0 0 0 1.839v11.953c0 .369.111.709.297.996l7.294-6.8L.173 1.072zM12.1 12.002l-.101.097-3.62-3.375-7.254 6.761c.218.094.459.146.711.146h9.41c-.004-.106-.016-.207-.016-.312 0-1.203.318-2.333.87-3.317zM23.827 1.073l-7.42 6.915.653.609a6.78 6.78 0 0 1 .972-.078A6.809 6.809 0 0 1 24 12.061V1.839c0-.274-.064-.532-.173-.766z"></path><path d="M18.032 9.354a5.975 5.975 0 0 0-5.967 5.967c0 3.291 2.677 5.967 5.967 5.967s5.967-2.676 5.967-5.967a5.975 5.975 0 0 0-5.967-5.967zm2.775 8.047a.604.604 0 0 1 0 .848l-.157.157a.603.603 0 0 1-.848 0l-1.77-1.77-1.77 1.77a.603.603 0 0 1-.848 0l-.157-.157a.604.604 0 0 1 0-.848l1.77-1.77-1.77-1.77a.604.604 0 0 1 0-.848l.157-.157a.603.603 0 0 1 .848 0l1.77 1.77 1.77-1.77a.603.603 0 0 1 .848 0l.157.157a.604.604 0 0 1 0 .848l-1.77 1.77 1.77 1.77z"></path></g></svg>
                            </a>
                            <a href="javascript:" title="未认证">
                                <svg class="svg-icon" height="21" width="26" viewBox="0 0 26 21.279">

                                    <g fill="#FFF"><circle cx="7.408" cy="6.149" r="2.341"></circle><path d="M3.343 12.59a1.602 1.602 0 0 0-.102.416c.032.916.571.947.801.959H10.423c.281 0 .868-.08 1.074-.384.172-.254.062-.675-.061-.981-.602-1.515-2.229-2.531-4.05-2.531a4.463 4.463 0 0 0-4.043 2.521z"></path><path d="M12.175 14.466l-.035.014c-.579.521-1.437.569-1.717.569H4.012c-1.131-.063-1.813-.813-1.855-2.006-.012-.322.134-.772.211-.932a5.554 5.554 0 0 1 3.497-2.922A3.412 3.412 0 0 1 3.982 6.15a3.43 3.43 0 0 1 3.426-3.427 3.43 3.43 0 0 1 3.427 3.427c0 1.334-.774 2.479-1.892 3.046 1.533.424 2.807 1.453 3.422 2.832l.004-.011.197.403a7.379 7.379 0 0 1 3.383-4.029l-.038-.011h-2.645a.542.542 0 1 1 0-1.086h3.768c.231 0 .415.15.491.356l.004-.002s.015.03.029.07a7.318 7.318 0 0 1 1.973-.279c1.902 0 3.635.73 4.945 1.92V1.988c0-1.096-.894-1.99-1.992-1.99H1.99C.893-.002 0 .891 0 1.988v13.798c0 1.098.893 1.989 1.99 1.989h10.794a7.3 7.3 0 0 1-.627-2.963c0-.116.01-.23.018-.346zm1.159-9.702h7.535a.544.544 0 0 1 0 1.086h-7.535a.543.543 0 0 1 0-1.086z"></path><path d="M19.529 8.345a6.475 6.475 0 0 0-6.468 6.469 6.477 6.477 0 0 0 6.468 6.47c3.568 0 6.471-2.901 6.471-6.47s-2.902-6.469-6.471-6.469zm2.776 8.24a.604.604 0 0 1 0 .848l-.157.156a.602.602 0 0 1-.848 0l-1.77-1.77-1.77 1.77a.602.602 0 0 1-.848 0l-.157-.156a.604.604 0 0 1 0-.848l1.77-1.77-1.77-1.77a.604.604 0 0 1 0-.848l.157-.158a.604.604 0 0 1 .848 0l1.77 1.77 1.77-1.77a.604.604 0 0 1 .848 0l.157.158a.604.604 0 0 1 0 .848l-1.77 1.77 1.77 1.77z"></path></g></svg>
                            </a> -->
                            <!--<a href="#" title="已绑定" class="phoneDisplay">-->
                                <!--<svg class="svg-icon" height="21" width="15">-->
                                    <!--<use xlink:href="#icon-phone-bind"></use>-->
                                <!--</svg>-->
                            <!--</a>-->
                            <a href="security.html" title="设置">
                                <svg class="svg-icon" height="21" width="21" viewBox="0 0 21 21">

                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M20.956 9.532l-.012.001a.873.873 0 0 0-.78-.78h-.48v-.006a1.309 1.309 0 0 1-1.287-1.07 8.11 8.11 0 0 0-.329-.787l-.002-.001a1.304 1.304 0 0 1-.147-.294v-.002a1.3 1.3 0 0 1 .31-1.364h-.001l.266-.267.011-.009.01-.011a.874.874 0 0 0 .05-1.159l.005-.004a9.99 9.99 0 0 0-.644-.703 9.987 9.987 0 0 0-.721-.658l-.002.003a.87.87 0 0 0-1.065-.027l-.192.191-.181.179-.008-.008a1.308 1.308 0 0 1-1.602.197 8.781 8.781 0 0 0-.933-.384 1.265 1.265 0 0 1-.167-.057l-.002-.001a1.323 1.323 0 0 1-.432-.286 1.324 1.324 0 0 1-.374-1.091V.91a.875.875 0 0 0-.72-.861l-.154-.014h.001C11.086.014 10.794 0 10.5 0s-.585.014-.874.037L9.473.05a.873.873 0 0 0-.721.86v.39a1.311 1.311 0 0 1-.949 1.262c-.35.117-.688.258-1.015.421l-.004.001a1.297 1.297 0 0 1-.624.157c-.362 0-.69-.146-.927-.384l-.002.002-.276-.276a.872.872 0 0 0-1.114-.101 3.96 3.96 0 0 0-.116.097l-.005.004a10.589 10.589 0 0 0-1.236 1.235l-.001.001-.1.119a.874.874 0 0 0 .1 1.117l.276.275a1.314 1.314 0 0 1 .221 1.558 8.108 8.108 0 0 0-.417 1.011 1.007 1.007 0 0 1-.039.109v.001a1.306 1.306 0 0 1-1.223.84v.004h-.39a.875.875 0 0 0-.861.72c-.005.05-.011.101-.015.153-.023.282-.035.587-.035.874v.015c0 .29.012.577.035.858v.001c.004.052.01.103.015.154.074.409.43.721.858.721h.393c.558 0 1.034.349 1.224.841v.002a.696.696 0 0 1 .031.098c.001.001.001.004.004.007.117.35.259.688.42 1.015l.004.005c.015.025.026.052.039.079a1.304 1.304 0 0 1-.265 1.473l.001.001-.266.267-.011.01-.01.011a.875.875 0 0 0-.098 1.095 10.375 10.375 0 0 0 .7.773 11.075 11.075 0 0 0 .772.699.874.874 0 0 0 1.003-.02l.192-.191.18-.18.008.007a1.313 1.313 0 0 1 1.545-.231c.001.002.004.002.006.004a8.142 8.142 0 0 0 1.113.456 1.311 1.311 0 0 1 .858 1.229h.004v.386c0 .451.343.824.783.868v.006c.316.027.637.041.962.041s.646-.014.964-.044l-.002-.006a.874.874 0 0 0 .785-.868v-.39a1.31 1.31 0 0 1 1.042-1.284c.288-.101.567-.216.839-.349a1.314 1.314 0 0 1 .712-.211 1.304 1.304 0 0 1 .981.442l.224.226.001-.002a.876.876 0 0 0 1.134.087c.029-.024.057-.046.084-.07a10.875 10.875 0 0 0 1.269-1.268l.075-.091a.872.872 0 0 0-.06-1.096l-.001-.002-.063-.061-.244-.245v-.001a1.306 1.306 0 0 1-.211-1.576c.154-.315.29-.642.405-.978.013-.045.026-.09.044-.132.063-.164.162-.316.295-.448.254-.255.591-.384.927-.384v-.001h.376v-.006c.468 0 .85-.367.872-.828l.013.001a10.663 10.663 0 0 0-.005-1.883zm-6.196.968a4.254 4.254 0 0 1-.429 1.87 4.315 4.315 0 0 1-1.959 1.967 4.23 4.23 0 0 1-1.874.437h-.013a4.22 4.22 0 0 1-1.878-.434 4.189 4.189 0 0 1-1.139-.813 4.213 4.213 0 0 1-.819-1.143 3.966 3.966 0 0 1-.209-.498 4.279 4.279 0 0 1 0-2.775 4.236 4.236 0 0 1 1.027-1.642 4.226 4.226 0 0 1 1.642-1.018 4.248 4.248 0 0 1 1.374-.227h.013c.486.002.953.085 1.389.234a4.312 4.312 0 0 1 1.629 1.023c.33.332.604.717.813 1.139a4.277 4.277 0 0 1 .433 1.874v.006z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="head-right">
                    <div id="security_info">账户安全</div>
                    <?php if($user['type'] == 3): ?>
                    <div id="security_rate" class="account-security" data-factor="90">
                    <?php elseif(!empty($user['email'])): ?>
                    <div id="security_rate" class="account-security" data-factor="70">
                    <?php else: ?>
                    <div id="security_rate" class="account-security" data-factor="30">
                     <?php endif; ?>  
                    </div>
                    <div class="authentication sprite-item auth-bg">
                        <div class="identity-auth">
                            <i></i>
                            <span>实名认证：</span>
                            <a href="/home/user/identity" class="goto-auth"><?php if($user['type'] == 3): ?>已认证<?php elseif($user['type'] == 1): ?>待审核<?php elseif($user['type'] == 2): ?>已驳回<?php else: ?>立即认证<?php endif; ?></a>
                        </div>
                        <div class="email-auth">
                            <i></i>
                            <span>电子邮箱：</span>
                            <a href="/home/user/index" class="goto-auth"><?php if(!empty($user['email'])): ?><?php echo $user['email']; else: ?>立即绑定<?php endif; ?></a>
                        </div>
                        <div class="phone-auth">
                            <i></i>
                            <span>手机号码：</span>
                            <a href="/home/user/index"><?php echo $user['phone']; ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="user-container">
        <div class="user-body">
            <div class="user-left-menu">
                <div class="mod-side-nav">
                    <div class="inner">
                        <div class="inner-header">
                            <span></span>
                            <h3>个人账户</h3>
                        </div>
                        <ul class="tab-menu-list">
                            <li class="">
                                <a href="/home/user/my_count" class="li-grid">账户总览
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <li class="">
                                <a href="/home/user/index" class="li-grid">个人信息
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <!-- <li class="current"> -->
                            <li class="">
                                <a href="/home/user/identity" class="li-grid">实名认证
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <li class="">
                                <a href="/home/user/security" class="li-grid">安全设置
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
<!--                             <li class="">
                                <a href="address.html" class="li-grid">收货地址
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <div class="mod-side-nav">
                    <div class="inner">
                        <div class="inner-header">
                            <span></span>
                            <h3>项目管理</h3>
                        </div>
                        <ul class="tab-menu-list">
                            <li class="">
                                <a href="/home/item/index" class="li-grid">我支持的项目
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <li class="">
                                <a href="/home/item/sendProject" class="li-grid">我发起的项目
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
<!--                             <li class="">
                                <a href="shared.html" class="li-grid">我分享的项目
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li> -->
                            <li class="">
                                <a href="/home/item/followProject" class="li-grid">我关注的项目
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mod-side-nav">
                    <div class="inner">
                        <div class="inner-header">
                            <span></span>
                            <h3>资金管理</h3>
                        </div>
                        <ul class="tab-menu-list">
                            <li class="">
                                <a href="/home/user/capital" class="li-grid">资金明细
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <li class="">
                                <a href="/home/user/exchange" class="li-grid">资金充值
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">

                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li>
                            <!-- <li class="">
                                <a href="/home/user/withdrawal" class="li-grid">资金提现
                                </a>
                                <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">
                            
                                    <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                            </li> -->
                        </ul>
                    </div>
                </div>
               <div class="mod-side-nav">
                   <div class="inner">
                       <div class="inner-header">
                           <span></span>
                           <h3>消息中心</h3>
                       </div>
                       <ul class="tab-menu-list">
                           <!-- <li class="">
                               <a href="messages.html" class="li-grid">我的私信
                                   <i class="messages-unread"></i>
                               </a>
                               <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">
                                          
                                   <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                           </li> -->
                           <li class="">
                               <a href="notify.html" class="li-grid">站内通知
                                   <i class="notify-unread"></i>
                               </a>
                               <svg class="svg-icon" height="12" width="12" viewBox="0 0 19 9.477">
               
                                   <path class="arrow-down" fill-rule="evenodd" clip-rule="evenodd" fill="#272536" d="M1.92 0H0l9.522 9.477L19 0h-2.024L9.508 7.364 1.92 0z"></path></svg>
                           </li>
                       </ul>
                   </div>
               </div> 
            </div>
            <div class="user-body-right">
                <div class="project-content" id="support_wrap">
                    <div class="project-header">
                        <div class="nav-type">
                            <ul>
                                <li><a  data-type="0" class="search-type active search">全部</a></li>
                                <li><a  data-type="2" class="search-type search">已完成</a></li>
                                <li><a  data-type="1" class="search-type search">未完成</a></li>
                            </ul>
                        </div>
<!--                         <span class="header-right">如有疑问请 <a href="http://wpa.qq.com/msgrd?v=3&uin=3325723055&site=qq&menu=yes" class="contact-service">联系客服</a>
                            <svg height="25" width="25" viewBox="0 0 25 25.82"><g fill-rule="evenodd" clip-rule="evenodd" fill="#4E4E4E"><path d="M12.618 20.369a3.239 3.239 0 0 0 3.064-2.232.184.184 0 0 0-.333-.151c-.005.008-.497.803-2.414 1.063a6.199 6.199 0 0 1-.831.059c-1.343 0-1.942-.506-1.947-.512a.185.185 0 0 0-.279.236 3.247 3.247 0 0 0 2.74 1.537m0 0"></path><path d="M22.925 8.489c-.017 0-.032.003-.049.003C21.753 3.63 17.461.003 12.316.003c-5.287 0-9.677 3.827-10.65 8.891A2.033 2.033 0 0 0 0 10.901v4.025c0 1.129.905 2.043 2.021 2.043a2 2 0 0 0 1.556-.756 9.395 9.395 0 0 0 5.017 5.277 1.11 1.11 0 0 1 .102-.164c.037-.047.077-.086.112-.086a.18.18 0 0 1 .098.033c-.533-.396-2.458-2.436-2.875-5.283-.183-1.252.755-2.482 1.849-2.686 1.755-.327 3.5-.698 5.254-1.02 1.115-.203 1.878-.815 2.344-1.834.109-.238.268-.72.34-1.414a.218.218 0 0 1 .212-.183c.072 0 .134.037.175.09l.048-.03c.692 1.004 2.063 3.228 2.26 5.572.227 2.68.101 4.516-1.951 6.393l-.008.008a.163.163 0 0 0 .03.252l.05.023c.015.004.027.008.041.008s.026-.004.038-.008l.086-.049a9.382 9.382 0 0 0 4.401-5.346c.298.441.765.76 1.306.871-.868 3.949-4.392 6.422-8.756 6.797a1.788 1.788 0 0 0-1.662-1.109c-.987 0-1.788.781-1.788 1.746 0 .963.8 1.746 1.788 1.746a1.78 1.78 0 0 0 1.695-1.215c5.052-.412 9.103-3.414 9.947-8.08a2.061 2.061 0 0 0 1.271-1.9V10.55a2.07 2.07 0 0 0-2.076-2.061m-1.864 1.17c-1.317-3.57-4.731-6.12-8.749-6.12-4 0-7.402 2.528-8.732 6.075-.066-.081-.144-.15-.22-.22.752-4.322 4.472-7.607 8.957-7.607 4.463 0 8.17 3.253 8.949 7.545-.078.103-.149.21-.205.327m0 0M8.594 21.49c0 .002 0 .002 0 0m0 0"></path></g></svg></span> -->
                    </div>
                    <div class="project-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>订单号</th>
                                <th>项目名称</th>
                                <th class="text-center">支付方式</th>
                                <th class="text-center">时间</th>
                                <th class="text-center">状态</th>
                                <th class="text-center">支付金额</th>
                            </tr>
                            </thead>
                            <tbody class="project-tbody " id="data_append">
                            <?php if(is_array($data) || $data instanceof \think\Collection || $data instanceof \think\Paginator): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                <tr>
                                <td class="text-center"><?php echo $vo['order_num']; ?></td>
                                <td class="text-center"><?php echo $vo['projectname']; ?></td>
                                <td class="text-center">                               
                                    <?php switch($vo['type']): case "1": ?>ETH<?php break; case "2": ?>BTC<?php break; case "3": ?>LTC<?php break; endswitch; ?>
                                </td>
                                <td class="text-center"><?php echo $vo['created_at']; ?></td>
                                <td class="text-center">
                                    <?php echo $vo['sta']; ?>
                                </td>
                                <td class="text-center"><?php echo $vo['re_coin']; ?></td>
                                </tr>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                            </tbody>
                        </table>
<!--                         <div class="project-footer">

                            <div class="page-count"><span>0条记录 </span><span>1/1页</span></div>
                            <div id="support_page" class="project-pager"></div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="__JS__/jquery2.0.3.min.js"></script>
<script>
    $('.search').click(function(){
        var status = $(this).attr('data-type');
        $.ajax({
            url:"index",
            type:'POST',
            data:{status:status},
            success:function(data){
                console.log(data);
                $('#data_append').html('');
                var num = data.data.length;
                if ( num > 0 ) {
                    var vo = data.data
                    var option = '';
                    for (var i = 0; i < num; i++) {
                        var type='';
                        var status = '';
                        switch (vo[i]['type']) {
                            case "1":
                            type = "ETH";
                                break;
                            case "2":
                            type = 'BTC';
                                break;
                            case "3":
                            type = 'LTC';
                                break;
                        }
                        switch (vo[i]['status']) {
                            case "1":
                            status = "已锁定";
                                break;
                            case "2":
                            status = '已参与';
                                break;
                            case "3":
                            status = '已结束';
                                break;
                        }  

                        option+='<tr>';
                        option+='<td class="text-center">'+vo[i]['order_num']+'</td>';
                        option+='<td class="text-center">'+vo[i]['projectname']+'</td>';
                        option+='<td class="text-center">'+vo[i]['money']+'</td>';
                        option+='<td class="text-center">'+type+'</td>';
                        option+='<td class="text-center">'+vo[i]['created_at']+'</td>';
                        option+='<td class="text-center">'+status+'</td>';
                        option+='<td class="text-center">'+vo[i]['re_coin']+'</td>';
                        option+='<td class="text-center">'+''+'</td>';
                        option+='</tr>';
                    }
                }
                    $('#data_append').append(option);
            }
        });
    });
</script>


<footer>
    <div class="footer-wrapper">
        <div class="about-us-w">
            <img src="__IMG__/logo_bottom.png" class="bottom_logo"/>
        </div>
        <div class="footer-content clearfix">
            <dl class='footer-fast-nav current-dl'>
                <dt>快速导航</dt>
                <dd><a href="contactUs.html">联系我们</a></dd>
                <dd><a href="joinUs.html">加入我们</a></dd>
                <dd><a href="notice.html">最新公告</a></dd>
                <dd><a href="helpCenter.html">帮助中心</a></dd>
            </dl>
            <dl class="footer-link-us current-dl current-dd">
                <dt>联系方式</dt>
                <dd><span>QQ群1:</span>461370969（已满）</dd>
                <dd><span>QQ群2:</span>598585370（已满）</dd>
                <dd><span>QQ群3:</span>413047119（已满）</dd>
                <dd><span>QQ群4:</span>665094465（已满）</dd>
                <dd><span>QQ群5:</span>659298203（2000人）</dd>
            </dl>
            <dl class='current-dd current-dl' style='margin-left:50px;'>
                <dt></dt>
                <dd><span>项目合作:</span>business@18ico.com</dd>
                <dd><span>媒体合作:</span>media@18ico.com</dd>
                <dd><span>客户支持:</span>support@18ico.com</dd>
            </dl>
            <div class="footer-focus-us fr">
                <h4>关注我们：</h4>
                <div class="fl">
                    <img src="__IMG__/gzh.png" alt="" width='52'>
                    <p>微信公众号</p>
                </div>
                <div class="fl">
                    <img src="__IMG__/wxqm.png" alt="" width='52'>
                    <p>微信群秘</p>
                </div>
                <div class="fl">
                    <img src="__IMG__/xlwb.png" alt="" width='52'>
                    <p>微博关注</p>
                </div>
            </div>
        </div>
        <div class="friendship-link">
            <span>友情链接：</span>
            <a href="http://www.sosobtc.com/" target="_blank" rel="nofollow">sosobtc</a>
            <a href="http://www.huobi.com/" target="_blank" rel="nofollow">火币网</a>
            <a href="http://www.btcchina.com/" target="_blank" rel="nofollow">比特币中国</a>
            <a href="http://www.yuanbao.com/" target="_blank" rel="nofollow">元宝网</a>
            <a href="http://www.jubi.com/" target="_blank" rel="nofollow">聚币网</a>
            <a href="http://www.btctrade.com/" target="_blank" rel="nofollow">BTCTrade</a>
            <a href="http://www.btc38.com/" target="_blank" rel="nofollow">比特时代</a>
            <a href="http://www.lhang.com/" target="_blank" rel="nofollow">链行</a>
            <a href="https://www.bichuang.com" target="_blank" rel="nofollow">币创网</a>
            <a href="http://www.biqushi.cn/" target="_blank" rel="nofollow">币区势</a>
            <a href="https://poloniex.com/" target="_blank" rel="nofollow">Poloniex</a>
            <a href="https://www.allcoin.com" target="_blank" rel="nofollow">Allcoin</a>
            <a href="http://www.gongxiangcj.com/" target="_blank" rel="nofollow">共享财经</a>
            <a href="https://www.btc123.com/" target="_blank" rel="nofollow">BTC123</a>
            <a href="http://www.bitecoin.com/" target="_blank" rel="nofollow">比特币中文网</a>
        </div>
<!--         <div class="icp-link">
            Copyright &copy; 2017 18ico.com | 粤ICP备17004102号-1
        </div> -->
        <div class="choose-country fr">
            <a class="locale-lang" data-lang="zh-CN"><img src="__IMG__/chinese_version.png"/></a>
            <a class="locale-lang" data-lang="en"><img src="__IMG__/america_version.png"/></a>
        </div>
    </div>
</footer>
<div class="toolbar">
    <a href="javascript:" id="back_to_top" title="返回顶部" style="display: inline;">
        <svg height="30" width="30" viewBox="0 0 30 30">
            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path>
            <path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path>
        </svg>
    </a>
</div>
<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<!-- <script src="__JS__/header-ee96b9a909.bundle.js"></script> -->
<script src="__JS__/idangerous.swiper.js"></script>
<script src="__JS__/index-857250274c.bundle.js"></script>


 <div class="toolbar">
    <a href="#" id="back_to_top" title="返回顶部">
        <svg height="30" width="30" viewBox="0 0 30 30">

            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path><path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path></svg>
    </a>
</div>
<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<script src="__JS__/header-ee96b9a909.bundle.js"></script>
<script src="__JS__/user-4fdf20982d.bundle.js"></script>
</body>
</html>
