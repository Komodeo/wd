//Slider section-------------------------------
var i = 0;
var images = [];
var alt = [];

//images array list
images[0] = 'img/slider-1.jpg';
images[1] = 'img/slider-2.jpg';
images[2] = 'img/slider-3.jpg';

alt[0] = "Dinosaur Theme Park!";
alt[1] = "Dinosaur in Real Life";
alt[2] = "Dinosaur Roller Coaster";

function changeImg() {
  //add src to the slider in the index.html
  document.getElementById("slider").src = images[i];
  document.getElementById("slider").alt = alt[i];
  document.getElementById("caption").innerHTML = alt[i];
  resetDot();
  document.getElementById("dot-"+[i+1]).style.backgroundColor="#717171";
}

function leftArrow() {
  //Check if i is 0, then go to the last element of the array instead of go to -1 index
  (i == 0 ? i = images.length - 1 : i--);
  changeImg();
}

function rightArrow() {
  //Check if i is the last element of the array, then go to the first element of the array instead of exceeds array bound
  (i == images.length - 1 ? i = 0 : i++);
  changeImg();
}

//When the page is loaded, run changeImg function to get the first image
window.onload = changeImg;
//----------------------------------------------


//Silder dot------------------------------------
function resetDot() {
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
      dots[i].style.backgroundColor="#bbb";
  }
}
//----------------------------------------------