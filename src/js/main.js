// Main JavaScript file
import { heroCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.header__mobile-toggle');
    const mobileNav = document.querySelector('.header__nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            // Toggle active class on menu button
            mobileMenuToggle.classList.toggle('is-active');
            
            // Toggle active class on navigation
            mobileNav.classList.toggle('is-active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Initialize hero carousel
    heroCarousel.init();
}); 