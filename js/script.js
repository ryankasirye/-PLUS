// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // GSAP Animations
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out"
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.8,
        ease: "power3.out"
    });
    
    gsap.from('.search-container', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 1.1,
        ease: "power3.out"
    });
    
    gsap.from('.feature-card', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        }
    });
    
    gsap.from('.property-card', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.properties',
            start: 'top 80%'
        }
    });
});

// Filter buttons functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Property card hover effects
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {duration: 0.3, y: -10, ease: "power2.out"});
    });
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {duration: 0.3, y: 0, ease: "power2.out"});
    });
});