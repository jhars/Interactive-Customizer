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
  var chin, visor, panel, wrap;
  //============IMAGE LOADER=================//
  var images = {};
  function loadImages(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    for(var src in sources) {
      numImages++;
    } for (var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }
  var canvas = document.getElementById('customHelmet');
  var contextHelmet = canvas.getContext('2d');

  loadImages(sources, function(images) {
    contextHelmet.drawImage(images.black, 0, 0, canvas.width, canvas.height),
    contextHelmet.drawImage(images.BASE, 0, 0, canvas.width, canvas.height)
  });
  document.getElementById('customHelmet').addEventListener('click', function() {
    contextHelmet.drawImage(images.BASE, 0, 0, canvas.width, canvas.height);
  });

$( document ).ready(function() {
//------------------[[[[[CARBON-GREY-PROTOTYPE]]]]]------------------//
  var buttonWrap01 = document.getElementById('btnWrap01');
  var btnGry = buttonWrap01.getContext('2d');
  btnGry.beginPath();
  btnGry.rect(0, 0, canvas.width, canvas.height);
  var carbonWrap = new Image();
  carbonWrap.src = wrapSources.carbon;  
  btnGry.fillStyle = 'grey';
  btnGry.fill();

//------------------[[[[[ USA ]]]]]------------------//
  var buttonWrap02 = document.getElementById('btnWrap02');
  var btnUSA = buttonWrap02.getContext('2d');
  btnUSA.beginPath();
  btnUSA.rect(0, 0, canvas.width, canvas.height);
  var usaWrap = new Image();
  usaWrap.src = wrapSources.usa;
  btnUSA.fillStyle = 'red';
  btnUSA.fill();
  


//------------------[[[[[ IRISH ]]]]]------------------//
  var buttonWrap03 = document.getElementById('btnWrap03');
  var btnOrange = buttonWrap03.getContext('2d');
  btnOrange.beginPath();
  btnOrange.rect(0, 0, canvas.width, canvas.height);
  var irishWrap = new Image();
  irishWrap.src = wrapSources.irish;
  btnOrange.fillStyle = 'orange';
  btnOrange.fill();
  
//------------------[[[[[ LASERS ]]]]]------------------//
  var buttonWrap04 = document.getElementById('btnWrap04');
  var btnPurple = buttonWrap04.getContext('2d');
  btnPurple.beginPath();
  btnPurple.rect(0, 0, canvas.width, canvas.height);
  var laserWrap = new Image();
  laserWrap.src = wrapSources.lasers;
  btnPurple.fillStyle = 'purple';
  btnPurple.fill();
  
//------------------[[[[[ BRAIN ]]]]]------------------//
  var buttonWrap06 = document.getElementById('btnWrap06');
  var btnGreen = buttonWrap06.getContext('2d');
  btnGreen.beginPath();
  btnGreen.rect(0, 0, canvas.width, canvas.height);
  var brainWrap = new Image();
  brainWrap.src = wrapSources.brain;  
  btnGreen.fillStyle = 'green';
  btnGreen.fill();




  buttonWrap01.addEventListener('mousedown', function() {
    var image = new Image();
    image.src = wrapSources.carbon;
    contextHelmet.drawImage(image, 0, 0, canvas.width, canvas.height);
  });


  buttonWrap02.addEventListener('mousedown', function() {
    var image = new Image();
    image.src = wrapSources.usa;
    contextHelmet.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  buttonWrap03.addEventListener('mousedown', function() {
    var image = new Image();
    image.src = wrapSources.irish;
    contextHelmet.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  buttonWrap04.addEventListener('mousedown', function() {
    var image = new Image();
    image.src = wrapSources.lasers;
    contextHelmet.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  buttonWrap06.addEventListener('mousedown', function() {
    var image = new Image();
    image.src = wrapSources.brain;
    contextHelmet.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  // ===================================================================== //
  // ===================================================================== //

});
