// JavaScript Functions

$(document).ready(function () {

  /* --- NiceScroll --- */
  $(".section").niceScroll();

  /* --- Slider --- */
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
	play: 4000,
    pagination: true,
    hashchange: true,
    scrollable: true
  });

  /* --- Sidebar Menu --- */
  $(".sidebar-menu ul li a, .btn-goto").click(function (e) {
    $(".section").removeClass("section-animate");
	$("#"+$(this).data("refid")).toggleClass("section-animate");
	e.preventDefault();
  });
  $(".close-sidebar-menu").click(function () {
    $(".sidebar-menu").toggleClass("sidebar-menu-left");
  });

  /* --- Sidebar Menu Settings --- */
  $(".close-sidebar-menu-settings").click(function () {
    $(".sidebar-menu-settings").toggleClass("sidebar-menu-left");
  });

  /* --- Masonry --- */
  var $container = $('#isotope');
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: '.item',
    });
  });
  $('#filters a').click(function () {
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
    return false;
  });

  /* --- Fancybox --- */
  $(".view-fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
	next: 'left',
	prev: 'right'
  });

  /* --- Opacity Effect --- */
  $('.thumbnails li, #isotope .item')
    .mouseover(function () {
    $(this).siblings().css({
      opacity: 0.25
    })
  })
    .mouseout(function () {
    $(this).siblings().css({
      opacity: 1
    })
  });

  /* --- Active Filter Menu --- */
  $(".products-filter a").click(function (e) {
    $(".products-filter a").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

  /* --- Google Map --- */
  var mapOptions = {
    center: new google.maps.LatLng(25.75000,-80.197996),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  var image = "img/marker.png";
  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
	icon: image
  });

});




