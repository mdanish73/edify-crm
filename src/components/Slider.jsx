import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default () => {
  const slides = [
    { image: '/img/cover_1.jpg', category: 'Featured Event', title: 'Exploring the hidden Gems of Australia', description: 'lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet' },
    { image: '/img/cover_2.jpg', category: 'Featured Event', title: '10 Essential Tips for Healthy Living', description: 'lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet' }
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper w-full h-full rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="w-full h-full relative">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            
            <div className="absolute bottom-0 p-7 text-white">
              <span className='text-[#73ACEA] text-sm font-semibold' >{slide.category}</span>
              <h2 className="text-xl font-bold line-clamp-1 my-2">{slide.title}</h2>
              <p className='line-clamp-1 text-sm'>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
