// Slideshow for mv1:
let slideIndex1 = 1;
let slideInterval1;

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

function showSlides1(n) {
  let i;
  const slides1 = document.getElementsByClassName("mv1");
  const slidesPerPage1 = 5;

  if (n > slides1.length) {
    slideIndex1 = 1;
  } else if (n < 1) {
    slideIndex1 = slides1.length;
  }

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  const startIndex = slideIndex1 - 1;
  const endIndex = startIndex + slidesPerPage1;
  for (i = startIndex; i < Math.min(endIndex, slides1.length); i++) {
    slides1[i].style.display = "block";
  }
}
showSlides1(slideIndex1);
function resumeSlideshow1() {
  slideInterval1 = setInterval(function () {
    plusSlides1(+5);
  }, 2000);
}

function pauseSlideshow1() {
  clearInterval(slideInterval1);
}




/*--------------------------------------------------------------------------------------------------------------------------*/


// Slideshow for mv2:
let slideIndex2 = 1;
let slideInterval2;

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function showSlides2(n) {
  let i;
  const slides2 = document.getElementsByClassName("mv2");
  const slidesPerPage2 = 5;

  if (n > slides2.length) {
    slideIndex2 = 1;
  } else if (n < 1) {
    slideIndex2 = slides2.length;
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  const startIndex = slideIndex2 - 1;
  const endIndex = startIndex + slidesPerPage2;
  for (i = startIndex; i < Math.min(endIndex, slides2.length); i++) {
    slides2[i].style.display = "block";
  }
}

function resumeSlideshow2() {
  slideInterval2 = setInterval(function () {
    plusSlides2(+5);
  }, 2000);
}

function pauseSlideshow2() {
  clearInterval(slideInterval2);
}

showSlides2(slideIndex2);


/*--------------------------------------------------------------------------------------------------------------------------*/


// Slideshow for mv3:
let slideIndex3 = 1;
let slideInterval3;

function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

function showSlides3(n) {
  let i;
  const slides3 = document.getElementsByClassName("mv3");
  const slidesPerPage3 = 5;

  if (n > slides3.length) {
    slideIndex3 = 1;
  } else if (n < 1) {
    slideIndex3 = slides3.length;
  }

  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  const startIndex = slideIndex3 - 1;
  const endIndex = startIndex + slidesPerPage3;
  for (i = startIndex; i < Math.min(endIndex, slides3.length); i++) {
    slides3[i].style.display = "block";
  }
}

function resumeSlideshow3() {
  slideInterval3 = setInterval(function () {
    plusSlides3(+5);
  }, 2000);
}

function pauseSlideshow3() {
  clearInterval(slideInterval3);
}

showSlides2(slideIndex3);