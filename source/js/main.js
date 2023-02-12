const header = document.querySelector('.header');
console.log(header);
const burger = document.querySelector('.header__burger');

header.classList.remove('no-js');
burger.addEventListener('click', () => header.classList.toggle('is-open'));

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
