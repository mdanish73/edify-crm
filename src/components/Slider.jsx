import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
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
      draggable={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <div className='flex gap-3 relative mr-2 justify-end'>
        <div className='h-5 w-5 rounded-full bg-gray-900 opacity-10 flex items-center justify-center' onClick={() => swiper.allowSlidePrev()}>
          <FluentChevronLeft24Filled />
        </div>
        <div className='h-5 w-5 rounded-full bg-gray-900 opacity-10 flex items-center justify-center' onClick={() => swiper.allowSlideNext()}>
          <FluentChevronRight24Filled />
        </div>
      </div>
    </Swiper>
  );
};