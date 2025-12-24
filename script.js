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
const sec2CardsData = [
    {
        icon: "public/images/sec2icon01.svg",
        title: "Precision & Victory",
        text: "Our engineering philosophy is built around performance without compromise. From aerodynamics, our innovations have earned recognition across motorsport competitions."
    },
    {
        icon: "public/images/sec2icon02.svg",
        title: "Relentless Innovation",
        text: "We continuously push the boundaries of motorsport technology, transforming bold ideas into race-winning solutions."
    },
    {
        icon: "public/images/sec2icon03.svg",
        title: "Track-Tested Excellence",
        text: "Every component is validated under real racing conditions to ensure reliability, speed, and dominance on track."
    }
];

const sec2CardsContainer = document.getElementById("sec2Cards");

for (let i = 0; i < sec2CardsData.length; i++) {
    sec2CardsContainer.innerHTML += `
        <div class="gradient_wrapper card1_wrapper move_focus scroll_animate2">
            <div class="card1 gradient_cont">
                <img src="${sec2CardsData[i].icon}" alt="">
                <h3 class="text_bold">
                    ${sec2CardsData[i].title}
                </h3>
                <p class="text_grey">
                    ${sec2CardsData[i].text}
                </p>
            </div>
        </div>
    `;
}
