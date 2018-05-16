$(document).ready(function(){
  
$('.carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  autoplaySpeed: 2000,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 ]
});
});