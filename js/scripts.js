// Custom Scripts
const header__btn = document.querySelector(".header__btn");
const rightside_menu = document.querySelector(".rightside-menu");
const rightside_menu_close = document.querySelector(".rightside-menu__close");
header__btn.addEventListener("click", () => {
  rightside_menu.classList.remove("rightside-menu--close");
});
rightside_menu_close.addEventListener("click", () => {
  rightside_menu.classList.add("rightside-menu--close");
});

// =========================
var swiper = new Swiper(".top__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dots: false,
    fade: true,
    autoPlay: true,
  },
});

// //  =========================
var swiper = new Swiper(".contact__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dots: false,
  },
});
//  =========================

// //  =========================
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//  =========================

const mixer = mixitup(".gallery__inner", {
  load: {
    filter: ".bedroom",
  },
});

$(".header__btn-menu").on("click", function () {
  $(".menu").toggleClass("menu--open");
});
// ========================

// ========================

// let menuBtn = document.querySelector(".header__btn-menu");
// let menu = document.querySelector(".menu");
// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
// });






