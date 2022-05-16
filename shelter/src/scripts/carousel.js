import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

const next = document.querySelector('.slider__next')
const prev = document.querySelector('.slider__prev')

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
        nextEl: next,
        prevEl: prev,
    },
    loop: true,
    slideClass: 'card',
    wrapperClass: 'slider__content',

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            width: 270,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            width: 620,
        },
        1279: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            width: 1080,
        }
    },
});