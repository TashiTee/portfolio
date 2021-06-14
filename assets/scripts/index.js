import { handleNavBar } from './sticky-nav.js';
// import './scss/styles.scss';
// import '../styles/styles.css';

import { preventScrollOverFlow } from './scrollEffects.js';
import { handleHamburgerMenu } from './hamburger-menu.js';


// wait for the window to load and identify dom elements
window.onload = () => {
  // function replaces feather icon tags with svg images
  feather.replace();
  handleNavBar();
  preventScrollOverFlow();
  handleHamburgerMenu();
};
