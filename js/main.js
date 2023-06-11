$(function () {

	$('.menu-burger__header').click(function(){
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
    });

	$('.menu-burger__header2').click(function(){
    $('.menu-burger__header2').toggleClass('open-menu2');
    $('.header__nav2').toggleClass('open-menu2');
    $('body').toggleClass('fixed-page');
    });

	$('.top__menu-btn').click(function(){
    $('.top__menu-btn').toggleClass('open-menu3');
    $('.top__menu').toggleClass('open-menu3');
    $('body').toggleClass('fixed-page');
    });

	$('.top__menu-btn2').click(function(){
    $('.top__menu-btn2').toggleClass('open-menu4');
    $('.top__menu2').toggleClass('open-menu4');
    $('body').toggleClass('fixed-page');
    });




})
