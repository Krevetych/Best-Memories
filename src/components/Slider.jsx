import { Swiper, SwiperSlide } from "swiper/react";
import { photos } from "../constans";

import "swiper/css";

import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        className="mySwiper"
      >
        {photos.map((item) => (
          <SwiperSlide
            key={item.title}
            className="w-1/2"
          >
            <SliderCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
