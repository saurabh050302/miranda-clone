// locomotive-scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//gsap-animation
var tl = gsap.timeline();

tl.to("#page-1", {
  y: "100vh",
  scale: 0.5,
  duration: 0,
});

tl.to("#page-1", {
  y: "0vh",
  scale: 0.5,
  duration: 1,
});

tl.to("#page-1", {
  rotate: 360,
  scale: 1,
  duration: 1,
  delay: 0.1,
});

// for (let i = 0; i < 10; i++) {
//   setInterval(() => {
//     tl.to("#page-1", {
//       scale: 0.1 * i,
//       duration: 0.1*i,
//     });
//   }, i * 100);
// }
