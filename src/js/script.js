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

// MODAL
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});
