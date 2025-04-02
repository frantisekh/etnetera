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

    // Newsletter popup functionality
    const newsletterButton = document.querySelector('.newsletter-button');
    const newsletterPopup = document.querySelector('.newsletter-popup');
    const newsletterClose = document.querySelector('.newsletter-popup__close');
    const newsletterForm = document.querySelector('.newsletter-popup__form');

    function openNewsletterPopup(e) {
        e.preventDefault();
        newsletterPopup.classList.add('is-active');
        newsletterButton.addEventListener('click', closeNewsletterPopup);
    }

    function closeNewsletterPopup(e) {
        if (e) e.preventDefault();
        newsletterPopup.classList.remove('is-active');
        newsletterButton.removeEventListener('click', closeNewsletterPopup);
        newsletterButton.addEventListener('click', openNewsletterPopup);
    }

    if (newsletterButton && newsletterPopup) {
        // Initial event listener to open popup
        newsletterButton.addEventListener('click', openNewsletterPopup);

        // Close popup when clicking the close button
        newsletterClose.addEventListener('click', closeNewsletterPopup);

        // Close popup when pressing ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && newsletterPopup.classList.contains('is-active')) {
                closeNewsletterPopup(e);
            }
        });

        // Handle form submission
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-popup__input');
            const email = emailInput.value;

            console.log('Newsletter subscription for:', email);
            alert('Děkujeme za přihlášení k odběru novinek!');
            
            closeNewsletterPopup(e);
            newsletterForm.reset();
        });
    }
}); 