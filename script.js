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

baseAnimation.timeScale(1);

ScrollTrigger.create({
    trigger: '.carousel-wrapper',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
        let velocity = self.getVelocity();

        if (velocity > 0) {
            gsap.to(baseAnimation, {
                timeScale: 1 + Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else if (velocity < 0) {
            gsap.to(baseAnimation, {
                timeScale: -1 - Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else {
            gsap.to(baseAnimation, {
                timeScale: 1,
                duration: 0.5,
                ease: 'power1.out'
            });
        }
    }
});
// CARNEOINTERACTIONS
let neonView = document.querySelector('.car_neonView');
neonView.innerHTML = `
  ${'<div class="neonCell"><span></span></div>'.repeat(25)}
`;
let neonView2 = document.querySelector('.car_neonView2');
neonView2.innerHTML = `
  ${'<div class="neonCell"><span></span></div>'.repeat(25)}
`;