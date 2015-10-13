var CuteRabbits = function(name, photo) {
  this.name = name;
  this.photo = photo;
  this.votes = 0;
  rabbits.push(this);
}

var rabbits = [];

var rab1 = new CuteRabbits('rab1', "img/rab1.jpeg");
var rab2 = new CuteRabbits('rab2', "img/rab2.jpeg");
var rab3 = new CuteRabbits('rab3', "img/rab3.jpeg");
var rab4 = new CuteRabbits('rab4', "img/rab4.jpeg");
var rab5 = new CuteRabbits('rab5', "img/rab5.jpeg");
var rab6 = new CuteRabbits('rab6', "img/rab6.jpeg");
var rab7 = new CuteRabbits('rab7', "img/rab7.jpeg");
var rab8 = new CuteRabbits('rab8', "img/rab8.jpeg");
var rab9 = new CuteRabbits('rab9', "img/rab9.jpeg");
var rab10 = new CuteRabbits('rab10', "img/rab10.jpeg");
var rab11 = new CuteRabbits('rab11', "img/rab11.jpeg");
var rab12 = new CuteRabbits('rab12', "img/rab12.jpeg");
var rab13 = new CuteRabbits('rab13', "img/rab13.jpeg");
var rab14 = new CuteRabbits('rab14', "img/rab14.jpeg");
var rab15 = new CuteRabbits('rab15', "img/rab15.jpeg");

function randomImg() {
  var random = Math.floor(Math.random () * rabbits.length);
  return rabbits[random];
};

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var pic1 = document.createElement('img');
var pic2 = document.createElement('img');

pic1.setAttribute('src', randomImg().photo);
pic2.setAttribute('src', randomImg().photo);

img1.appendChild(pic1);
img2.appendChild(pic2);

var picButton1 = document.getElementById('pic1');
picButton.addEventListener('click', function() {
  randomImg();
  console.log("You clicked my button");
});

var picButton2 = document.getElementById('pic2');
picButton.addEventListener('click', function() {
  randomImg();
  console.log("You clicked my button");
});




