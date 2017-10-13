<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/getpwd.html";i:1504864510;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        找回密码| 18ico-区块链项目ICO服务平台
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
<div id="getpass_content">
    <div class="getpass-wrap">
        <div class="getpass-header">
            <div class="pull-right">
                <span>我还没注册，现在就去</span>
                <a href="register.html">注册</a>
            </div>
            <div class="header-left">
                <svg width="24" height="24" viewBox="0 0 18 24">

                    <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M9 14.25a1.5 1.5 0 0 0-1.5 1.5c0 .455.25 1.32.5 2.004.204.557.461.994 1 .994.586 0 .796-.434 1-.986.254-.686.5-1.555.5-2.012a1.5 1.5 0 0 0-1.5-1.5z"></path><path d="M15.75 9.75v-3A6.749 6.749 0 0 0 9 0a6.75 6.75 0 0 0-6.75 6.75v3A2.25 2.25 0 0 0 0 12v5.25A6.75 6.75 0 0 0 6.75 24h4.5A6.749 6.749 0 0 0 18 17.25V12a2.25 2.25 0 0 0-2.25-2.25zM9 2.49a4.26 4.26 0 0 1 4.26 4.26v3H4.74v-3A4.26 4.26 0 0 1 9 2.49zm6.684 12.045v2.674c0 2.578-2.1 4.678-4.679 4.678h-4.01a4.685 4.685 0 0 1-4.679-4.678V12.53c0-.369.3-.668.668-.668H15.015c.368 0 .668.299.668.668v2.005z"></path></g></svg>
                <h3>找回密码</h3>
            </div>
        </div>
        <div class="getpass-body">
            <ul class="getpass-step clearfix">
                <li class="step-item on">
                    <svg class="svg-step" width="283px" height="49px" viewBox="0 0 283.27 49">

                        <path class="step-color" fill-rule="evenodd" clip-rule="evenodd" fill="#E8E8E8" d="M.002 0h264.649l18.616 24.946L264.651 49H.002V0z"></path></svg>
                    <span class="step-txt">输入登录账号</span>
                </li>
                <li class="step-item">
                    <svg class="svg-step" width="283px" height="49px" viewBox="0 0 283.27 49">

                        <path class="step-color" fill-rule="evenodd" clip-rule="evenodd" fill="#E8E8E8" d="M.002 0h264.649l18.616 24.946L264.651 49H.002l18.365-24.945L.002 0z"></path></svg>
                    <span class="step-txt">验证身份</span>
                </li>
                <li class="step-item">
                    <svg class="svg-step" width="283px" height="49px" viewBox="0 0 283.27 49">

                        <path class="step-color" fill-rule="evenodd" clip-rule="evenodd" fill="#E8E8E8" d="M.002 0h264.649l18.616 24.946L264.651 49H.002l18.365-24.945L.002 0z"></path></svg>
                    <span class="step-txt">设置新密码</span>
                </li>
                <li class="step-item">
                    <svg class="svg-step" width="283px" height="49px" viewBox="0 0 283.27 49">

                        <path class="step-color" fill-rule="evenodd" clip-rule="evenodd" fill="#EBEBEB" d="M.76 0h281.749v49H.76l18.366-24.945L.76 0z"></path></svg>
                    <span class="step-txt">完成</span>
                </li>
            </ul>
            <ul class="step-main">
                <li class="box-item on">
                    <div class="user-account">
                        <div class="form-group">
                            <label for="account">账  号：</label>
                            <input type="text" id="account" class="form-control" placeholder="请填写您的登录用户名/邮箱">
                        </div>
<!--                         <div class="form-group">
                            <label for="verify">验 证 码：</label>
                            <input type="text" id="verify" maxlength="4" class="form-control">
                            <a class="refresh-code" href="javascript:" title="点击更换验证码">
                                <img src="__IMG__/loginCode.jpg" alt="">
                            </a>
                        </div> -->
                        <div class="form-group">
                            <label></label>
                            <button type="button" class="btn btn-primary" id="step_first">下一步</button>
                        </div>
                    </div>
                </li>
                <li class="box-item">
                    <div class="form-group">
                        <label for="verify_way">验&nbsp;证&nbsp;方&nbsp;式：</label>
                        <select id="verify_way" class="form-control">
                            <option value="email">手机号</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="email">手机号：</label>
                        <input type="text" id="email" disabled="disabled">
                        <a id="getEmailCode" href="javascript:" title="获取邮箱验证码">获取手机验证码</a>
                    </div>
                    <div class="form-group">
                        <label for="mail_code">手机验证码：</label>
                        <input type="text" id="mail_code" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <button type="button" class="btn btn-primary" id="step_second">下一步</button>
                    </div>
                </li>
                <li class="box-item">
                    <div class="form-group">
                        <label for="new_pwd">新登录密码：</label>
                        <input type="password" id="new_pwd" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="repeat_pwd">确认新密码：</label>
                        <input type="password" id="repeat_pwd" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <button type="button" class="btn btn-primary" id="step_third">下一步</button>
                    </div>
                </li>
                <li class="box-item">
                    <div class="form-group step-completed">
                        <p>已成功设置新密码，请妥善保管您的密码。</p>
                        <a href="/home/login/login" type="button" class="btn btn-default">立即登录</a>
                    </div>
                </li>
            </ul>
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
<!--<script src="__JS__/vendor-140c67b313.bundle.js"></script>-->
<!--<script src="__JS__/app-d2b0299975.bundle.js"></script>-->
<!--<script src="__JS__/header-ee96b9a909.bundle.js"></script>-->
<!--<script src="__JS__/getpass-449c11e408.bundle.js"></script>-->
<script src="__JS__/jquery.js"></script>
<script>
    let account;
    let mail_code;
    $("#step_first").click(function () {
        account = $('#account').val();
        if(account == null || account.length != 11){
            layer.msg('手机号格式不正确');return false;
        }
        $('#email').val(account);
        $(".step-item").eq(0).removeClass("on");
        $(".step-item").eq(1).addClass("on");
        $(".box-item").eq(0).removeClass("on");
        $(".box-item").eq(1).addClass("on");
    })
    $("#step_second").click(function () {
        phone_code = $('#mail_code').val();
        $.ajax({
            url:'/home/login/getpwd',
            type:'post',
            data:{
                phone:account,
                phone_code:phone_code
            },
            success:function(res){
                if(res.code == 1){
                    $(".step-item").eq(1).removeClass("on");
                    $(".step-item").eq(2).addClass("on");
                    $(".box-item").eq(1).removeClass("on");
                    $(".box-item").eq(2).addClass("on"); 
                }else{
                    layer.msg(res.msg);
                }
            }
        })
        
    })
    $("#step_third").click(function () {
        let new_pwd = $('#new_pwd').val();
        let two_pwd = $('#repeat_pwd').val();
        if(new_pwd != two_pwd){
            layer.msg('密码不匹配');return false;
        }
        if(new_pwd == null || two_pwd == null){
            layer.msg('密码不能为空');return false;
        }
        if(new_pwd.length < 6 || new_pwd.length > 16){
            layer.msg('密码不符合规范');return false;
        }
        $.ajax({
            url:'/home/login/pwdEdit',
            type:'post',
            data:{
                pwd:new_pwd,
                two_pwd:two_pwd
            },
            success:function(res){
                if(res.code == 1){
                    $(".step-item").eq(2).removeClass("on");
                    $(".step-item").eq(3).addClass("on");
                    $(".box-item").eq(2).removeClass("on");
                    $(".box-item").eq(3).addClass("on");
                }else{
                    layer.msg(res.msg);
                }
            }
        })
        
    })

    $('#getEmailCode').on('click',function(){
        if($(this).attr('id') == 'getEmail'){
            return false;
        }
        $(this).attr('id','getEmail');
        $.ajax({
            url:'/home/login/getCode',
            type:'post',
            data:{
                phone:account,
            },
            success:function(res){
                layer.msg(res.msg);
            }
        })
    })

</script>
</body>
</html>
