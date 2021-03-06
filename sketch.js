p5.disableFriendlyErrors = true;
let w = window.innerWidth;
let h = window.innerHeight;
let dot;
let interval;
let font;
let points;
let points2;
let dots = [];
let timerId = null;
function preload() {
  font = loadFont("./assets/Avenir.otf");
}
function setup() {
  window.addEventListener("resize", () => {
    console.log(timerId);
    if (timerId === null) {
      timerId = setTimeout(resize, 1000);
    }
  });
  resize();
}
function draw() {
  background(51);
  fill(255);
  dots.forEach((dot, index) => {
    dot.behaviors();
    dot.flee();
    dot.update();
    dot.show(249, 220, 92);
  });
}
function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  points = [];
  points2 = [];
  dots = [];
  timerId = null;
  createCanvas(w, h);
  points = font.textToPoints("Develop", w / 6.5, w / 7, w / 8, {
    sampleFactor: w < 600 ? (w < 400 ? 0.7 : 0.5) : 0.25
  });
  points2 = font.textToPoints("your ideas", w / 6.5, w / 4, w / 8, {
    sampleFactor: w < 600 ? (w < 400 ? 0.7 : 0.5) : 0.25
  });

  points.forEach(p => {
    dot = new Dot(p.x, p.y, w);
    dots.push(dot);
  });
  points2.forEach(p => {
    dot = new Dot(p.x, p.y, w);
    dots.push(dot);
  });
}
