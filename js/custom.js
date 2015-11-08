//  ==== >>>> [[[[COMPENENT IMAGES]]]]] =====>>>>>>>
var visorSources = {
  black: '../images/layers/side/visors/visor-black.png',
  carbon: '../images/layers/side/visors/visor-carbon.png',
  green: '../images/layers/side/visors/visor-green.png',
  red: '../images/layers/side/visors/visor-red.png',
  white: '../images/layers/side/visors/visor-white.png'
};
var wrapSources = {
  carbon: '../images/layers/side/wraps/wrap-carbon.png',
  black: '../images/layers/side/wraps/wrap-black.png',
  sunrise: '../images/layers/side/wraps/wrap-sun-rise.png',
  white: '../images/layers/side/wraps/wrap-white.png',
  stripes: '../images/layers/side/wraps/custom-stripes.png',
  lasers: '../images/layers/side/wraps/wrap-lasers.png',
  irish: '../images/layers/side/wraps/wrap-plaid-irish-green.png',
  skyline: '../images/layers/side/wraps/wrap-skyline.png',
  usa: '../images/layers/side/wraps/wrap-usa.png',
  turtle: '../images/layers/side/wraps/wrap-turtle.png',
  brain: '../images/layers/side/wraps/wrap-brain.png'

};
var panelSources = {
  green: '../images/layers/side/back-panel/back-panel-neon-green.png',
  purple: '../images/layers/side/back-panel/back-panel-purple.png',
  sunrise: '../images/layers/side/back-panel/back-panel-SunShine.png'
};
// ========= [[[[[BASE IMAGE SOURCES]]]]] =======//
var sources = {
  BASE: '../images/crShell_WHITE.png',
  template: '../images/TEMPLATE.png',
  black: '../images/BaseBlack.png',
  chinstrap: '../images/layers/side/straps/chin-strap-white.png'
};
//============IMAGE LOADER=================//
var images = {};
function loadImages(sources, callback) {
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for(var src in sources) {
    numImages++;
  }for(var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(images);}};
        images[src].src = sources[src];}}
        var canvas = document.getElementById('customHelmet');
        var context = canvas.getContext('2d');
        loadImages(sources, function(images) {
        context.drawImage(images.black, 0, 0, canvas.width, canvas.height),
        context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height)
});
// document.getElementById('wrapUI').addEventListener('click', function() {
//   // canvas.removeEventListener("mousemove",mouseX, false);
//   wrap = true;
// });
// document.getElementById('chinUI').addEventListener('click', function() {
//   // canvas.removeEventListener("mousemove",mouseX, false);
//   chin = true;
// });
// document.getElementById('visorUI').addEventListener('click', function() {
//   // canvas.removeEventListener("mousemove",mouseX, false);
//   visor = true;
// });
// document.getElementById('panelUI').addEventListener('click', function() {
//   // canvas.removeEventListener("mousemove",mouseX, false);
//   panel = true;
// });
document.getElementById('customHelmet').addEventListener('click', function() {
  context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height);
});
var chin, visor, panel, wrap;
//============= SQUARE-BUTTONS-TOP-RIGHT =================//
//[[TEMPLATE]]




         









