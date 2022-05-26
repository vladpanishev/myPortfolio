// BURGER
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav__header'),
    navLink = document.querySelectorAll('.nav__link-header'),
    burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    nav.classList.toggle('nav__header-active');
  });

  navLink.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('burger-active');
      nav.classList.toggle('nav__header-active');
    });
  });
});
