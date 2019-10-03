jQuery(document).ready(function () {
	$('.menu .has-child').hover(function () {
		$(this).closest('li').find('>ul').css({'opacity': 0, 'margin-top': 15}).show().animate({
			'margin-top': 0,
			'opacity': 1
		}, 300);
	}, function () {
		$(this).closest('li').find('>ul').fadeOut(200, function () {
			$(this).hide();
		});
	});
	$('.menu-mobil .drop').each(function () {
		$(this).children().first().after('<span class="caret"></span>');
	});

	$('.menu-mobil .drop .caret').each(function () {
		$(this).on('click', function () {
			var subMenu = $(this).next('.sub-menu');
			subMenu.toggleClass('active');
			if (subMenu.hasClass('active')) {
				$(this).addClass('opened');
				subMenu.slideDown();
			} else {
				subMenu.slideUp();
				$(this).removeClass('opened');
			}
		})
	});

	$('.mobile-trigger').on('click', function (e) {
		e.preventDefault();
		$('.mobilNavConatiner').toggleClass('is_active');
		$('body').toggleClass('is_active_body');
	});
	$('.mobile-close').on('click', function (e) {
		e.preventDefault();
		$('.mobilNavConatiner').removeClass('is_active');
		$('body').removeClass('is_active_body');
	});

	//scroll to
	$(".scrollHead").click(function () {
		$("html, body").delay(200).animate({scrollTop: $('#row1').offset().top}, 1000);
	});

	$(".back-to-top").click(function () {
		$("html, body").delay(200).animate({scrollTop: 0}, 1000);
	});

	//change div order
	$(function () {
		$(window).resize(myResizeFunction).trigger('resize');
	});

	function myResizeFunction() {
		if ($(window).width() < 769) {
			$(".screenshots .change-order").each(function () {
				$(this).find(".col-left").remove().insertAfter($(this).find(".col-right"));
			});

		} else {
			$(".screenshots .change-order").each(function () {
				$(this).find(".col-left").remove().insertBefore($(this).find(".col-right"));
			});
		}
	}

	$(".screenshots .change-order-onload").each(function () {
		$(this).find(".col-left").remove().insertAfter($(this).find(".col-right"));
	});
	$(".mobilNavConatiner").removeClass('disable');

	//WOW init
	new WOW().init();

	var swiper = new Swiper(".swiper-container", {
		effect: "coverflow",
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: 45,
			depth: 100,
			modifier: 2.5,
			slideShadows : false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
	});
	swiper.slideTo(1);

});
