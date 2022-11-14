import {FocusLock} from '../utils/focus-lock.js';

const focusLock = new FocusLock();

const closeMenu = () => {
  focusLock.unlock();
};

const openMenu = () => {
  focusLock.lock('.header');
};
