'use strict';
var $ = jQuery;
$(document).ready(function () {
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
    var css = $(this).children().children('.menu-toggle-icon');
    var cs = css.attr("class");
    if ($('.menu-show').is(':visible')) {
        $('.menu-show').animate({
            'height': 'hide'
        }, 300, function () {
            $('.menu-show').fadeOut(300);
        });
        if(cs == 'menu-toggle-icon glyphicon glyphicon-remove') {
            $(css).removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
        }
    } else {
        $('.menu-show').animate({
            'height': 'show'
        }, 300, function () {
            $('.menu-show').fadeIn(300);
        });
        if(cs == 'menu-toggle-icon glyphicon glyphicon-menu-hamburger') {
            $(css).removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
        }
    }
});

$('ul.nav-left-ml').toggle();
$('label.nav-toggle span').click(function () {
  $(this).parent().parent().children('ul.nav-left-ml').toggle(300);
  var cs = $(this).attr("class");
  if(cs == 'nav-toggle-icon glyphicon glyphicon-triangle-bottom') {
    $(this).removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
  }
  if(cs == 'nav-toggle-icon glyphicon glyphicon-triangle-top') {
    $(this).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
  }
});

$('#location-distributor').click(
    function(){
        var pr = $(this).parent().attr('class')
        if(pr === 'btn-group open'){
            $(this).children('span.symbol').text('+')
        }else{
            $(this).children('span.symbol').text('-')
        }
        
    }
)

$('#channel-distributor').click(
    function(){
        var pr = $(this).parent().attr('class')
        if(pr === 'btn-group open'){
            $(this).children('span.symbol').text('+')
        }else{
            $(this).children('span.symbol').text('-')
        }
        
    }
)

$(window).click(function() {
    var pr = $('#location-distributor-btn').parent().parent().attr('class');
    if( pr === 'btn-group open'){
        $('#-distributor-btn').text('-')
    }else{
        $('#location-distributor-btn').text('+')
    }
    var pr2 = $('#channel-distributor-btn').parent().parent().attr('class');
    if( pr2 === 'btn-group open'){
        $('#channel-distributor-btn').text('-')
    }else{
        $('#channel-distributor-btn').text('+')
    }
});

var windw = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        startingPos = $this.offset().top,
        defaultPosType = $this.css('position'),
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight - startingPos),
                    width: '100%'
                });
            } else if ($window.scrollTop() < (startingPos)) {
                $this.css({
                    position: defaultPosType,
                    top: startingPos,
                    width: '100%'
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0,
                    width: '351px',
                });
            }
        };
    $window.scroll(setPosition);
    setPosition();
};

$('#one').followTo('#two');