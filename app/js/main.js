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

 // Брейкпоинты
		
			// breakpoints: {
   //  320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 10,
			// 		autoHeight: true,
			// 	},
			// 	490: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 		autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2.4,
			// 		spaceBetween: 20,
			// 	},
			// 	991: {
			// 		slidesPerView: 3.5,
			// 		spaceBetween: 30,
			// 	},
			// },
			
});