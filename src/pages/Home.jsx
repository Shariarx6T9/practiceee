import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import { motion } from "framer-motion";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/data/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hero min-h-[70vh] bg-green-50 text-center flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-green-700">Welcome to GreenNest</h1>
        <p className="mt-3 text-gray-600">Your perfect indoor plant companion 🌱</p>
      </motion.div>

      {/* Top Rated Plants */}
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Top Rated Indoor Plants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plants.map((p) => <PlantCard key={p.plantId} plant={p} />)}
        </div>
      </div>

      {/* Care Tips */}
      <section className="bg-green-100 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">🌤 Plant Care Tips</h3>
        <p>Water weekly, ensure indirect sunlight, and feed monthly for vibrant growth.</p>
      </section>

      {/* Experts */}
      <section className="max-w-5xl mx-auto py-12">
        <h3 className="text-2xl font-bold text-center mb-6">Meet Our Green Experts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-4 bg-green-50 shadow-md">
            <img src="https://i.postimg.cc/mg0Y3y1S/expert1.png" alt="" className="rounded-full w-32 mx-auto" />
            <h4 className="mt-4 font-semibold">Lara Bloom</h4>
            <p>Indoor Plant Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
