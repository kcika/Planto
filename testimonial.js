let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides by a given index
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the slides
function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Wrap slideIndex if out of bounds
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove "active" class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
