import React, { useEffect, useState } from "react";

export default function PlantOfTheWeek() {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    // Fetch data from public/plants.json
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        // Pick one random plant each week
        const randomPlant = data[Math.floor(Math.random() * data.length)];
        setPlant(randomPlant);
      })
      .catch((error) => console.error("Error loading plant data:", error));
  }, []);

  if (!plant) return null;

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          🌿 Plant of the Week
        </h2>
        <div className="bg-white shadow-lg rounded-2xl p-8 inline-block">
          <img
            src={`/${plant.image}`} // ✅ since assets are in /public/assets
            alt={plant.plantName}
            className="w-60 h-60 object-cover rounded-xl mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {plant.plantName}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">{plant.description}</p>
        </div>
      </div>
    </section>
  );
}
