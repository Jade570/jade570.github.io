var i;

  $('.1').append('<img class="img1" src="soundofplants/index.jpg"></img>')
  $('.01').append('<span class="dot1" onclick="currentSlide1(0)"></span>')

for (i = 1; i<=1; i++){
  $('.01').append('<span class="dot1" onclick="currentSlide1('+i+')"></span>')
}


for (i = 1; i<=2; i++){
$('.2').append('<img class="img2" src="metronome/'+i+'.jpg"></img>')
}

for (i = 0; i<=2; i++){
$('.02').append('<span class="dot2" onclick="currentSlide2('+i+')"></span>')
}



$('.03').append('<span class="dot3" onclick="currentSlide3(0)"></span>')



var slideIndex1 = 0;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("img1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length-1) {slideIndex1 = 0}
  if (n < 0) {slideIndex1 = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1].style.display = "block";
  dots[slideIndex1].className += " active";
} 


var slideIndex2 = 0;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
  var slides = document.getElementsByClassName("img2");
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("img2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length-1) {slideIndex2 = 0}
  if (n < 0) {slideIndex2 = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2].style.display = "block";
  dots[slideIndex2].className += " active";
}


var slideIndex3 = 0;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
  var slides = document.getElementsByClassName("img3");
function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("img3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length-1) {slideIndex3 = 0}
  if (n < 0) {slideIndex3 = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3].style.display = "block";
  dots[slideIndex3].className += " active";
}

