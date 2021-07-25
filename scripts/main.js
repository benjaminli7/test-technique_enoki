$(document).ready(function(){
  $('.climbers__carrousel').slick({
    slidesToShow: 3,
    prevArrow: '<img src="../images/arrow_left.png"/>',
    nextArrow: '<img src="../images/arrow_right.png"/>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

    ]
  });
});
