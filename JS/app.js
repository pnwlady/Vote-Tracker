var CuteRabbits = function(name, photo) {
  this.name = name;
  this.photo = photo;
  //votes has to happen before the push or the push won't include votes
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

//creates random image
function randomImg() {
  return Math.floor(Math.random() * rabbits.length);
};

//dom set up
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var randomPhoto1, randomPhoto2;

function compareImg() {
  randomPhoto1 = randomImg();
  randomPhoto2 = randomImg();
  if (randomPhoto1 === randomPhoto2) {
    randomPhoto1 = randomImg();
    console.log("this is line 43");
  //src is a property of boxLeft DOM element, creating src/source attribute in html
  }
  img1.src = rabbits[randomPhoto1].photo;
  img2.src = rabbits[randomPhoto2].photo;
  console.log("this is line 47");
};
compareImg();

img1.addEventListener('click', function() {
  rabbits[randomPhoto1].votes += 1;
  console.log(rabbits[randomPhoto1].votes);
  voteFor(img1.src);
  console.log('img1');
  compareImg();
  makeChart();
});

img2.addEventListener('click', function() {
  //this represents the obj.votes
  rabbits[randomPhoto2].votes += 1;
  console.log(rabbits[randomPhoto2].votes);
  voteFor(img2.src);
  console.log('img2')
  compareImg();
  makeChart();
});

var voteFor = function(rabbit) {
  for (var i in rabbits) {
    if (rabbits[i].src === rabbit) {
      rabbit.votes +=1;
    }
  }
};

function makeChart () {
  var data = [
      {
        //each object in constructor function
          value: rabbits[randomPhoto1].votes,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },

      {
          value: rabbits[randomPhoto2].votes,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      }
  ];

  var context = document.getElementById('myChart').getContext('2d');
  var skillsChart = new Chart(context).Doughnut(data, {
    //number - amount of animation steps. These are found in chart.js documentation
    animationSteps : 30,
    //string - animation easing effect
    animationString : "easeOutBounce",
    //animate rotate
    animateRotate : true,
    //animate scale
    animateScale : true,
  });
};
makeChart();


