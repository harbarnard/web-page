		/*
	Theme Name: Artus
	Version: 1.0
	Author: seven media
	
	This theme was designed and built by seven media,
	http://themeforest.net/user/sevenmedia
	in Themeforest
	*/
	
	
	// RESET //
	
	Spry.Utils.addLoadListener
	(function () {
	$('.item').click(function () {
	var $this = $(this);
	expand($this);
	}, function () {
	var $this = $(this);
	collapse($this);
	});
	function expand($elem) {
	var angle = 0;
	var t = setInterval(function () {
	if (angle == 1440) {
	clearInterval(t);
	return;
	}
	angle += 40;
	$('.link', $elem).stop().animate({
	rotate : '+=-40deg'
	}, 0);
	}, 10);
	$elem.stop().animate({
	width : '200px'
	}, 1500).find('.item_content').fadeIn(600, function () {
	$(this).find('p').stop(true, true).fadeIn(600);
	});
	}
	function collapse($elem) {
	var angle = 1440;
	var t = setInterval(function () {
	if (angle == 0) {
	clearInterval(t);
	return;
	}
	angle -= 40;
	$('.link', $elem).stop().animate({
	rotate : '+=40deg'
	}, 0);
	}, 10);
	$elem.stop().animate({
	width : '35px'
	}, 5000).find('.item_content').stop(true, true).fadeIn().find('p').stop(false, false).fadeIn();
	}
	});
