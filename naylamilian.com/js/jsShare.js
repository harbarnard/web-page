	/*
	Theme Name: Artus
	Version: 1.0
	Author: seven media
	
	This theme was designed and built by seven media,
	http://themeforest.net/user/sevenmedia
	in Themeforest
	*/
	
	
	// RESET //
	
	(function($) {
	$.fn.extend({
	jsShare: function(options) {
	var settings = $.extend({
	minwidth: 40,
	maxwidth: 197,
	animate: true,
	speed: 1000,
	initialdisplay: 'compact',
	
	facebook: true,
	twitter: true,
	sevenmedia: true,
	devian: true,
	
	rss: true,
	picasa: true,
	
	yoursitetitle: '',
	yoursiteurl: '',
	yoursitename: '',
	desc: ''
	}, options);
	return this.each(function() {
	var container = $(this);
	container.addClass('social-media-share');
	var inner = $('<div/>').addClass('inner');
	container.append(inner);
	var buttons = $('<ul/>');
	container.append(buttons);
	var tooltip = $('<div/>').addClass('social-media-share-tooltip');
	container.before(tooltip);
	var mediaSource = [
	"http://www.facebook.com/share.php?u={TITLE}{ADDRESS}",
	"http://www.twitter.com/home?status={TITLE}{ADDRESS}",
	"http://www.themeforest.net/user/sevenmedia",
	"http://www.deviantart.com",
	"http://www.google.com/reader/link?url={ADDRESS}&title={TITLE}&snippet={SDESCRIPTION}&srcURL={BLOGURL}&srcTitle={BLOGTITLE}",
	"http://www.picasa.google.com"];
	
	function getButton(index, button, title) {
	var link = mediaSource[index]
	.replace('{ADDRESS}', encodeURIComponent(location.href))
	.replace('{TITLE}', encodeURIComponent(document.title))
	.replace('{SDESCRIPTION}', encodeURIComponent(settings.desc))
	.replace('{BLOGURL}', encodeURIComponent(settings.yoursiteurl))
	.replace('{BLOGTITLE}', encodeURIComponent(settings.yoursitetitle))
	.replace('{BLOGNAME}', encodeURIComponent(settings.yoursitename));
	
	return $('<li/>').append($('<a/>')
	.attr('href', link)
	.attr('title', title)
	.attr('target', '_blank')
	.append($('<img/>')
	.attr('src', 'images/footer/' + button + '.png')
	.attr('alt', '').css({ width: 16, height: 16, marginTop: 8 })).hover(function() {
	var dummy = $('<div/>').html(title).css('display', 'none');
	container.append(dummy);
	var left = Math.round($(this).offset().left - dummy.width() / 2);
	dummy.remove();
	var b = $(this);
	if (settings.animate)
	b.find('img').stop(false, true).animate({ height: 24, width: 24, marginTop: 0 }, 300);
	tooltip.html(b.attr('title'));
	tooltip.css({ left: left,
	top: function() { return container.offset().top - $(this).height(); }
	}).stop(false, true).fadeIn("slow");
	}, function() {
	if (settings.animate)
	$(this).find('img').stop(false, true).animate({ width: 16, height: 16, marginTop: 8 }, 300);
	tooltip.stop(false, true).fadeOut("slow");
	
							}));
	}
	
	$.each(mediaSource, function(index, media) {
	switch (index) {
	case 0:
	if (settings.facebook) buttons.append(getButton(index, '0', 'Share with Facebook')); break;
	case 1:
	if (settings.twitter) buttons.append(getButton(index, '1', 'Share with Twitter')); break;
	case 2:
	if (settings.sevenmedia) buttons.append(getButton(index, '2', 'Profil on Seven Media')); break;
	case 3:
	if (settings.devian) buttons.append(getButton(index, '3', 'Profil on Devian Art')); break;
	case 4:
	if (settings.rss) buttons.append(getButton(index, '4', 'Share with RSS')); break;
	case 5:
	if (settings.picasa) buttons.append(getButton(index, '5', 'Go to Picasa')); break;
	}
	});
	if (settings.initialdisplay == 'expanded') {
	container.css({ width: settings.maxwidth });
	inner.toggle(function() { container.stop().animate({ width: settings.minwidth }, settings.speed); }, function() { container.stop().animate({ width: settings.maxwidth }, settings.speed); });
	}
	else {
	container.css({ width: settings.minwidth });
	inner.toggle(function() { container.stop().animate({ width: settings.maxwidth }, settings.speed); }, function() { container.stop().animate({ width: settings.minwidth }, settings.speed); });
	}
	});
	}
	});
	})(jQuery);