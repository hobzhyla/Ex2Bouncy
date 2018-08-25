
$(document).ready(function() {

    $('.grid').isotope({
    // options
    itemSelector: '.grid-item',

    });

        // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'a', function(evt) {
        evt.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });




});

$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '10px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.bouncy__testimonials-box-slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '10px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});

$(window).on('load', function() {

     var map;
     var beet = {lat: 49.5685276, lng: 34.58543170000007};

      map = new google.maps.Map(
          document.getElementById('map'), {
              center: beet,
              zoom: 17
      });

      var markerPol = new google.maps.Marker({
         position: beet,
         map: map,
         icon: '../img/favicon.png'
       });

});
