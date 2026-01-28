import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from "../img/banner_Hero1.jpg";
import banner2 from "../img/banner_Hero2.jpg";
import banner3 from "../img/banner_Hero3.jpg";

function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current) return;
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slides = [banner1, banner2, banner3];

  return (
    <div className="my-6 lg:my-10">
      <Swiper
        spaceBetween={20}
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="
  w-full
  sm:max-w-[1000px]
  sm:mx-auto
  rounded-none sm:rounded-2xl
  overflow-hidden
"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i} className="relative">
            {/* Image */}
            <img
              src={img}
              alt="Hero Banner"
              className="w-full h-[200px] sm:h-[350px] md:h-[450px] object-cover"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-3 sm:px-8">
              <div
                className="
                   backdrop-blur
                  p-3 sm:p-6
                  rounded-lg sm:rounded-xl
                  max-w-[260px] sm:max-w-[420px]
                "
              >
                <h4 className="text-[10px] sm:text-sm italic text-gray-500 mb-1">
                  Introducing the new
                </h4>

                <h3 className="text-sm sm:text-3xl font-bold !text-[var(--main-color)] mb-1 sm:mb-2 leading-tight">
                  Microsoft Xbox <br /> 360 Controller
                </h3>

                <p className="text-[10px] sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Windows XP / 10 / 7 / 8 – PS3 – TV Box
                </p>

                <Link
                  to="/"
                  className="
                    inline-block
                    px-3 py-1.5
                    sm:px-5 sm:py-2
                    rounded-md sm:rounded-lg
                    bg-[var(--main-color)]
                    text-white
                    text-[10px] sm:text-sm
                    font-medium
                    hover:opacity-90
                    transition
                  "
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress */}
        <div
          slot="container-end"
          className="absolute bottom-3 right-3 z-10 flex items-center gap-2 text-white text-xs sm:text-sm"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="w-6 h-6 sm:w-8 sm:h-8 rotate-[-90deg]"
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
          <span ref={progressContent} />
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
