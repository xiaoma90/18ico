<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:81:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/identity.html";i:1504947227;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:84:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-header.html";i:1504920762;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-menu.html";i:1504766289;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        身份认证| ico365-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <link rel="stylesheet" href="__CSS__/app-892a367653.css">
      <style type="text/css">
       .country-select select{
           border: 1px solid #d1d1d1;
           color: #0b0b0b;
           font-size: 14px;
           height: 40px;
           line-height: 40px;
           width: 307px;
           padding: 3px 15px;
           outline: 0;
           vertical-align: middle;
       
       } 
        .form-group{
            position: relative;
        }
    </style>
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
<form id="fmform1" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg1" name="imgtype1"/>
    <input id="fmimg1" style="display: none;" name="fmimg1" type="file" onChange="uploadss('fmform1')"/>
</form>
<form id="fmform2" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg2" name="imgtype2"/>
    <input id="fmimg2" style="display: none;" name="fmimg2" type="file" onChange="javarscript:uploadss('fmform2')"/>
</form>
<form id="fmform3" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg3" name="imgtype3"/>
    <input id="fmimg3" style="display: none;" name="fmimg3" type="file" onChange="javarscript:uploadss('fmform3')"/>
</form>
<form id="fmform4" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg4" name="imgtype4"/>
    <input id="fmimg4" style="display: none;" name="fmimg4" type="file" onChange="javarscript:uploadss('fmform4')"/>
</form>
<form id="fmform5" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg5" name="imgtype5"/>
    <input id="fmimg5" style="display: none;" name="fmimg5" type="file" onChange="javarscript:uploadss('fmform5')"/>
</form>
<form id="fmform6" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg6" name="imgtype6"/>
    <input id="fmimg6" style="display: none;" name="fmimg6" type="file" onChange="javarscript:uploadss('fmform6')"/>
</form>
<script src="/static/admin/js/jquery.form.js"></script>
<script>
function uploadss(fromID){
      var vars=$("#"+fromID);
      var num = fromID.charAt(fromID.length - 1);
      // console.log(num);
      var options={
          type:"post",
          url:"/admin/project/upload1",
          dataType:'json',
          contentType:"application/json;charset=utf-8",
          success:function(data){
            if (data.code == 1) {
                $('#imgurl'+num).attr("src",data.data);
                $('#l_banner'+num).val(data.data);
            }
          }
      }
      vars.ajaxSubmit(options);
  }   
</script>
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
                <div class="identity-page-right" id="identity_wrap">
                    <div class="identity-switch-box">
                        <button type="button" class="identity-switch-item person-identity active" data-type="person">个人认证</button>
                        <button type="button" class="identity-switch-item agency-identity" data-type="agency">机构认证</button>
                    </div>
                    <div class="person-identity-toggle identity-form">
                        <form action="#" id="person_identity_form">
                             <div class="form-group">
                               <label for="country">国籍：</label>
                               <div class="country-select"> 
                                    <select name="state" id="" class="fly_select">
                                       
                                        <!-- <option value="">请选择国家</option> -->
                                        <option value="中国">中国</option>
                                       <!--  <option value="英国">英国</option>
                                       <option value="美国">美国</option>
                                       <option value="俄罗斯">俄罗斯</option> -->
                                    </select>
                                </div>
                            </div>
                            
                            <div class="china-person">
                                <div class="form-group">
                                    <label for="username">姓名：</label>
                                    <input type="text" name="name" id="username">
                                    <div class="protip-container protip-skin-default username  protip-skin-default--size-normal protip-skin-default--scheme-pro" data-pt-identifier="15048600192548467" style="max-width: 300px; min-width: 213px; left: 153.875px; top: -54px;" data-pt-position="top-left"><span class="protip-arrow"></span><div class="protip-content">请输入姓名（英文或拼音）</div></div>
                                </div>
                                <div class="form-group">
                                    <label for="idcard">身份证号码：</label>
                                    <input type="text" name="card_id" id="idcard">
                                    <div class="protip-container protip-skin-default idcard protip-skin-default--size-normal protip-skin-default--scheme-pro" data-pt-identifier="15048612009052251" style="max-width: 300px; min-width: 153px; left: 153.875px; top: -54px;" data-pt-position="top-left"><span class="protip-arrow"></span><div class="protip-content">请输入正确身份证号码</div></div>
                                </div>
                                <div class="form-group m30">
                                    <label for="username" class="id-card">手持身份证正面：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="hand_front" id="l_banner1"> 
                                          
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl1" name="imgurl1"  onclick="javascript:$('#fmimg1').click();" />
                                        </a>
                                        <p>手持身份证正面</p>
                                    </div>
                                    <div class="upload-example">
                                        <div class="picture-example">
                                            <img src="__IMG__/id-handheld.jpg" alt="id card picture">
                                        </div>
                                        <div class="example-intro">
                                            <h4>示例</h4>
                                            <p>保证文字清晰可识别</p>
                                            <p>图片大小不要超过1MB</p>
                                            <p>建议使用QQ截图</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group m30">
                                    <label for="username" class="id-card">身份证正面：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="front" id="l_banner2"> 
                                          
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl2" name="imgurl2"  onclick="javascript:$('#fmimg2').click();" />
                                        </a>
                                        <p>身份证正面</p>
                                    </div>
                                    <div class="upload-example">
                                        <div class="picture-example">
                                            <img src="__IMG__/id-front.jpg" alt="id card picture">
                                        </div>
                                        <div class="example-intro">
                                            <h4>示例</h4>
                                            <p>保证文字清晰可识别</p>
                                            <p>图片大小不要超过1MB</p>
                                            <p>建议使用QQ截图</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group m30">
                                    <label for="username" class="id-card">身份证背面：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="back" id="l_banner3"> 
                                            
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl3" name="imgurl3"  onclick="javascript:$('#fmimg3').click();" />
                                        </a>
                                        <p>身份证背面</p>
                                    </div>
                                    <div class="upload-example">
                                        <div class="picture-example">
                                            <img src="__IMG__/id-back.jpg" alt="id card picture">
                                        </div>
                                        <div class="example-intro">
                                            <h4>示例</h4>
                                            <p>保证文字清晰可识别</p>
                                            <p>图片大小不要超过1MB</p>
                                            <p>建议使用QQ截图</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="foreign-person hide">
                                <div class="form-group">
                                    <label for="person_name">姓名(英文或拼音)：</label>
                                    <input type="text" name="name1" id="person_name">
                                </div>
                                <div class="form-group">
                                    <label for="person_local_name">姓名(本地语言)：</label>
                                    <input type="text" name="local_name" id="person_local_name">
                                </div>
                                <div class="form-group">
                                    <label for="passport_code">护照号：</label>
                                    <input type="text" name="passport_num" id="passport_code">
                                </div>
                                <div class="form-group m30">
                                    <label for="username" class="id-card">上传护照1：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="hand_front1" id="l_banner4"> 
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl4" name="imgurl4"  onclick="javascript:$('#fmimg4').click();" />
                                        </a>
                                        <p>请上传护照图片</p>
                                    </div>
                                    <div class="passport-upload-example">
                                        <div class="picture-example">
                                            <img src="__IMG__/passport1.jpg" alt="passport picture">
                                        </div>
                                        <div class="example-intro">
                                            <h4>示例</h4>
                                            <p>请确保您提交的文件符合以下要求：</p>
                                            <p>1.请提供有效国际护照，带有明确有效日期；</p>
                                            <p>2.证件图片/文字要求清晰可见（允许水印）；</p>
                                            <p>3.图片大小不要超过1M</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group m30">
                                    <label for="username" class="id-card">手持护照2：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="front1" id="l_banner5"> 
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl5" name="imgurl5"  onclick="javascript:$('#fmimg5').click();" />
                                        </a>
                                        <p>请上传护照图片</p>
                                    </div>
                                    <div class="passport-upload-example">
                                        <div class="picture-example">
                                            <img src="__IMG__/passport2.jpg" alt="passport picture">
                                        </div>
                                        <div class="example-intro">
                                            <h4>示例</h4>
                                            <p>请确保您提交的文件符合以下要求：</p>
                                            <p>1.在拍摄时，确保五官和照片基本一致，不要遮挡面部；</p>
                                            <p>2.证件图片/文字要求清晰可见（允许水印）；</p>
                                            <p>3.图片大小不要超过1M</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="born_day">生日：</label>
                                    <input type="text" name="year" id="born_year" placeholder="年">
                                    <input type="text" name="month" id="born_month" placeholder="月">
                                    <input type="text" name="days" id="born_day" placeholder="日">
                                </div>
                                <div class="form-group">
                                    <label>当前居住国家：</label>
                                     <div class="country-select"> 
                                    <select name="citys" id="" class="fly_select">
                                        <option value="">请选择国家</option>
                                        <option value="中国">中国</option>
                                        <option value="英国">英国</option>
                                        <option value="美国">美国</option>
                                        <option value="俄罗斯">俄罗斯</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <span>请确保以下填写的个人住址信息与个人信息中的地址保持一致。</span>
                                </div>
                                <div class="form-group">
                                    <label for="person_postcode">邮编：</label>
                                    <input type="text" name="postage" id="person_postcode">
                                </div>
                                <div class="form-group">
                                    <label for="person_detail_address">详细地址：</label>
                                    <input type="text" name="detail_address" id="person_detail_address">
                                </div>
                                <div class="form-group">
                                    <label for="person_city_name">城市：</label>
                                    <input type="text" name="city" id="person_city_name">
                                </div>
                                <div class="form-group">
                                    <label for="person_district">州/省/地区：</label>
                                    <input type="text" name="capitol" id="person_district">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for=""></label>
                                <span class="ico-agree person-id-agree">
<svg height="12" width="14" viewBox="0 0 18 18">

<path class="check-color" fill-rule="evenodd" clip-rule="evenodd" fill="#24D96D" d="M3.389 8.418l3.273 2.609 8.151-7.51s.547-.5 1.024-.109c.143.118.307.45-.063.97l-8.511 9.97s-.653.893-1.427-.01L2.165 9.379s-.436-.671.109-1.075c.184-.135.602-.345 1.115.114m0 0"></path><path class="border-color" fill="#9B9B9B" d="M17 1v16H1V1h16m1-1H0v18h18V0z"></path></svg>
</span>
                                <span>我承诺所提供的资料为我本人所有，不存在盗用别人资料的情况。</span>
                            </div>
                        </form>
                        <div class="btn-group">
                            <button id="persons" type="button" onClick="persons()" class="submit-person-btn">提交</button>
                        </div>
                    </div>
                    <div class="agency-identity-toggle identity-form hide">
                        <form action="#" id="agency_identity_form">
                            <div class="form-group">
                               <label for="country">国籍：</label>
                               <div class="country-select"> 
                                    <select name="state" class="fly_select">
                                       
                                        <option value="">请选择国家</option>
                                        <option value="中国">中国</option>
                                        <option value="英国">英国</option>
                                        <option value="美国">美国</option>
                                        <option value="俄罗斯">俄罗斯</option>
                                    </select>
                                </div>
                            </div>
                            <div class="china-identity">
                                <div class="form-group">
                                    <label for="china_company_name">公司名称：</label>
                                    <input type="text" name="company" id="china_company_name">
                                </div>
                                <div class="form-group">
                                    <label for="register_num">企业注册号：</label>
                                    <input type="text" name="register_num" id="register_num" >
                                </div>
                                <div class="form-group">
                                    <label for="legal_person">法人代表姓名：</label>
                                    <input type="text" name="legal_person" id="legal_person">
                                </div>
                                <div class="form-group">
                                    <label for="register_year">注册日期：</label>
                                    <input type="text" id="register_year" name="register_year" placeholder="年">
                                    <div class="protip-container protip-skin-default register_year protip-skin-default--size-normal protip-skin-default--scheme-pro" data-pt-identifier="15048615144231167" style="max-width: 300px; min-width: 138px; left: 153.875px; top: -54px;" data-pt-position="top-left"><span class="protip-arrow"></span><div class="protip-content">请输入正确注册年份</div></div>
                                    <input type="text" id="register_month" name="register_month" placeholder="月">
                                    <div class="protip-container protip-skin-default register_month protip-skin-default--size-normal protip-skin-default--scheme-pro" data-pt-identifier="15048615037617061" style="max-width: 300px; min-width: 138px; left: 257.75px; top: -54px;" data-pt-position="top-left"><span class="protip-arrow"></span><div class="protip-content">请输入正确注册月份</div></div>
                                    <input type="text" id="register_day" name="register_day" placeholder="日">
                                    <div class="protip-container protip-skin-default register_day protip-skin-default--size-normal protip-skin-default--scheme-pro" data-pt-identifier="1504861507149503" style="max-width: 300px; min-width: 138px; left: 361.625px; top: -54px;" data-pt-position="top-left"><span class="protip-arrow"></span><div class="protip-content">请输入正确注册日期</div></div>
                                </div>
                                <div class="form-group">
                                    <label for="register_address">注册地址：</label>
                                    <input type="text" name="register_address" id="register_address">
                                </div>
                                <div class="form-group m30">
                                    <label for="business_license" class="id-card">营业执照：</label>
                                    <div class="upload-identity">
                                        <a href="javascript:" class="upload-file-button upload-id-front">
                                           <input type="hidden" name="license" id="l_banner6"> 
                                           
                                            <img src="__IMG__/fly_add.png" id="imgurl6" name="imgurl6"  onclick="javascript:$('#fmimg6').click();" />
                                        </a>
                                        <p>企业营业执照</p>
                                    </div>
                                </div>
                            </div>
                            <div class="foreign-identity hide">
                                <div class="form-group">
                                    <label for="company_name">公司名称(英文或拼音)：</label>
                                    <input type="text" name="company_foreign_name" id="company_foreign_name">
                                </div>
                                <div class="form-group">
                                    <label for="company_local_name">公司名称(本地语言)：</label>
                                    <input type="text" name="company_local_name" id="company_local_name">
                                </div>
                                <div class="form-group">
                                    <label for="register_code">企业注册号：</label>
                                    <input type="text" name="register_num1" id="register_code">
                                </div>
                                <div class="form-group">
                                    <label for="for_register_year">注册日期：</label>
                                    <input type="text" name="register_year1" id="for_register_year" placeholder="年">
                                    <input type="text" name="register_month1" id="for_register_month" placeholder="月">
                                    <input type="text" name="register_day1" id="for_register_day" placeholder="日">
                                </div>
                                <div class="form-group">
                                    <label></label>
                                    <span>请确保以下注册住址信息真实性。</span>
                                </div>
                                <div class="form-group">
                                    <label for="agency_postcode">邮编：</label>
                                    <input type="text" name="postage" id="agency_postcode">
                                </div>
                                <div class="form-group">
                                    <label for="agency_detail_address">详细地址：</label>
                                    <input type="text" name="detail_address" id="agency_detail_address">
                                </div>
                                <div class="form-group">
                                    <label for="agency_city_name">城市：</label>
                                    <input type="text" name="city" id="agency_city_name">
                                </div>
                                <div class="form-group">
                                    <label for="agency_district">州/省/地区：</label>
                                    <input type="text" name="capital" id="agency_district">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for=""></label>
                                <span class="ico-agree" id="agency-id-agree">
<svg height="12" width="14" viewBox="0 0 18 18">

<path class="check-color" fill-rule="evenodd" clip-rule="evenodd" fill="#24D96D" d="M3.389 8.418l3.273 2.609 8.151-7.51s.547-.5 1.024-.109c.143.118.307.45-.063.97l-8.511 9.97s-.653.893-1.427-.01L2.165 9.379s-.436-.671.109-1.075c.184-.135.602-.345 1.115.114m0 0"></path><path class="border-color" fill="#9B9B9B" d="M17 1v16H1V1h16m1-1H0v18h18V0z"></path></svg>
</span>
                                <span>我承诺所提供的资料为我本人所有，不存在盗用别人资料的情况。</span>
                            </div>
                        </form>
                        <div class="btn-group">
                            <button id="agencys"  onClick="agencys()" type="button" class="submit-agency-btn">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 <script type="text/javascript">
 $('#username').bind('input propertychange', function() { 
    var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
    if(!username.test($("#username").val())){
        $(".username").css("opacity","1");
    }else{
        $(".username").css("opacity","0");
    }
}); 
 $('#idcard').bind('input propertychange', function() { 
    var idcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!idcard.test($("#idcard").val())){
        $(".idcard").css("opacity","1");
    }else{
        $(".idcard").css("opacity","0");
    }
}); 
 $('#register_year').bind('input propertychange', function() { 
    var register_year = /(19[\d][\d]|20[\d][\d])/;
    if(!register_year.test($("#register_year").val())){
        $(".register_year").css("opacity","1");
    }else{
        $(".register_year").css("opacity","0");
    }
});
 $('#register_month').bind('input propertychange', function() { 
    var register_month = /^(0?[[1-9]|1[0-2])$/;
    if(!register_month.test($("#register_month").val())){
        $(".register_month").css("opacity","1");
    }else{
        $(".register_month").css("opacity","0");
    }
});
 $('#register_day').bind('input propertychange', function() { 
    var register_day = /^([12][0-9]|31|[1-9])$/;
    if(!register_day.test($("#register_day").val())){
        $(".register_day").css("opacity","1");
    }else{
        $(".register_day").css("opacity","0");
    }
});
 function persons(){
    // alert($('#persons').text());return;
    if($('#persons').text() != "提交"){alert('请勿连续提交');return false;}
    $('#persons').text('提交中..');
    setTimeout("$('#persons').text('提交')",3000)
    var data = $('#person_identity_form').serialize();
       $.ajax({
         url:'/home/user/personAuth',
         method:'post',
         data:{data:data},
         success:function(req){
                if(req.code==1){
                    alert(req.msg)
                    location.reload();
                }else{
                    alert(req.msg)
                }
         },
         error:function(){
            alert('网络错误');
         }
       });
 } 
 function agencys(){
    if($('#agencys').text() != "提交"){alert('请勿连续提交');return false;}
    $('#agencys').text('提交中..');
    setTimeout("$('#agencys').text('提交')",3000)
     var data = $('#agency_identity_form').serialize();
       $.ajax({
         url:'/home/user/agencyAuth',
         method:'post',
         data:{data:data},
         success:function(req){
          console.log(req);
                if(req.code==1){
                    alert(req.msg)
                    location.reload();
                }else{
                    alert(req.msg)
                }
         },
         error:function(){
            alert('网络错误');
         }
       }); 
     // $('#agency_identity_form').ajaxSubmit(options);
 }

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
    <a href="javascript:" id="back_to_top" title="返回顶部">
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
