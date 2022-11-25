let bodyScroll = document.querySelector('[data-body-scroll]');

function addScroll() {
  if (bodyScroll) {
    bodyScroll.classList.add('page--no-scroll');
  } else {
    return;
  }
}

function removeScroll() {
  if (bodyScroll) {
    bodyScroll.classList.remove('page--no-scroll');
  } else {
    return;
  }
}

export {removeScroll, addScroll};
