var slideIndex1 = 1;
showSlides1(slideIndex1);

function nextSlide1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("slide");
    var dots1= document.getElementsByClassName("dot");
    if (n > slides1.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "flex";
    dots1[slideIndex1 - 1].className += " active";
}

