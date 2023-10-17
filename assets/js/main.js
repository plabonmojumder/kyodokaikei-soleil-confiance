
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: false, /* use rewind if you don't want loop */
    margin: 10,
    loop:true,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  
  
  // $(".").owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: false,
  //   margin: 10,
  //   autoplay: true,
  //   autoplayTimeout: 1000,
  //   autoplayHoverPause: true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });
  