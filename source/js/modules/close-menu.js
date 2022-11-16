const navBack = document.querySelector('[data-nav-background]');
let navMain = document.querySelector('[data-menu="main-nav"]');
const navLinks = document.querySelectorAll('[data-nav-link]');

function closedMenu() {
  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        navMain.classList.remove('main-nav--opened');
      });
    });
  } else {
    return;
  }

  if (navBack) {
    navBack.addEventListener('click', (evt) => {
      evt.preventDefault();
      navMain.classList.remove('main-nav--opened');
    });
  } else {
    return;
  }
}

export {closedMenu};
