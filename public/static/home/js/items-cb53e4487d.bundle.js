webpackJsonp([2],{122:function(e,i,t){t(42),t(8),e.exports=t(7)},42:function(e,i){!function(){function e(){$(".current-percent").each(function(e){var i,t=$(this);i=t.data("number"),i>100&&(i=100,t.css("borderRadius","7px")),t.css("width",i+"%")})}function i(i,t,a){var s=$("#no-anymore"),n=$(".load-more"),l=$(".look-more"),m=$("#loading");s.hide(),m.show();var v;$.get("/api/itemlist",{type:i,curnum:t,addnum:a}).then(function(i){if(i.success){m.hide();var a=r(i.data.item_list);$(".flex-row").append(a),d(),e(),i.data.more_state?(s.hide(),n.show(),l.show(),v=t+i.data.item_list.length,n.data("num",v).text(c[o].view_more)):(v=t+i.data.item_list.length,n.hide(),s.show(),l.hide()),l.data("num",v)}else layer.msg(i.error||c[o].error);$(".nav-item").removeClass("disabled")})}function t(e){var i='<div class="li-item li-item2">\n            <div class="block-top">\n            <img src="images/exb-img2.png" class="status-tag-img"/>\n            <a href="/pitch/index/'+e.item_id+'" class="pro-pic"><img src="'+e.item_pic+'" alt="'+e.item_theme+'" /></a>\n            </div>\n            <div class="block-bottom">\n            <div class="flag-wrapper">';return"zh-CN"==e.lang&&(1==e.choice&&(i+='<img src="images/flag1.png" />'),1==e.refund&&(i+='<img src="images/flag3.png" />')),"en"==e.lang&&(1==e.choice&&(i+='<img src="images/en_flag1.png" />'),1==e.refund&&(i+='<img src="images/en_flag3.png" />')),i+=' </div>\n            <div class="paddingLeftRight20">\n            <h4><a href="/pitch/index/'+e.item_id+'" class="pro-title" title="'+e.item_theme+'">'+e.item_theme+"</a></h4>\n        <h5>"+e.item_sub_title+'</h5>\n        <div class="block-content">'+e.item_describe+'</div>\n        <div class="raise-funds">\n            <div class="per-line-wrapper">\n            <div class="per-line-left">'+e.target_money_curtype_state+" "+e.sum_money_currency+'</div>\n        <div class="per-line-right">'+e.item_rate+"%</div>\n            </div>",i+=1==e.limit_state?'<div class = "per-line green" >':'<div class = "per-line" >',i+='<div class="per-line-num" style="width:'+e.item_rate+'%"></div>\n            </div>\n            <div class="per-money">\n            <div class="per-money-left">\n            <div>'+c[o].goal+"</div>\n            <div>"+e.target_money_curtype_state+" "+e.target_money+'</div>\n        </div>\n        <div class="per-money-right">',i+=1==e.limit_state?"<div>"+c[o].exclusive+'</div><div  class="per-money-right-date" data-starttime="'+e.starttime+'" data-endtime="'+e.endtime+'" data-item-state="'+e.item_state+'" data-number="'+e.item_rate+'" data-limitstate="'+e.limit_state+'">&nbsp;</div>\n         </div></div></div></div>\n         <div class="bottom-wrapper">':"<div>"+c[o].timeleft+'</div><div  class="per-money-right-date" data-starttime="'+e.starttime+'" data-endtime="'+e.endtime+'" data-item-state="'+e.item_state+'" data-number="'+e.item_rate+'">&nbsp;</div>\n         </div></div></div></div>\n         <div class="bottom-wrapper">',i+=1==e.favorite?'<a class="heart-wrapper2 inactive active1" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke2">&#xe607;</i></a>':'<a class="heart-wrapper2 inactive" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke2">&#xe607;</i></a>',i+=1==e.limit_state?'<a itemid="'+e.item_id+'" class="cat-detail2" href="/pitch/index/'+e.item_id+'">'+c[o].locking+"</a>":'<a itemid="'+e.item_id+'" class="cat-detail2" href="/pitch/index/'+e.item_id+'">'+c[o].participate+"</a>",i+="</div></div></div>"}function a(e){var i='\n            <div class="li-item li-item2">\n                <div class="block-top">\n                   <img src="images/exb-img3.png" class="status-tag-img"/>\n                   <a href="/pitch/index/'+e.item_id+'" class="pro-pic"><img src="'+e.item_pic+'" alt="'+e.item_theme+'" /></a>\n                </div>\n                <div class="block-bottom">\n                    <div class="flag-wrapper">';return"zh-CN"==e.lang&&(1==e.choice&&(i+='<img src="images/flag1.png" />'),1==e.refund&&(i+='<img src="images/flag3.png" />')),"en"==e.lang&&(1==e.choice&&(i+='<img src="images/en_flag1.png" />'),1==e.refund&&(i+='<img src="images/en_flag3.png" />')),i+='</div>\n                    <div class="paddingLeftRight20">\n                        <h4><a href="/pitch/index/'+e.item_id+'" class="pro-title" title="'+e.item_theme+'">'+e.item_theme+"</a></h4>\n                        <h5>"+e.item_sub_title+'</h5>\n                        <div class="block-content">'+e.item_describe+'</div>\n                        <div class="raise-funds">\n                            <div class="un-date">'+c[o].distance_begins+'  \n                            <span  class="per-money-right-date" data-starttime="'+e.starttime+'" data-endtime="'+e.endtime+'" data-item-state="'+e.item_state+'" data-number="'+e.item_rate+'">&nbsp;</span>\n                            </div>\n                            <div class="per-money">\n                                <div class="per-money-left">\n                                    <div>'+c[o].goal+"</div>\n                                    <div> "+e.target_money_curtype_state+" "+e.target_money+'</div>\n                                </div>\n                                <div class="per-money-right">\n                                    <div>'+c[o].start+"</div>\n                                    <div>"+e.plantime+'</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="bottom-wrapper">',i+=1==e.favorite?'<a class="heart-wrapper inactive active1" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>':'<a class="heart-wrapper inactive" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>',i+='\n                        <a class="cat-detail" href="/pitch/index/'+e.item_id+'" >'+c[o].view_details+"</a>\n                    </div>\n                </div>\n            </div>"}function s(e){var i=' <div class="li-item li-item2">\n            <div class="block-top">\n            <img src="images/exb-img4.png" class="status-tag-img"/>\n            <a href="/pitch/index/'+e.item_id+'" class="pro-pic"><img src="'+e.item_pic+'" alt="'+e.item_theme+'" /></a>\n            </div>\n            <div class="block-bottom">\n            <div class="flag-wrapper">';return"zh-CN"==e.lang&&(1==e.choice&&(i+='<img src="images/flag1.png" />'),1==e.refund&&(i+='<img src="images/flag3.png" />')),"en"==e.lang&&(1==e.choice&&(i+='<img src="images/en_flag1.png" />'),1==e.refund&&(i+='<img src="images/en_flag3.png" />')),i+='</div>\n            <div class="paddingLeftRight20">\n            <h4><a href="/pitch/index/'+e.item_id+'" class="pro-title" title="'+e.item_theme+'">'+e.item_theme+"</a></h4>\n        <h5>"+e.item_sub_title+'</h5>\n        <div class="block-content">'+e.item_describe+'</div>\n        <div class="raise-funds">\n            <div class="per-line-wrapper">\n            <div class="per-line-left violet">'+e.target_money_curtype_state+" "+e.sum_money_currency+'</div>\n        <div class="per-line-right violet">'+e.item_rate+'%</div>\n            </div>\n            <div class="per-line">\n            <div class="per-line-num violet" style="width: '+e.item_rate+'%;"></div>\n            </div>\n            <div class="per-money">\n            <div class="per-money-left">\n            <div>'+c[o].goal+"</div>\n            <div>"+e.target_money_curtype_state+" "+e.target_money+'</div>\n        </div>\n        <div class="per-money-right">\n            <div>'+c[o].finish+'</div>\n            <div></div>\n            </div>\n            </div>\n            </div>\n            </div>\n            <div class="bottom-wrapper">',i+=1==e.favorite?'<a class="heart-wrapper inactive active1" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>':'<a class="heart-wrapper inactive" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>',i+='<a class="cat-detail" href="/pitch/index/'+e.item_id+'" >'+c[o].view_details+"</a> </div></div></div>"}function n(e){var i='\n            <div class="li-item">\n            <div class="block-top">\n                <img src="images/exb-img1.png" class="status-tag-img"/>\n                <a href="/pitch/index/'+e.item_id+'" class="pro-pic"><img src="'+e.item_pic+'" alt="'+e.item_theme+'"/></a>\n            </div>\n            <div class="block-bottom">\n                <div class="paddingLeftRight20">\n                    <h4><a href="/pitch/index/'+e.item_id+'" class="pro-title" title="'+e.item_theme+'">'+e.item_theme+"</a></h4>\n                    <h5>"+e.item_sub_title+'</h5>\n                    <div class="block-content">'+e.item_describe+'</div>\n                    <div class="raise-funds">\n                        <div class="raise-money">\n                            <div class="target-account">'+c[o].goal+'</div>\n                            <a class="raise-already btc-font-family  raise-completed "> '+e.target_money_curtype_state+" "+e.target_money+'</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="bottom-wrapper">\n                    <a class="heart-wrapper inactive" itd="'+e.item_id+'" its="'+e.item_state+'" fis="'+e.favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a><a href="/pitch/index/'+e.item_id+'" class="cat-detail">'+c[o].view_details+"</a>\n                </div>\n            </div>\n            </div>";return i}function r(e){for(var i="",r="",d=0;d<e.length;d++){switch(e[d].item_state){case 2:r=t(e[d]);break;case 3:r=s(e[d]);break;case 4:r=a(e[d]);break;case 7:r=n(e[d])}i+=r}return i}function d(){var e=$(".per-money-right-date");e.each(function(e){var i=$(this);if(i.data("hasclock")){var t=i.data("hasclock");clearInterval(parseInt(t))}var a=i.data("starttime"),s=i.data("endtime"),n=i.data("itemState"),r=i.data("limitstate"),d=new Date,l=d.getTime()/1e3;if("3"==n||"7"==n)return void i.text(c[o].finish);var m;m="2"==n&&"1"==r?parseInt(a-l):parseInt(s-l),4==n&&(m=parseInt(a-l));var v=parseInt(m/3600/24),p=parseInt(m/3600%24),g=parseInt(m/60%60),h=parseInt(m%60);if(v<0)return void i.text(c[o].finish);v<10?v="0"+v:v,p<10?p="0"+p:p,g<10?g="0"+g:g,h<10?h="0"+h:h,i.text(v+" "+c[o].clock_day+" "+p+":"+g+":"+h);var f=setInterval(function(){return h>0?(h--,h<10?h="0"+h:h,void i.text(v+" "+c[o].clock_day+" "+p+":"+g+":"+h)):g>0?(g--,g<10?g="0"+g:g,h=59,void i.text(v+" "+c[o].clock_day+" "+p+":"+g+":"+h)):p>0?(p--,p<10?p="0"+p:p,g=59,h=59,void i.text(v+" "+c[o].clock_day+" "+p+":"+g+":"+h)):void(v>0?(v--,v<10?v="0"+v:v,p=23,g=59,h=59,i.text(v+" "+c[o].clock_day+" "+p+":"+g+":"+h)):i.text(c[o].finish))},1e3);i.data("hasclock",f)})}var c={en:{loading:"Loading...",view_more:"View more",bottom:"Already at the bottom~",error:"Sorry, Failed to load items",days:"Days to go",completed:"Success",beginning:"Ready",finish:"Done",only_show:"Show",exhibition:"Exhibition",pledged:"Pledged",goal:"Goal",backer:"Backers",start:"Starting time",creator:"Project Creator",support:"Back This Project",in_progress:"In Progress",nolimited:"No limited",clock_day:"days",favorite_success:"success",favorite_fail:"fail",distance_begins:"Days To Start",clock_hour:"hours",view_details:"View details",participate:"Support Now",locking:"Lock Now",timeleft:"Days To Go",exclusive:"Exclusive lock time"},"zh-CN":{loading:"加载中...",view_more:"查看更多",bottom:"已经到底部了哦~",error:"抱歉，加载更多项目出错",days:"剩余天数",completed:"已完成",beginning:"即将开始",finish:"已结束",only_show:"仅展示",exhibition:"展示项目",pledged:"已筹金额",goal:"目标金额",backer:"支持人数",start:"开始时间",creator:"项目发起人",support:"我要支持",in_progress:"进行中",nolimited:"不限",clock_day:"天",favorite_success:"成功",favorite_fail:"失败",distance_begins:"距离开始",clock_hour:"小时",view_details:"查看详情",participate:"我要参与",locking:"我要锁定",timeleft:"距离结束",exclusive:"距离正式开始"}},o="";$(function(){return o=$("html").attr("lang")||"zh-CN",!!$("#pitches_content").length&&void e()}).on("click",".load-more",function(){var e=this;$(e).text(c[o].loading);var t=$(e).data("num");if(t){var a=$("li.active").data("type"),s=4;i(a,t,s)}}).on("click",".banner-btn",function(){var e=$(".pitches-nav");if(e.length){var i=$("html,body"),t=e.offset().top;i.animate({scrollTop:t},500),t=e.offset().top-$("#header").height(),i.animate({scrollTop:t},500)}}).on("click",".inactive",function(){var e=$(this),i=e.attr("itd");e.attr("its"),$.post("/api/setItemFavorite",{item_id:i}).then(function(i){i.success?(1==i.state?e.addClass("active1"):e.removeClass("active1"),layer.msg(i.error||c[o].favorite_success)):(e.css("color","#337ab7"),layer.msg(i.error||c[o].favorite_fail))})}).on("click",".look-more",function(){var e=this,t=$(e).data("num");if(t){var a=$(".exhibition-list-type.active").data("type"),s=4;i(a,t,s)}}),$(function(){$("#header").addClass("no-fixed");var e=$(".exhibition-list"),t=$(".exhibition-list").offset().top,a=$("#container");$(document).on("scroll",function(){var i=$(this).scrollTop();i>=t?e.hasClass("nav-fixed")||(e.addClass("nav-fixed"),a.css("margin-top","90px")):(e.removeClass("nav-fixed"),a.css("margin-top","0"))});var s=16;$(".load-more").hide(),$(".look-more").hide(),i("all",0,s),$("#pitches_content .exhibition-list").delegate(".exhibition-list-type","click",function(){var e=$(this),t=$(".nav-item");t.addClass("disabled");var a=$("#header"),n=e.offset().top-a.height();$(window).scrollTop()!=n&&($("html,body"),e.offset().top),e.siblings().removeClass("active"),e.addClass("active");var r=$(".project-show").find(".flex-row");r.empty(),$(".load-more").hide(),i(e.data("type"),0,s)})})}()},7:function(e,i){$(function(){$(".heart-wrapper2").click(function(){$(this).addClass("active1").removeClass("inactive")}),$(".heart-wrapper").click(function(){$(this).addClass("active1").removeClass("inactive")}),$(".exhibition-list a").click(function(){$(".exhibition-list a").removeClass("active").addClass("inactive"),$(this).hasClass("active")||$(this).removeClass("inactive").addClass("active")}),$.post("/api/getHomeHeaderPics",{pos:2},function(e){if(e.data.length){for(var i=new Swiper(".swiper-container",{}),t=0;t<e.data.length;t++)i.appendSlide('<a target="_blank" href="'+e.data[t].url+'" style="display: block;height: 200px"  id="banner'+t+'"></a>',"","div"),$("#banner"+t).parent().css({"background-image":"url("+e.data[t].pic+")","background-repeat":"no-repeat","background-size":"cover","text-align":"center","background-position":"center"});i.destroy(),i=new Swiper(".swiper-container",{pagination:".swiper-pagination",loop:!0,grabCursor:!0,paginationClickable:!0,autoplay:5e3,autoplayDisableOnInteraction:!1}),$(".arrow-left").on("click",function(e){e.preventDefault(),i.swipePrev()}),$(".arrow-right").on("click",function(e){e.preventDefault(),i.swipeNext()})}})})},8:function(e,i){!function(){function e(){$.get("/api/getDevelopment",{id:window.item_id}).then(function(e){if(e.success){for(var a="",s=0;s<e.data.length;s++)a+='<div class="pro-area"><div class="pro-area-header"><span class="pro-date">'+e.data[s].time+'</span><span class="circle-point"></span><span class="pro-time">'+e.data[s].createtime+'</span></div><div class="pro-area-body"><p>'+(e.data[s].describe||i[t].start)+"</p></div></div>";$("#event_content").append(a)}else layer.msg(e.error||i[t].get_error)})}var i={en:{content:"Please enter the content",success:"Submit Successfully",moment:"a moment ago",fail:"Failed to Submit",start:"Project start",get_error:"Failed to get data"},"zh-CN":{content:"请输入项目进展内容",success:"发布成功",moment:"刚刚",fail:"发布失败",start:"项目正式开始",get_error:"获取数据失败"}},t="",a=!1;$(function(){return!!$("#progress_content").length&&(t=$("html").attr("lang")||"zh-CN",void e())}).on("click","#add_progress",function(){var e=$(".add-event");e.is(":visible")?e.slideUp():e.slideDown()}).on("click","#add_btn",function(){var e=$("#event_text"),s=$.trim(e.val());return""==s?(layer.tips(i[t].content,e,{tips:[1,"#da2e2b"]}),e.focus(),!1):!a&&(a=!0,void $.post("/api/addItemDevelopment",{item_id:window.item_id,describe:s}).then(function(n){if(n.success){e.val(""),$(".add-event").slideUp(),layer.msg(n.error||i[t].success);var r='<div class="pro-area"><div class="pro-area-header"><span class="pro-date">'+i[t].moment+'</span><span class="circle-point"></span><span class="pro-time">'+$("#td_date").text()+'</span></div><div class="pro-area-body"><p>'+s+"</p></div></div>";$("#event_content").prepend(r)}else layer.tips(n.error||i[t].fail,$("#add_btn"),{tips:[1,"#da2e2b"]});a=!1}))})}()}},[122]);