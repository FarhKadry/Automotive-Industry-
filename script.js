// CAROUSEL 1
let carousel = document.getElementById('carousel');
// CAROUSEL INFINITE
let carouselContent = carousel.innerHTML;
carousel.innerHTML += carouselContent + carouselContent + carouselContent;
// SCROLL LOOP
let itemWidth = carousel.scrollWidth / 4;
// BASE ANIMATION
let baseAnimation = gsap.to(carousel, {
    x: -itemWidth,
    duration: 20,
    ease: 'none',
    repeat: -1,
    modifiers: {
        x: function(x) {
            return (parseFloat(x) % itemWidth) + 'px';
        }
    }
});

// NORMAL ANIM
baseAnimation.timeScale(1);

// CHANGE DIRECTION BASED ON SCROLL
ScrollTrigger.create({
    trigger: '.carousel-wrapper',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
        let velocity = self.getVelocity();
        
        // OSCROLLING IN OPPOSITE DIRECTION
        if (velocity > 0) {
            // down = left
            gsap.to(baseAnimation, {
                timeScale: 1 + Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else if (velocity < 0) {
            // up = right
            gsap.to(baseAnimation, {
                timeScale: -1 - Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else {
            // normal animation
            gsap.to(baseAnimation, {
                timeScale: 1,
                duration: 0.5,
                ease: 'power1.out'
            });
        }
    }
});
