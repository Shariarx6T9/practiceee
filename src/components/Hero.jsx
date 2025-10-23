import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/login");
  };

  return (
    <section className="my-6">
      <Swiper
        loop
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] bg-[url('/src/assets/banner.png')] bg-cover bg-center flex items-center justify-center text-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 px-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-greenMain text-outline-strong mb-3">
                Bring Nature Home 🌱
              </h1>
              <p className="text-lg md:text-xl text-lightAccent text-outline-soft mb-6">
                Fresh air. Calm mind. Greener life.
              </p>
              <button
                onClick={handleExploreClick}
                className="btn-primary px-6 py-2 rounded-md"
              >
                Explore Plants
              </button>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] bg-[url('/src/assets/banner1.png')] bg-cover bg-center flex items-center justify-center text-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 px-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-greenMain text-outline-strong mb-3">
                Care. Grow. Bloom.
              </h1>
              <p className="text-lg md:text-xl text-lightAccent text-outline-soft mb-6">
                Discover easy indoor plant care guides.
              </p>
              <button
                onClick={handleExploreClick}
                className="btn-primary px-6 py-2 rounded-md"
              >
                Explore Plants
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
