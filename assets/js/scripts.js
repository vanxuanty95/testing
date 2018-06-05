'use strict';
var $ = jQuery;
$(document).ready(function () {
    // change value item in shopping bag
    var spins = document.getElementsByClassName('spin');
    for (var i = 0, len = spins.length; i < len; i++) {
        var spin = spins[i],
            span = spin.getElementsByTagName('span'),
            input = spin.getElementsByTagName('input')[0];

        input.onchange = function () {
            input.value = +input.value || 0;
        };
        span[0].onclick = function () {
            input.value = Math.max(0, input.value - 1);
        };
        span[1].onclick = function () {
            input.value -= -1;
        };
    }
    // slide in news detail page
    $(".slide-slick-news").slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<p class="next-button">Sau</p>',
        prevArrow: '<p class="prev-button">Trước</p>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // slide in product new page
    $(".slide-slick-product").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left nextArrowBtn"></i>',
        prevArrow: '<i class="fa fa-angle-right prevArrowBtn"></i>',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // slide in look book gallery page
    $('.slide-slick-lookbook').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<p class="next-button">Sau</p>',
        prevArrow: '<p class="prev-button">Trước</p>',
        centerMode: true,
        focusOnSelect: true
    });

    // slide in uniform gallery page
    $('.slide-slick-uniform').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<p class="next-button">Sau</p>',
        prevArrow: '<p class="prev-button">Trước</p>',
        centerMode: true,
        focusOnSelect: true
    });

    // slide client in uniform page
    $('.slide-slick-clients').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left nextBtn"></i>',
        prevArrow: '<i class="fa fa-angle-right prevBtn"></i>',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // slide image uniform type in uniform page
    $('.slide-slick-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left nextBtn"></i>',
        prevArrow: '<i class="fa fa-angle-right prevBtn"></i>',
    });

    // slide product in product detail page
    $(".slide-slick-product-detail").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<p class="next-button">Sau</p>',
        prevArrow: '<p class="prev-button">Trước</p>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // slide to show image product detail page
    $('.slider-for-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav-image',
    });
    $('.slider-nav-image').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for-image',
        dots: true,
        arrows: false,
        focusOnSelect: true
    });
});

$('.menu-button').on('click', function () {
    if ($('.menu-show').is(':visible')) {
        $('.menu-show').animate({
            'height': 'hide'
        }, 300, function () {
            $('.menu-show').fadeOut(300);
        });
    } else {
        $('.menu-show').animate({
            'height': 'show'
        }, 300, function () {
            $('.menu-show').fadeIn(300);
        });
    }
});