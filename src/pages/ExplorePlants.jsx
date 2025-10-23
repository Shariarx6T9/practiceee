import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

export default function ExplorePlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(() => console.error("Failed to load plants.json"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-greenMuted via-greenLight to-greenMuted py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-greenDark mb-10">
          🌿 Explore Our Indoor Plants
        </h1>

        {plants.length === 0 ? (
          <p className="text-center text-gray-500">Loading plants...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {plants.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
