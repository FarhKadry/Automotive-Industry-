const model = document.getElementById("carModel");
const viewBtns = document.querySelectorAll(".viewBtn");
const arBtn = document.getElementById("arBtn");

/* CAMERA PRESETS */
const views = {
  top:   "-90deg 90deg 0.12m",
  front: "0deg 75deg 0.18m",
  back:  "180deg 75deg 0.18m",
  side:  "90deg 75deg 0.18m"
};

/* CHANGE VIEW */
function changeView(viewName, clickedBtn) {
  model.cameraOrbit = views[viewName];

  // active state handling
  viewBtns.forEach(btn => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
}

/* BUTTON EVENTS */
viewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    changeView(btn.dataset.view, btn);
  });
});
arBtn.addEventListener("click", () => {
  if (model.canActivateAR) {
    model.activateAR();
  }
});