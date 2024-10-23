const spin = gsap.timeline({repeat:-1})
  .set("#svg-stage", { opacity: 1 })
  .fromTo("#clover", {
    transformOrigin: "50%",
    x: 30,
    y: 30
  },{
    duration: 50,
    rotation: 360,
    ease: "none",
  });

Draggable.create("#clover", {
  type: "rotation",
  trigger: "#svg-stage",
  inertia: true,
  onPressInit: () => spin.pause(),
  onDrag: setSpinProgress,  // on drag & throw, use rotation as a progress value for the spin timeline
  onThrowUpdate: setSpinProgress,
  onThrowComplete: () => {
    spin.resume();
    gsap.fromTo(spin, { timeScale: 0 }, { timeScale: 1, ease: "power1.in" });
  }
});

function setSpinProgress() {
  spin.progress(gsap.utils.wrap(0, 360, this.rotation) / 360);
}