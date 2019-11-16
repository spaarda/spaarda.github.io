$('.header__slider').slick({
	dots: true,
	dotsClass: 'hero__dots',
	draggable: false,
});

$('.top-menu__burger').on('click' , function() {
	$('.modal').toggleClass('modal_active');
});