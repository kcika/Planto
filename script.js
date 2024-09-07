// on scroll menu
const header = document.getElementById("header");
let prevscrollPos = window.scrollY;
window.addEventListener('scroll', () => {
    let currentscrollPos = window.scrollY;
    header.style.top = prevscrollPos > currentscrollPos ? '0' : '-72px';
    prevscrollPos = currentscrollPos;
});

// menubars
let menuBars = document.getElementById("menu-bars");
let navbar = document.getElementById("navbar");

menuBars.onclick = () => {
    navbar.classList.toggle("active");
}
// cart slider
let cartIcon = document.getElementById("cartIcon");
let cart = document.getElementById("cart");
let closebtn = document.querySelector(".closebtn");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("cartActive");
})
closebtn.addEventListener("click", () => {
    cart.classList.toggle("cartActive");
})
// search slider
let seachIcon = document.getElementById("searchIcon");
let searchBox = document.querySelector(".search");

seachIcon.addEventListener("click", () => {
    searchBox.classList.toggle("searchActive");
})

// testimonial slider

// tab content
function openTab(evt, tabName) {
    ;
    // Get all elements with class="tab-content" and hide them
    let tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("tabactive");
    }
    // Get all elements with class="tab-button" and remove the class "active"
    let tabbuttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("tabactive");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("tabactive");
    evt.currentTarget.classList.add("tabactive")
}

// testimonial slider
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

// about section automatic carousel
(function () {
    let slideIndex2 = 0;
    const slides = document.querySelectorAll(".mySlides");

    function showSlides2() {
        // Ensure slides exist
        if (slides.length === 0) {
            // console.error("No slides found with the class 'mySlides'.");
            return;
        }

        // Hide all slides
        slides.forEach(slide => slide.style.display = "none");

        // Increment slideIndex2 and wrap around if needed
        slideIndex2 = (slideIndex2 + 1) % slides.length;

        // Show the current slide
        if (slides[slideIndex2]) {
            slides[slideIndex2].style.display = "block";
        } else {
            console.error("Slide at index " + slideIndex2 + " does not exist.");
        }

        // Schedule the next slide change
        setTimeout(showSlides2, 2000); // Change image every 2 seconds
    }

    // Initial call to start the slideshow
    showSlides2();
})();


document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;

            // Toggle the 'open' class to show/hide content
            content.classList.toggle('open');

            // Optionally close other sections
            headers.forEach(function (otherHeader) {
                var otherContent = otherHeader.nextElementSibling;
                if (otherContent !== content) {
                    otherContent.classList.remove('open');
                }
            });
        });
    });
});



