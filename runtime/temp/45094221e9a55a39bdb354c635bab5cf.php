<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:78:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/login.html";i:1504841599;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        会员登录| ico365-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="ico365是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="ico365区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
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
<style type="text/css">
    .btn-lg, .btn-group-lg > .btn{
        padding: 7px 10px;
    }
</style>
<div id="sign_content">
    <div id="sign_frame">
        <div class="sign-in-wrap ">
            <h3>会员登录</h3>
            <form>
                <div class="auth-form">
                    <div class="input-group">
                        <svg width="19" height="19" viewBox="0 0 19 19">

                            <path fill="currentColor" d="M16.48 19c.01-.133.041-.26.041-.396 0-3.715-3.144-6.729-7.021-6.729s-7.022 3.014-7.022 6.729c0 .137.033.264.042.396H.021C.015 18.867 0 18.738 0 18.603c0-3.631 2.224-6.756 5.434-8.219-1.295-1.087-2.129-2.666-2.129-4.446C3.305 2.658 6.079 0 9.5 0c3.422 0 6.195 2.658 6.195 5.938 0 1.78-.833 3.359-2.13 4.446C16.775 11.847 19 14.972 19 18.603c0 .135-.016.266-.021.396H16.48V19zM9.5 2.374c-2.053 0-3.717 1.595-3.717 3.563 0 1.967 1.665 3.562 3.717 3.562s3.718-1.595 3.718-3.562c0-1.968-1.665-3.563-3.718-3.563z"></path></svg>
                        <label for=""></label>
                        <input id="account" placeHolder="邮箱/手机号" name="account" type="text" class="form-control input-lg" autocomplete="off">
                    </div>
                    <div class="input-group">
                        <svg width="18" height="24" viewBox="0 0 18 24">

                            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 14.25a1.5 1.5 0 0 0-1.5 1.5c0 .455.25 1.32.5 2.004.204.557.461.994 1 .994.586 0 .796-.434 1-.986.254-.686.5-1.555.5-2.012a1.5 1.5 0 0 0-1.5-1.5z"></path><path d="M15.75 9.75v-3A6.749 6.749 0 0 0 9 0a6.75 6.75 0 0 0-6.75 6.75v3A2.25 2.25 0 0 0 0 12v5.25A6.75 6.75 0 0 0 6.75 24h4.5A6.749 6.749 0 0 0 18 17.25V12a2.25 2.25 0 0 0-2.25-2.25zM9 2.49a4.26 4.26 0 0 1 4.26 4.26v3H4.74v-3A4.26 4.26 0 0 1 9 2.49zm6.684 12.045v2.674c0 2.578-2.1 4.678-4.679 4.678h-4.01a4.685 4.685 0 0 1-4.679-4.678V12.53c0-.369.3-.668.668-.668H15.015c.368 0 .668.299.668.668v2.005z"></path></g></svg>
                        <label for=""></label>
                        <input id="password" placeHolder="登录密码" name="password" type="password" class="form-control input-lg" autocomplete="off">
                    </div>
                    <div id="embed-captcha"></div>
                    <p id="wait" class="hide">正在加载验证码......</p>
                    <p id="notice" class="hide">请先完成验证</p>
                    <div class="btn-group btn-block">
                        <input class="btn btn-block btn-lg btn-primary" id="login_btn" type="button" value="立即登录"/>
                    </div>
                    <div class="forget-pwd">
                        <a class="ico-agree">
                            <svg height="18" width="18" viewBox="0 0 18 18">

                                <path class="check-color" fill-rule="evenodd" clip-rule="evenodd" fill="#24D96D" d="M3.389 8.418l3.273 2.609 8.151-7.51s.547-.5 1.024-.109c.143.118.307.45-.063.97l-8.511 9.97s-.653.893-1.427-.01L2.165 9.379s-.436-.671.109-1.075c.184-.135.602-.345 1.115.114m0 0"></path><path class="border-color" fill="#9B9B9B" d="M17 1v16H1V1h16m1-1H0v18h18V0z"></path></svg>
                        </a>
                        <span>记住密码</span>
                        <a class="text-blue" href="/home/login/getpwd">忘记密码？</a>
                    </div>
                </div>
            </form>
            <div class="sign-footer">
                <span>还没有18ICO账号？&nbsp;<a href="/home/login/register" class="switch-link">点击注册&gt;&gt;</a></span>
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
<!--<script src="__JS__/vendor-140c67b313.bundle.js"></script>-->
<!--<script src="__JS__/app-d2b0299975.bundle.js"></script>-->
<!--<script src="__JS__/header-ee96b9a909.bundle.js"></script>-->
<!--<script src="__JS__/login-ad2f6cee11.bundle.js" charset="utf-8"></script>-->
<script src="__JS__/jquery.js"></script>
<script>
    $(".ico-agree").click(function () {
        $(this).toggleClass("unchecked");
    })
    $("#login_btn").click(function () {
        let account = $('#account').val();
        let password = $('#password').val();
        $.ajax({
            url : '/home/login/login',
            type : 'post',
            data : {
                account:account,
                password:password
            },
            success:function(res){
                alert(res.msg);
                if(res.code == 1){
                    location.href = '/home/user/index';
                }
            }
        })
    })
</script>

</body>
</html>
