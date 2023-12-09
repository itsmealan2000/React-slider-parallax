import React,{ useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation,Keyboard } from 'swiper/modules';
import './Slider.css'
import 'swiper/css';

import Pic1 from '../assets/slidepic/img_1.jpg'
import Pic2 from '../assets/slidepic/img_2.jpg'
import Pic3 from '../assets/slidepic/img_3.jpg'
import Pic4 from '../assets/slidepic/img_4.jpg'
import Pic5 from '../assets/slidepic/img_5.jpg'
import Pic6 from '../assets/slidepic/img_6.jpg'
import Pic7 from '../assets/slidepic/img_7.jpg'
function Slider() {
  const swiperRef = useRef(null);
  const handleLeftArrowClick = () => {
    // Simulate left arrow key press
    const event = new KeyboardEvent('keydown', { keyCode: 37 });
    document.dispatchEvent(event);
  };
  const handleRightArrowClick = () => {
    // Simulate left arrow key press
    const event = new KeyboardEvent('keydown', { keyCode: 39 });
    document.dispatchEvent(event);
  };
  return (
    <>
      <div className="main d-flex justify-content-center align-items-center flex-column">
      <div className='slider-main position-relative d-flex justify-content-center align-items-center flex-wrap'>
    <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        watchSlidesProgress={true} 
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          scale: 2,
          depth: 100,
          slideShadows:false,
          modifier: 1,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
      <SwiperSlide className='slidesmyswiper'><img src={Pic1} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic2} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic3} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic4} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic5} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic6} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
      <SwiperSlide className='slidesmyswiper'><img src={Pic7} alt="" srcset="" className='swiper-img border rounded img-fluid w-75 position-absolute' /></SwiperSlide>
    </Swiper>
    <div>
    <h1 className='mt-5'><button className='btn' onClick={handleLeftArrowClick}><i class="bi bi-arrow-left border rounded-2 p-2" ></i></button> Use Arrow Keys <button className='btn' onClick={handleRightArrowClick}><i class="bi bi-arrow-right border rounded-2 p-2"></i></button></h1>
    </div>
  </div>
      </div>
    </>
  )
}

export default Slider