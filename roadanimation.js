let roadpt1 = document.getElementById('road1');
roadpt1.innerHTML = `
  <svg class="roadPath1" width="1280" height="281" viewBox="0 0 1280 281" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_315_865)">
<path class="road-path" d="M-74.0025 190.009C21.2233 136.727 139.725 94.997 272.458 68.1329C405.175 41.2722 548.451 30.0163 691.262 35.2489C834.076 40.4816 972.532 62.0609 1095.99 98.2891C1219.47 134.525 1324.47 184.397 1403.06 243.917" stroke="url(#paint0_linear_315_865)" stroke-width="12" />
</g>
<defs>
<filter id="filter0_d_315_865" x="-106.932" y="0" width="1543.62" height="280.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.803354 0 0 0 0 0.188645 0 0 0 0 0.188645 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_865"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_865" result="shape"/>
</filter>
<linearGradient id="paint0_linear_315_865" x1="-369.587" y1="393.545" x2="1556.1" y2="573.409" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4A235"/>
<stop offset="0.471154" stop-color="#CD3030"/>
<stop offset="0.870192" stop-color="#39293F"/>
<stop offset="1" stop-color="#39293F" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;
const road = document.getElementById('road1');

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const path = road.querySelector('.road-path');
    const length = path.getTotalLength();

    // 1️⃣ Properly hide the path
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // 2️⃣ Force layout (prevents dashed glitch)
    path.getBoundingClientRect();

    // 3️⃣ Scroll animation
    window.addEventListener('scroll', () => {
      const rect = road.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);

      path.style.strokeDashoffset =
        length * (1 - clamped);
    });
  });
});

let roadpt2 = document.getElementById('road2');
roadpt2.innerHTML = `
  <svg class="roadPath2" width="1280" height="281" viewBox="0 0 1280 281" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_315_865)">
<path class="road-path" d="M-74.0025 190.009C21.2233 136.727 139.725 94.997 272.458 68.1329C405.175 41.2722 548.451 30.0163 691.262 35.2489C834.076 40.4816 972.532 62.0609 1095.99 98.2891C1219.47 134.525 1324.47 184.397 1403.06 243.917" stroke="url(#paint0_linear_315_865)" stroke-width="12" />
</g>
<defs>
<filter id="filter0_d_315_865" x="-106.932" y="0" width="1543.62" height="280.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.803354 0 0 0 0 0.188645 0 0 0 0 0.188645 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_865"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_865" result="shape"/>
</filter>
<linearGradient id="paint0_linear_315_865" x1="-369.587" y1="393.545" x2="1556.1" y2="573.409" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4A235"/>
<stop offset="0.471154" stop-color="#CD3030"/>
<stop offset="0.870192" stop-color="#39293F"/>
<stop offset="1" stop-color="#39293F" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;

let road2 = document.getElementById('road2'); // Changed from 'road'

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const path = road2.querySelector('.road-path'); // Changed: use road2 and correct class
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    
    window.addEventListener('scroll', () => {
      const rect = road2.getBoundingClientRect(); // Changed from 'road'
      const windowHeight = window.innerHeight;
      const progress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);
      path.style.strokeDashoffset = length * (1 - clamped);
    });
  });
});
