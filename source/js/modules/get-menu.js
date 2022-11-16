import {removeScroll} from './no-scroll';
// import {closedMenu} from './close-menu';

let navMain = document.querySelector('[data-menu="main-nav"]');
let navToggle = document.querySelector('[data-menu="btn"]');
let headerTile = document.querySelector('[data-header-title]');


navMain.classList.remove('main-nav--not-js');

const getMenu = function () {
  if (!navMain) {
    return;
  } else {
    if (!navToggle) {
      navMain.classList.add('main-nav--not-js');
      return;
    }
    navToggle.addEventListener('click', function () {
      navMain.classList.toggle('main-nav--opened');

      headerTile.classList.toggle('main-header__title-wrapper--closed');

      removeScroll();
    });
  }
};

export {getMenu};
