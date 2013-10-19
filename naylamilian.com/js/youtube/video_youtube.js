	/*
	Theme Name: Arturo
	Version: 1.0
	Author: seven media
	
	This theme was designed and built by seven media,
	http://themeforest.net/user/sevenmedia
	in Themeforest
	*/
	
	
	/* RESET */
	
	Spry.Utils.addLoadListener
	(function() {
	function videoGallerySetupDone(){
	/* This will get called when component is ready to receive public function calls. */
	//console.log('videoGallerySetupDone');
	}
	
	var jsReady = false;//for flash/js communication
	
	// FLASH EMBED PART
	var flashvars = {},params = {},attributes = {};
	params.quality = "high";
	params.scale = "noscale";
	params.salign = "tl";
	params.wmode = "transparent";
	params.bgcolor = "#111111";
	params.devicefont = "false";
	params.allowfullscreen = "true";
	params.allowscriptaccess = "always";
	attributes.id = "flashPreview";
	swfobject.embedSWF("preview.swf", "flashPreview", "100%", "100%", "9.0.0", "expressInstall.swf", flashvars, params, attributes);
	
	//functions called from flash
	function flashVideoEnd() {
	jQuery.videoGallery.flashVideoEnd(); 
	}
	
	function flashVideoStart() {
	jQuery.videoGallery.flashVideoStart(); 
	}
	
	function togglePlayBtn(on) {
	jQuery.videoGallery.togglePlayBtn(on); 
	}
	
	function visitUrl() {
	jQuery.videoGallery.visitUrl(); 
	}
	
	function dataUpdateFlash(bl,bt,t,d) {
	jQuery.videoGallery.dataUpdateFlash(bl,bt,t,d); 
	}
	
	function flashWaitingHandler() {
	jQuery.videoGallery.flashWaitingHandler();
	}
	
	function flashPlayingHandler() {
	jQuery.videoGallery.flashPlayingHandler(); 
	}
	
	function isReady() {
	return jsReady;
	}
	
	// SETTINGS
	var vg_settings = {
	/* componentFixedSize: true/false. Responsive = false, fixed = true */
	componentFixedSize: false,
	/*defaultVolume: 0-1 */
	defaultVolume:0.7,
	/*autoPlay: true/false (default false on mobile) */
	autoPlay:true,
	/*randomPlay: true/false */
	randomPlay:false,
	/* loopingOn: on playlist end rewind to beginning (last item in playlist) */
	loopingOn: true,
	/* defaultGallerySide: bottom / right (default thumbnail side)  */
	defaultGallerySide: 'bottom',
	/* autoOpenPlaylist: true/false. Auto open playlist after playlist setup */
	autoOpenPlaylist: true,
	/* closePlaylistOnVideoSelect: close playlist on video select */
	closePlaylistOnVideoSelect: false,
	/* onPlaylistEndGoToUrl: true/false, navigate to url on playlist end (last item in playlist). Note: this will override loopingOn! */
	onPlaylistEndGoToUrl: false,
	/* onPlaylistEndUrl: url to redirect to */
	onPlaylistEndUrl: 'http://www.google.com',
	/* onPlaylistEndTarget: _blank (open in new window) / _parent (open in same window) */
	onPlaylistEndTarget: '_parent',
	/*useCookieDetection; use detection with local storage/cookies of skipping intro if already visited (true/false). 'onPlaylistEndGoToUrl' must be 'true' for this to happen. */
	useCookieDetection: false,
	/* useKeyboardNavigation: true/false (left arrow=previous media, right arrow=next media, space=pause/play, m=mute/unmute) */
	useKeyboardNavigation: false,
	
	<!-- DEEPLINKING SETTINGS -->
	<!-- useDeeplink: true, false -->
	useDeeplink:false,
	<!-- startUrl: deeplink start url, enter 'ul' data-address/'li' data-address (two levels). Or just 'ul' data-address (single level). -->
	startUrl: '/playlist1/youtube_single1',
	/* outputDeeplinkData: console.log out playlist deeplink data */
	outputDeeplinkData:false,
	
	<!-- NO DEEPLINKING SETTINGS -->
	/*activePlaylist: enter element 'id' attributte */
	activePlaylist:'playlist1'
	};
	
	jQuery(document).ready(function() {
	jsReady = true;
	//init component
	jQuery.videoGallery('#componentWrapper', '#flashPreview', vg_settings);
	vg_settings = null;
	});
	
	});
