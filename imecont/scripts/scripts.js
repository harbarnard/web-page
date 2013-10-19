/*-----------------------------------------------------------------------------------*/
/*	Responsive design
/*-----------------------------------------------------------------------------------*/
var ADAPT_CONFIG = {
	path: 'styles/common-css/',
	dynamic: true,
	range: ['0px to 768px = 0-768.css','768px to 960px = 768-960.css','960px to 1080px = 960-1080.css']
};






/*-----------------------------------------------------------------------------------*/
/*	Mobile menu init
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
	$('.sf-menu').mobileMenu({
    	defaultText: 'Navigate to...',
    	className: 'select-menu',
    	subMenuDash: '&ndash;&ndash;'
	});
});






/*-----------------------------------------------------------------------------------*/
/*	Sf-menu init
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() { 
	$('ul.sf-menu').superfish({ 
    	delay:       300,                   // one second delay on mouseout 
        animation:   {opacity:'show'},  	// fade-in and slide-down animation 
        speed:       'fast',                // faster animation speed 
		minWidth:    12,  					// minimum width of sub-menus in em units 
        maxWidth:    27,   					// maximum width of sub-menus in em units 
        extraWidth:  1,     				// extra width can ensure lines do not sometimes turn over 
        autoArrows:  false,                 // disable generation of arrow mark-up 
        dropShadows: false                  // disable drop shadows 
	}); 
});





/*-----------------------------------------------------------------------------------*/
/*	Validate form
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$("#quick-contact-form").validate({
			
		//override error message display
		errorElement: "div",
		wrapper: "div",
		errorPlacement: function(error, element) {
		offset = element.offset();
		error.insertAfter(element)
		error.addClass('error-message');
		//error.css('position', 'absolute');
		//error.css('left', offset.left + element.outerWidth());
		//error.css('top', offset.top);
		}
					
	});
	
	$("#commentform").validate({
				
		//override error message display
		errorElement: "div",
		wrapper: "div",
		errorPlacement: function(error, element) {
		offset = element.offset();
		error.insertAfter(element)
		error.addClass('error-message');
		//error.css('position', 'absolute');
		//error.css('left', offset.left + element.outerWidth());
		//error.css('top', offset.top);
		}
					
	});
	
	$("#contactform").validate({
				
		//override error message display
		errorElement: "div",
		wrapper: "div",
		errorPlacement: function(error, element) {
		offset = element.offset();
		error.insertAfter(element)
		error.addClass('error-message');
		//error.css('position', 'absolute');
		//error.css('left', offset.left + element.outerWidth());
		//error.css('top', offset.top);
		}
					
	});
});








/*-----------------------------------------------------------------------------------*/
/*	PrettyPhoto init
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
		//opacity: 0.30,
		//show_title: false
		//theme: 'dark_rounded'
	});	
});


  




		
		
/*-----------------------------------------------------------------------------------*/
/*	Portfolio hover item effect
/*-----------------------------------------------------------------------------------*/
jQuery(".img-opacity").live({
	mouseover:
		function() {
			jQuery(this).animate({opacity: 0.15}, 300);  
		},
	mouseout:
		function() {
			jQuery(this).animate({opacity: 1}, 300);
		}
	}
);








/*-----------------------------------------------------------------------------------*/
/*	Flexslider
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {				
	$('.flexslider').flexslider({
		animation: 'fade'
		});	
	$('#main-flexslider').flexslider({
		animation: 'fade',
		direction:'horizontal',
		slideshowSpeed: 7000,   //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationSpeed: 600,  //Integer: Set the speed of animations, in milliseconds  
		
		// Primary Controls
		controlNav: 1,        //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: 1		
    });		
});







/*-----------------------------------------------------------------------------------*/
/*	Filterable portfolio
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {	
	function portfolio_quicksand() {		
		// Setting Up Our Variables
		var $filter;
		var $container;
		var $containerClone;
		var $filterLink;
		var $filteredItems		
		// Set Our Filter
		$filter = $('#portfolio-filter li.active a').attr('id');		
		// Set Our Filter Link
		$filterLink = $('#portfolio-filter li a');		
		// Set Our Container
		$container = $('div#portfolio-wrap');		
		// Clone Our Container
		$containerClone = $container.clone();		
		// Apply our Quicksand to work on a click function
		// for each for the filter li link elements
		$filterLink.click(function(e) 	{
			// Remove the active class
			$('#filter li').removeClass('active');			
			// Split each of the filter elements and override our filter
			$filter = $(this).attr('class').split(' ');			
			// Apply the 'active' class to the clicked link
			$(this).parent().addClass('active');			
			// If 'all' is selected, display all elements
			// else output all items referenced to the data-type
			if ($filter == 'all') {
				$filteredItems = $containerClone.find('div.portfolio-item'); 
			}
			else {
				$filteredItems = $containerClone.find('div.portfolio-item[data-type~=' + $filter + ']'); 
			}			
			// Finally call the Quicksand function
			$container.quicksand($filteredItems, 
			{
				// The Duration for animation
				duration:'' ,
				// the easing effect when animation
				easing: '',
				// height adjustment becomes dynamic
				adjustHeight: '' 
			});			
			//Initalize our PrettyPhoto Script When Filtered
			$container.quicksand($filteredItems, 
				function () { lightbox(); }
			);			
		});
	}		
	if(jQuery().quicksand) {
		portfolio_quicksand();	
	}		
	function lightbox() {
		// Apply PrettyPhoto to find the relation with our portfolio item
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
		});
	}	
	if(jQuery().prettyPhoto) {
		lightbox();
	}	
});







/*-----------------------------------------------------------------------------------*/
/*	Accordion
/*-----------------------------------------------------------------------------------*/
$(function() {
	$(".accordion").accordion({
		autoHeight: false,
		collapsible: true
	});
});







/*-----------------------------------------------------------------------------------*/
/*	Tabs
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.tabs').tabs({ 
		fx: { opacity:'toggle'},
		selected:0
	});
});