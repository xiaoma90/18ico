<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/launch.html";i:1504858536;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/header.html";i:1504766399;s:79:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/footer.html";i:1504751887;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>
        发起项目| ico365-区块链项目ICO服务平台
    </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <meta name="description" content="ico365是一家针对数字货币、区块链领域的ICO融资服务平台，由一支有着丰富数字货币、区块链行业经验的团队成立。我们致力于为广大数字货币、区块链投资者提供一个安全、诚信、公平、透明的ICO融资服务平台。">
    <meta name="keywords" content="ico365区块链,区块链投资,区块链,区块链技术,区块链应用,区块链金融,区块链概念股,区块链原理,数字货币,数字资产">
    <meta name="sogou_site_verification" content="C8OJXgS1E7"/>
    <link rel="stylesheet" href="__CSS__/app-892a367653.css">
    <script src="__JS__/uploadPreview.js"></script>
     <link href="/static/admin/js/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
    <script>
       window.onload = function () { 
            // new uploadPreview({ UpBtn: "up_img", DivShow: "white_pager", ImgShow: "imgShow" });
            // new uploadPreview({ UpBtn: "up_img2", DivShow: "item_plan", ImgShow: "imgShow2" });
            // new uploadPreview({ UpBtn: "up_img3", DivShow: "item_others", ImgShow: "imgShow3" });
            new uploadPreview({ UpBtn: "upload_img_file", DivShow: "item_op", ImgShow: "imgShow4" });
        }
    </script>
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
            float: left;
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
            float: left;
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
        .launch-plan-right .form-group, .launch-project-info .form-group{
            overflow: hidden;
        }
        .fly_select{
            border: 1px solid #d1d1d1;
            color: #0b0b0b;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            width: auto;
            padding: 3px 15px;
            outline: 0;
            vertical-align: middle;
        }
        .detail{
            margin: 0 auto;
            width: 806px;
            border: 3px solid #ccc;
        }
        .selected{
            background-color:#30d98c;
        }
        .fly_btn{
            display: block;
            width:200px !important;
            margin-top: 10px;
            float: left;
        }
        .fly_btno{
            display: block;
            width:100px !important;
            margin-top: 10px;
            margin-left: 20px;
            float: left;
        }
        .fly_a{
            float: left;
            line-height: 40px;
            margin-left:10px;
            margin-top:10px;
        }
        .launch-container .launch-content .project-plan-footer .launch-next-operate{
            margin-left: 15px;
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
<div id="launch_content" class="ico-content">
    <section class="banner-body">
        <div class="banner-bg">
        </div>
    </section>
    <div class="launch-container ico-container">
        <nav id="launch_nav">
            <div id="nav_bar">
                <div class="language-select">
                    <p class="select-header">
                        <span class="language-txt">中文版</span>
                        <input type="hidden" name="language">
                        <svg height="10" width="10" viewBox="0 0 10 6">

                            <path class="triangle-down" fill="#636363" d="M5 6L0 0h10z"></path></svg>
                    </p>
                    <ul class="language-list" style="display: none;">
                        <li data-value="0">中文版</li>
                        <li data-value="1">English</li>
                    </ul>
                </div>
                <ul class="nav-item clearfix">
                    <li class="nav-list-one active">
                        <svg class="svg-step" width="250px" height="55px" viewBox="0 0 227 56">

                            <g fill="none" fill-rule="evenodd"><path class="step-content" fill="#FBFCFD" d="M1 55V1h210.113l14.57 27.496L211.117 55z"></path><path class="step-border" d="M.5.5v55h210.914l14.836-27-14.836-28H.5zm1 1h209.312l14.302 26.992L210.822 54.5H1.5v-53z" fill="#CAC9C9"></path></g></svg>
                            <div class="item-step">
                                <a href="javascript:" class="nav-item-step" id="nav_item_first" data-step="one" data-auth="1">
                                    <svg class="svg-icon" height="24" viewBox="0 0 27 26">

                                        <path class="launch-person" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M16.057 17.612c-.485-.191-.862-.41-1.131-.651a2.52 2.52 0 0 1-.6-.768 2.158 2.158 0 0 1-.222-.809c-.018-.269 0-.534.053-.794.069-.436.208-.743.416-.925.208-.184.479-.404.807-.665.139-.121.265-.292.379-.507.112-.218.212-.438.298-.665.089-.261.176-.538.262-.833.173-.052.337-.146.495-.287.139-.12.265-.29.378-.508.113-.216.187-.507.221-.872a1.989 1.989 0 0 0-.013-.702 1.734 1.734 0 0 0-.17-.47.877.877 0 0 0-.286-.337c0-.713-.043-1.416-.13-2.11a12.561 12.561 0 0 0-.442-1.914 5.469 5.469 0 0 0-.991-1.837 3.79 3.79 0 0 0-.794-.729 6.17 6.17 0 0 0-1.159-.653 7.714 7.714 0 0 0-1.396-.457 6.752 6.752 0 0 0-1.497-.17A8.85 8.85 0 0 0 9.298.04a5.435 5.435 0 0 0-1.276.354 5.701 5.701 0 0 0-1.251.715 4.877 4.877 0 0 0-1.107 1.187 5.472 5.472 0 0 0-.822 1.719 12.504 12.504 0 0 0-.48 3.776c-.157.174-.27.355-.34.548a2.327 2.327 0 0 0-.142.624c-.026.242.012.511.118.808.086.295.191.521.313.678s.233.277.337.364c.122.086.243.147.365.183.088.294.174.571.261.832.088.227.183.447.286.665.104.215.226.385.365.507.294.243.563.481.807.717.243.233.383.551.416.95.018.278.027.529.027.754 0 .227-.044.443-.13.653a2.153 2.153 0 0 1-.417.624c-.19.208-.467.427-.833.651a5.67 5.67 0 0 1-1.614.678c-.609.157-1.195.335-1.759.533a5.09 5.09 0 0 0-1.484.808c-.427.34-.682.83-.77 1.473A14.37 14.37 0 0 0 .013 22.3H0v3.751h17.877V18.194a23.215 23.215 0 0 0-.399-.113c-.513-.14-.986-.296-1.421-.469zM25.918 7.914H19.33v2.163H27V7.914zM20.411 14.458H19.33v2.163H27v-2.163h-1.082zM20.411 21.001H19.33v2.163H27v-2.163h-1.082z"></path></svg>
                                    <span class="item-txt">完善个人信息</span>
                                </a>
                            </div>
                    </li>
                    <li class="nav-list-two ">
                        <svg class="svg-step" width="250px" height="55px" viewBox="0 0 227 56">

                            <g fill="none" fill-rule="evenodd"><path class="step-content" fill="#FBFCFD" d="M1.665 55l14.378-27.504L1.68 1h209.774l14.567 27.496L211.459 55z"></path><path class="step-border" d="M.84.5l14.637 27L.84 55.5h210.914l14.837-27-14.837-28H.84zm15.523 27.464l.247-.472-.254-.468L2.519 1.5h208.633l14.302 26.992L211.163 54.5H2.49l13.872-26.536z" fill="#6671AB"></path></g></svg>
                        <div class="item-step">
                            <a href="javascript:" class="nav-item-step" id="nav_item_second" data-step="two" data-auth="0">
                                <svg class="svg-icon" height="24" viewBox="0 0 22 26">

                                    <path class="launch-info" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M15.714 6.659H22v-.005L15.714.308z"></path><path class="launch-info" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M15.714 8.23h-1.571V.308H0V25.691h22V8.23h-6.286zm1.553 11.381H4.732v-2.035h12.534v2.035zm0-5.103H4.732v-2.037h12.534v2.037z"></path></svg>
                                <span class="item-txt">项目基本信息</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-list-three ">
                        <svg class="svg-step" width="250px" height="55px" viewBox="0 0 227 56">

                            <g fill="none" fill-rule="evenodd"><path class="step-content" fill="#FBFCFD" d="M1.665 55l14.378-27.504L1.68 1h209.774l14.567 27.496L211.459 55z"></path><path class="step-border" d="M.84.5l14.637 27L.84 55.5h210.914l14.837-27-14.837-28H.84zm15.523 27.464l.247-.472-.254-.468L2.519 1.5h208.633l14.302 26.992L211.163 54.5H2.49l13.872-26.536z" fill="#6671AB"></path></g></svg>
                        <div class="item-step">
                            <a href="javascript:" class="nav-item-step" id="nav_item_third" data-step="three" data-auth="0">
                                <svg class="svg-icon" height="24" viewBox="0 0 22 25">

                                    <path class="launch-introduction" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.61 22.377V1.594H13.897L12.312-.019H-.001v23.996h1.61v-1.6zM15.103 9.724H22v-.085l-6.897-7.015v7.1z"></path><path class="launch-introduction" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.271 10.555V2.624H2.791V25.02H22V10.556h-7.729zM6.776 9.047h5.211v1.352H6.776V9.047zm11.239 13.004H6.776v-1.352h11.239v1.352zm0-3.883H6.776v-1.352h11.239v1.352zm0-3.885H6.776v-1.352h11.239v1.352z"></path></svg>
                                <span class="item-txt">项目详细介绍</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-list-four ">
                        <svg class="svg-step" width="250px" height="55px" viewBox="0 0 227 56">

                            <g fill="none" fill-rule="evenodd"><path class="step-content" fill="#FBFCFD" d="M1.665 55l14.378-27.504L1.68 1h209.774l14.567 27.496L211.459 55z"></path><path class="step-border" d="M.84.5l14.637 27L.84 55.5h210.914l14.837-27-14.837-28H.84zm15.523 27.464l.247-.472-.254-.468L2.519 1.5h208.633l14.302 26.992L211.163 54.5H2.49l13.872-26.536z" fill="#6671AB"></path></g></svg>
                        <div class="item-step">
                            <a href="javascript:" class="nav-item-step" id="nav_item_fourth" data-step="four" data-auth="0">
                                <svg class="svg-icon" height="24" viewBox="0 0 40 27">

                                    <path class="launch-plan" fill="currentColor" d="M28.496 12.504c.381-.313.566-.752.566-1.309 0-.986-.674-1.47-2.031-1.47l-1.401.005.005 3.252h1.27c.673 0 1.2-.161 1.591-.478zM27.08 14.149l-1.44.005.005 3.623h1.68c.723 0 1.289-.166 1.689-.488.4-.327.586-.781.586-1.357 0-1.187-.84-1.787-2.52-1.783z"></path><path class="launch-plan" fill="currentColor" d="M26.514 3.207c-5.688 0-10.298 4.609-10.298 10.293s4.609 10.293 10.298 10.293c5.684 0 10.293-4.609 10.293-10.293S32.197 3.207 26.514 3.207zm3.554 14.912a3.396 3.396 0 0 1-1.27.654v1.377h-1.641v-1.191h-1.23v1.191l-1.631.01-.005-1.201h-.039l-1.782.01V17.25h1.777l-.015-7.085h-1.777l-.005-1.704 1.816-.005V7.362h1.636v1.187h1.235V7.362l1.641-.005v1.387c.332.107.645.259.898.459.576.43.859 1.011.859 1.733 0 .571-.166 1.079-.508 1.514-.332.444-.801.752-1.387.938v.029c.732.073 1.328.342 1.768.796.439.459.654 1.035.664 1.729.002.898-.34 1.621-1.004 2.177z"></path><path class="launch-plan" fill="currentColor" d="M26.514.014c-5.142 0-9.609 2.871-11.89 7.104H4.473a.639.639 0 1 0 0 1.275h9.551c-.332.82-.591 1.675-.762 2.559H3.125a.64.64 0 1 0 0 1.28h9.956a13.674 13.674 0 0 0 .004 2.564H1.489c-.352 0-.64.288-.64.64s.288.64.64.64h11.777c.171.874.425 1.714.752 2.524H3.247c-.352 0-.64.283-.64.635s.288.645.64.645h11.372a13.692 13.692 0 0 0 1.797 2.568H.64a.636.636 0 0 0-.64.642c0 .352.288.635.64.635h17.075a13.441 13.441 0 0 0 8.799 3.262C33.965 26.986 40 20.951 40 13.5S33.965.014 26.514.014zm0 25.693c-6.748 0-12.212-5.459-12.212-12.207 0-6.743 5.464-12.212 12.212-12.212 6.738 0 12.207 5.469 12.207 12.212 0 6.748-5.469 12.207-12.207 12.207z"></path></svg>
                                <span class="item-txt">设置投资回报</span>
                            </a>
                        </div>
                    </li>
                    <li class="nav-list-five ">
                        <svg class="svg-step" width="239px" height="55px" viewBox="0 0 226 56">

                            <g fill="none" fill-rule="evenodd"><path class="step-content" fill="#FBFCFD" d="M1.665 55l14.378-27.504L1.68 1h223.202v54z"></path><path class="step-border" d="M.84.5l14.637 27L.84 55.5h224.542V.5H.84zm15.523 27.464l.247-.472-.254-.468L2.519 1.5h221.863v53H2.49l13.872-26.536z" fill="#6671AB"></path></g></svg>
                        <div class="item-step">
                            <a href="javascript:" class="nav-item-step" id="nav_item_fifth" data-step="five" data-auth="0">
                                <svg class="svg-icon" height="24" viewBox="0 0 21 24">

                                    <path class="launch-submit" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M20.764 21.958l-2.519-2.519a5.442 5.442 0 0 0 .909-3.006 5.457 5.457 0 1 0-5.456 5.456 5.41 5.41 0 0 0 3.006-.91l2.519 2.52a.811.811 0 0 0 1.14 0l.401-.402a.805.805 0 0 0 0-1.139zm-4.121-4.125a3.266 3.266 0 0 1-1.545 1.544 3.244 3.244 0 0 1-1.403.326 3.273 3.273 0 1 1 3.273-3.273c0 .505-.123.978-.325 1.403zm-10.068-.381h-2.67c-.456 0-.83-.374-.83-.83s.374-.83.83-.83H6.53a7.12 7.12 0 0 1 .563-2.217H3.905a.833.833 0 0 1-.83-.831c0-.457.374-.831.83-.831h4.204a7.138 7.138 0 0 1 3.126-2.216h-7.33c-.456 0-.83-.374-.83-.831s.374-.831.83-.831h12.803c.456 0 .83.374.83.831s-.374.831-.83.831h-.629a7.176 7.176 0 0 1 4.533 5.044V.268H0V23.3h11.654a7.171 7.171 0 0 1-5.079-5.848zM3.905 4.145h12.803c.456 0 .83.374.83.831s-.374.831-.83.831H3.905c-.456 0-.83-.374-.83-.831s.374-.831.83-.831z"></path></svg>
                                <span href="javascript:" class="item-txt">提交审核</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="launch-content" style="">
            <div class="launch-part-one launch-part" data-part="one" style="display:block">
                <div class="launch-person-info">
                    <form action="#" id="information-form">
                        <div class="form-group">
                            <label for="username">用户账号：</label>
                            <span id="username"><?php echo $username; ?></span>
                        </div>
                        <div class="form-group">
                            <label for="email">EMAIL：</label>
                            <span id="email"></span>
                            <?php if(empty($email)){?>
                             <a href="/home/user/index" class="goto-auth">邮箱未认证</a>                             
                            <?php ;}else{?>
                            <a href="javascript:video(0);" style="color:blue;" class="goto-auth"><?php echo $email; ?></a>
                            <?php ;}?>
                            </div>
                        <div class="form-group">
                            <label for="auth">实名认证：</label>
                            <span class="verify-state"></span>
                            <?php if($type<3){?>
                            <span>未实名认证，点击 <a href="/home/user/identity" class="goto-auth">立即认证</a></span>
                            <?php ;}else{?>
                            <span style="color:blue;">已实名认证</span>
                            <?php ;}?>                           
                        </div>
                    
                        <div class="form-group">
                            <label for="address">详细地址：</label>
                            <input type="text" name="office_address" id="office_address" value="<?php echo $data['offical_address']; ?>">
                        </div>
                    </form>
                </div>
                <div class="person-info-footer">
               
                    <div class="launch-next-operate">
                        <button type="button" id="person_info_save_next" data-step="two">保存并下一步<svg width="18" height="14" viewBox="0 0 9 14">

                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg></button>
                    </div>
                </div>
            </div>
            <div class="launch-part-two launch-part" data-part="two">
                <div class="launch-project-info">
                    <div id="project_info_form">
                        <div class="form-group">
                            <label for="name"><b class="is-required">*</b>项目名称：</label>
                            <input type="text" id="name" maxlength="500" placeholder="请输入项目名称" value="<?php echo $data['name']; ?>">
                        </div>
                        <div class="form-group">
                            <label for="stage"><b class="is-required">*</b>所属阶段：</label>
                            <div class="stage-select">
                                 <select id="status"  class="pro-select-header">                                       
                                        <option value="0" >请选择阶段</option>
                                        <option value="1" <?php if($data['status'] ==1) echo 'selected';?>>尚未启动</option>
                                        <option value="2" <?php if($data['status'] ==2) echo 'selected';?>>产品开发中</option>
                                        <option value="3" <?php if($data['status'] ==3) echo 'selected';?>>产品已上市</option>
                                        <option value="4" <?php if($data['status'] ==4) echo 'selected';?>>已经盈利</option>
                                   </select>
                               
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="office_address"><b class="is-required">*</b>办公地址：</label>
                            <div class="country-select">                              
                                <input type="text"  id="offical_detail" placeholder="请输入详细地址" value="<?php echo $data['offical_detail']; ?>">
                            </div>                           
                        </div>
                        <div class="form-group">
                            <label for="finance_stage"><b class="is-required">*</b>融资阶段：</label>
                            <div class="stage-select">
                                <select id="fanic_status"   class="pro-select-header">                                      
                                    <option value="0">请选择阶段</option>
                                    <option value="1" <?php if($data['fanic_status'] ==1) echo 'selected';?>>天使轮</option>
                                    <option value="2" <?php if($data['fanic_status'] ==2) echo 'selected';?>>A轮</option>
                                    <option value="3" <?php if($data['fanic_status'] ==3) echo 'selected';?>>B轮</option>
                                    <option value="4" <?php if($data['fanic_status'] ==4) echo 'selected';?>>C轮</option>
                                    <option value="5" <?php if($data['fanic_status'] ==5) echo 'selected';?>>D轮</option>
                                    <option value="6" <?php if($data['fanic_status'] ==6) echo 'selected';?>>未融资</option>
                                </select>                           
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="introduction"><b class="is-required">*</b>项目简介：</label>
                            <textarea name="remark" id="remark" maxlength="1000" placeholder="请输入项目简介" ><?php echo $data['remark']; ?></textarea>
                        </div>
                        <div class="form-group">
                            <label for="video_address">宣传视频：</label>
                            <input type="text" name="video" id="video" placeholder="请输入Flash视频地址(支持爱奇艺、腾讯、优酷、土豆、酷6、新浪、搜狐视频)">
                        </div>
                        <div class="form-group">                           
                                <label for="upload_img"><b class="is-required">*</b>封面图片：</label>
                                <span>支持JPG/JPEG/PNG格式；建议尺寸：850x424px；最多1张【图片大小不超过1M】</span>                            
                                <div class="upload-file">
                                <ul class="upload-ul">
                                    <li class="upload-file-item">
                                        <div class="upload-file-button upload-white_paper" id="item_op">
                                            <img id="imgShow4" width="100" height="100" src="<?php echo $data['l_banner']; ?>" />
                                            <input type="file" name="project_book" class="file-upload" id="upload_img_file">
                                            <svg class="svg-center" height="34px" width="34px" viewBox="0 0 34 34">
                                            <circle class="add-circle" fill="#BEBEBE" cx="17" cy="17" r="17"></circle><path class="add-rect" fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M7 15.345h20v3.31H7z"></path><path class="add-rect" fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M15.345 7h3.31v20h-3.31z"></path></svg>
                                        </div>
                                        <p id="pic1" style="cursor:pointer">点击上传</p>                                       
                                    </li>
                            	</ul>
                            </div>   
                        </div>
                        <div class="form-group">
                            <label for="upload_file"><b class="is-required">*</b>上传附件：</label>
                            <span> 请上传项目白皮书、商业计划书、其他资料文档，支持Word/Excle/PPT/PDF格式【文件大小不超过10M】</span>
                            <div class="upload-file">
                                <ul class="upload-ul">                            
                                    <div>
                                        <input type="file" value="上传项目白皮书" class="fly_btn" id="up_img">
                                        <?php if($data['project_book']){?>
                                        <a class="fly_a" href="<?php echo $data['project_book']; ?>" >点击查看文件</a>
                                        <?php ;}else{?>
                                        <a class="fly_a" href="javascript:vido(0);" >点击查看文件</a>
                                        <?php ;}?>
                                        <input type="button" value="上传" class="fly_btno" id="pic2">
                                    </div>
                                    <div>
                                        <input type="file" value="上传商业计划书" class="fly_btn" id="up_img2">
                                         <?php if($data['project_book']){?>
                                        <a class="fly_a" href="<?php echo $data['plan_book']; ?>" >点击查看文件</a>
                                        <?php ;}else{?>
                                        <a class="fly_a" href="javascript:vido(0);" >点击查看文件</a>
                                        <?php ;}?>
                                        
                                        <input type="button" value="上传" class="fly_btno" id="pic3">
                                    </div>
                                    <div>
                                        <input type="file" value="上传其他资料" class="fly_btn"  id="up_img3">
                                       
                                        <?php if($data['project_book']){?>
                                        <a class="fly_a" href="<?php echo $data['other_data']; ?>" >点击查看文件</a>
                                        <?php ;}else{?>
                                        <a class="fly_a" href="javascript:vido(0);" >点击查看文件</a>
                                        <?php ;} ?>
                                        <input type="button" value="上传" class="fly_btno" id="pic4">
                                    </div>                                                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-info-footer">
                    <div class="launch-pre-operate">
                        <button type="button" class="operate-prev-btn" data-step="one"><svg width="25" height="14" viewBox="0 0 9 14">
                        
                        <path fill="currentColor" d="M0 14V0l9 7z"></path></svg>上一步</button>
                    </div>
                    <!-- <div class="launch-save-operate">
                        <button type="button" id="pro_info_save">保存</button>
                    </div> -->
                    <div class="launch-next-operate">
                        <input  type="hidden"  id="upa">
                        <input  type="hidden"  id="upb">
                        <input  type="hidden"  id="upc">
                        <input  type="hidden"  id="upd">
                        <button type="button" id="pro_info_save_next" data-step="three">保存并下一步<svg width="18" height="14" viewBox="0 0 9 14">
                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg></button>
                    </div>
                </div>
            </div>
            <div class="launch-part-three launch-part" data-part="three" style="">
                <div class="launch-pro-introduction" style="">
                    <div style="margin:0 auto;width:800px;" class="fly_nr">
                        <a class="btn btn-success">项目介绍</a>
                        <a class="btn btn-success">ico细则</a>
                        <a class="btn btn-success">团队介绍</a>
                    </div>
                    <div id="detail" style="" class="detail">
                        <textarea class="fly_tarea" id="content" style="width:800px;"><?php echo $data['content']; ?></textarea>                    
                    </div> 
                    <div class="detail" style="display: none">
                        <textarea class="fly_tarea" id="rule_intro" style="width:800px;"><?php echo $data['rule_intro']; ?></textarea>                                       
                    </div> 
                    <div class="detail" style="display: none" >
                        <textarea class="fly_tarea" id="team_intro" style="width:800px;"><?php echo $data['team_intro']; ?></textarea>                                       
                    </div>   
                </div>
                <div class="project-intro-footer">
                    <div class="launch-pre-operate">
                        <button type="button" class="operate-prev-btn" data-step="two"><svg width="25" height="14" viewBox="0 0 9 14">
                        <path fill="currentColor" d="M0 14V0l9 7z"></path></svg>上一步</button>
                    </div>
                    <!-- <div class="launch-save-operate">
                        <button type="button" id="pro_intro_save">保存</button>
                    </div> -->
                    <div class="launch-next-operate">
                        <button type="button" id="pro_intro_save_next" data-step="four">保存并下一步<svg width="18" height="14" viewBox="0 0 9 14">
                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg></button>
                    </div>
                </div>
            </div>
            <div class="launch-part-four launch-part" data-part="four">
                <div class="launch-plan-content clearfix">
                    <div class="launch-plan-left">
                        <ul class="launch-plan-left-list">
                            <li class="pro-plan-item active">
                                <a href="javascript:" class="plan-list-a" data-id="">回报</a>
                            </li>
                        </ul>
                      
                    </div>
                    <div class="launch-plan-right">
                        <form action="#" id="pro_plan_form">
                            <input type="hidden" value="" id="plan_id">                       
                            <div class="form-group">
                                <label for="money" class="fly_td"><b class="is-required">*</b>ETH投资金额：</label>
                                
                                <span class="is-show-money">
                                    <input  onblur="edit(this);" value="<?php echo $data['eth_target']; ?>" type="text" id="eth_target" class="edit-focus"  style="width: 200px;">
                                    <span class="money-type">ETH</span>
                                </span>

                            </div>
                            <div class="form-group">
                                <label for="money" class="fly_td"><b class="is-required">*</b>BTC投资金额：</label>
                               
                                <span class="is-show-money">
                                    <input type="text" id="btc_target" class="edit-focus"  style="width: 200px;" onblur="edit(this);" value="<?php echo $data['btc_target']; ?>">
                                    <span class="money-type">BTC</span>
                                </span>
                            </div>
                            <div class="form-group">
                                 <label for="money" class="fly_td"><b class="is-required">*</b>LTC投资金额：</label>
                                <span class="is-show-money">
                                    <input type="text" id="ltc_target" class="edit-focus"  style="width: 200px;"  onblur="edit(this);" value="<?php echo $data['ltc_target']; ?>">
                                    <span class="money-type">LTC</span>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="plan_intro"><b class="is-required">*</b>回报说明：</label>
                                <textarea name="describe" id="return_instr" class="edit-focus" cols="30" rows="10" maxlength="150" placeholder="请输入您的回报说明，不超过150字"><?php echo $data['return_instr']; ?></textarea>
                            </div>
                            <div class="form-group">
                                <label for="money" class="fly_td"><b class="is-required">*</b>限制名额：</label> 
                                <span class="is-show-money">
                                    <input type="text" id="quota_retric" class="edit-focus" style="width: 200px;" onblur="edit(this);" value="<?php echo $data['quota_retric']; ?>">
                                    <span class="money-type">可以不填</span>
                                </span>                            
                               
                            </div>                                                   
                            <div class="form-group">
                                <label for="reward_time"><b class="is-required">*</b>回报时间：</label>
                                <span class="reward-txt">预计项目ICO成功结束后&nbsp;</span>
                                <input type="text" name="return_time" id="return_time" class="edit-focus" style="width: 200px;" onblur="edit(this);"  value="<?php echo $data['return_time']; ?>">
                                <span class="reward-txt">&nbsp;天内</span>
                            </div>
                            <!-- <div class="form-group">
                                <button type="button" class="launch-plan-save">保存</button>
                            </div> -->
                        </form>
                    </div>
                </div>
                <div class="project-plan-footer">
                    <div class="launch-pre-operate">
                        <button type="button" class="operate-prev-btn" data-step="three"><svg width="25" height="14" viewBox="0 0 9 14">
                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg>上一步</button>
                    </div>
                    <div class="launch-next-operate">
                        <button type="button" id="pro_plan_save_next" data-step="five">保存并下一步<svg width="18" height="14" viewBox="0 0 9 14">
                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg></button>
                    </div>
                </div>
            </div>
            <div class="launch-part-five launch-part" data-part="five">
                <div class="launch-submit-content">
                    <div class="launch-submit-body">
                        <form action="#" class="launch-submit-form">
                            <div class="form-group">
                                <label for="funding_day"><b class="is-required">*</b>ICO天数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：</label>
                                <input type="text" name="funding_day" id="ico_days" style="width: 200px;" onblur="edit(this);" value="<?php echo $data['ico_days']; ?>">
                                <span>&nbsp;天</span>
                            </div>
                            <div class="form-group">
                                <label for="funding_day"><b class="is-required">*</b>ETH限制金额：</label>
                                <input type="text" id="eth_limit" style="width: 300px;" onblur="edit(this);" value="<?php echo $data['eth_limit']; ?>">
                                
                            </div>
                            <div class="form-group">
                                <label for="funding_day"><b class="is-required">*</b>BTC限制金额：</label>
                                <input type="text"  id="btc_limit" style="width: 300px;" onblur="edit(this);" value="<?php echo $data['btc_limit']; ?>">
                                
                            </div>
                            <div class="form-group">
                                <label for="funding_day"><b class="is-required">*</b>LTC限制金额：</label>
                                <input type="text" n id="ltc_limit" style="width: 300px;" onblur="edit(this);" value="<?php echo $data['ltc_limit']; ?>">                              
                            </div>
                            <div class="form-group">
                                <label for="contacts"><b class="is-required">*</b>联 系 人：</label>
                                <input type="text" id="linkman" placeholder="请输入联系人姓名" value="<?php echo $data['linkman']; ?>">
                            </div>
                            <div class="form-group">
                                <label for="response_job"><b class="is-required">*</b>负责职位：</label>
                                <input type="text"  id="link_job" placeholder="请输入负责人职位" value="<?php echo $data['link_job']; ?>">
                            </div>
                            <div class="form-group">
                                <label for="contacts_phone"><b class="is-required">*</b>联系电话：</label>
                                <input type="text"  id="link_phone" placeholder="请输入负责人联系电话" value="<?php echo $data['link_phone']; ?>">
                            </div>
                            <div class="form-group">
                                <label for="apply_starttime"><b class="is-required">*</b>开始时间：</label>
                                <span>申请&nbsp;</span>
                                <input type="text" name="apply_starttime" id="starttime" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" style="width: 200px;">
                                <span>&nbsp;天内开始</span>
                            </div>
                        </form>
                        <div class="launch-submit-tips">
<span class="ico-agree">
<svg height="18" width="18" viewBox="0 0 18 18">

<path class="check-color" fill-rule="evenodd" clip-rule="evenodd" fill="#24D96D" d="M3.389 8.418l3.273 2.609 8.151-7.51s.547-.5 1.024-.109c.143.118.307.45-.063.97l-8.511 9.97s-.653.893-1.427-.01L2.165 9.379s-.436-.671.109-1.075c.184-.135.602-.345 1.115.114m0 0"></path><path class="border-color" fill="#9B9B9B" d="M17 1v16H1V1h16m1-1H0v18h18V0z"></path></svg>
</span>
                            <span>请认真阅读<a href="<?php echo url('project/condition'); ?>" target="_blank">《发起者协议》</a>，确认项目内容符合规范。</span>
                        </div>
                    </div>
                </div>
                <div class="project-submit-footer">
                    <div class="launch-pre-operate">
                        <button type="button" class="operate-prev-btn" data-step="four"><svg width="25" height="14" viewBox="0 0 9 14">

                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg>上一步</button>
                    </div>
                    <!-- <div class="launch-save-operate">
                        <button type="button" class="btn btn-success">保存成功</button>
                        <button type="button" class="btn btn-warn">不能为空</button>
                        <button type="button" id="preview_save_btn">保存</button>
                    </div> -->
                    <div class="launch-next-operate">
                        <button type="button" id="pro_submit_btn">提交审核<svg width="18" height="14" viewBox="0 0 9 14">

                            <path fill="currentColor" d="M0 14V0l9 7z"></path></svg></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_dialog" class="popup">
    <div class="popup-bg"></div>
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
<!-- <script src="__JS__/vendor-140c67b313.bundle.js"></script> -->
<!-- <script src="__JS__/app-d2b0299975.bundle.js"></script> -->
<!-- <script src="__JS__/header-ee96b9a909.bundle.js"></script> -->
<!-- <script src="__JS__/ueditor.config.js"></script> -->
<!-- <script src="__JS__/ueditor.all.min.js"></script> -->
<!-- <script src="__JS__/zh-cn.js"></script> -->
<!-- <script src="__JS__/launch-b846551909.bundle.js"></script> -->
<script src="__JS__/jquery.js"></script>
<script type="text/javascript" src="/static/admin/js/umeditor/third-party/jquery.min.js"></script>
<script type="text/javascript" src="/static/admin/js/umeditor/third-party/template.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/static/admin/js/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/static/admin/js/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="/static/admin/js/umeditor/lang/zh-cn/zh-cn.js"></script>
<script src="/static/admin/js/plugins/layer/layer.min.js"></script>
<script>
    function edit($this){
        val = $($this).val();
        var reg = /^\d+(?=\.{0,1}\d+$|$)/
        if(reg.test(val)){
            $($this).css('border-color','#d1d1d1');
        }else{
            layer.msg("数值错误!")
            $($this).css('border-color','red');
            return;
        }
    }
    var ua = UM.getEditor('content');
    var ub = UM.getEditor('rule_intro');
    var uc = UM.getEditor('team_intro');
    $(".fly_nr a").click(function(){
         $(this).addClass("btn btn-success selected").siblings().removeClass("selected"); //切换选中的按钮高亮状态
         var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
         $(".detail").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
          $(".fly_nr").css("display","block");
     })
    $("#pic1").click(function(){
        UpladFile('upload_img_file',1);
    })
    $("#pic2").click(function(){ 
           
        UpladFile('up_img',2);
    })
    $("#pic3").click(function(){     
        UpladFile('up_img2',3);
    })
    $("#pic4").click(function(){
        UpladFile('up_img3',4);
    })
    
    var data=$("#person_info_save_next").attr("data-step");
    $("#person_info_save_next").click(function () {
        // if($("#office_address").val() == ''){
        //     layer.alert('详细地址为空');
        //     return ;
        // }
         $.ajax({
            'url':'<?php echo url("project/authentication"); ?>',
            'data':{office_address:$("#office_address").val()},
            'type':'post',
            'cache':false,
            'dataType':'json',
            success:function(data){                       
                if(data.status){  
                    $(".nav-list-one").removeClass("active");
                    $(".nav-list-two").addClass("active");
                    $(".launch-part").hide();
                    $(".launch-part-two").show();                                                               
                }else{
                    layer.alert(data.message);
                    return ;
                }
            }
        })

        var step = $(this).attr("data-step")  
           
        $(".project-info-footer").find("#pro_info_save_next").on("click",function(){
            var l_banner     = $("#upa").val();
            var project_book = $("#upb").val();
            var plan_book    = $("#upc").val();
            var other_data   = $("#upd").val();            
            var data = {
                name:$("#name").val(),
                status:$("#status").val(),
                offical_detail:$("#offical_detail").val(),
                fanic_status:$("#fanic_status").val(),
                remark:$("#remark").val(),
                video:$("#video").val(),
                l_banner:l_banner,
                project_book:project_book,
                plan_book:plan_book,
                other_data:other_data,
            };   
            $.ajax({
                'url':'<?php echo url("project/information"); ?>',
                'data':data,
                'type':'post',
                'cache':false,
                'dataType':'json',
                success:function(data){                       
                    if(data.status){ 
                        $("#upa").val('');  
                        $("#upb").val(''); 
                        $("#upc").val(''); 
                        $("#upd").val('');                      
                        $(".nav-list-two").removeClass("active");
                        $(".nav-list-three").addClass("active");
                        $(".launch-part").hide();
                        $(".launch-part-three").show();                       
                    }else{
                        layer.alert(data.message);                       
                        return ;
                    }
                }
            })                     
            $(".project-intro-footer").find("#pro_intro_save_next").on("click",function() {

                var content    = ua.getPlainTxt();
                var rule_intro = ub.getPlainTxt();
                var team_intro = uc.getPlainTxt();
                if(content == ''){
                    layer.alert('项目介绍为空');                       
                    return ;
                }
                if(rule_intro == ''){
                    layer.alert('ico细则为空');                       
                    return ;
                }
                if(team_intro == ''){
                    layer.alert('团队介绍为空');                       
                    return ;
                }
                var data = {
                    content:content,
                    rule_intro:rule_intro,
                    team_intro:team_intro,                   
                };
                $.ajax({
                    'url':'<?php echo url("project/contents"); ?>',
                    'data':data,
                    'type':'post',
                    'cache':false,
                    'dataType':'json',
                    success:function(data){                       
                        if(data.status){  
                            $(".nav-list-three").removeClass("active");
                            $(".nav-list-four").addClass("active");
                            $(".launch-part").hide();
                            $(".launch-part-four").show();                                                                     
                        }else{
                            layer.alert(data.message);                       
                            return ;
                        }
                    }
                }) 
                
                $(".project-plan-footer").find("#pro_plan_save_next").on("click",function() {
                    var eth_target = $("#eth_target").val();
                    var btc_target = $("#btc_target").val();
                    var ltc_target = $("#ltc_target").val();
                    var return_instr = $("#return_instr").val();
                    var quota_retric = $("#quota_retric").val();
                    var return_time = $("#return_time").val();
                    var data = {
                        eth_target:eth_target,
                        btc_target:btc_target,
                        ltc_target:ltc_target,
                        return_instr:return_instr,
                        quota_retric:quota_retric,
                        return_time:return_time,                   
                    };
                    $.ajax({
                        'url':'<?php echo url("project/amount"); ?>',
                        'data':data,
                        'type':'post',
                        'cache':false,
                        'dataType':'json',
                        success:function(data){                       
                            if(data.status){  
                                $(".nav-list-four").removeClass("active");
                                $(".nav-list-five").addClass("active");
                                $(".launch-part").hide();
                                $(".launch-part-five").show();                                                                    
                            }else{
                                layer.alert(data.message);
                                return ;
                            }
                        }
                    })                  
                    $(".project-submit-footer").find("#pro_submit_btn").on("click",function() {
                        var ico_days   = $("#ico_days").val();
                        var eth_limit  = $("#eth_limit").val();
                        var btc_limit  = $("#btc_limit").val();
                        var ltc_limit  = $("#ltc_limit").val();
                        var linkman    = $("#linkman").val();
                        var link_job   = $("#link_job").val();
                        var link_phone = $("#link_phone").val();
                        var starttime  = $("#starttime").val();
                        var data = {
                            ico_days:ico_days,
                            eth_limit:eth_limit,
                            btc_limit:btc_limit,
                            ltc_limit:ltc_limit,
                            linkman:linkman,
                            link_job:link_job,    
                            link_phone:link_phone, 
                            starttime:starttime,               
                        };
                        $.ajax({
                            'url':'<?php echo url("project/examine"); ?>',
                            'data':data,
                            'type':'post',
                            'cache':false,
                            'dataType':'json',
                            success:function(data){                       
                                if(data.status){  
                                    window.location.href="/home/item/sendProject";                                                                
                                }else{
                                    layer.alert(data.message);
                                    return ;
                                }
                            }
                        })
                    })
                })
            })
        })
    })
    $(".project-info-footer").find(".operate-prev-btn").click(function () {
        $(".nav-list-two").removeClass("active");
        $(".nav-list-one").addClass("active");
        $(".launch-part").hide();
        $(".launch-part-one").show();
        $(".project-intro-footer").find(".operate-prev-btn").on("click",function(){
            $(".nav-list-three").removeClass("active");
            $(".nav-list-two").addClass("active");
            $(".launch-part").hide();
            $(".launch-part-two").show();
            $(".project-plan-footer").find(".operate-prev-btn").on("click",function() {
                $(".nav-list-four").removeClass("active");
                $(".nav-list-three").addClass("active");
                $(".launch-part").hide();
                $(".launch-part-three").show();
                $(".project-submit-footer").find(".operate-prev-btn").on("click",function() {
                    $(".nav-list-five").removeClass("active");
                    $(".nav-list-four").addClass("active");
                    $(".launch-part").hide();
                    $(".launch-part-four").show();
                    $(".project-submit-footer").find("#pro_submit_btn").on("click",function() {
                        window.location.href="index.html";
                    })
                })
            })
        })
    })
    var xhr;
    function createXMLHttpRequest() {
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
    }
    function UpladFile(str,id){
        var fileObj = document.getElementById(str).files[0];            
        var FileController = '/home/project/up/id/'+id;
        var form = new FormData();
        form.append("myfile", fileObj);
        createXMLHttpRequest();
        xhr.onreadystatechange = handleStateChange;
        xhr.open("post", FileController, true);
        xhr.send(form);

    }
    function handleStateChange() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                var result = xhr.responseText;
                var json = eval("(" + result + ")");
                if(json.status ==1){                   
                    if(json.num ==1){
                        $("#upa").val('');
                        $("#upa").val(json.file);

                    }else if(json.num ==2){
                        $("#upb").val('');
                        $("#upb").val(json.file);                      
                    }else if(json.num ==3){
                        $("#upc").val('');
                        $("#upc").val(json.file);
                    }else if(json.num ==4){
                        $("#upd").val('');
                        $("#upd").val(json.file);
                    }
                    layer.msg('资料上传成功');                                
                }               
            }
        }
    }
</script>
</body>
</html>
