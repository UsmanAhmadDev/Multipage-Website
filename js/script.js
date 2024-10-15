(function($) {
	
	"use strict";

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();

	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul.navigation').onePageNav();
	}

	//Hide Bootstrap Menu On Click over Mobile View
	$('.scroll-nav ul.navigation > li > a').on('click', function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			$('.nav-outer .navbar-toggle').trigger( "click" );
		}
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).parent('li').siblings().find('ul').slideUp(500);
			$(this).parent('li').siblings().find('.dropdown-btn').removeClass('active');
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	///Side Content Toggle
	if($('.main-header .outer-box .sidebar-btn').length){
		//Show Form
		$('.main-header .outer-box .sidebar-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('side-content-visible');
		});
		//Hide Form
		$('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('side-content-visible');
		});
	}

	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		$('.hidden-bar').mCustomScrollbar({
		    theme:"light"
		});
	}

	//Product Tabs
	if($('.project-section').length){
		$('.project-section .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-section .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-section .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}


$(function() {
     $('.vertical-slider').on('init', function(event, slick) {
          $(this).append('<div class="slick-counter"><div class="count-num"><span class="current"></span> / <span class="total"></span></div></div>');
          $('.current').text(slick.currentSlide + 1);
          $('.total').text(slick.slideCount);
     })
          .slick({
          		autoplay: true,
	          	autoplaySpeed: 2000,
		        dots: false,
		        // nav:true;
		        vertical: true,
		        infinite: true,
		        centerMode: true,
		        slidesToShow: 1,
		        // vertical Swap
		        verticalSwiping: true,
		        slidesToScroll: 1,
		        responsive: [{
			    breakpoint: 991,
			    settings: {
			      autoplay: false,
			    }
			  }]
     })
          .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          $('.current').text(nextSlide + 1);
     });

});
	
	// Slide Mouse Wheel
	const slider = $(".vertical-slider");
	slider.on('wheel', (function(e) {
	  e.preventDefault();

	  if (e.originalEvent.deltaY < 0) {
	    $(this).slick('slickNext');
	  } else {
	    $(this).slick('slickPrev');
	  }
	}));

	$(function(){
		if ($('body').is('.home-body')) {
			(function () {
				const second = 1000,
				    minute = second * 60,
				    hour = minute * 60,
				    day = hour * 24;

				//I'm adding this section so I don't have to keep updating this pen every year :-)
				//remove this if you don't need it
				let today = new Date(),
				  dd = String(today.getDate()).padStart(2, "0"),
				  mm = String(today.getMonth() + 1).padStart(2, "0"),
				  yyyy = today.getFullYear(),
				  nextYear = yyyy + 1,
				  dayMonth = "09/30/",
				  birthday = dayMonth + yyyy;

				today = mm + "/" + dd + "/" + yyyy;
				if (today > birthday) {
				birthday = dayMonth + nextYear;
				}
				//end
				const countDown = new Date(birthday).getTime(),
				  x = setInterval(function() {    

				    const now = new Date().getTime(),
			          distance = countDown - now;
			          var cHours = Math.floor((distance % (day)) / (hour));
			         	cHours = Leadhour(cHours);
			         	var cMinuts = Math.floor((distance % (hour)) / (minute));
			         	cMinuts = Leadmin(cMinuts);
			         	var cSec = Math.floor((distance % (minute)) / second);
			         	cSec = Leadsec(cSec);
				     document.getElementById("days").innerText = Math.floor(distance / (day)),
				     document.getElementById("hours").innerText = cHours,
				     document.getElementById("minutes").innerText = cMinuts,
				     document.getElementById("seconds").innerText = cSec;

				    //do something later when date is reached
				    if (distance < 0) {
				     document.getElementById("headline").innerText = "It's my birthday!";
				     document.getElementById("countdown").style.display = "none";
				     document.getElementById("content").style.display = "block";
				     clearInterval(x);
				    }
				    //seconds
				  }, 0)
			}());
				function Leadhour(hours) {
				  return (hours < 10 ? '0' : '') + hours;
				}
				function Leadmin(minute) {
				  return (minute < 10 ? '0' : '') + minute;
				}
				function Leadsec(seconds) {
				  return (seconds < 10 ? '0' : '') + seconds;
				}
		}
	})

	$(document).ready(function(){
		$('.counter-num').counterUp({
			delay:10,
			time:2000
		});
	});

	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

})(window.jQuery);
