$('.header__slider').slick({
	dots: true,
	dotsClass: 'hero__dots',
	draggable: false,
});

$('.house__slider').slick({
	dots: true,
	dotsClass: 'house__dots',
	draggable: false,
	adaptiveHeight: true,
});

$('.burger-btn').on('click' , function() {
	$('.modal').toggleClass('modal_active');
});