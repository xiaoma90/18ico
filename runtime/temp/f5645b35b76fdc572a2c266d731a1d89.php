<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:88:"/www/wwwroot/18ico.ewtouch.com/public/../application/home/view/view/user-header_one.html";i:1504951864;}*/ ?>
<html>
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
	        header {
	            height: 96px;
	        }
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
	    </style>
	</head>
	<body>
		<div id="user_content">
			<section class="banner-body">
	        <div class="banner-bg">
	            <div class="banner-center clearfix">
	                <div class="head-left">
	                    <div class="user-avatar">
	                        <img class="avatar-pic" src="<?php if($user['headimg']): ?><?php echo $user['headimg']; else: ?>__IMG__/default-avatar.png<?php endif; ?>">
	                    </div>
	                    <div class="head-info">
	                        <span class="user-name"><?php echo $user['phone']; ?></span>
	                        <p class="last-login-time">最近登录时间：<?php echo $user['updated_at']; ?></p>
	                        <div class="svg-group">
	                            <!-- <a href="javascript:" id="youxiang_yanzheng" title="邮箱验证">
	                                <svg class="svg-icon" height="21" width="24" viewBox="0 0 24 21.29">

	                                    <g fill="#FFF"><path d="M23.107.272c-.276-.168-.6-.27-.944-.27H1.836c-.347 0-.668.102-.945.27L12 10.626 23.107.272zM.173 1.072A1.826 1.826 0 0 0 0 1.839v11.953c0 .369.111.709.297.996l7.294-6.8L.173 1.072zM12.1 12.002l-.101.097-3.62-3.375-7.254 6.761c.218.094.459.146.711.146h9.41c-.004-.106-.016-.207-.016-.312 0-1.203.318-2.333.87-3.317zM23.827 1.073l-7.42 6.915.653.609a6.78 6.78 0 0 1 .972-.078A6.809 6.809 0 0 1 24 12.061V1.839c0-.274-.064-.532-.173-.766z"></path><path d="M18.032 9.354a5.975 5.975 0 0 0-5.967 5.967c0 3.291 2.677 5.967 5.967 5.967s5.967-2.676 5.967-5.967a5.975 5.975 0 0 0-5.967-5.967zm2.775 8.047a.604.604 0 0 1 0 .848l-.157.157a.603.603 0 0 1-.848 0l-1.77-1.77-1.77 1.77a.603.603 0 0 1-.848 0l-.157-.157a.604.604 0 0 1 0-.848l1.77-1.77-1.77-1.77a.604.604 0 0 1 0-.848l.157-.157a.603.603 0 0 1 .848 0l1.77 1.77 1.77-1.77a.603.603 0 0 1 .848 0l.157.157a.604.604 0 0 1 0 .848l-1.77 1.77 1.77 1.77z"></path></g></svg>
	                            </a>
	                            <a href="javascript:" title="未认证">
	                                <svg class="svg-icon" height="21" width="26" viewBox="0 0 26 21.279">

	                                    <g fill="#FFF"><circle cx="7.408" cy="6.149" r="2.341"></circle><path d="M3.343 12.59a1.602 1.602 0 0 0-.102.416c.032.916.571.947.801.959H10.423c.281 0 .868-.08 1.074-.384.172-.254.062-.675-.061-.981-.602-1.515-2.229-2.531-4.05-2.531a4.463 4.463 0 0 0-4.043 2.521z"></path><path d="M12.175 14.466l-.035.014c-.579.521-1.437.569-1.717.569H4.012c-1.131-.063-1.813-.813-1.855-2.006-.012-.322.134-.772.211-.932a5.554 5.554 0 0 1 3.497-2.922A3.412 3.412 0 0 1 3.982 6.15a3.43 3.43 0 0 1 3.426-3.427 3.43 3.43 0 0 1 3.427 3.427c0 1.334-.774 2.479-1.892 3.046 1.533.424 2.807 1.453 3.422 2.832l.004-.011.197.403a7.379 7.379 0 0 1 3.383-4.029l-.038-.011h-2.645a.542.542 0 1 1 0-1.086h3.768c.231 0 .415.15.491.356l.004-.002s.015.03.029.07a7.318 7.318 0 0 1 1.973-.279c1.902 0 3.635.73 4.945 1.92V1.988c0-1.096-.894-1.99-1.992-1.99H1.99C.893-.002 0 .891 0 1.988v13.798c0 1.098.893 1.989 1.99 1.989h10.794a7.3 7.3 0 0 1-.627-2.963c0-.116.01-.23.018-.346zm1.159-9.702h7.535a.544.544 0 0 1 0 1.086h-7.535a.543.543 0 0 1 0-1.086z"></path><path d="M19.529 8.345a6.475 6.475 0 0 0-6.468 6.469 6.477 6.477 0 0 0 6.468 6.47c3.568 0 6.471-2.901 6.471-6.47s-2.902-6.469-6.471-6.469zm2.776 8.24a.604.604 0 0 1 0 .848l-.157.156a.602.602 0 0 1-.848 0l-1.77-1.77-1.77 1.77a.602.602 0 0 1-.848 0l-.157-.156a.604.604 0 0 1 0-.848l1.77-1.77-1.77-1.77a.604.604 0 0 1 0-.848l.157-.158a.604.604 0 0 1 .848 0l1.77 1.77 1.77-1.77a.604.604 0 0 1 .848 0l.157.158a.604.604 0 0 1 0 .848l-1.77 1.77 1.77 1.77z"></path></g></svg>
	                            </a> -->
	                            <!--<a href="#" title="已绑定" class="phoneDisplay">-->
	                                <!--<svg class="svg-icon" height="21" width="15">-->
	                                    <!--<use xlink:href="#icon-phone-bind"></use>-->
	                                <!--</svg>-->
	                            <!--</a>-->
	                            <a href="security.html" title="设置">
	                                <svg class="svg-icon" height="21" width="21" viewBox="0 0 21 21">

	                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M20.956 9.532l-.012.001a.873.873 0 0 0-.78-.78h-.48v-.006a1.309 1.309 0 0 1-1.287-1.07 8.11 8.11 0 0 0-.329-.787l-.002-.001a1.304 1.304 0 0 1-.147-.294v-.002a1.3 1.3 0 0 1 .31-1.364h-.001l.266-.267.011-.009.01-.011a.874.874 0 0 0 .05-1.159l.005-.004a9.99 9.99 0 0 0-.644-.703 9.987 9.987 0 0 0-.721-.658l-.002.003a.87.87 0 0 0-1.065-.027l-.192.191-.181.179-.008-.008a1.308 1.308 0 0 1-1.602.197 8.781 8.781 0 0 0-.933-.384 1.265 1.265 0 0 1-.167-.057l-.002-.001a1.323 1.323 0 0 1-.432-.286 1.324 1.324 0 0 1-.374-1.091V.91a.875.875 0 0 0-.72-.861l-.154-.014h.001C11.086.014 10.794 0 10.5 0s-.585.014-.874.037L9.473.05a.873.873 0 0 0-.721.86v.39a1.311 1.311 0 0 1-.949 1.262c-.35.117-.688.258-1.015.421l-.004.001a1.297 1.297 0 0 1-.624.157c-.362 0-.69-.146-.927-.384l-.002.002-.276-.276a.872.872 0 0 0-1.114-.101 3.96 3.96 0 0 0-.116.097l-.005.004a10.589 10.589 0 0 0-1.236 1.235l-.001.001-.1.119a.874.874 0 0 0 .1 1.117l.276.275a1.314 1.314 0 0 1 .221 1.558 8.108 8.108 0 0 0-.417 1.011 1.007 1.007 0 0 1-.039.109v.001a1.306 1.306 0 0 1-1.223.84v.004h-.39a.875.875 0 0 0-.861.72c-.005.05-.011.101-.015.153-.023.282-.035.587-.035.874v.015c0 .29.012.577.035.858v.001c.004.052.01.103.015.154.074.409.43.721.858.721h.393c.558 0 1.034.349 1.224.841v.002a.696.696 0 0 1 .031.098c.001.001.001.004.004.007.117.35.259.688.42 1.015l.004.005c.015.025.026.052.039.079a1.304 1.304 0 0 1-.265 1.473l.001.001-.266.267-.011.01-.01.011a.875.875 0 0 0-.098 1.095 10.375 10.375 0 0 0 .7.773 11.075 11.075 0 0 0 .772.699.874.874 0 0 0 1.003-.02l.192-.191.18-.18.008.007a1.313 1.313 0 0 1 1.545-.231c.001.002.004.002.006.004a8.142 8.142 0 0 0 1.113.456 1.311 1.311 0 0 1 .858 1.229h.004v.386c0 .451.343.824.783.868v.006c.316.027.637.041.962.041s.646-.014.964-.044l-.002-.006a.874.874 0 0 0 .785-.868v-.39a1.31 1.31 0 0 1 1.042-1.284c.288-.101.567-.216.839-.349a1.314 1.314 0 0 1 .712-.211 1.304 1.304 0 0 1 .981.442l.224.226.001-.002a.876.876 0 0 0 1.134.087c.029-.024.057-.046.084-.07a10.875 10.875 0 0 0 1.269-1.268l.075-.091a.872.872 0 0 0-.06-1.096l-.001-.002-.063-.061-.244-.245v-.001a1.306 1.306 0 0 1-.211-1.576c.154-.315.29-.642.405-.978.013-.045.026-.09.044-.132.063-.164.162-.316.295-.448.254-.255.591-.384.927-.384v-.001h.376v-.006c.468 0 .85-.367.872-.828l.013.001a10.663 10.663 0 0 0-.005-1.883zm-6.196.968a4.254 4.254 0 0 1-.429 1.87 4.315 4.315 0 0 1-1.959 1.967 4.23 4.23 0 0 1-1.874.437h-.013a4.22 4.22 0 0 1-1.878-.434 4.189 4.189 0 0 1-1.139-.813 4.213 4.213 0 0 1-.819-1.143 3.966 3.966 0 0 1-.209-.498 4.279 4.279 0 0 1 0-2.775 4.236 4.236 0 0 1 1.027-1.642 4.226 4.226 0 0 1 1.642-1.018 4.248 4.248 0 0 1 1.374-.227h.013c.486.002.953.085 1.389.234a4.312 4.312 0 0 1 1.629 1.023c.33.332.604.717.813 1.139a4.277 4.277 0 0 1 .433 1.874v.006z"></path></svg>
	                            </a>
	                        </div>
	                    </div>
	                </div>
	                <div class="head-right">
	                    <div id="security_info">账户安全</div>
	                    <?php if($user['type'] == 3): ?>
	                    <div id="security_rate" class="account-security" data-factor="90">
	                    <?php elseif(!empty($user['email'])): ?>
	                    <div id="security_rate" class="account-security" data-factor="70">
	                    <?php else: ?>
	                    <div id="security_rate" class="account-security" data-factor="30">
	                     <?php endif; ?>  
	                    </div>
	                    <div class="authentication sprite-item auth-bg">
	                        <div class="identity-auth">
	                            <i></i>
	                            <span>实名认证：</span>
	                            <a href="/home/user/identity" class="goto-auth"><?php if($user['type'] == 3): ?>已认证<?php elseif($user['type'] == 1): ?>待审核<?php elseif($user['type'] == 2): ?>已驳回<?php else: ?>立即认证<?php endif; ?></a>
	                        </div>
	                        <div class="email-auth">
	                            <i></i>
	                            <span>电子邮箱：</span>
	                            <a href="/home/user/index" class="goto-auth"><?php if(!empty($user['email'])): ?><?php echo $user['email']; else: ?>立即绑定<?php endif; ?></a>
	                        </div>
	                        <div class="phone-auth">
	                            <i></i>
	                            <span>手机号码：</span>
	                            <a href="/home/user/index"><?php echo $user['phone']; ?></a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
		</div>
		
		<script src="__JS__/vendor-140c67b313.bundle.js"></script>
		<script src="__JS__/app-d2b0299975.bundle.js"></script>
		<script src="__JS__/header-ee96b9a909.bundle.js"></script>
		<script src="__JS__/user-4fdf20982d.bundle.js"></script> 
	</body>
</html>