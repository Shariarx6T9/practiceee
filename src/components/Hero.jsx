<<<<<<< HEAD
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
=======
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Welcome to GreenNest
        </h1>
        <p className="text-lg text-gray-600">
          Your perfect indoor plant companion 🌿
        </p>
        <button className="mt-6 btn-primary">Explore Plants</button>
      </motion.div>

      <motion.img
        src="https://i.postimg.cc/3N5rhkMB/plant-hero.png"
        alt="Hero plant"
        className="w-72 md:w-96 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
>>>>>>> 47f14dfab9ab515f587aa9c6197cb173fef1ba87
    </section>
  );
}
