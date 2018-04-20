$(document).ready(function () {
    $('.home-slide').slick({
        infinite: true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="btn btn-link button-slide-home button-slide-prev"><i class="fas fa-angle-left fa-6x"></i></button>',
        nextArrow: '<button type="button" class="btn btn-link button-slide-home button-slide-next"><i class="fas fa-angle-right fa-6x"></i></button>',
    });
    $('.home-slide-type-2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="button-slide-home-type-2"><i class="fas fa-angle-left fa-6x"></i></button>',
        nextArrow: '<button type="button" class="button-slide-home-type-2"><i class="fas fa-angle-right fa-6x"></i></button>',
        dotsClass: 'slick-dots dots-slide-home-type-2 mt-4',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
});

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
    mapCanvas.style.height = "450px"
    $('#image-show-ggapi').append(mapCanvas);
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: locationLatLng,
        title: "Tòa nhà Charmvit Tower",
      });
      marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);