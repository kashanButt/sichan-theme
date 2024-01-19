var swiperOne = new Swiper(".firstSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: true,
  loop: true,
});
var swiperTwo = new Swiper(".secondSwiper", {
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});
var swiperThree = new Swiper(".thirdSwiper", {
  slidesPerView: 2,
  autoplay: true,
  loop: true,
});
var swiperFour = new Swiper(".fourthSwiper", {
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});
