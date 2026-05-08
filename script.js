
// Init des animations au scroll
AOS.init({
  duration: 800,      // durée de l'anim 0.8s
  once: true,         // joue 1 fois seulement, pas de spam
  offset: 100,        // déclenche 100px avant d'arriver sur l'élément
  easing: 'ease-out-cubic', // effet smooth
  delay: 0            // pas de délai global
});

// Smooth scroll pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');

      burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      });

     // Fermer le menu quand on clique sur un lien
     document.querySelectorAll('.nav-links a').forEach(link => {
       link.addEventListener('click', () => {
         nav.classList.remove('nav-active');
       });
     });
});

// Effet nav au scroll
window.addEventListener('scroll', function(){
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu Burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});

