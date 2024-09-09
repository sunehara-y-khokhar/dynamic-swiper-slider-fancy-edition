// Thumbs slider button
var swiper = new Swiper(".gallery-thumbs", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0, //slider spacing (gap) between individual slides 
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        768: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 1
        }
    }
});

// slider
var swiper2 = new Swiper(".slide-swiper", {
    loop: true,
    speed: 1300,
    autoplay: true, //auto play
    centeredSlides: true,

    thumbs: {
        swiper: swiper
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
