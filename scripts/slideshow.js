var slideshow = document.querySelector(".slideshow-container");
var images = slideshow.querySelectorAll("img");
var currentIndex = 0;

function showImage(index) {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }
    images[index].classList.add("active");
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}