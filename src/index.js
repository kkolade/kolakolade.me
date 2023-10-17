/* eslint-env browser */

// IMPORTS
import Typewriter from 'typewriter-effect/dist/core';
import './assets/css/style.css';
import aboutImage from './assets/images/kolakolade_4.png';
import popupImage from './assets/images/kolakolade_5.png';
import navbarLogo from './assets/images/kolakolade_logo.png';
import portfolioImage1 from './assets/images/work1.png';
import portfolioImage2 from './assets/images/work2.png';
import portfolioImage3 from './assets/images/work3.png';
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
// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');
// About Image
const aboutImg = document.querySelector('.about__img');
// About Overlay & Popup
const about = document.querySelector('#about');
const tabLinks = document.querySelectorAll('.about__tab__link');
const tabContents = document.querySelectorAll('.about__tab-content');
const aboutOverlay = document.querySelector('.about__overlay');
const popup = document.querySelector('.about__popup');
const popupClose = document.querySelector('.about__popup__close');
const popupImg = document.querySelector('.about__popup__img');
// Portfolio images
const portfolioImg1 = document.querySelector('#portfolio__work__image-1');
const portfolioImg2 = document.querySelector('#portfolio__work__image-2');
const portfolioImg3 = document.querySelector('#portfolio__work__image-3');

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

// Back to top button
const scrollFunction = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
};

window.onscroll = () => {
  scrollFunction();
};

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

backToTopBtn.addEventListener('click', topFunction);
// About Image
aboutImg.src = aboutImage;

// About Overlay & Popup
popupImg.src = popupImage;
about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__tab__link')) {
    tabLinks.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');

    tabContents.forEach((content) => {
      content.classList.remove('active');
      if (e.target.textContent.toLowerCase() === content.id) {
        content.classList.add('active');
      }
    });
  }
});

about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__more')) {
    aboutOverlay.classList.remove('hidden');
  }
});

aboutOverlay.addEventListener('click', (e) => {
  if (e.target === popupClose || e.target !== popup) {
    aboutOverlay.classList.add('hidden');
  }
});

// Portfolio images
portfolioImg1.src = portfolioImage1;
portfolioImg2.src = portfolioImage2;
portfolioImg3.src = portfolioImage3;
