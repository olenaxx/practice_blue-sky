/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))

/*=============== SWIPER SHOE ===============*/
let swiperShoes = new Swiper('.home__swiper', {

  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      opacity: 0,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById('header')
  // when the scroll is greater than 50 viewport height
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)