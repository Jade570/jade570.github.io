var i;

  $('#contents').append('<img class = "con" src="index.png"></img>')
  $('#dot').append('<span class="dot" onclick="currentSlide(0)"></span>')

for (i = 1; i<=5; i++){
  $('#contents').append('<img class = "con" src="'+i+'.jpg"></img>')
}


for (i = 1; i<=7; i++){
$('#dot').append('<span class="dot" onclick="currentSlide('+i+')"></span>')
}
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  var slides = document.getElementsByTagName("img");
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("con");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
} 