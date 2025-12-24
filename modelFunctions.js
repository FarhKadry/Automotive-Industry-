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