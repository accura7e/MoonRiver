import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


function slider(){
    // import Swiper JS

    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        spaceBetween: 25,
        slidesPerView: 'auto',
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}

export default slider;