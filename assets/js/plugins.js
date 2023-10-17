$(document).ready(function () {
    $(".banner-item").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      // autoPlaySpeed:6000,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
    });
  });