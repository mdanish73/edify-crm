import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { FluentChevronLeft24Filled } from './svg/FluentChevronLeft24Filled';
import { FluentChevronRight24Filled } from './svg/FluentChevronRight24Filled';

export default () => {
  const swiper = useSwiper();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div className='h-3 w-3 rounded-full bg-gray-900 opacity-30' onClick={() => swiper.slidePrev()}>
        <FluentChevronLeft24Filled />
      </div>
      <div className='h-3 w-3 rounded-full bg-gray-900 opacity-30' onClick={() => swiper.slideNext()}>
        <FluentChevronRight24Filled />
      </div>
    </Swiper>
  );
};