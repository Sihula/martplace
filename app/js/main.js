$(function () {
  $(".slider-top").slick({
    nextArrow:
      '<button class="slick-arrow slick-next" ><img src="images/icons/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev" ><img src="images/icons/prev.png" alt="prev arrow"></button>',
    infinite: true,
    slidesToShow: 1,
  });

  $(".slier-mix__box").slick({
    nextArrow:
      '<button class="slick-arrow slick-next" ><img src="images/icons/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev" ><img src="images/icons/prev.png" alt="prev arrow"></button>',
    infinite: true,
    slidesToShow: 3,
  });

  var mixer = mixitup(".products__inner-box");
});
