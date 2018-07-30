'use strict';
var $ = jQuery;

$(document).ready(function () {
    // product detail toggle caution content
    $('#toggle-caution').click(function(){
        $('#content-caution').toggle();
        $('.caution-icon-minus').toggle();
        $('.caution-icon-plus').toggle();
    });
    // remove item in shopping bag
    $('[data-remove]').click(function () {
        var id = $(this).data('remove');
        $('[data-product=' + id + ']').remove();
        console.log(id);
    });
    // change value number of product in shopping bag
    $('[data-minus]').click(function () {
        var id = $(this).data('minus');
        var input = $('[data-num=' + id + ']');
        var num = parseInt(input.val());
        --num;
        var newNum = num < 0 ? 0 : num;
        input.val(newNum);
    });

    $('[data-add]').click(function () {
        var id = $(this).data('add');
        var input = $('[data-num=' + id + ']');
        var num = parseInt(input.val());
        var newNum = ++num;
        input.val(newNum);
    });
    // slide in news detail page
    $('.slide-slick-news').slick({
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

    $('.slide-slick-lookbook').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<p class="next-button">Sau</p>',
        prevArrow: '<p class="prev-button">Trước</p>',
        centerMode: true,
        focusOnSelect: true,
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
    $('.slide-slick-product').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left nextArrowBtn"></i>',
        prevArrow: '<i class="fa fa-angle-right prevArrowBtn"></i>',
        autoplay: true,
        autoplaySpeed: 3000,
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
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                }
            }
        ]
    });
});

// handle menu button

$('.home-button').on('click', function () {
    var css = $(this).children('.menu-toggle-icon');
    var cs = css.attr("class");
    if (cs == 'menu-toggle-icon glyphicon glyphicon-remove') {
        $(css).removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
    }
    if (cs == 'menu-toggle-icon glyphicon glyphicon-menu-hamburger') {
        $(css).removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
    }
    $('.sub-hidden-menu').toggle(300);
});

$('#btn-toggle-men').click(function () {
    $('#content-men').toggle(200);
    var cs = $('#btn-toggle-men .icon-item i').attr("class");
    if (cs == 'fa fa-caret-down') {
        $('#btn-toggle-men .icon-item i').removeClass('fa-caret-down').addClass('fa-caret-up');
    }
    if (cs == 'fa fa-caret-up') {
        $('#btn-toggle-men .icon-item i').removeClass('fa-caret-up').addClass('fa-caret-down');
    }
});

$('#btn-toggle-women').click(function () {
    $('#content-women').toggle(200);
    var cs = $('#btn-toggle-women .icon-item i').attr("class");
    if (cs == 'fa fa-caret-down') {
        $('#btn-toggle-women .icon-item i').removeClass('fa-caret-down').addClass('fa-caret-up');
    }
    if (cs == 'fa fa-caret-up') {
        $('#btn-toggle-women .icon-item i').removeClass('fa-caret-up').addClass('fa-caret-down');
    }
});

// faq-page
$('#question1').click(function () {
    $('#answer1').toggle(200);
    var cs = $('#question1 span').attr("class");
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
        $('#question1 span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    }
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
        $('#question1 span').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    }
});

$('#question2').click(function () {
    $('#answer2').toggle(200);
    var cs = $('#question2 span').attr("class");
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
        $('#question2 span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    }
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
        $('#question2 span').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    }
});

$('#question3').click(function () {
    $('#answer3').toggle(200);
    var cs = $('#question3 span').attr("class");
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
        $('#question3 span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    }
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
        $('#question3 span').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    }
});

$('#question4').click(function () {
    $('#answer4').toggle(200);
    var cs = $('#question4 span').attr("class");
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
        $('#question4 span').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    }
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
        $('#question4 span').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    }
});


$('ul.nav-left-ml').toggle();
$('label.nav-toggle span').click(function () {
    $(this).parent().parent().children('ul.nav-left-ml').toggle(300);
    var cs = $(this).attr("class");
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
        $(this).removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
    }
    if (cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
        $(this).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
    }
});

$('#location-distributor').click(
    function () {
        var pr = $(this).parent().attr('class')
        if (pr === 'btn-group open') {
            $(this).children('span.symbol').text('+')
        } else {
            $(this).children('span.symbol').text('-')
        }

    }
)

$('#channel-distributor').click(
    function () {
        var pr = $(this).parent().attr('class')
        if (pr === 'btn-group open') {
            $(this).children('span.symbol').text('+')
        } else {
            $(this).children('span.symbol').text('-')
        }

    }
)

$(window).click(function () {
    var pr = $('#location-distributor-btn').parent().parent().attr('class');
    if (pr === 'btn-group open') {
        $('#-distributor-btn').text('-')
    } else {
        $('#location-distributor-btn').text('+')
    }
    var pr2 = $('#channel-distributor-btn').parent().parent().attr('class');
    if (pr2 === 'btn-group open') {
        $('#channel-distributor-btn').text('-')
    } else {
        $('#channel-distributor-btn').text('+')
    }
});

var windw = this;

$(".open_modal_lookbook").on("click", function(){
    function show_popup(){
        $('.slide-slick-lookbook').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            nextArrow: '<p class="next-button">Sau</p>',
            prevArrow: '<p class="prev-button">Trước</p>',
            centerMode: true,
            focusOnSelect: true,
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
     };
     var cs = $(".slide-slick-lookbook");
    if(!cs.hasClass("slick-initialized")){
        window.setTimeout( show_popup, 200 );
        $('.slide-slick-lookbook').resize();
    }else{
        window.setTimeout( function(){
            $('.slide-slick-lookbook').slick("refresh");
        }, 200 );
    }
})

$(".open_modal_lookbook").on("click", function(){
    function show_popup(){
        $('.slide-slick-uniform').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            nextArrow: '<p class="next-button">Sau</p>',
            prevArrow: '<p class="prev-button">Trước</p>',
            centerMode: true,
            focusOnSelect: true,
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
     };
     var cs = $(".slide-slick-uniform");
    if(!cs.hasClass("slick-initialized")){
        window.setTimeout( show_popup, 200 );
        $('.slide-slick-uniform').resize();
    }else{
        window.setTimeout( function(){
            $('.slide-slick-uniform').slick("refresh");
        }, 200 );
    }
})

if ($('#menu-contact') != null) {
    var isPC = true;
    var $window = $(window);

    var windowsize = $window.width();
    if(windowsize < 768){
        isPC = false
    }else{
        isPC = true;
    }

    var scrollFunc = function() {
        var header = $('header');
        var $menuContact = $('#menu-contact');
        var footerStart = $('body').height() - $('footer').height() - 500;

        $window.scroll(function(){
            if (isPC) {
                if ($window.scrollTop() >= footerStart) {
                    $menuContact.css({
                        position: 'absolute',
                        bottom: '-15px',
                        top: 'auto',
                        left: '10px'
                    });
                } else {
                    $menuContact.css({
                        position: 'fixed',
                        top: '150px',
                        left: '100px'
                    });
                }
            }
        });
    }
    scrollFunc();
    $window.resize(function () {
        var windowsize = $window.width();
        if(windowsize < 768){
            isPC = false
        }else{
            isPC = true;
        }
    });
}

function initialize() {
    var locationLatLng = {lat: 21.0081751, lng: 105.7978339};
    var mapOptions = {
        zoom: 15,
        center: locationLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapCanvas = document.createElement("div");
    mapCanvas.id = "canvas";
    mapCanvas.style.width = "100%";
    mapCanvas.style.height = "750px"
    $('#image-show-ggapi').append(mapCanvas);
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: locationLatLng,
        title: "Tòa nhà Charmvit Tower",
    });
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
