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