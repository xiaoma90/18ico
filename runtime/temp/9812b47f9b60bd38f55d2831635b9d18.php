<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/finish.html";i:1504870645;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        项目详情| 18ico-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="18ico是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="18ico区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/app-892a367653.css">
    <style type="text/css">
        .block-right-top{
            height: auto !important;
        }
        .project-detail-content{
            height: 40px !important;
        }
        .project-flag-wrapper{
            margin: 10px 0px !important;
        }
        .project-detail-price > div.project-detail-price-content .per-line-wrapper .per-line-left{
            font-size: 18px !important;
        }
        .project-detail-price, .project-detail-time{
            margin-bottom: 13px  !important;
        }
        #pitch_content .big-number{
            font-size: 27px !important;
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
<div id="pitch_content" class="ico-content ico-detail">
    <div class="pitch-container ico-container">
        <input type="hidden" id="pitch_status" value="3">
        <div class="project-info">
            <div class="section clearfix">
                <div class="block-left">
                    <div class="pictures-slick slick-initialized slick-slider">
                        <div aria-live="polite" class="slick-list draggable">
                            <div class="slick-track" role="listbox" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                <img src="<?php echo $data['l_banner']; ?>" alt="" class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-right">
                    <div class="block-right-top">
                        <div class="project-detail-title"><?php echo $data['name']; ?></div>
                        <div class="project-detail-sub-title"></div>
                        <div class="project-detail-content">
                            <?php echo $data['remark']; ?>
                        </div>
                        <div class="project-flag-wrapper">
                            <?php if($data['is_jing'] == 1): ?><img src="__IMG__/flag1.png"/><?php endif; if($data['is_tui'] == 1): ?><img src="__IMG__/flag3.png"/><?php endif; ?>
                        </div>
                    </div>
                    <div class="project-detail-price project-detail-price2">
                        <div>目标金额
                            ：ETH <?php if($data['eth_target']): ?><?php echo $data['eth_target']; else: ?>0<?php endif; ?></div>
                        <div class="project-detail-price-content">
                            <div class="per-line-wrapper">
                                <div class="per-line-left">ETH
                                    &nbsp;<?php if($data['eth_ed']): ?><?php echo $data['eth_ed']; else: ?>0<?php endif; ?></div>
                                <div class="per-line-right"><?php if($data['eth_ed'] > 0 && $data['eth_target'] >0): ?><?php echo $data['eth_ed'] / $data['eth_target'] * 100; elseif($data['eth_target']==0): ?>100<?php else: ?>0<?php endif; ?>%</div>
                            </div>
                            <div class="per-line">
                                <div class="per-line-num" style="width: <?php if($data['eth_ed'] > 0 && $data['eth_target'] >0): ?><?php echo $data['eth_ed'] / $data['eth_target'] * 100; elseif($data['eth_target']==0): ?>100<?php else: ?>0<?php endif; ?>%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="project-detail-price project-detail-price2">
                        <div>目标金额
                            ：BTC <?php if($data['btc_target']): ?><?php echo $data['btc_target']; else: ?>0<?php endif; ?></div>
                        <div class="project-detail-price-content">
                            <div class="per-line-wrapper">
                                <div class="per-line-left">BTC
                                    &nbsp;<?php if($data['btc_ed']): ?><?php echo $data['btc_ed']; else: ?>0<?php endif; ?></div>
                                <div class="per-line-right"><?php if($data['btc_ed'] > 0 && $data['btc_target'] >0): ?><?php echo $data['btc_ed'] / $data['btc_target'] * 100; elseif($data['btc_target']==0): ?>100<?php else: ?>0<?php endif; ?>%</div>
                            </div>
                            <div class="per-line">
                                <div class="per-line-num" style="width: <?php if($data['btc_ed'] > 0 && $data['btc_target'] >0): ?><?php echo $data['btc_ed'] / $data['btc_target'] * 100; elseif($data['btc_target']==0): ?>100<?php else: ?>0<?php endif; ?>%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="project-detail-price project-detail-price2">
                        <div>目标金额
                            ：LTC <?php if($data['ltc_target']): ?><?php echo $data['ltc_target']; else: ?>0<?php endif; ?></div>
                        <div class="project-detail-price-content">
                            <div class="per-line-wrapper">
                                <div class="per-line-left">LTC
                                    &nbsp;<?php if($data['ltc_ed']): ?><?php echo $data['ltc_ed']; else: ?>0<?php endif; ?></div>
                                <div class="per-line-right"><?php if($data['ltc_ed'] > 0 && $data['ltc_target'] >0): ?><?php echo $data['ltc_ed'] / $data['ltc_target'] * 100; elseif($data['ltc_target']==0): ?>100<?php else: ?>0<?php endif; ?>%</div>
                            </div>
                            <div class="per-line">
                                <div class="per-line-num" style="width: <?php if($data['ltc_ed'] > 0 && $data['ltc_target'] >0): ?><?php echo $data['ltc_ed'] / $data['ltc_target'] * 100; elseif($data['ltc_target']==0): ?>100<?php else: ?>0<?php endif; ?>%;"></div>
                            </div>
                        </div>
                    </div>
                    <?php if($data['time'] >= $data['start_times'] && $data['time'] <= $data['end_time']): ?>
                    <div class="project-detail-time">
                        <div>剩余时间：</div>
                        <div><span class="big-number remain_time" id="remain_day" data-starttime="<?php echo $data['time']; ?>" data-endtime="<?php echo $data['end_time']; ?>" data-remainday="6" data-type="1" data-item-state="2">00 天 03:53:09</span>
                        </div>
                    </div>
                    <div class="project-bottom-wrapper">
                        <a class="heart-wrapper2 attention" data-id="<?php echo $data['id']; ?>">
                        <i class="iconfont">&#xe607;</i></a><a class="cat-detail2 canyu" id="jindu">我要参与</a>
                    </div>
                    <?php elseif($data['start_times'] > $data['time'] && $data['end_time'] > $data['time']): ?>
                    <div class="project-detail-time">
                        <div>专属锁定剩余时间：</div>
                        <div><span class="big-number remain_time" id="remain_day" data-starttime="<?php echo $data['time']; ?>" data-endtime="<?php echo $data['start_times']; ?>" data-remainday="6" data-type="1" data-item-state="2">00 天 03:53:09</span>
                        </div>
                    </div>
                    <div class="project-bottom-wrapper">
                        <a class="heart-wrapper2 attention" data-id="<?php echo $data['id']; ?>">
                        <i class="iconfont">&#xe607;</i></a><a class="cat-detail2 goto-invest" data-state="-1" data-is-auth="1" data-id="467" data-entrust-order="1" data-item-id="" data-error="" data-outlinkstate="" data-outlink="" id="jindu">我要锁定</a>
                    </div>
                    <?php else: ?>
                    <div class="project-detail-time">
                        <!-- <div>已完成</div> -->
                        <!-- <div><span class="big-number remain_time" id="remain_day" data-starttime="<?php echo $data['start_times']; ?>" data-endtime="<?php echo $data['time']; ?>" data-remainday="6" data-type="1" data-item-state="2">00 天 03:53:09</span>
                        </div> -->
                    </div>
                    <div class="project-bottom-wrapper">
                        <a class="heart-wrapper2 attention" data-id="<?php echo $data['id']; ?>">
                            <i class="iconfont">&#xe607;</i></a><a class="at-detail2 cat-detail4" id="jindu">该项目已完成</a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <nav id="pitch_nav" class="show-green-line">
            <div id="nav_bar">
                <ul class="nav-item clearfix">
                    <li class="active" value="project-tab1">
                        <a>项目介绍</a>
                    </li>
                    <li value="project-tab2">
                        <a>ICO细则</a>
                    </li>
                    <li value="project-tab3">
                        <a>团队介绍</a>
                    </li>
                    <li value="project-tab4">
                        <a>常见问题Q&amp;A</a>
                    </li>
                </ul>
                <div class="project-bottom-wrapper project-fixed-bottom-wrapper project-bottom-right">
                    <a class="heart-wrapper2 inactive" itd="465"><i class="iconfont">&#xe607;</i></a>
                    <a class="cat-detail2 cat-detail4 jindu">该项目已完成</a>
                </div>
            </div>
        </nav>
        <div class="about-project clearfix">
            <div id="project-tab1">
                <?php echo $data['content']; ?>
            </div>
            <div id="project-tab2" class="hide">
                <div class="project-ico-wrapper">
                    <div class="project-ico-left">
                        <?php echo $data['rule_intro']; ?>
                    </div>
                </div>
            </div>
            <div id="project-tab3" class="hide">
                <?php echo $data['team_intro']; ?>
            </div>
            <div id="project-tab4" class="hide">
                <?php if(empty($data['faq'])): ?>
                暂时还没有常见问题
                <?php else: ?>
                <?php echo $data['faq']; endif; ?>
            </div>
            <div class="projectIcoRight">
                <div class="projectIcoRight-title">参投方式</div>
                <div class="projectIcoRight-title2">不限人数</div>
                <div class="projectIcoRight-content"><?php echo $data['cast_way']; ?><br/></div>
                <div class="projectIcoRight-title2">回报时间：</div>
                <div class="projectIcoRight-content2">项目ICO成功结束后<?php echo $data['return_time']; ?>天内</div>
                <a class="cat-detail4 cat-detail5 jindu">
                    该项目已完成
                </a>
            </div>
        </div>
    </div>
</div>
<div id="send_msg" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="send_msg_label">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-er">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="send-msg-management-label">发送私信</h4>
            </div>
            <div class="modal-body">
                <div class="send-msg">
                    <div id="" class="dialog-container">
                        <div class="dr">
                            <textarea class="form-control send-text" maxlength="480" placeholder="请输入私信内容，不超过240字"></textarea>
                        </div>
                        <div class="btn-next">
                            <a id="send_msg_btn" class="btn-common" href="javascript:" data-id="27185">发送</a>
                        </div>
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

<div class="locked-money-window" style="display: none" id="show-pop">
    <form action="#" class="">
        <div class="form-group">
            <h3>投资投资</h3>
        </div>
        <div class="form-group">
            <span for="locked_money">我将投资：</span>
            <input type="text" id="eth_acc" title="投资金额" style="width: 150px">
            <span class="">
            <div class="moneytype-select">
            <p class="moneytype-select-header" id="moneytype" style="text-align: center;">
            <span class="moneytype-txt">ETH</span>
            </p>
            </span>
        </div>

        <div class="form-group">
            <span for="locked_money">我将投资：</span>
            <input type="text" id="btc_acc" title="投资金额" style="width: 150px">
            <span class="">
            <div class="moneytype-select">
            <p class="moneytype-select-header" id="moneytype" style="text-align: center;">
            <span class="moneytype-txt">BTC</span>
            </p>
            </div>
            </span>
        </div>

        <div class="form-group">
            <span for="locked_money">我将投资：</span>
            <input type="text" id="ltc_acc" title="投资金额" style="width: 150px">
            <span class="">
            <div class="moneytype-select">
            <p class="moneytype-select-header" id="moneytype" style="text-align: center;">
            <span class="moneytype-txt">LTC</span>
            </p>
            </div>
            </span>
        </div>


        <div class="form-group locked-btn">
            <button type="button" class="btn" onclick="javascript:touzi();">确定</button>
            <button type="button" class="btn" onclick="javascript:layer.close(tk);">取消</button>
        </div>
        <div class="form-group">
            
        </div>
    </form>
</div>      

<script src="__JS__/vendor-140c67b313.bundle.js"></script>
<script src="__JS__/app-d2b0299975.bundle.js"></script>
<script src="__JS__/header-ee96b9a909.bundle.js"></script>
<script type="text/javascript">
    let jindu = $('#jindu').text();
    $('.jindu').text(jindu);
    $(".canyu").on("click",function () {
        tk = layer.open({
            type: 1,
            shade: false,
            title: false, //不显示标题
            area:['500px','350px'],
            content: $('#show-pop'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        });
    })
    let myconfirm = layer.confirm;
    layer.confirm = function(a,b,c,d){
        // console.log(a);
        if(b.btn[1] == '前往锁定'){
            myconfirm('项目还未开始，您可以提前通过锁定投资来预定该项目', {
                btn: ['取消','前去锁定'], //按钮
                title :'温馨提示',
            }, function(){
                layer.msg('取消', {icon: 1});
            }, function(){
                location.href='/home/user/my_count';
            })
        }

    }
$('.attention').on('click',function(){
    var id = $(this)[0].dataset.id;
    // alert(id);
    var cc = $(this);
    $.ajax({
        url:'/home/item/attention',
        data:{data:id},
        method:'post',
        success:function(res){
            if(res.status == 1){
                alert(res.msg);
                $('.attention').addClass('active1');
            }else{
               alert(res.msg);
             
            }
        }
    })
});
    function touzi(){
        let eth_acc = $('#eth_acc').val()?$('#eth_acc').val():0;
        let btc_acc = $('#btc_acc').val()?$('#btc_acc').val():0;
        let ltc_acc = $('#ltc_acc').val()?$('#ltc_acc').val():0;

        let id = "<?php echo $data['id']; ?>";
        layer.prompt({title: '请输入您的安全密码！', formType: 1}, function(pass, index){
            $.ajax({
                url : '/home/login/investment_twopwd',
                type : 'post',
                data:{
                    two_pwd:pass
                },
                success:function(req){
                    if(req.code == 1){
                        layer.close(index);
                        $.ajax({
                            url : '/home/Investment/index',
                            type : 'post',
                            data:{
                                eth_acc:eth_acc,
                                btc_acc:btc_acc,
                                ltc_acc:ltc_acc,
                                id:id
                            },
                            success:function(res){
                                alert(res.msg);
                                if(res.code == 1){
                                    location.href='/home/item/index';
                                }else if(res.code == 3){
                                    location.href='/home/user/identity';
                                }
                            } 
                        })
                    }else{
                        layer.msg(req.msg);
                    }
                }
            })
        })
    }
</script>
<script src="__JS__/pitch-e55b172ef5.bundle.js"></script>
</body>
</html>
