gsap.registerPlugin(Flip);

let button = document.querySelector("button");

button.addEventListener("click", function() {
  // get the current state (before we make changes)
  let state = Flip.getState(element, "backgroundColor");
  
  // now make our changes
  element.classList.toggle("absolute");
  element.innerText = element.classList.contains("absolute") ?  "absolute" : "relative";
  
  // "FLIP" animate from that previous state. 
  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
    spin: 2,
  });
  
});