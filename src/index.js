/* eslint-env browser */

// IMPORTS
import Typewriter from 'typewriter-effect/dist/core';
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
// Typewriter text
const typewriter = document.querySelector('#typewriter');

// FUNCTIONS
// Site logo
logoDiv.src = navbarLogo;
// Typewriter text
new Typewriter(typewriter, {
  strings: [
    'Full Stack Web Developer',
    'Mobile App Developer',
    'Wordpress Developer',
    'Tech Enthusiast',
  ],
  autoStart: true,
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
