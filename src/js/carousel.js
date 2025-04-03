/**
 * Hero Carousel Module
 * Provides functionality for the hero carousel section
 */
export const heroCarousel = {
    slides: null,
    prevButton: null,
    nextButton: null,
    indicators: null,
    currentIndex: 0,
    slidesCount: 0,
    autoplayInterval: null,
    autoplayDelay: 5000, // 5 seconds between slides
    
    /**
     * Initialize the carousel
     */
    init() {
        // Get carousel elements
        this.slides = document.querySelectorAll('.hero__slide');
        this.prevButton = document.querySelector('.hero__nav--prev');
        this.nextButton = document.querySelector('.hero__nav--next');
        this.indicators = document.querySelectorAll('.hero__indicator');
        
        // Count the slides
        this.slidesCount = this.slides.length;
        
        // Exit if there are no slides
        if (this.slidesCount <= 1) return;
        
        // Initialize slide backgrounds
        this.initializeSlideBackgrounds();
        
        // Set up event listeners
        this.prevButton.addEventListener('click', () => this.goToPrevSlide());
        this.nextButton.addEventListener('click', () => this.goToNextSlide());
        
        // Set up indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.goToPrevSlide();
            if (e.key === 'ArrowRight') this.goToNextSlide();
        });
        
        // Add swipe functionality for mobile
        this.setupSwipe();
        
        // Start autoplay if enabled
        if (this.autoplayDelay > 0) {
            this.startAutoplay();
        }
    },
    
    /**
     * Initialize background images for all slides
     */
    initializeSlideBackgrounds() {
        this.slides.forEach(slide => {
            const image = slide.dataset.image;
            const imageRetina = slide.dataset.imageRetina;
            
            if (image) {
                slide.style.backgroundImage = `url(${image})`;
            }
            
            if (imageRetina) {
                // Create a style element for the ::after pseudo-element
                const styleId = `style-${slide.id}`;
                let styleEl = document.getElementById(styleId);
                
                if (!styleEl) {
                    styleEl = document.createElement('style');
                    styleEl.id = styleId;
                    document.head.appendChild(styleEl);
                }
                
                // Add style for the ::after pseudo-element
                styleEl.textContent = `
                    #${slide.id}::after {
                        background-image: url(${imageRetina});
                    }
                `;
            }
        });
    },
    
    /**
     * Navigate to a specific slide
     * @param {number} index - The index of the slide to go to
     */
    goToSlide(index) {
        // Remove active class and set aria-hidden on current slide
        if (this.slides[this.currentIndex]) {
            this.slides[this.currentIndex].classList.remove('hero__slide--active');
            this.slides[this.currentIndex].setAttribute('aria-hidden', 'true');
        }
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].classList.remove('hero__indicator--active');
        }
        
        // Handle wrapping around
        if (index < 0) index = this.slidesCount - 1;
        if (index >= this.slidesCount) index = 0;
        
        // Update current index
        this.currentIndex = index;
        
        // Add active class and remove aria-hidden from new slide
        if (this.slides[this.currentIndex]) {
            this.slides[this.currentIndex].classList.add('hero__slide--active');
            this.slides[this.currentIndex].removeAttribute('aria-hidden');
        }
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].classList.add('hero__indicator--active');
        }
    },
    
    /**
     * Go to the next slide
     */
    goToNextSlide() {
        this.goToSlide(this.currentIndex + 1);
    },
    
    /**
     * Go to the previous slide
     */
    goToPrevSlide() {
        this.goToSlide(this.currentIndex - 1);
    },
    
    /**
     * Start the autoplay functionality
     */
    startAutoplay() {
        // Clear any existing interval
        this.stopAutoplay();
        
        // Set a new interval
        this.autoplayInterval = setInterval(() => {
            this.goToNextSlide();
        }, this.autoplayDelay);
    },
    
    /**
     * Stop the autoplay functionality
     */
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    },
    
    /**
     * Set up swipe gestures for mobile devices
     */
    setupSwipe() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        let startX, endX;
        const minSwipeDistance = 50;
        
        heroSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        heroSection.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            
            if (startX === undefined || endX === undefined) return;
            
            const distance = startX - endX;
            
            if (Math.abs(distance) >= minSwipeDistance) {
                if (distance > 0) {
                    // Swipe left - go to next slide
                    this.goToNextSlide();
                } else {
                    // Swipe right - go to previous slide
                    this.goToPrevSlide();
                }
            }
        }, { passive: true });
    }
}; 