<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:78:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/items.html";i:1505202344;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        项目列表
        | 18ico-区块链项目ICO服务平台
    </title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta charset="utf-8"/>
    <meta name="renderer" content="webkit">
    <meta name="description" content="ico365是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="ico365区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7">
    <link rel="stylesheet" href="__CSS__/app-892a367653.css"/>
    <style>
        .content-body .project-show .li-item2 {
            height: auto;
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
<div class="main-wrap" id="pitches_content">
    <section class="banner-body items-banner-body">
        <a class="arrow-left" href="#"></a>
        <a class="arrow-right" href="#"></a>
        <div class="swiper-container" id="swiper-body-items" style="cursor: -webkit-grab;">
            <div class="swiper-wrapper" style="height: 200px; width: 11406px; transform: translate3d(-5703px, 0px, 0px); transition-duration: 0.3s;">
                <div class="swiper-slide swiper-slide-duplicate" style="width: 1901px; height: 200px; background-image: url(__IMG__/inner-banner.png); background-repeat: no-repeat; background-size: cover; text-align: center; background-position: center center;">
                    <a target="_blank" href="javascript:void(0);" style="display: block;height: 200px" id="banner3"></a>
                </div>
                <div class="swiper-slide" style="width: 1901px; height: 200px; background-image: url(); background-repeat: no-repeat; background-size: cover; text-align: center; background-position: center center;">
                    <a target="_blank" href="show_info.html" style="display: block;height: 200px" id="banner0"></a>
                </div>
            </div>
        </div>
        <div class="swiper-pagination">
            <span class="swiper-pagination-switch"></span><span class="swiper-pagination-switch"></span><span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span><span class="swiper-pagination-switch"></span>
        </div>
    </section>
    <section class="exhibition-list">
        <a class="status1 active exhibition-list-type"   id="a1"   data-type="all">全部项目</a>
        <a class="status1 inactive exhibition-list-type" id="b1" data-type="choice">精选</a>
        <a class="status2 inactive exhibition-list-type" id="c1" data-type="running">进行中</a>
        <a class="status1 inactive exhibition-list-type" id="d1" data-type="runable">等待开始</a>
        <a class="status1 inactive exhibition-list-type" id="e1" data-type="end">已结束</a>
    </section>
    <section id="container" class="clearfix" style="margin-top: 0px;">
        <div class="content-body">
            <div class="project-show">
                <div class="wrapper">
                    <div class="flex-row" id="sta">
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
                            	<?php if($vo['is_jing'] ==1){ ?>
                            	<div class="flag-wrapper"><img src="__IMG__/flag1.png"><?php if($vo['is_tui'] ==1){ ?><img src="__IMG__/flag2.png"><?php ;}?></div>                                	
                            	<?php ;}?>
                                
                                <div class="paddingLeftRight20">
                                    <h4><a href="lock.html" class="pro-title" title="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content"><?php echo mb_substr($vo['remark'] ,0,240); ?>...</div>
                                   <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo $vo['eth_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo $vo['btc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo $vo['ltc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_target']:0; ?></div>
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
                                    <a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/home/project/finish/id/<?php echo $vo['id']; ?>" class="cat-detail" >我要锁定</a>
                                </div>
                                <?php ;}elseif($vo['is_do'] == 2){?>
                                 <div class="bottom-wrapper">
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>" its="2" fis="2"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke"></i></a>
                                    <a class="cat-detail" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                        <?php endforeach; ?> 
                                      
                   </div>
                    
                    <div class="flex-row" style="display: none" id="stb">
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
                                <?php if($vo['is_jing'] ==1){ ?>
                                <div class="flag-wrapper"><img src="__IMG__/flag1.png"><?php if($vo['is_tui'] ==1){ ?><img src="__IMG__/flag2.png"><?php ;}?></div>                                 
                                <?php ;}?>
                                
                                <div class="paddingLeftRight20">
                                    <h4><a href="lock.html" class="pro-title" title="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content"><?php echo mb_substr($vo['remark'] ,0,240); ?>...</div>
                                   <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo $vo['eth_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo $vo['btc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo $vo['ltc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_target']:0; ?></div>
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
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke"></i></a>
                                    <a class="cat-detail" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                        <?php endforeach; ?>   
                                                              
                   </div>
                    <div class="flex-row" style="display: none" id="stc">
                        <?php foreach($start as $vo): ?>
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
                                <?php if($vo['is_jing'] ==1){ ?>
                                <div class="flag-wrapper"><img src="__IMG__/flag1.png"><?php if($vo['is_tui'] ==1){ ?><img src="__IMG__/flag2.png"><?php ;}?></div>                                 
                                <?php ;}?>
                                
                               <div class="paddingLeftRight20">
                                    <h4><a href="lock.html" class="pro-title" title="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content"><?php echo mb_substr($vo['remark'] ,0,240); ?>...</div>
                                   <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo $vo['eth_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo $vo['btc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo $vo['ltc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_target']:0; ?></div>
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
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke"></i></a>
                                    <a class="cat-detail" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                        <?php endforeach; ?>  
                                           
                   </div>
                    <div class="flex-row" style="display: none" id="std">
                        <?php foreach($stop as $vo): ?>
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
                                <?php if($vo['is_jing'] ==1){ ?>
                                <div class="flag-wrapper"><img src="__IMG__/flag1.png"><?php if($vo['is_tui'] ==1){ ?><img src="__IMG__/flag2.png"><?php ;}?></div>                                 
                                <?php ;}?>
                                
                                <div class="paddingLeftRight20">
                                    <h4><a href="lock.html" class="pro-title" title="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content"><?php echo mb_substr($vo['remark'] ,0,240); ?>...</div>
                                   <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo $vo['eth_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo $vo['btc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo $vo['ltc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_target']:0; ?></div>
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
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke"></i></a>
                                    <a class="cat-detail" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                        <?php endforeach; ?>  
                                           
                   </div>
                    <div class="flex-row" style="display: none" id="ste">
                        <?php foreach($end as $vo): ?>
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
                                <?php if($vo['is_jing'] ==1){ ?>
                                <div class="flag-wrapper"><img src="__IMG__/flag1.png"><?php if($vo['is_tui'] ==1){ ?><img src="__IMG__/flag2.png"><?php ;}?></div>                                 
                                <?php ;}?>
                                
                                <div class="paddingLeftRight20">
                                    <h4><a href="lock.html" class="pro-title" title="<?php echo $vo['name']; ?>"><?php echo $vo['name']; ?></a>
                                    </h4>
                                    <h5></h5>
                                    <div class="block-content"><?php echo mb_substr($vo['remark'] ,0,240); ?>...</div>
                                   <div class="raise-funds">
                                        <div class="per-line-wrapper">
                                            <div class="per-line-left violet">ETH&nbsp;<?php echo $vo['eth_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['eth_target'])?$vo['na']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['eth_target'])?$vo['naa']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">BTC&nbsp;<?php echo $vo['btc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['btc_target'])?$vo['nb']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width:<?php echo !empty($vo['btc_target'])?$vo['nbb']:100; ?>%"></div>
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
                                            <div class="per-line-left violet">LTC&nbsp;<?php echo $vo['ltc_ed']; ?></div>
                                            <div class="per-line-right violet"><?php echo !empty($vo['ltc_target'])?$vo['nc']:100; ?>%</div>
                                        </div>
                                        <div class="per-line">
                                            <div class="per-line-num violet" style="width: <?php echo !empty($vo['ltc_target'])?$vo['ncc']:100; ?>%"></div>
                                        </div>
                                        <div class="per-money">
                                            <div class="per-money-left">
                                                <div>目标金额</div>
                                                <div>LTC&nbsp;<?php echo !empty($vo['ltc_target'])?$vo['ltc_target']:0; ?></div>
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
                                    <a class="heart-wrapper2 attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/<?php echo $vo['id']; ?>">我要参与</a>
                                </div>
                                <?php ;}else{?>
                                <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="<?php echo $vo['id']; ?>"><i class="iconfont heartStroke"></i></a>
                                    <a class="cat-detail" href="/home/project/finish/id/<?php echo $vo['id']; ?>">查看详情</a>
                                </div>
                                <?php ;}?>
                            </div>
                        </div>
                        <?php endforeach; ?>  

                   </div>
                     
                </div>
            </div>
        </div>
        <a class="look-more" style="" data-num="0">
            <img src="__IMG__/more.png">
        </a>
        <input type="hidden" value="1" id="num">
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
    
    <a href="javascript:" id="back_to_top" title="返回顶部" style="display: none;">
        <svg height="30" width="30" viewBox="0 0 30 30">
            <path d="M30 26c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v22z" opacity=".3"></path>
            <path fill="#FFF" d="M25.002 18.463l-1.134-1.134-1.321-1.321L15 8.461l-7.438 7.438-1.227 1.226-1.338 1.338c-.778.777-.868 1.96-.2 2.628s1.85.577 2.628-.2l2.172-2.172L15 13.317l2.691 2.691 3.496 3.496 1.387 1.387c.777.777 1.96.868 2.628.2s.577-1.851-.2-2.628z"></path>
        </svg>
    </a>
</div>
<script src="https://hm.baidu.com/hm.js?eb6a8119234c8004f91c94a2b8b726bd"></script>
<!--<script src="__JS__/vendor-140c67b313.bundle.js"></script>-->
<!--<script src="__JS__/app-d2b0299975.bundle.js"></script>-->
<!--<script src="__JS__/header-ee96b9a909.bundle.js"></script>-->
<script src="__JS__/jquery-1.12.4.min.js"></script>
<script src="__JS__/idangerous.swiper.js"></script>
<!--<script src="__JS__/items-cb53e4487d.bundle.js"></script>-->
<script>
$("#a1").click(function(){
    $(".look-more").attr('data-num',0);
})
$("#b1").click(function(){
    $(".look-more").attr('data-num',1);
})
$("#c1").click(function(){
    $(".look-more").attr('data-num',2);
})
$("#d1").click(function(){
    $(".look-more").attr('data-num',3);
})
$("#e1").click(function(){
    $(".look-more").attr('data-num',5);
})
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
    (function (e) {
        if (e.data.length) {
            for (var i = new Swiper(".swiper-container", {}), t = 0; t < e.data.length; t++) {
                i.appendSlide('<a target="_blank" href="' + e.data[t].url + '" style="display: block;height: 200px"  id="banner' + t + '"></a>', "div"),
                    $("#banner" + t).parent().css({
                        "background-image": "url(__IMG__/" + e.data[t].pic + ")",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "text-align": "center",
                        "background-position": "center"
                    });
            }
            $('.swiper-wrapper').children('.div').remove();
            i = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                loop: !0,
                grabCursor: !0,
                paginationClickable: !0,
                autoplay: 5e3,
                autoplayDisableOnInteraction: !1
            }),
                $(".arrow-left").on("click",
                    function (e) {
                        e.preventDefault(),
                            i.swipePrev()
                    }),
                $(".arrow-right").on("click",
                    function (e) {
                        e.preventDefault(),
                            i.swipeNext()
                    })
        }
    })({
        data: [{pic: 'inner-banner.png', url: ''}, {pic: 'inner-banner.png', url: ''},]
    });
</script>
<script>
    // $('.exhibition-list').on('click', function (e) {
    //     if (!$(e.target).is('.active')) {
    //         $(e.target).addClass('active').removeClass('inactive')
    //             .siblings('.exhibition-list-type').removeClass('active').addClass('inactive');
    //              var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
    //             $(".flex-row").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
                     
                       
    //     }
    // });
    $(".exhibition-list a").click(function(){
         $(this).addClass('active').removeClass('inactive').siblings('.exhibition-list-type').removeClass('active').addClass('inactive'); //切换选中的按钮高亮状态
         var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
         $(".flex-row").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
         
     })
    $('.look-more').on('click', function () {
        var page = parseInt($("#num").val())+1;
        var type = $(".look-more").attr('data-num');
        if(type == 0){
            type =1;
        }
         $.ajax({           
            'url':'/home/index/items',
            'data':{page:page,type:type},
            'type':'post',
            'cache':false,
            'dataType':'json',
            success:function(data){                       
                if(data.status){
                    $("#num").val(data.page);  
                    var  outerHTML= '';
                    for (var i = 0; i < data.data.length; i++) {
                        outerHTML+='<div class="li-item li-item2">';
                        outerHTML+='<div class="block-top">'+data.data[i].stra+'<a href="/home/project/finish/id/'+data.data[i].id+'" class="pro-pic"><img src="'+data.data[i].l_banner+'" alt=""/></a></div>';
                        outerHTML+='<div class="block-bottom">';
                        if(data.data[i].is_do ==1){
                            outerHTML+='<div class="flag-wrapper">';
                            outerHTML+='<img src="__IMG__/flag1.png">';
                            if(data.data[i].is_tui == 1){
                                 outerHTML+='<img src="__IMG__/flag2.png">';
                            }
                            outerHTML+='</div>';
                        }
                        outerHTML+='<div class="paddingLeftRight20"><h4><a href="lock.html" class="pro-title" title="'+data.data[i].name+'">'+data.data[i].name+'</a></h4><h5></h5><div class="block-content">'+data.data[i].remark+'...</div><div class="raise-funds"><div class="per-line-wrapper"><div class="per-line-left violet">ETH&nbsp;'+data.data[i].eth_ed+'</div><div class="per-line-right violet">'+data.data[i].na+'</div></div><div class="per-line"><div class="per-line-num violet" style="width: '+data.data[i].naa+'%"></div></div><div class="per-money"><div class="per-money-left"><div>目标金额</div><div>ETH&nbsp;'+data.data[i].eth_target+'</div></div><div class="per-money-right"><div>已完成</div><div></div></div></div></div><div class="raise-funds"><div class="per-line-wrapper"><div class="per-line-left violet">BTC&nbsp;'+data.data[i].btc_ed+'</div><div class="per-line-right violet">'+data.data[i].nb+'%</div></div><div class="per-line"><div class="per-line-num violet" style="width: '+data.data[i].nbb+'%"></div></div><div class="per-money"><div class="per-money-left"><div>目标金额</div><div>BTC&nbsp;'+data.data[i].btc_target+'</div></div><div class="per-money-right"><div>已完成</div><div></div></div></div></div><div class="raise-funds"><div class="per-line-wrapper"><div class="per-line-left violet">LTC&nbsp;'+data.data[i].ltc_ed+'</div><div class="per-line-right violet">'+data.data[i].nc+'%</div></div><div class="per-line"><div class="per-line-num violet" style="width: '+data.data[i].ncc+'%"></div></div><div class="per-money"><div class="per-money-left"><div>目标金额</div><div>LTC&nbsp;'+data.data[i].ltc_target+'</div></div><div class="per-money-right"><div>已完成</div><div></div></div></div></div></div>';
                        if(data.data[i].is_do ==1){
                            outerHTML+='<div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="'+data.data[i].id+'"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/home/project/finish/id/'+data.data[i].id+'" class="cat-detail">我要锁定</a></div>';
                        }else if(data.data[i].is_do== 2){
                            outerHTML+='<div class="bottom-wrapper"><a class="heart-wrapper2 attention" data-id="'+data.data[i].id+'"><i class="iconfont heartStroke2"></i></a><a itemid="456" class="cat-detail2" href="/home/project/finish/id/'+data.data[i].id+'">我要参与</a></div>';
                        }else if(data.data[i].is_do == 3){
                            outerHTML+=' <div class="bottom-wrapper"><a class="heart-wrapper attention" data-id="'+data.data[i].id+'"><i class="iconfont heartStroke"></i></a><a class="cat-detail" href="/home/project/finish/id/'+data.data[i].id+'">查看详情</a></div>';
                        }
                        outerHTML+='</div></div>';
                             
                    }
                    if(data.type ==1){
                        $('#sta').append(outerHTML);
                    }else if(data.type ==2){
                        $('#stb').append(outerHTML);
                    }else if(data.type ==3){
                        $('#stc').append(outerHTML);
                    }else if(data.type ==4){
                        $('#std').append(outerHTML);
                    }else if(data.type ==5){
                        $('#ste').append(outerHTML);
                    }

                }else{
                    layer.msg('没有了');
                }
            }
        })
       
    });
</script>
</body>
</html>