/* eslint-env browser */

// IMPORTS
import './assets/css/style.css';
import navbarLogo from './assets/images/kolakolade_logo.png';
import './assets/scss/main.scss';

// Import fontawesome
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

// VARIABLES

// Site logo
const logoDiv = document.querySelector('.navbar__logo');

// FUNCTIONS
// Site logo
logoDiv.src = navbarLogo;
