import HeaderProduct from "./HeaderProduct";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function SlideProduct({ title, data }) {
  return (
    <div className="my-[30px] md:my-[60px]">
      <div className="layout-container flex flex-col gap-10">
        <HeaderProduct
          title={title}
          description="Add bestselling products to weekly line up"
        />
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            //   loop={true}
            className="mySwiper "
          >
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <Product item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SlideProduct;
