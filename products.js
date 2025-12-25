let model = document.getElementById("carModel");
let viewBtns = document.querySelectorAll(".viewBtn");
let arBtn = document.getElementById("arBtn");

// CAMERA 
let views = {
  top:   "90deg -10deg 0.1m",
  front: "0deg 90deg 0.1m",
  back:  "180deg 90deg 5m",
  side:  "90deg 75deg 0.1m"
};
function changeView(viewName, clickedBtn) {
  model.cameraOrbit = views[viewName];
  viewBtns.forEach(btn => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
}
viewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    changeView(btn.dataset.view, btn);
  });
});

// ARBUTTON
arBtn.addEventListener("click", () => {
  if (model.canActivateAR) {
    model.activateAR();
  }
});
// ENGINE ANIMATIONNN
let engBtn = document.getElementById("engBtn");
let engineModel = document.getElementById("engineModel");
let neonSpan = document.getElementById("neonSpan");

let disassembled = false;

const originalOrbit = engineModel.cameraOrbit;
const disassembledOrbit = "2052deg 90deg 10m"; 

engBtn.addEventListener("click", () => {
  if (!disassembled) {
    engineModel.play();

    neonSpan.classList.add("active");

    engBtn.textContent = "Assemble";

    engineModel.cameraOrbit = disassembledOrbit;
  } else {
    engineModel.pause();
    engineModel.currentTime = 0;

    neonSpan.classList.remove("active");

    engBtn.textContent = "Disassemble";

    engineModel.cameraOrbit = originalOrbit;
  }

  disassembled = !disassembled;
});
const audio = document.getElementById("audio");
const btn = document.getElementById("engAudio");
const icon = document.getElementById("engAudioIcon");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    icon.src = "public/images/audio2.svg";
  } else {
    audio.pause();
    audio.currentTime = 0;
    icon.src = "public/images/audio1.svg";
  }

  isPlaying = !isPlaying;
});
audio.addEventListener("ended", () => {
  isPlaying = false;
  icon.src = "public/images/audio1.svg";
});
document.addEventListener('DOMContentLoaded', function() {
    const thumbWrappers = document.querySelectorAll('.slider_thumb_wrapper');
    const mainImages = document.querySelectorAll('.slider_main_img');
    
    thumbWrappers.forEach((wrapper, index) => {
        wrapper.addEventListener('click', function() {
            thumbWrappers.forEach(w => w.classList.remove('active'));
            
            mainImages.forEach(img => img.classList.remove('active'));
            
            this.classList.add('active');
            
            mainImages[index].classList.add('active');
        });
    });
});