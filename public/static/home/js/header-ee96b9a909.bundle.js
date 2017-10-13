webpackJsonp([12], {
	116: function(t, e) {
		$(function() {
			function t() { $.get("/api/getMarketInfoV1").then(function(t) { t.success && ($("#btc").html(t.data[0].btccny), $("#eth").html(t.data[0].ethcny)) }) } t();
			var e = $("#nav_list li .active"),
				i = $("#line");
			e.length && (i.css({ width: e.width(), left: e.offset().left, transition: "all 0.4s ease-in-out" }), $("#nav_list a").mouseenter(function() { i.css({ width: $(this).width(), left: $(this).offset().left }) }).click(function() { $("#nav_list a").removeClass("active"), $(this).addClass("active"), i.css({ width: $(this).width(), left: $(this).offset().left }) }).mouseleave(function() { e = $(".active"), i.css({ width: e.width(), left: e.offset().left }) }))
		})
	}
}, [116]);