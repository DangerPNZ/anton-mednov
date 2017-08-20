var menuBtn = document.querySelector('.main-nav__menu-btn');
var menu = document.querySelector('.main-nav__menu');

menuBtn.classList.remove('main-nav__menu-btn--nojs');
menuBtn.classList.add('main-nav__menu-btn--open');

menu.classList.add('main-nav__menu--mobile-hidden');



menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('main-nav__menu-btn--close');
  menu.classList.toggle('main-nav__menu--mobile-hidden');
  menuBtn.classList.toggle('main-nav__menu-btn--open');
});
