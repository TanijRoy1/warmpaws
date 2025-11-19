import React from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider1}
              className="w-full sm:h-screen h-[50vh] object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute top-1/2 sm:left-15 left-4  transform -translate-y-1/2 text-white max-w-lg">
              <h1 className="animate__animated animate__rollIn sm:text-4xl text-xl font-bold mb-3 text-orange-500">
                Keep Your Pets Cozy This Winter ❄️
              </h1>
              <p className="sm:text-lg text-xs leading-relaxed">
                Discover the best winter outfits and care essentials to keep
                your furry friends warm and happy.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider2}
              className="w-full sm:h-screen h-[50vh] object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 sm:left-15 left-4 transform -translate-y-1/2 text-white max-w-lg">
              <h1 className="sm:text-4xl text-xl font-bold mb-3 text-orange-500">
                Gentle Winter Grooming 🛁
              </h1>
              <p className="sm:text-lg text-xs leading-relaxed">
                Protect your pet’s skin and fur with moisturizing grooming and
                paw care treatments.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider3}
              className="w-full sm:h-screen h-[50vh] object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 sm:left-15 left-4 transform -translate-y-1/2 text-white max-w-lg">
              <h1 className="sm:text-4xl text-xl font-bold mb-3 text-orange-500">
                Safe Indoors, Happy Hearts 🏠
              </h1>
              <p className="sm:text-lg text-xs leading-relaxed">
                Learn how to create a warm indoor space for your pets during
                chilly days.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider4}
              className="w-full sm:h-screen h-[50vh] object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 sm:left-15 left-4 transform -translate-y-1/2 text-white max-w-lg">
              <h1 className="sm:text-4xl text-xl font-bold mb-3 text-orange-500">
                Expert Vet Tips 🩺
              </h1>
              <p className="sm:text-lg text-xs leading-relaxed">
                Our certified vets share winter health advice to keep your pets
                safe and energetic.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slider5}
              className="w-full sm:h-screen h-[50vh] object-cover"
              alt="Pet accessories and services"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-1/2 sm:left-15 left-4 transform -translate-y-1/2 text-white max-w-lg">
              <h1 className="sm:text-4xl text-xl font-bold mb-3 text-orange-500">
                Your Winter Pet Companion Hub 🐾
              </h1>
              <p className="sm:text-lg text-xs leading-relaxed">
                From warm clothes to expert care, find everything your pet needs
                this winter in one place.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
