
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
        title: "Driver-First",
        text: "We continuously push the boundaries of motorsport technology, transforming bold ideas into race-winning solutions."
    },
    {
        icon: "public/images/sec2icon03.svg",
        title: "Engine Insurance",
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
const carsFlex = document.getElementById("carsFlex");

const carsData = [
  {
    number: "01",
    name: "aramco AMR ‘25",
    logo: "public/images/logo01.svg",
    image: "public/images/poster01.png",
  },
  {
    number: "02",
    name: "aramco AMR ‘25",
    logo: "public/images/logo02.svg",
    image: "public/images/poster02.png",
  },
  {
    number: "03",
    name: "aramco AMR ‘25",
    logo: "public/images/logo03.svg",
    image: "public/images/poster03.png",
  },
  {
    number: "04",
    name: "aramco AMR ‘25",
    logo: "public/images/logo04.svg",
    image: "public/images/poster04.png",
  },
  {
    number: "05",
    name: "aramco AMR ‘25",
    logo: "public/images/logo05.svg",
    image: "public/images/poster05.png",
  },
  {
    number: "06",
    name: "aramco AMR ‘25",
    logo: "public/images/logo06.svg",
    image: "public/images/poster06.png",
  },
  {
    number: "07",
    name: "aramco AMR ‘25",
    logo: "public/images/logo07.svg",
    image: "public/images/poster07.png",
  },
  {
    number: "08",
    name: "aramco AMR ‘25",
    logo: "public/images/logo08.svg",
    image: "public/images/poster08.png",
  },
  {
    number: "09",
    name: "aramco AMR ‘25",
    logo: "public/images/logo09.svg",
    image: "public/images/poster09.png",
  }
];

for (let i = 0; i < carsData.length; i++) {
  carsFlex.innerHTML += `
    <div class="gradient_wrapper card1_wrapper card2_wrapper">
      <div class="card2 gradient_cont">
        
        <div class="flex_column carCardContent">
          <h2 class="h2_2">${carsData[i].number}</h2>
          <h4 class="text_bold text_uppercase">
            ${carsData[i].name}
          </h4>
          <img class="carCardLogo" src="${carsData[i].logo}" alt="">
        </div>

        <div class="cardCardImgCont">
          <img class="carCardImg" src="${carsData[i].image}" alt="">
        </div>

        <div class="gradient_wrapper">
          <a href="product${i + 1}.html">
            <button class="button1 button1_size2">
              View model
              <img src="public/images/arrow1.svg">
            </button>
          </a>
        </div>
      </div>
    </div>
  `;
}


