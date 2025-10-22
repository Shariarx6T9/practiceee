import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PlantCard from "../components/PlantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  const topPlants = plants.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="my-6">
        <Swiper
          loop
          spaceBetween={40}
          slidesPerView={1}
          className="rounded-2xl overflow-hidden shadow"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-80 bg-[url('/src/assets/banner.png')] bg-cover bg-center flex flex-col justify-center px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-greenMain text-outline-strong">
                Bring Nature Home 🌱
              </h1>
              <p className="mt-3 text-lg font-semibold text-lightAccent text-outline-soft">
                Fresh air. Calm mind. Greener life.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-80 bg-[url('/src/assets/banner1.png')] bg-cover bg-center flex flex-col justify-center px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-greenMain text-outline-strong">
                Care. Grow. Bloom.
              </h1>
              <p className="mt-3 text-lg font-semibold text-lightAccent text-outline-soft">
                Discover easy indoor plant care guides.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Top Rated Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-greendark text-center mb-6">
          🌼 Top Rated Indoor Plants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topPlants.map((plant) => (
            <PlantCard key={plant.plantId} plant={plant} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/plants"
            className="text-greendark border border-blackdark px-6 py-2 rounded-md hover:bg-greendark hover:text-white duration-200"
          >
            Explore All Plants
          </Link>
        </div>
      </section>

      {/* Plant Tips */}
      <section className="my-16 bg-white p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-greendark mb-4 text-center">
          🌱 Quick Plant Care Tips
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-bold mb-2 text-lg">💧 Watering</h4>
            <p>Water when topsoil feels dry. Avoid overwatering!</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">☀️ Light</h4>
            <p>Most indoor plants thrive in bright, indirect sunlight.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">🌿 Fertilizer</h4>
            <p>Feed monthly with mild fertilizer during growing season.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
