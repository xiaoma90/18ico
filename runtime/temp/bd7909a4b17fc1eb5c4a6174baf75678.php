<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:77:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/news.html";i:1504852672;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        热点新闻
        | ico365-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="ico365是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="ico365区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/index.css">
    <style>
        #news_content #news_wrap #news_list .news-info .share .share-box {
            width: 250px;
        }
        #news_content #news_wrap #news_list .news-info .share .share-box span,
        #news_content #news_wrap #news_list .news-info .share .share-box .bdsharebuttonbox {
            display: inline-block;
            vertical-align: middle;
        }
        .box_a{
            color:#fff;
            border:1px solid #7180db; 
            padding: 5px 15px;
            margin-left: 10px;
            height: 50px;
            line-height: 50px;
            font-size: 24px;
            background-color:#424e98;
            border-radius: 10px;
        }
        .box_a:hover{
            color: #fff;
            background-color:#7180db;
            text-decoration: none!important;
        }
        .pagination{text-align:center;margin-top:20px;margin-bottom: 20px;}  
        .pagination li{margin:0px 10px; border:1px solid #e6e6e6;padding: 3px 8px;display: inline-block;}  
        .pagination .active{color: #fff;background-color: #fff;}  
        .pagination .disabled{color:#aaa;}  
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
<div class="main-wrap" id="news_content">
    <section id="news_recommend" class="clearfix">
        <?php foreach($news as $vo): ?>
        <div class="news-item">
            <a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>"><img class="cover lazy" src="<?php echo $vo['pic']; ?>" data-original="" alt=""></a>
            <div class="title-wrap">
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <g fill="#FFF">
                        <path d="M10 4.4l-1 1 4 3.9H4.4v1.4H13l-4 3.9 1 1 5.6-5.6L10 4.4z"></path>
                        <path d="M10 .9c5 0 9.1 4.1 9.1 9.1S15 19.1 10 19.1.9 15 .9 10 5 .9 10 .9m0-.9C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0z"></path>
                    </g>
                </svg>
                <a href="#" class="news-title">[公告]<?php echo $vo['title']; ?></a>
            </div>
        </div>

       <?php endforeach; ?>
       
        
    </section>
    <section id="news_wrap" class="clearfix">
        <div class="list-section">
            <div id="news_list">
                <?php foreach($list as $vo): if($vo['top'] ==1){?>
                <div class="article-item clearfix">
                    <div class="symbol-top">
                        <svg width="94px" height="88px" class="svg-top" viewBox="0 0 94 88.4">
                            <path fill="#F33636" d="M39.7 0L0 37.4v46.3L90.8 0z"></path>
                            <path fill="#A84A4A" d="M5 88.4l-5-4.7 5-4.6zM94 4h-7.6l4.4-4z"></path>
                        </svg>
                        <span>置顶</span>
                    </div>
                    <div class="news-thumbnail">
                        <a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>">
                            <img src="<?php echo $vo['pic']; ?>" alt="" class="lazy">
                        </a>
                    </div>
                    <div class="news-content">
                        <div class="news-title">
                            <h3><a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>"><?php echo $vo['title']; ?></a></h3>
                        </div>
                        <div class="news-description"><?php echo mb_substr($vo['name'],0,240); ?></div>
                        <div class="news-info">
                            <span class="news-published-time"><?php echo $vo['time_str']; ?></span>
                            <span class="views"><svg width="20px" height="14px" viewBox="0 0 23 15">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#999" d="M11.5 14.7c-6.2 0-11-7.1-11-7.1S4.6.3 11.5.3s11 7.3 11 7.3-4.8 7.1-11 7.1zm7.3-10c-2.2-2.1-4.6-3.4-7.4-3.4-2.7 0-5.1 1.3-7.4 3.4-.7.8-1.4 1.6-2 2.4-.1.2-.2.3-.3.5.2.1.2.3.4.4.6.8 1.4 1.6 2.2 2.3 2.3 2.1 4.7 3.3 7.1 3.3 2.4 0 4.9-1.3 7.1-3.3.9-.7 1.6-1.6 2.2-2.3l.4-.4c-.1-.1-.2-.3-.3-.4-.6-.9-1.2-1.7-2-2.5zm-7.4 6.4c-2.1 0-3.8-1.7-3.8-4 0-2.2 1.6-3.9 3.8-3.9 2.1 0 3.8 1.8 3.8 3.9 0 2.2-1.6 4-3.8 4zm0-6.7c-1.5 0-2.7 1.3-2.7 2.8 0 1.6 1.2 2.8 2.7 2.8 1.5 0 2.7-1.3 2.7-2.8 0-1.6-1.2-2.8-2.7-2.8z"></path></svg><?php echo $vo['quantity']; ?></span>
                            <div class="share">
                                <svg width="13px" height="13px" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#999" d="M12.6 15H2.1C.9 15 0 14.1 0 12.9V2.4C0 1.2 1 0 2.1 0H8v1.1H2.1c-.6 0-1.1.5-1.1 1.1v10.7c0 .6.5 1.1 1.1 1.1h10.7c.6 0 1.1-.5 1.1-1.1V7H15v5.9c0 1.1-1.2 2.1-2.4 2.1zm1.9-10.2c-.3 0-.5-.2-.5-.5V1.7L5.8 9.5c-.3.2-.6.2-.8 0-.2-.2-.2-.5 0-.7l8.1-7.7h-2.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.7c.4-.1.6.1.6.4v3.8c0 .3-.2.5-.5.5z"></path>
                                </svg>

                                <div class="share-box">
                                    <span>分享到：</span>
                                    <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a></div>
                                    <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <?php ;}else{ ?>                                          
                <div class="article-item clearfix">
                    <div class="news-thumbnail">
                        <a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>">
                            <img src="<?php echo $vo['pic']; ?>" alt="" class="lazy">
                        </a>
                    </div>
                    <div class="news-content">
                        <div class="news-title">
                            <h3><a href="/home/news/newsDetail/id/<?php echo $vo['id']; ?>">[公告]<?php echo $vo['title']; ?></a></h3>
                        </div>
                        <div class="news-description">
                            <?php echo mb_substr($vo['name'],0,240); ?>...
                        </div>
                        <div class="news-info">
                            <span class="news-published-time"><?php echo $vo['time_str']; ?></span><span class="views"><svg width="20px" height="14px" viewBox="0 0 23 15">
                            <span class="views"><svg width="20px" height="14px" viewBox="0 0 23 15">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#999" d="M11.5 14.7c-6.2 0-11-7.1-11-7.1S4.6.3 11.5.3s11 7.3 11 7.3-4.8 7.1-11 7.1zm7.3-10c-2.2-2.1-4.6-3.4-7.4-3.4-2.7 0-5.1 1.3-7.4 3.4-.7.8-1.4 1.6-2 2.4-.1.2-.2.3-.3.5.2.1.2.3.4.4.6.8 1.4 1.6 2.2 2.3 2.3 2.1 4.7 3.3 7.1 3.3 2.4 0 4.9-1.3 7.1-3.3.9-.7 1.6-1.6 2.2-2.3l.4-.4c-.1-.1-.2-.3-.3-.4-.6-.9-1.2-1.7-2-2.5zm-7.4 6.4c-2.1 0-3.8-1.7-3.8-4 0-2.2 1.6-3.9 3.8-3.9 2.1 0 3.8 1.8 3.8 3.9 0 2.2-1.6 4-3.8 4zm0-6.7c-1.5 0-2.7 1.3-2.7 2.8 0 1.6 1.2 2.8 2.7 2.8 1.5 0 2.7-1.3 2.7-2.8 0-1.6-1.2-2.8-2.7-2.8z"></path></svg><?php echo $vo['quantity']; ?></span>
                            <div class="share">
                                <svg width="13px" height="13px" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#999" d="M12.6 15H2.1C.9 15 0 14.1 0 12.9V2.4C0 1.2 1 0 2.1 0H8v1.1H2.1c-.6 0-1.1.5-1.1 1.1v10.7c0 .6.5 1.1 1.1 1.1h10.7c.6 0 1.1-.5 1.1-1.1V7H15v5.9c0 1.1-1.2 2.1-2.4 2.1zm1.9-10.2c-.3 0-.5-.2-.5-.5V1.7L5.8 9.5c-.3.2-.6.2-.8 0-.2-.2-.2-.5 0-.7l8.1-7.7h-2.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.7c.4-.1.6.1.6.4v3.8c0 .3-.2.5-.5.5z"></path>
                                </svg>
                                <div class="share-box">
                                <span>分享到：</span>  
                                <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a></div>
                                    <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php ;}endforeach; ?>
            </div>
            <div class="load-more" data-id="825" data-top="0" style="background: none;border: 0;">
                <!-- <svg width="18px" height="18px">
                    <use xlink:href="#icon-loading"></use>
                </svg>
                <span>查看更多</span> -->
                <?php echo $page; ?>
              <!--   <a href="javascript:void(0)" class="box_a">上一页</a>
                <a href="javascript:void(0)" class="box_a">下一页</a> -->
            </div>
        </div>
        <div class="news-right">
            <div id="news_hot">
                <svg width="36px" height="36px" class="svg-hot" viewBox="0 0 36 36">

<path fill="#F00" d="M0 36V0h36z"></path><g fill="#FFF"><path d="M7.2 22.7L1.6 17l1.1-1.1 2.2 2.2 2.2-2.2-2.2-2.2L6 12.6l5.7 5.7-1.1 1.1-2.5-2.5-2.2 2.2 2.5 2.5-1.2 1.1zM9.9 14.4c-.6-.6-1-1.2-1.2-1.7-.2-.4-.2-.9-.2-1.3 0-.5.1-.9.2-1.2.2-.5.5-1 1-1.4.8-.8 1.8-1.2 2.8-1.2 1 0 2 .5 2.9 1.4.9.9 1.4 1.9 1.4 2.9s-.4 1.9-1.2 2.8c-.8.8-1.8 1.3-2.8 1.2-1-.1-2-.6-2.9-1.5zm1.2-1.2c.6.6 1.3 1 1.9 1 .6 0 1.2-.2 1.6-.6.5-.5.7-1 .6-1.6 0-.6-.4-1.3-1-1.9-.7-.7-1.3-1-1.9-1-.6 0-1.1.2-1.6.7-.5.5-.7 1-.7 1.6.1.5.4 1.2 1.1 1.8zM20.4 9.6l-4.7-4.7L14 6.5l-1-1L17.5 1l1 1-1.7 1.7 4.7 4.7-1.1 1.2z"></path></g></svg>
                <div class="hot-title">
                    <h3>本周热门新闻</h3>                  
                </div>
                
                <div class="hot-content">
                <?php foreach($data as $vo): ?>
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
    </section>
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
    <a href="javascript:" id="back_to_top" title="返回顶部" style="display: inline;">
        <svg height="30" width="30" viewBox="0 0 30 30">
            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path>
            <path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path>
        </svg>
    </a>
</div>
<script src="https://hm.baidu.com/hm.js?eb6a8119234c8004f91c94a2b8b726bd"></script>
<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<script src="__JS__/header-ee96b9a909.bundle.js"></script>
<!-- <script src="__JS__/news-d47d4ec274.bundle.js"></script> -->
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?eb6a8119234c8004f91c94a2b8b726bd";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    $(".load-more").on("click",function(){
        var data = {page:2,num:1}
        $.ajax({
            'url':'<?php echo url("news/index"); ?>',
            'data':data,
            'type':'post',
            'cache':false,
            'dataType':'json',
            success:function(data){  
                if(data.status){
                   

                }else{
                    layer.msg('已经到底部');                       
                    return ;
                }
            }
        })
        
    })
</script>
</body>
</html>
