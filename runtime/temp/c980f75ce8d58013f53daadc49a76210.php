<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:83:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/newsDetail.html";i:1504951336;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        2017年7月17日起启用全新充值地址，18ICO系统全面升级完成 | 18ico-区块链项目ICO服务平台
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/index.css">
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
<div class="main-wrap clearfix" id="article_content">
    <div id="article_wrap">
        <div id="article_section">
            <article class="article">
                <header>
                    <h2><?php echo $data['title']; ?></h2>
                    <div class="article-info clearfix">
                        <div class="pull-left">
                            <a class="category" href="">热点新闻</a>&nbsp;&nbsp;
                            <span class="timestamp text-gray"><?php echo $data['time_str']; ?></span>&nbsp;&nbsp;
                            <span class="text-gray">标签：</span>
                            <span class="tags text-gray">
                            <a href="javascript:" class="text-gray"><?php echo $data['labels']; ?></a></span>
                        </div>
                        <div class="pull-right views">
                            <svg width="20px" height="14px">
                                <use xlink:href="#icon-eyes"></use>
                            </svg>
                            <?php echo $data['quantity']; ?>
                        </div>
                    </div>
                </header>
                <section class="main">
                    <p style="line-height: normal; margin-top: 5px; margin-bottom: 20px;"><br/></p>
                    <p style="text-align: center;">
                        <img src="<?php echo $data['pic']; ?>" title="封面" alt="图片加载失败"/>
                    </p>
                    <p><br/></p>
                    <?php echo $data['content']; ?>
                    <p><br/></p>
                    <p><br/></p>
                    <p></p>
                </section>
            </article>
            <!-- <div id="comments">
                <h3>发表我的评论</h3>
                <div class="comment-header">
                    <div class="discuss-avatar">
                        <img src="__IMG__/default-head.png" alt="">
                    </div>
                    <form action="#" id="discuss_form">
                        <div class="discuss-input">
                            <svg class="discuss-icon" width="12px" height="20px">
                                <use xlink:href="#icon-triangle-left"></use>
                            </svg>
                            <textarea id="discussion_input" placeholder="请输入您想评论的内容..."></textarea>
                        </div>
                        <div class="clearfix">
                            <button type="button" class="discuss-button">发布</button>
                            <div class="tips">
                                <svg width="16px" height="16px">
                                    <use xlink:href="#icon-tips"></use>
                                </svg>
                                <span>您必须登录后才能发布评论内容，立即&nbsp;<a href="login.html">登录</a>&nbsp;或&nbsp;<a href="register.html">注册</a></span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="discuss-body" id="discussion_body">
                    <div class="discuss-item" data-id="359">
                        <div class="discuss-avatar">
                            <img src="__IMG__/1499600808.jpg" alt="">
                        </div>
                        <div class="discuss-content">
                            <div class="discussant"><a href="#">t***7</a><span>14天前</span></div>
                            <div class="discuss-text">
                                <p>提现UBC的时候，点击发送验证码没有反应？为什么？</p>
                            </div>
                        </div>
                    </div>
                    <div class="discuss-item" data-id="358">
                        <div class="discuss-avatar">
                            <img src="__IMG__/default-avatar.png" alt="">
                        </div>
                        <div class="discuss-content">
                            <div class="discussant"><a href="#">y***8</a><span>14天前</span></div>
                            <div class="discuss-text">
                                <p>实名认证文件超出大小怎么弄？</p>
                            </div>
                        </div>
                    </div>
                   
                 
                </div>
                <div class="ans-list-state ">
                    <a href="javascript:" class="more btn btn-default">查看更多</a>
                </div>
            </div> -->
        </div>
        <div class="article-right">
            <div id="news_hot">
                <svg width="36px" height="36px" class="svg-hot">
                    <use xlink:href="#icon-hot"></use>
                </svg>
                <div class="hot-title">
                    <h3>本周热门新闻</h3>
                    <a href="/home/news/index">更多&gt;</a>
                </div>
                <div class="hot-content">
                    <?php foreach($ben as $vo): ?>
                    <div class="hot-item">
                        <div class="hot-thumbnail">
                            <a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>">
                                <img src="<?php echo $vo['pic']; ?>" alt="" class="lazy-avatar">
                            </a>
                        </div>
                        <div class="hot-news-content">
                            <a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a>
                            <p><?php echo $vo['time_str']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>   
                    
                </div>
            </div>
            <div id="latest_project">
                <div class="latest-title">
                    <h3>最近项目</h3>
                    <a href="/home/index/items">更多&gt;</a>
                </div>
                <div class="latest-content">
                   <?php foreach($projects as $vo): ?>
                    <div class="latest-item">
                        <div class="latest-thumbnail">
                            <a href="/home/project/finish/id/<?php echo $vo['id']; ?>" target="_blank">
                                <img src="<?php echo $vo['l_banner']; ?>" alt="" class="lazy-avatar">
                            </a>
                        </div>
                        <div class="project-con">
                            <a href="/home/project/finish/id/<?php echo $vo['id']; ?>" title="星云链(Nebulas)"><?php echo $vo['name']; ?></a>
                            <p>剩余时间：<?php echo $vo['st']; ?>天</p>
                            <span class="pro-state beginning">
                            <svg width="62px" height="20px">
                            <use xlink:href="#icon-pro-state-lg"></use>
                            </svg><?php echo $vo['str']; ?></span>
                        </div>
                    </div>
                <?php endforeach; ?>   
                   
                   
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    (function () {
        var qqShareBtn = document.getElementById('qq-share-btn'),
            tsinaBtn = document.getElementById('tsina-share-btn'),
            qzoneShareBtn = document.getElementById('qzone-share-btn'),
            tqqShareBtn = document.getElementById('tqq-share-btn');
        //分享内容组装
        var p1 = {
            url: 'http://www.18ico.com' + location.pathname,
            title: '2017年7月17日起启用全新充值地址，ICO365系统全面升级完成',
            site: '18ico',
            summary: '18ico于7月17日开始的全面系统升级已完成。现重新开放充值、投资业务。'.slice(0, 110),
            pic: ' https://18ico.oss-cn-qingdao.aliyuncs.com/information/attachment/news/20170722/1500721721924173_thumb.png?OSSAccessKeyId=LTAIu62akyYA2aKT&Expires=1504103847&Signature=%2ByPAMOg37EA77TZXF%2BAMKZQOFXs%3D',
        }
        //新浪微博、qq空间、腾讯微博分享内容组装
        var p2 = {
            url: 'http://www.18ico.com' + location.pathname,
            title: '2017年7月17日起启用全新充值地址，ICO365系统全面升级完成' + '（分享自 @18ico区块链）',
            pic: 'https://18ico.oss-cn-qingdao.aliyuncs.com/information/attachment/news/20170722/1500721721924173_thumb.png?OSSAccessKeyId=LTAIu62akyYA2aKT&Expires=1504103847&Signature=%2ByPAMOg37EA77TZXF%2BAMKZQOFXs%3D',
        }
        var s1 = [];
        var s2 = [];
        for (var i in p1) {
            s1.push(i + '=' + encodeURIComponent(p1[i] || ''));
        }
        for (var i in p2) {
            s2.push(i + '=' + encodeURIComponent(p2[i] || ''));
        }
        qqShareBtn.href = 'http://connect.qq.com/widget/shareqq/index.html?' + s1.join('&');
        qqShareBtn.target = '_blank';
        tsinaBtn.href = 'http://service.weibo.com/share/share.php?' + s2.join('&');
        tsinaBtn.target = '_blank';
        qzoneShareBtn.href = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + s1.join('&');
        qzoneShareBtn.target = '_blank';
        tqqShareBtn.href = 'http://share.v.t.qq.com/index.php?c=share&a=index&' + s2.join('&');
        tqqShareBtn.target = '_blank';
        var weixinQRText = 'http://www.18ico.com' + location.pathname;
        $('.qrcode').qrcode({
            text: weixinQRText,
            width: 105,
            height: 105
        });
    })();
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
    <a href="javascript:" id="back_to_top" title="返回顶部" style="display: inline;">
        <svg height="30" width="30" viewBox="0 0 30 30">
            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path>
            <path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path>
        </svg>
    </a>
</div>
<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<script src="__JS__/header-ee96b9a909.bundle.js"></script>
<script src="__JS__/news-d47d4ec274.bundle.js"></script>
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?eb6a8119234c8004f91c94a2b8b726bd";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    $(".discuss-button").click(function (){
        alert(2);
    })

    // 字符判定
    $('#discussion_input').on('keyup', function () {
        var text = $(this).val();
        if (text.length > 140) {
            $(this).val(text.substring(0, 140));
            layer.msg('输入字符')
        }
    });
</script>
</body>
</html>
