import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const CustomerReviewsSection = () => {
  return (
    <section className="bg-gradient-to-b py-10 from-base-200 to-base-100">
      <div className="container mb-12">
        <h1 className="text-2xl text-center lg:text-3xl font-bold mb-8 relative py-5 after:absolute after:bottom-0 after:w-32 after:h-[3px] after:bg-secondary flex justify-center w-fit mx-auto">
          Customer Reviews
        </h1>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{
            bulletActiveClass: "!bg-primary opacity-100",
            clickable: true,
          }}
          className="review-swiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
