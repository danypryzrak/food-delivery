let offset = 0;
const sliderLine = document.querySelector('.hero__card');

document.querySelector('.hero__slider-next').addEventListener('click', function(){
    offset = offset + 528;
    if (offset > 1056) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.hero__slider-prev').addEventListener('click', function () {
    offset = offset - 528;
    if (offset < 0) {
        offset = 1056;
    }
    sliderLine.style.left = -offset + 'px';
});

