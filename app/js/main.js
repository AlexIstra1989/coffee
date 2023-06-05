//Burger
$('.header__btn').on('click', function() {
 $('.menu').toggleClass('menu_active'),
 $('.header__btn').toggleClass('header__btn_active');
});

//Sliders
// main-block slider
new Swiper ('.main-block__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 0,
 loop: true,

 pagination: {
  el: '.pagination',
  clickable: true,
 },			
});

// testimonials slider
new Swiper ('.testimonials__slider', {
 slidesPerView: 1,
 autoHeight: true,
 spaceBetween: 0,
 loop: true,

 pagination: {
  el: '.pagination',
  clickable: true,
 },			
});

//reviews slider
new Swiper ('.reviews__slider', {
 slidesPerView: 3,
 autoHeight: true,
 spaceBetween: 30,
 loop: true,

 navigation: {
  prevEl: '.reviews__prev',
  nextEl: '.reviews__next',
 },

 pagination: {
  el: '.pagination',
  clickable: true,
 },			

  // Брейкпоинты
  breakpoints: {
   240: {
    slidesPerView: 1,
    spaceBetween: 0,
   },
   590: {
    slidesPerView: 2,
    spaceBetween: 20,
   },
   991: {
    slidesPerView: 3,
    spaceBetween: 20,
   },
  },
});

//FAQs block title
// Получаем элемент заголовка по его классу
var titleElement = document.querySelector('.faqs__title');
// Получаем текст заголовка
var titleText = titleElement.innerText;
// Изменяем последнюю букву на нижний регистр
var modifiedTitleText = titleText.slice(0, -1) + titleText.slice(-1).toLowerCase();
// Устанавливаем измененный текст обратно в элемент заголовка
titleElement.innerText = modifiedTitleText;


//Accordion
var accordionHeaders = document.querySelectorAll('.accordion__top');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    var accordionContent = this.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});

var accordionHeaders = document.querySelectorAll('.accordions__top');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    var accordionContent = this.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});