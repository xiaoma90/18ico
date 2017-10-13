<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:78:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/index.html";i:1505201460;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        18ico-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/index.css">
    <link rel="stylesheet" type="text/css" href="__CSS__/swiper.min.css">
    <script type="text/javascript" src="__JS__/swiper.min.js"></script>
</head>
<body>
<header>
    <div id="header" class="no-fixed">
        <div class="header_info">
            <div class="header_info_left">
                <span>BTC/CNY:<span id="btc" class="green-span"><?php echo $market['btc'];?></span></span>
                <span>ETH/CNY:<span id="eth" class="green-span"><?php echo $market['eth'];?></span></span>
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
                <img src="__IMG__/logo.png" alt="">
            </a>
            <span class="describe-span-divide">|</span>
            <span class="describe-span">全国领先专业ICO平台</span>
        </div>
    </div>
</header>
<div class="main-wrap home_index" id="pitches_content">
    <section class="banner-body">
        <a class="arrow-left" href="#"></a>
        <a class="arrow-right" href="#"></a>
        <div class="swiper-container" id="swiper-body1" style="cursor: -webkit-grab;">
            <div class="swiper-wrapper" style="height: 380px; width: 11418px; transform: translate3d(-5709px, 0px, 0px); transition-duration: 0.3s;">
                <?php foreach($cas as $vo): ?>
                <div class="swiper-slide swiper-slide-duplicate" style="width: 1903px; height: 380px; background-image: url(<?php echo $vo['pic']; ?>); background-repeat: no-repeat; background-size: cover; text-align: center; background-position: center center;">
                    <a target="_blank" href="<?php echo $vo['url']; ?>" style="display: block;height: 380px" id="banner3"></a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </section>
    <section class="notice-wrapper">
        <div class="notice-wrapper-center">
            <span class="notice-wrapper-title">最新公告 <span>LATESET NEWS&nbsp;&nbsp;&nbsp;&nbsp;|</span></span>
            <span class="annoucement-wrapper"><img src="__IMG__/announcement.png"/>
        <a href="/home/index/help_c/d/<?php echo $news['id']; ?>"><?php echo $news['title']; ?>！（<?php echo date("Y-m-d",$news['created_at']); ?>）</a>
        </span>
            <a class="notice-wrapper-more" href="notice.html">更多 >>></a>
            <a class="notice-wrapper-close"><img src="__IMG__/close.png"/></a>
        </div>
    </section>
    <section class="home-back1">
    </section>
    <section id="container" class="clearfix">
         <div class="home-project-title">18ico精选项目
        </div>
        <div class="content-body">
            <div class="project-show">
                <div class="wrapper">
                    <div class="flex-row">
                        <?php foreach($jing as $vo): ?>
                        <div class="li-item li-item2">
                            <div class="block-top">
                                <?php if($vo['is_do'] ==1){ ?>
                                <img src="__IMG__/waiting.png" class="status-tag-img">
                                <?php ;}elseif($vo['is_do'] ==2){?>
                                <img src="__IMG__/progress.png" class="status-tag-img">
                                <?php ;}elseif($vo['is_do'] ==3){?>
                                <img src="__IMG__/end.png" class="status-tag-img">
                                <?php ;}?>
                                <a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="pro-pic"><img src="<?php echo $vo['l_banner']; ?>" alt=""/></a>
                            </div>
                            <div class="block-bottom">
                                <div class="flag-wrapper">
                                </div>
                                <div class="paddingLeftRight20">
                                    <h4><a href="finish.html" class="pro-title" title="Tenx-区块链资产支付平台"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content">
                                      <?php echo mb_substr($vo['remark'] ,0,240); ?>...
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo !empty($vo['eth_target'])?$vo['eth_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>ETH&nbsp;<?php echo $vo['eth_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo !empty($vo['btc_target'])?$vo['btc_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>BTC&nbsp;<?php echo $vo['btc_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo $vo['ltc_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php if($vo['is_do'] == 1){?>
								<div class="bottom-wrapper">
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="467" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要锁定</a>
                                </div>                                
                                <?php ;}elseif($vo['is_do'] == 2){?>
                                <div class="bottom-wrapper">
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="cat-detail2">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper">
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="467" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                
                                <?php ;}?>
                            </div>
                        </div>
                       <?php endforeach; ?>
                       </div>
        <div class="home-project-title">已完成项目</div>
        <div class="content-body">
            <div class="project-show">
                <div class="wrapper">
                    <div class="flex-row">
                        <?php foreach($projects as $vo): ?>
                        <div class="li-item li-item2">
                            <div class="block-top">
                               <?php if($vo['is_do'] ==1){ ?>
                                <img src="__IMG__/waiting.png" class="status-tag-img">
                                <?php ;}elseif($vo['is_do'] ==2){?>
                                <img src="__IMG__/progress.png" class="status-tag-img">
                                <?php ;}elseif($vo['is_do'] ==3){?>
                                <img src="__IMG__/end.png" class="status-tag-img">
                                <?php ;}?>
                                <a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="pro-pic"><img src="<?php echo $vo['l_banner']; ?>" alt=""/></a>
                            </div>
                            <div class="block-bottom">
                                <div class="flag-wrapper">
                                </div>
                                <div class="paddingLeftRight20">
                                    <h4><a href="finish.html" class="pro-title" title="Tenx-区块链资产支付平台"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content">
                                      <?php echo mb_substr($vo['remark'] ,0,240); ?>...
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo !empty($vo['eth_target'])?$vo['eth_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet"  style="width:<?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>ETH&nbsp;<?php echo $vo['eth_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo !empty($vo['btc_target'])?$vo['btc_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>BTC&nbsp;<?php echo $vo['btc_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_ed']:100; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo $vo['ltc_target']; ?></div>
                                            </div>
                                            <div class="per-money-right">
                                                <div>已完成</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              <?php if($vo['is_do'] == 1){?>
                                <div class="bottom-wrapper">
                                    <a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="cat-detail">我要锁定</a>
                                </div>
                                <?php ;}elseif($vo['is_do'] == 2){?>
                                <div class="bottom-wrapper">
                                    <a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="cat-detail">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper">
                                    <a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="cat-detail">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                       <?php endforeach; ?>
                       
                       
                    </div>
                </div>
           
        </div>
    </section>
    <section class="home-ico-introduce">
        <div class="home-ico-title">什么是 ICO</div>
        <div class="home-ico-content">ICO（英文简称Initial Coin Offering）是一种为加密数字货币/区块链项目筹措资金的常用方式，早期参与者可以从中获得初始产生的加密数字货币作为回报。ico是国际上加密数字货币/区块链社区的产物，为区块链的开发者筹措足够的运营资金，大部分ico筹措的资金都是比特币或者其他加密数字货币。ICO一般会在区块链项目完成前进行，帮助项目筹措资金，以支持项目从创建团队到项目发行过程中所产生的费用。对于一些大的区块链项目，会将从ico中筹措的部分资金存放到基金里以支持项目的持续发展，包括代币的初始分配模型等。ICO参与者对于一个项目的成功非常重要，他们会在社区里为该区块链项目进行宣传，使它产生的代币在开始交易前就获得流动性。但ico的参与者最看重的依然是由项目发展或代币发行后价格升值带来的潜在收益。
        </div>
        <div class="home-ico-title2">为什么选择18ICO？</div>
        <div class="home-ico-detail">
            <div class="float-left">
                <img src="__IMG__/fly_3.png"/>
                <div class="home-ico-detail-title">行业经验丰富的ico平台</div>
                <div class="ico-p-line"></div>
                <div class="home-ico-detail-content">
                    18ico为国内成立时间最长的专业服务平台，现核心成员多为清华大学等名校硕、博士，谷歌、微软、Airbnb、盛大网络等著名互联网公司高级研发或架构师。
                </div>
            </div>
            <div class="float-center">
                <img src="__IMG__/fly_4.png"/>
                <div class="home-ico-detail-title">安全可靠的ICO平台</div>
                <div class="ico-p-line"></div>
                <div class="home-ico-detail-content">
                    18ico掌握业界领先技术，保障项目及投资者资金安全，可做到七天无理由退币。自成立起，已为众多明星项目提供ICO平台服务。更多项目即将陆续登陆平台。
                </div>
            </div>
            <div class="float-right">
                <img src="__IMG__/fly_5.png"/>
                <div class="home-ico-detail-title">专业权威的ICO平台</div>
                <div class="ico-p-line"></div>
                <div class="home-ico-detail-content">18ico团队对各个项目进行全面评估，最大程度保障项目可靠性，维护平台投资者权益。服务团队长期在线，及时为用户处理相关需求。
                </div>
            </div>
        </div>
    </section>
    <section class="home-cat-project">
        <div><span class="line-hr"></span><span>更多区块链项目，尽在18ICO</span><span class="line-hr"></span></div>
        <a href="items.html">立即查看ICO项目</a>
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
<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<!-- <script src="__JS__/header-ee96b9a909.bundle.js"></script> -->
<script src="__JS__/idangerous.swiper.js"></script>
<script src="__JS__/index-857250274c.bundle.js"></script>
<script>
$('.attention').on('click',function(){
    var id = $(this)[0].dataset.id;
     // alert(id);return;
    var cc = $(this);
    $.ajax({
        url:'/home/item/attention',
        data:{data:id},
        method:'post',
        success:function(res){
            if(res.status == 1){
                alert(res.msg);
                cc.addClass('active1');
            }else{
               alert(res.msg);
             
            }
        }
    })
});
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?eb6a8119234c8004f91c94a2b8b726bd";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    $(function () {
        var mySwiper = new Swiper('.swiper-container', {
                observer:true,//修改swiper自己或子元素时，自动初始化swiper  
    observeParents:true,//修改swiper的父元素时，自动初始化swiper  
            direction: 'horizontal',
            loop: true,
            autoplay: 3000, //时间
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        })
    });
    $(".notice-wrapper-close").on("click", function () {
        $(".notice-wrapper").css('display', "none");
    });
    
    $(".arrow-right").on("click",function () {
        var len = $(".swiper-pagination .swiper-pagination-switch").length - 1;
        var num = $(".swiper-active-switch").index();
        if (num == len) {
            $(".swiper-pagination-switch").eq(0).trigger('click');
        }else{
            $(".swiper-active-switch").next(".swiper-pagination-switch").trigger('click');
        };
        
    });
    $(".arrow-left").on("click",function () {
        var len = $(".swiper-pagination .swiper-pagination-switch").length - 1;
        var num = $(".swiper-active-switch").index();
        if (num == 0) {
            $(".swiper-pagination-switch").eq(len).trigger('click');
        }else{
            $(".swiper-active-switch").prev(".swiper-pagination-switch").trigger('click');
        };
        
    });
</script>
</body>
</html>
