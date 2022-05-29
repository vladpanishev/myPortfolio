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

// POPUP
const btns = document.querySelectorAll('.btn__portfolio');
const modalOverlay = document.querySelector('.popup__body');
const modals = document.querySelectorAll('.popup__content');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('popup__content--visible');
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('popup__content--visible');
    modalOverlay.classList.add('popup__body--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('popup__body--visible');
    modals.forEach((el) => {
      el.classList.remove('popup__content--visible');
    });
  }
});
