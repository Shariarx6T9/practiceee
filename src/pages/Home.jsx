import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PlantCard from "../components/PlantCard";
import TipsSection from "../components/TipsSection";
import ExpertsSection from "../components/ExpertsSection";
import PlantOfTheWeek from "../components/PlantOfTheWeek";
import DecorIdeas from "../components/DecorIdeas";
import Hero from "../components/Hero";
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
    <div className="max-w-6xl mx-auto px-4">

      <Hero />

      {/* Top Rated Plants */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
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
            className="text-green-700 border border-green-700 px-6 py-2 rounded-md hover:bg-green-700 hover:text-white duration-200"
          >
            Explore All Plants
          </Link>
        </div>
      </section>

      <TipsSection />

      <ExpertsSection />

     <PlantOfTheWeek />

      <DecorIdeas />
    </div>
  );
}
