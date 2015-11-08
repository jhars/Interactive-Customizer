
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]


// [[[PROTOTYPE-BUTTONS]]]

// ------------------[[[PURPLE-PROTOTYPE]]]------------------//
var buttonWrap = document.getElementById('btnWrap');
var btn = buttonWrap.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
//[[[[[PURPLE-BUTTON]]]]]
btn.fillStyle = 'purple'; btn.fill();
//[[[[[PURPLE-BUTTON]]]]]
document.getElementById('btnWrap').addEventListener('click', function() {
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
  context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
  // - - - - - - Draws Sticker Helmet Wrap Side-View Template - - - - //
});

// ------------------[[[BLUE-PROTOTYPE]]]----------------//
var buttonBlue = document.getElementById('btnBlue');
var btn = buttonBlue.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
// [[[BLUE-BUTTON]]]
btn.fillStyle = 'blue'; btn.fill();
// [[[BLUE-BUTTON]]]
document.getElementById('btnBlue').addEventListener('click', function() {
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
  context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
  // - - - - - - Draws Sticker Helmet Wrap Side-View Template - - - - //
});

//------------------[[[[[CARBON-GREY-PROTOTYPE]]]]]------------------//
var buttonWrap01 = document.getElementById('btnWrap01');
var btn = buttonWrap01.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
//[[[[[GREY-BUTTON]]]]]
btn.fillStyle = 'grey'; btn.fill();
//[[[[[GREY-BUTTON]]]]]
document.getElementById('btnWrap01').addEventListener('click', function() {
    // =========== CHANGE IMAGE IN AND OUT HERE ===========//
    var wrapCarbon = new Image();
    wrapCarbon.src = wrapSources.carbon;
    context.drawImage(wrapCarbon, 0, 0, canvas.width, canvas.height);
});
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]
//=====>>>>> [[[HELMET WRAP TEMPLATE]]]//=====>>>>> [[[HELMET WRAP TEMPLATE]]]


//[[[PANEL-PINK]]]
var buttonPanel = document.getElementById('btnPanel');
var btn = buttonPanel.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'pink';
btn.fill();
document.getElementById('btnPanel').addEventListener('click', function() {
  var panelORANGE = new Image();
  panelORANGE.src = panelSources.sunrise;
  context.drawImage(panelORANGE, 0, 0, canvas.width, canvas.height);
});











//============= SQUARE-BUTTONS-TOP-RIGHT =================//
//[[WRAP-WHITE]]
var buttonTemplate = document.getElementById('btnTEMPLATE');
var btn = buttonTemplate.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'white';
btn.fill();
document.getElementById('btnTEMPLATE').addEventListener('click', function() {
  context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
});
//[[[WRAP-ORANGE]]]
var buttonOrange = document.getElementById('btnOrange');
var orange = buttonOrange.getContext('2d');
orange.beginPath();
orange.rect(0, 0, canvas.width, canvas.height);
orange.fillStyle = 'orange';
orange.fill();
document.getElementById('btnOrange').addEventListener('click', function() {
  var maskORANGE = new Image();
  maskORANGE.src = wrapSources.sunrise;
  var panelORANGE = new Image();
  panelORANGE.src = panelSources.sunrise;
  context.drawImage(panelORANGE, 0, 0, canvas.width, canvas.height);
  context.drawImage(maskORANGE, 0, 0, canvas.width, canvas.height);
});

//[[[VISOR-GREEN]]]
var buttonGreen = document.getElementById('btnGreen');
var btn = buttonGreen.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'green';
btn.fill();
document.getElementById('btnGreen').addEventListener('click', function() {
  var panelGREEN = new Image();
  panelGREEN.src = panelSources.green;
  var visorGREEN = new Image();
  visorGREEN.src = visorSources.green;
  context.drawImage(panelGREEN, 0, 0, canvas.width, canvas.height);
  context.drawImage(visorGREEN, 0, 0, canvas.width, canvas.height);
});
//[[BASE-BLACK]]
var buttonBlack = document.getElementById('btnBlack');
var black = buttonBlack.getContext('2d');
black.beginPath();
black.rect(0, 0, canvas.width, canvas.height);
black.fillStyle = 'black';
black.fill();
document.getElementById('btnBlack').addEventListener('click', function() {
  context.drawImage(images.black, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});

