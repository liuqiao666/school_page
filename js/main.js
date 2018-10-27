$(".box li").mouseenter(function(){
	$(this).children("p").animate({
		"height":"30px",
	},500);
	$(this).children("div:even").animate({
		"width":"100%",
	},500).css("background","#0a2d6b");
	$(this).children("div:odd").animate({
		"height":"100%",
	},500).css("background","#0a2d6b");
});

$(".box li").mouseleave(function(){
	$(this).children("p").animate({
		"height":"0px"
	});
	$(this).children("div:even").animate({
		"width":"0%",
	},500).css("background","#0a2d6b");
	$(this).children("div:odd").animate({
		"height":"0%",
	},500).css("background","#0a2d6b");

});