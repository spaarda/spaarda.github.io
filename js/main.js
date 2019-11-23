$(document).ready( function() {
	"use strict"

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

	$('.projects__houses-tab').on('click', function(){
		hideAll();
		removeActive();
		$(this).addClass('projects__btn_active');
		showProjects('.projects-list__houses');
	});


	$('.projects__cottages-tab').on('click', function(){
		hideAll();
		removeActive();
		$(this).addClass('projects__btn_active');
		showProjects('.projects-list__cottages');
	});


	$('.projects__baths-tab').on('click', function(){
		hideAll();
		removeActive();
		$(this).addClass('projects__btn_active');
		showProjects('.projects-list__baths');
	});


	$('.projects__garden-houses-tab').on('click', function(){
		hideAll();
		removeActive();
		$(this).addClass('projects__btn_active');
		showProjects('.projects-list__garden-houses');
	});


	$('.projects__other-tab').on('click', function(){
		hideAll();
		removeActive();
		$(this).addClass('projects__btn_active');
		showProjects('.projects-list__other');
	});

	function hideAll() {
		let projectsLists =  {
		class1: ".projects-list__houses", 
		class2: ".projects-list__baths",
		class3: ".projects-list__other", 
		class4: ".projects-list__cottages", 
		class5: ".projects-list__garden-houses", 
		};
		for (var key in projectsLists) {
			let test = projectsLists[key];
			$(test).css('display','none');
		}
	};

	function showProjects(a) {
		$(a).css('display','inline-block');
	};

	function removeActive() {
		$('.projects__btn').removeClass('projects__btn_active');
	};
})