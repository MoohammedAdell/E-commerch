import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="my-6 lg:my-8 ">
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full h-[200px] sm:h-[400px] relative  md:h-[450px] layout-container rounded-xl overflow-hidden"
        >
          <SwiperSlide className="flex  items-center justify-center text-white text-2xl font-bold">
            <div className="content absolute top-1/2 left-[7%] -translate-y-1/2 max-w-[500px] text-left">
              <h4 className="text-sm md:text-base italic text-gray-600 mb-2">
                Introducing the new
              </h4>

              <h3 className="text-2xl md:text-4xl font-bold !text-[var(--main-color)] mb-4 leading-tight">
                Microsoft Xbox <br /> 360 Controller
              </h3>

              <p className="text-sm md:text-base text-gray-500 mb-6">
                Windows Xp/10/7/8 Ps3, Tv Box
              </p>

              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>

            <img
              src="/src/img/banner_Hero1.jpg"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold ">
            <div className="content absolute top-1/2 left-[7%] -translate-y-1/2 max-w-[500px] text-left">
              <h4 className="text-sm md:text-base italic text-gray-600 mb-2">
                Introducing the new
              </h4>

              <h3 className="text-2xl md:text-4xl font-bold !text-[var(--main-color)] mb-4 leading-tight">
                Microsoft Xbox <br /> 360 Controller
              </h3>

              <p className="text-sm md:text-base text-gray-500 mb-6">
                Windows Xp/10/7/8 Ps3, Tv Box
              </p>

              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>

            <img
              src="/src/img/banner_Hero2.jpg"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center text-white text-2xl font-bold ">
            <div className="content absolute top-1/2 left-[7%] -translate-y-1/2 max-w-[500px] text-left">
              <h4 className="text-sm md:text-base italic text-gray-600 mb-2">
                Introducing the new
              </h4>

              <h3 className="text-2xl md:text-4xl font-bold !text-[var(--main-color)] mb-4 leading-tight">
                Microsoft Xbox <br /> 360 Controller
              </h3>

              <p className="text-sm md:text-base text-gray-500 mb-6">
                Windows Xp/10/7/8 Ps3, Tv Box
              </p>

              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>

            <img
              src="/src/img/banner_Hero3.jpg"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <div
            className="absolute bottom-4 right-4 z-10 flex items-center gap-2 text-white text-sm"
            slot="container-end"
          >
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}
              className="w-8 h-8 rotate-[-90deg]"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                className="fill-none stroke-white/30 stroke-[4]"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                className="fill-none stroke-white stroke-[4]"
                style={{
                  strokeDasharray: 125.6,
                  strokeDashoffset: "calc(125.6 * (1 - var(--progress)))",
                }}
              />
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
