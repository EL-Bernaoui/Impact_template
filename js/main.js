// Set a box shadow on scrolling down
let mainHeader = document.querySelector(".second_nav");

window.onscroll = function () {
    if (scrollY >= "40") {
        mainHeader.style.boxShadow = "0px 2px 20px rgb(0 0 0 / 10%)";
    } else {
        mainHeader.style.boxShadow = "none";
    }
};


// Testimonial Carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});


// Portfolio Filter
let lis = document.querySelectorAll(".portfolio .nav li");
let cards = document.querySelectorAll(".portfolio .card");

lis.forEach(li => {
    li.addEventListener("click", function () {
        lis.forEach(li => {
            li.classList.remove("active");
            this.classList.add("active");
        });
        cards.forEach((card) => {
            card.parentElement.classList.add("hide");
        });
        document.querySelectorAll(this.dataset.filter).forEach((card) => {
            card.parentElement.classList.remove("hide");
        });
    });
});