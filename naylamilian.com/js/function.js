	/*
	Theme Name: Arturo
	Version: 1.0
	Author: seven media
	
	This theme was designed and built by seven media,
	http://themeforest.net/user/sevenmedia
	in Themeforest
	*/
	
	
	/* social */
	$(document).ready(function() {
	$('#buttons').jsShare({ maxwidth: 197 }); <!--social no expand-->
	$('#buttons-expanded').jsShare({ initialdisplay: 'expanded', maxwidth: 197 }); <!--social width expand-->
	});
	
	
	/* font smirnof */
	Cufon.replace('.menu a, .caption,  #logo_name, .title_message, .logo_name, .title_message2, p.change_link, p.change_link2',{ hover: true }); <!--font smirnof-->


	/* footer */
	jQuery(function($) {
	var open = false;
	$('#footerSlideButton').click(function () {
	if(open === false) {
	$('#footerSlideContent').animate({ height: '71px' }); <!--footer animation-->
	$(this).css('backgroundPosition', 'bottom left');
	open = true;
	} else {
	$('#footerSlideContent').animate({ height: '0px' }); <!--footer animation-->
	$(this).css('backgroundPosition', 'top left');
	open = false;
	}
	});		
	});
	
	
	/* slide contact top */
	jQuery(function($) {
	$('#slideClick').toggle(function() {
	$(this).parent().animate({top:'-600px'}, {queue:false, duration: 600}); <!--tab slide top animation-->
	}, function() {
	$(this).parent().animate({top:'100px'}, {queue:false, duration: 600}); <!--tab slide top animation-->
	});	
	});
	
	
	
	/* slide centent left */
	jQuery(function($) {
	$('#slideClick2').toggle(function() {
	$('#logininner').animate({left:'-1000px'}, {queue:false, duration: 800}); <!--tab slide left animation-->
	}, function() {
	$('#logininner').animate({left:'0px'}, {queue:false, duration: 800}); <!--tab slide left animation-->
	});	
	});

	$(document).ready(function() {
	  $('#logininner').animate({left:'0px'}, {queue:false, duration: 800});
	});


	/* tweets */
	jQuery(function($){
	$(".tweet").tweet({
	username: "seven_media",  <!--tweet user name-->
	page: 1,
	avatar_size: 0,
	count: 3,
	loading_text: "loading tweets..."
	}).bind("loaded", function() {
	var ul = $(this).find(".tweet_list");
	var ticker = function() {
	setTimeout(function() {
	ul.find('li:first').animate( {marginTop: '-4em'}, 500, function() {
	$(this).detach().appendTo(ul).removeAttr('style');
	});
	ticker();
	}, 5000);
	};
	ticker();
	});
	});
	

	/* audioplayer */
	Spry.Utils.addLoadListener(function() {

	var playerinstance=bgaudioplayer({
	audioid: 'mybgplayer', 
	audiointerface: 'mybgplayerui', 
	autoplay: true, 
	persistTimeLine: true, 
	volume: 0.5,  <!--volume level-->
	volumelevels: 15 
	})
	});
	
	/* pretty photo */
	$(document).ready(function(){
    $("area[rel^='prettyPhoto']").prettyPhoto();
    $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, autoplay_slideshow: false});
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
    });
	
