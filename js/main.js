$('.header__slider').slick({
	dots: true,
	dotsClass: 'hero__dots',
	draggable: false,
});

$('.house__slider').slick({
	dots: true,
	dotsClass: 'house__dots',
	draggable: false,
});

$('.burger-btn').on('click' , function() {
	$('.modal').toggleClass('modal_active');
});