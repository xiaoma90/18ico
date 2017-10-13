<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:81:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/register.html";i:1504944551;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        会员注册| 18ico-区块链项目ICO服务平台
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
<style type="text/css">
    .btn-lg, .btn-group-lg > .btn {
        padding: 7px 10px;
    }
</style>
<div id="sign_content">
    <div id="sign_frame">
        <div class="sign-up-wrap ">
            <h3>会员注册</h3>
            <form class="sign-up-form">
                <div class="auth-form">
                    <div class="input-group">
                        <svg width="19" height="19">
                            <path fill="currentColor" d="M16.48 19c.01-.133.041-.26.041-.396 0-3.715-3.144-6.729-7.021-6.729s-7.022 3.014-7.022 6.729c0 .137.033.264.042.396H.021C.015 18.867 0 18.738 0 18.603c0-3.631 2.224-6.756 5.434-8.219-1.295-1.087-2.129-2.666-2.129-4.446C3.305 2.658 6.079 0 9.5 0c3.422 0 6.195 2.658 6.195 5.938 0 1.78-.833 3.359-2.13 4.446C16.775 11.847 19 14.972 19 18.603c0 .135-.016.266-.021.396H16.48V19zM9.5 2.374c-2.053 0-3.717 1.595-3.717 3.563 0 1.967 1.665 3.562 3.717 3.562s3.718-1.595 3.718-3.562c0-1.968-1.665-3.563-3.718-3.563z"></path>
                        </svg>
                        <label for=""></label>
                        <input name="phone" placeholder="手机号码" type="mobile" class="form-control input-lg" autocomplete="off" require id="reg_phone">
                    </div>
                    <div class="input-group">
                        <div style="width: 236px; margin-right:4px; float:left;">
                            <svg width="24" height="24" viewBox="0 0 24 24.07">
                                <g fill="currentColor">
                                    <path d="M13.292 15.176a4.166 4.166 0 0 0-1.318-2.953 4.27 4.27 0 0 0-2.942-1.165c-1.175 0-2.27.463-3.082 1.302a4.166 4.166 0 0 0-1.18 3.01 4.162 4.162 0 0 0 1.32 2.954 4.265 4.265 0 0 0 2.94 1.166 4.244 4.244 0 0 0 3.082-1.304 4.167 4.167 0 0 0 1.18-3.01zm-4.261 2.361a2.302 2.302 0 0 1-1.586-.628 2.238 2.238 0 0 1-.708-1.585 2.23 2.23 0 0 1 .633-1.613 2.29 2.29 0 0 1 1.662-.702 2.3 2.3 0 0 1 1.586.628c.443.418.694.981.708 1.585a2.23 2.23 0 0 1-.633 1.613 2.29 2.29 0 0 1-1.662.702z"></path>
                                    <path d="M22.596.957c-.668-.635-1.35-.956-2.025-.956-.739 0-1.19.392-1.238.435l-1.348 1.21c-.848-.568-2.075-.445-2.79.295a2.137 2.137 0 0 0-.19 2.756l-2.329 2.41a9.204 9.204 0 0 0-3.649-.759 8.99 8.99 0 0 0-6.525 2.758 8.812 8.812 0 0 0-2.499 6.372 8.83 8.83 0 0 0 2.793 6.254 9.051 9.051 0 0 0 4.167 2.225l.486.113-.047-2.004-.277-.076a7.107 7.107 0 0 1-2.975-1.673 6.892 6.892 0 0 1-2.182-4.886 6.882 6.882 0 0 1 1.952-4.975 7.03 7.03 0 0 1 5.102-2.155c.936 0 1.849.179 2.682.517l1.318.75 4.745-4.911-1.147-1.082a.2.2 0 0 1-.005-.285.218.218 0 0 1 .297-.006l1.141 1.076 1.938-2.007c.008-.009.195-.233.515-.233.239 0 .504.125.788.372.326.285.495.565.501.833.008.315-.221.544-.229.553l-6.908 7.149.766 1.282c1.249 2.629.746 5.683-1.279 7.779a6.992 6.992 0 0 1-2.497 1.659l-.251.099.048 2.042.497-.168a8.928 8.928 0 0 0 3.623-2.281 8.846 8.846 0 0 0 1.556-10.14l6.528-6.765c.048-.054 1.239-1.395-1.053-3.577z"></path>
                                </g>
                            </svg>
                            <label for=""></label>
                            <input name="code" type="text" placeholder="验证码" class="form-control input-lg input-srtrt" autocomplete="off" require id="reg_code">
                        </div>
                        <button style="float:left;" class="btn btn-primary btn-lg" type="button" id="sendMessage">
                            发送验证码
                        </button>
                    </div>
                    <div class="input-group">
                        <svg width="18" height="24" viewBox="0 0 18 24">
                            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M9 14.25a1.5 1.5 0 0 0-1.5 1.5c0 .455.25 1.32.5 2.004.204.557.461.994 1 .994.586 0 .796-.434 1-.986.254-.686.5-1.555.5-2.012a1.5 1.5 0 0 0-1.5-1.5z"></path>
                                <path d="M15.75 9.75v-3A6.749 6.749 0 0 0 9 0a6.75 6.75 0 0 0-6.75 6.75v3A2.25 2.25 0 0 0 0 12v5.25A6.75 6.75 0 0 0 6.75 24h4.5A6.749 6.749 0 0 0 18 17.25V12a2.25 2.25 0 0 0-2.25-2.25zM9 2.49a4.26 4.26 0 0 1 4.26 4.26v3H4.74v-3A4.26 4.26 0 0 1 9 2.49zm6.684 12.045v2.674c0 2.578-2.1 4.678-4.679 4.678h-4.01a4.685 4.685 0 0 1-4.679-4.678V12.53c0-.369.3-.668.668-.668H15.015c.368 0 .668.299.668.668v2.005z"></path>
                            </g>
                        </svg>
                        <label for=""></label>
                        <input name="password" placeholder="创建密码" type="password" class="form-control input-lg" autocomplete="off" id="reg_password">
                    </div>
                    <div class="input-group">
                        <svg width="18" height="24" viewBox="0 0 18 24">
                            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M9 14.25a1.5 1.5 0 0 0-1.5 1.5c0 .455.25 1.32.5 2.004.204.557.461.994 1 .994.586 0 .796-.434 1-.986.254-.686.5-1.555.5-2.012a1.5 1.5 0 0 0-1.5-1.5z"></path>
                                <path d="M15.75 9.75v-3A6.749 6.749 0 0 0 9 0a6.75 6.75 0 0 0-6.75 6.75v3A2.25 2.25 0 0 0 0 12v5.25A6.75 6.75 0 0 0 6.75 24h4.5A6.749 6.749 0 0 0 18 17.25V12a2.25 2.25 0 0 0-2.25-2.25zM9 2.49a4.26 4.26 0 0 1 4.26 4.26v3H4.74v-3A4.26 4.26 0 0 1 9 2.49zm6.684 12.045v2.674c0 2.578-2.1 4.678-4.679 4.678h-4.01a4.685 4.685 0 0 1-4.679-4.678V12.53c0-.369.3-.668.668-.668H15.015c.368 0 .668.299.668.668v2.005z"></path>
                            </g>
                        </svg>
                        <label for=""></label>
                        <input name="reg_two_password" placeholder="确认密码" type="password" class="form-control input-lg" autocomplete="off" id="reg_two_password">
                    </div>
                    <div class="btn-group btn-block">
                        <button type="button" class="btn btn-block btn-lg btn-primary" id="register_btn_mobile">立即注册
                        </button>
                    </div>
                    <div class="agree-block">
                        <a class="ico-agree agree-policy">
                            <svg height="18" width="18" viewBox="0 0 18 18">
                                <path class="check-color" fill-rule="evenodd" clip-rule="evenodd" fill="#24D96D" d="M3.389 8.418l3.273 2.609 8.151-7.51s.547-.5 1.024-.109c.143.118.307.45-.063.97l-8.511 9.97s-.653.893-1.427-.01L2.165 9.379s-.436-.671.109-1.075c.184-.135.602-.345 1.115.114m0 0"></path>
                                <path class="border-color" fill="#9B9B9B" d="M17 1v16H1V1h16m1-1H0v18h18V0z"></path>
                            </svg>
                        </a>
                        <span>我已阅读并同意 <a href="/home/index/rules?v=conditions" >《18ICO用户协议》</a></span>
                    </div>
                </div>
            </form>
            <div class="sign-footer">
                <span>已有账号？&nbsp;<a href="/home/login/login" class="switch-back">点击登录&gt;&gt;</a></span>
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
    <a href="#" id="back_to_top" title="返回顶部">
        <svg height="30" width="30" viewBox="0 0 30 30">

            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path><path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path></svg>
    </a>
</div>
<script src="__JS__/jquery.js"></script>
<script>
    $(".ico-agree").click(function () {
        $(this).toggleClass("unchecked");
    })
    $('#sendMessage').on("click",function () {
        var phone = $("#reg_phone").val();
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
            alert("请填写正确的手机号码!");  
            return false; 
        } 
        var count = 60;
        var countdown = setInterval(CountDown, 1000);
        function CountDown() {
            $("#sendMessage").css('pointer-events', 'none');;
            $("#sendMessage").text("重新发送("+count +")");
            if (count == 0) {
                $("#sendMessage").css('pointer-events', 'auto');
                 $("#sendMessage").text("发送验证码");
                clearInterval(countdown);
            };
            count--;
        }
    })
    $("#register_btn_mobile").click(function () {      
        let phone = $('#reg_phone').val();
        let code = $('#reg_code').val();
        let password = $('#reg_password').val();
        let two_password = $('#reg_two_password').val();
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
            alert("请填写正确的手机号码!");  
            return false; 
        }else if(!code){
            alert("验证码不能为空"); 
            return false;  
        }

        $.ajax({
            url : '/home/login/register',
            type : 'post',
            data : {
                phone : phone,
                code : code,
                password : password,
                two_password : two_password
            },
            success : function(res){
                alert(res.msg);
                if(res.code == 1){
                    window.location.href="/home/user/index";
                }
            }
        })
    })
</script>
</body>
</html>
