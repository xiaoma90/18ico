webpackJsonp([9],{120:function(e,t){!function(){function e(){$(".current-percent").each(function(e){var t,i=$(this);t=i.data("number"),t>100&&(t=100,i.css("borderRadius","7px")),i.css("width",t+"%")})}function t(t,s,n){var c=$("#no-anymore"),l=$(".load-more"),d=$("#loading");c.hide(),d.show();var p;$.get("/api/itemlist",{type:t,curnum:s,addnum:n}).then(function(t){if(t.success){d.hide();var n=i(t.data.item_list);$(".flex-row").append(n),a(),e(),t.data.more_state?(c.hide(),l.show(),$(".look-more").show(),p=s+t.data.item_list.length,l.data("num",p).text(o[r].view_more)):(l.hide(),c.show(),p=s+t.data.item_list.length,$(".look-more").hide()),$(".look-more").data("num",p)}else layer.msg(t.error||o[r].error);$(".nav-item").removeClass("disabled")})}function i(e){for(var t="",i=0;i<e.length;i++)t+='<div class="li-item"><div class="block-top"><img src="images/exb-img1.png" class="status-tag-img"/><a href="/pitch/index/'+e[i].item_id+'" class="pro-pic"><img src="'+e[i].item_pic+'" alt="" /></a></div><div class="block-bottom"><div class="paddingLeftRight20"><h4><a href="/pitch/index/'+e[i].item_id+'" class="pro-title" title="'+e[i].item_theme+'">'+e[i].item_theme+"</a></h4><h5>"+e[i].item_theme+'</h5><div class="block-content">'+e[i].item_describe+'</div><div class="raise-funds"><div class="raise-money"><div class="target-account">'+o[r].goal+'</div><a class="raise-already btc-font-family  raise-completed "> '+e[i].target_money_curtype_state+" "+e[i].target_money+'</a></div></div></div><div class="bottom-wrapper">',t+=1==e[i].favorite?'<a class="heart-wrapper inactive active1" itd="'+e[i].item_id+'" its="'+e[i].item_state+'" fis="'+e[i].favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>':'<a class="heart-wrapper inactive" itd="'+e[i].item_id+'" its="'+e[i].item_state+'" fis="'+e[i].favorite+'"><i class="iconfont heartStroke">&#xe607;</i></a>',t+='      <a href="/pitch/index/'+e[i].item_id+'" class="cat-detail">'+o[r].view_details+"</a></div></div></div>";return t}function a(){var e=$(".raise-countdown");e.each(function(e){var t=$(this);if(""!=t.data("hasclock")){var i=t.data("hasclock");clearInterval(parseInt(i))}var a=t.data("starttime"),s=t.data("endtime"),n=t.data("itemState"),c=new Date,l=c.getTime()/1e3;if(a>l||"4"==n)return $(".raise-countdown-box").hide(),void t.text("");if("3"==n||"7"==n)return void t.text(o[r].finish);var d=parseInt(s-l),p=parseInt(d/3600/24),h=parseInt(d/3600%24),v=parseInt(d/60%60),m=parseInt(d%60);if(p<0)return void t.text(o[r].finish);p<10?p="0"+p:p,h<10?h="0"+h:h,v<10?v="0"+v:v,m<10?m="0"+m:m,t.text(p+" "+o[r].clock_day+" "+h+":"+v+":"+m);var f=setInterval(function(){return m>0?(m--,m<10?m="0"+m:m,void t.text(p+" "+o[r].clock_day+" "+h+":"+v+":"+m)):v>0?(v--,v<10?v="0"+v:v,m=59,void t.text(p+" "+o[r].clock_day+" "+h+":"+v+":"+m)):h>0?(h--,h<10?h="0"+h:h,v=59,m=59,void t.text(p+" "+o[r].clock_day+" "+h+":"+v+":"+m)):void(p>0?(p--,p<10?p="0"+p:p,h=23,v=59,m=59,t.text(p+" "+o[r].clock_day+" "+h+":"+v+":"+m)):t.text(o[r].finish))},1e3);t.data("hasclock",f)})}var o={en:{loading:"Loading...",view_more:"View more",bottom:"Already at the bottom~",error:"Sorry, Failed to load items",days:"Days to go",completed:"Success",beginning:"Ready",finish:"Done",only_show:"Show",exhibition:"Exhibition",pledged:"Pledged",goal:"Goal",backer:"Backers",start:"Starting time",creator:"Project Creator",support:"Back This Project",in_progress:"In Progress",nolimited:"No limited",clock_day:"days",favorite_success:"success",favorite_fail:"fail",view_details:"View details"},"zh-CN":{loading:"加载中...",view_more:"查看更多",bottom:"已经到底部了哦~",error:"抱歉，加载更多项目出错",days:"剩余天数",completed:"已完成",beginning:"即将开始",finish:"已结束",only_show:"仅展示",exhibition:"展示项目",pledged:"已筹金额",goal:"目标金额",backer:"支持人数",start:"开始时间",creator:"项目发起人",support:"我要支持",in_progress:"进行中",nolimited:"不限",clock_day:"天",favorite_success:"成功",favorite_fail:"失败",view_details:"查看详情"}},r="";$(function(){return r=$("html").attr("lang")||"zh-CN",!!$("#pitches_content").length&&void e()}).on("click",".load-more",function(){var e=this;$(e).text(o[r].loading);var i=$(e).data("num");if(i){var a=$(".exhibition-list-type").data("type");alert(a);var s=4;t(a,i,s)}}).on("click",".banner-btn",function(){var e=$(".pitches-nav");if(e.length){var t=$("html,body"),i=e.offset().top;t.animate({scrollTop:i},500),i=e.offset().top-$("#header").height(),t.animate({scrollTop:i},500)}}).on("click",".look-more",function(){var e=this,i=$(e).data("num");if(i){var a=$(".exhibition-list-type").data("type"),o=4;t(a,i,o)}}).on("click",".inactive",function(){var e=$(this),t=e.attr("itd");e.attr("its"),$.post("/api/setItemFavorite",{item_id:t}).then(function(t){t.success?(1==t.state?e.addClass("active1"):e.removeClass("active1"),layer.msg(t.error||o[r].favorite_success)):(e.css("color","#337ab7"),layer.msg(t.error||o[r].favorite_fail))})}),$(function(){var e=16;$(".load-more").hide(),$(".look-more").hide(),t("library",0,e),$("#pitches_content .exhibition-list").delegate(".exhibition-list-type","click",function(){var i=$(this),a=$(".nav-item");a.addClass("disabled");var o=$("#header"),r=i.offset().top-o.height();if($(window).scrollTop()!=r){var s=$("html,body"),n=i.offset().top;s.animate({scrollTop:n},500),n=i.offset().top-o.height(),s.animate({scrollTop:n},500)}i.siblings().removeClass("active"),i.addClass("active");var c=$(".project-show").find(".flex-row");c.empty(),$(".load-more").hide(),t(i.data("type"),0,e)})}),$.post("/api/getHomeHeaderPics",{pos:3},function(e){if(e.data.length){for(var t=new Swiper(".swiper-container",{}),i=0;i<e.data.length;i++)t.appendSlide('<a target="_blank" href="'+e.data[i].url+'" style="display: block;height: 200px"  id="banner'+i+'"></a>',"","div"),$("#banner"+i).parent().css({"background-image":"url("+e.data[i].pic+")","background-repeat":"no-repeat","background-size":"cover","text-align":"center","background-position":"center"});t.destroy(),t=new Swiper(".swiper-container",{pagination:".swiper-pagination",loop:!0,grabCursor:!0,paginationClickable:!0,autoplay:5e3,autoplayDisableOnInteraction:!1}),$(".arrow-left").on("click",function(e){e.preventDefault(),t.swipePrev()}),$(".arrow-right").on("click",function(e){e.preventDefault(),t.swipeNext()})}})}()}},[120]);