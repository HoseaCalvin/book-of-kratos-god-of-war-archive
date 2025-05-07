document.addEventListener('DOMContentLoaded', function() {
    initializeSlide();
})

function initializeSlide() {
    const gallery = document.querySelectorAll(".overview-gallery");

    gallery.forEach((galleries) => {
        const slides = galleries.querySelectorAll('.slides');
        const prevButton = galleries.querySelector('.prev');
        const nextButton = galleries.querySelector('.next');

        let slideIndex = 0;

        if(slides.length > 0 ) {
            slides[slideIndex].classList.add('showSlide');
        }

        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
            updateSlides(slides, slideIndex);
        });

        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
            updateSlides(slides, slideIndex);
        });
    });
}

function updateSlides(slides, slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('showSlide');
    });
    slides[slideIndex].classList.add("showSlide");

}