//Burger
$('.header__btn').on('click', function() {
 $('.menu').toggleClass('menu_active'),
 $('.header__btn').toggleClass('header__btn_active');
});

//Slider 
new Swiper ('.main-block__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 0,
 loop: true,

 pagination: {
  el: '.swiper-pagination',
  clickable: true,
 },			
});

new Swiper ('.testimonials__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 0,
 loop: true,

 pagination: {
  el: '.testimonials__pagination',
  clickable: true,
 },			
});