<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:81:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/personal.html";i:1504951964;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-menu.html";i:1504766289;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        个人信息| ico365-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/app-892a367653.css">
    <link rel="stylesheet" type="text/css" href="/static/admin/layui/css/layui.css">
    <style type="text/css">
        .fly_ipt{
            display: block;
            width: 15px !important;
            height: 15px !important;
            margin-top: 11px !important;
            margin-left: 10px !important;
            float: left;
        }
        .gender{
            float: left;
        }
        .fly_td{
            
        }
        #user_content .user-body-right .form-group label{
            float: left ;
        }
        #user_content .user-body-right .form-group{
            overflow: hidden;
        }
        .fly_lab{
            width: auto !important;
            margin-left: 10px !important;
        }
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
        #header-iframe {
            width: 100%;
            height: 386px;
            overflow: hidden;
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
<div id="user_content">
    <iframe id="header-iframe" src="/home/index/rules?v=user-header_one" scrolling="no" seamless>
        
    </iframe>
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
                <div class="home-page-right" id="home_wrap">
                    <div>
                        <form action="#" id="user_info_form">
                            <div class="form-group">
                                <label for="username">用户名：</label>
                                <span class="txt-hide" id="username"><?php echo $user['phone']; ?></span>
                            </div>
                            <div class="form-group email-home">
                                <label for="email">邮箱：</label>
                                <input type="text" name="email" id="email" value="<?php echo $user['email']; ?>">
                                <button type="button" class="send-email-code" id="getEmailCode">发送验证邮件</button>
                            </div>
                            <div class="form-group email-verify">
                                <label for="email_verify">邮箱验证码：</label>
                                <input type="text" name="email_code" id="email_verify">
                            </div>
                            <div class="form-group">
                                <label for="name">昵称：</label>
                                <input type="text" name="name" id="name" value="<?php echo $user['nickname']; ?>">
                            </div>
                            <?php if(($user['type']==3)): ?>
                            <div class="form-group">
                                <label >实名认证：</label>
                                <span style="color: #24d86a;">已认证</span>
                            </div>
                            <?php else: ?>
                            <div class="form-group">
                                <label for="identity">实名认证：</label>
                                <span id="identity">您还没身份认证，请 <a href="identity.html" class="goto-auth">立即认证</a></span>
                            </div>
                            <?php endif; ?>
                            
                           <!--  <div class="form-group">
                               <label for="phone">手机号码：</label>
                               <input type="text" name="phone" readonly id="phone" value="<?php echo $user['phone']; ?>">
                               <button type="button" class="send-phone-code">发送手机验证码</button>
                           </div>
                           <div class="form-group phone-verify">
                               <label for="phone_verify">手机验证码：</label>
                               <input type="text" name="code" id="phone_verify">
                           </div> -->
                            <div class="form-group">
                                <label for="gender" class="fly_td">性别：</label>
                                <span class="gender">
                                    <input type="radio" name="sex" class="fly_ipt" id="nan" <?php if($user['sex'] == 1): ?>checked<?php endif; ?>><label for="nan" class="fly_lab">男</label>
                                    <input type="radio" name="sex" class="fly_ipt" id="nv" <?php if($user['sex'] != 1): ?>checked<?php endif; ?>><label for="nv" class="fly_lab">女</label>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="country">所在地区：</label>
                                <div class="country-select">
                                   <select id="state" name="state">
                                        <?php if(!empty($user['state'])): ?><option value="<?php echo $user['state']; ?>" selected><?php echo $user['state']; ?></option><?php endif; ?>
                                        <option value="">请选择国家</option>
                                        <option value="中国">中国</option>
                                        <option value="英国">英国</option>
                                        <option value="美国">美国</option>
                                        <option value="俄罗斯">俄罗斯</option>
                                   </select>
                                   
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="detail_address">详细地址：</label>
                                <input type="text" name="detail_address" id="detail_address" value="<?php echo $user['detail_address']; ?>">
                            </div>
                            <div class="form-group">
                                <label for="company_address">所在公司：</label>
                                <input type="text" name="user_company" id="company" value="<?php echo $user['company']; ?>">
                            </div>
                            <div class="form-group">
                                <label for="describe">个人简介：</label>
                                <textarea name="describe" id="remark" maxlength="100" cols="30" rows="10"><?php echo $user['remark']; ?></textarea>
                            </div>
                        </form>
                        <div class="log-info">
                            <div class="form-group">
                                <label for="">最近登录：</label>
                                <a class="lasttime"><?php echo $user['updated_at']; ?></a>
                            </div>
                            <div class="form-group">
                                <label for="">注册时间：</label>
                                <a class="createtime"><?php echo $user['created_at']; ?></a>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button class="save-info-btn" type="button">保存</button>
                        </div>
                    </div>
                    <div class="user-avatar">
                        <img src="<?php if(empty($user['headimg'])): ?>__IMG__/default-avatar.png<?php else: ?><?php echo $user['headimg']; endif; ?>" alt="" class="avatar-pic">
                        <a href="javascript:upload_file();" class="edit-avatar">修改头像</a>
                        <input type="file" id="upload_file" name="files" style="display:none;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
<!-- <script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<script src="__JS__/header-ee96b9a909.bundle.js"></script>-->
<!-- <script src="__JS__/user-4fdf20982d.bundle.js"></script>  -->
<script src="/static/admin/layui/layui.js"></script>
</body>
</html>
<script>
    //发送邮件
    $('#getEmailCode').on('click',function(){
        let email = $('#email').val();
        if(email == null){
            return false;
        }
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //邮箱正则表达式
        if(!reg.test(email)){
            alert('邮箱格式错误');
            return false;
        }
        $.ajax({
            url : '/home/user/to_email',
            type : 'post',
            data : {
                email:email,
            },
            success : function(res){
                alert(res.msg);
            }
        });
    });

    //保存信息
    $('.save-info-btn').on('click',function(){
        let email = $('#email').val();
        let email_code = $('#email_verify').val();
        let nickname = $('#name').val();
        let phone = $('#phone').val();
        let phone_code = $('#phone_verify').val();
        let detail_address = $('#detail_address').val();
        let company = $('#company').val();
        let remark = $('#remark').val();
        let sex_pd = $('#nan')[0].checked;
        let sex = '1';
        if(sex_pd == true){
            sex = '1';
        }else{
            sex = '2';
        }
        let state = $('#state').val();
        $.ajax({
            url : '/home/user/userEdit',
            type : 'post',
            data : {
                email : email,
                email_code : email_code,
                nickname : nickname,
                phone : phone,
                phone_code : phone_code,
                detail_address : detail_address,
                company : company,
                remark : remark,
                sex : sex,
                state : state,
            },
            success : function (res){
                alert(res.msg);
                location.reload();
            }
        })
    })

    //头像修改
    function upload_file(){
        $('#upload_file').click();
    }

    layui.use('upload', function(){
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#upload_file' //绑定元素
            ,url: '/admin/file/upload' //上传接口
            ,done: function(res){
                $.ajax({
                    url : '/home/user/headimgEdit',
                    type : 'post',
                    data : {
                        headimg : res.data,
                    },
                    success : function (req){
                        $('.avatar-pic').attr('src',res.data);
                        $('#headimg').attr('src',res.data);     
                    }
                });
            }
            ,error: function(){
          //请求异常回调
            }
        });
    });
</script>

<script>

</script>
