import Swiper from 'swiper/bundle';


import 'swiper/css';
function slider(){
    // import Swiper JS

    
    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: false,
        navigation: {
          nextEl: '.socials__slider-right-btn',
          prevEl: '.socials__slider-left-btn',
        },
        // If we need pagination
        pagination: {
          el: '.socials__slider-pagination',
        },
        spaceBetween: 25,
        slidesPerView: 'auto',
        
        // Navigation arrows

        
        // And if we need scrollbar

      });
}

export default slider;