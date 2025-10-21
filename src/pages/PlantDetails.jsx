import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.plantId == id);
        setPlant(found);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Consultation booked successfully!");
    e.target.reset();
  };

  if (!plant) return <p className="text-center mt-10">Loading plant details...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-2xl p-6">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            {plant.plantName}
          </h1>
          <p className="text-gray-700 mb-4">{plant.description}</p>

          <p><strong>Category:</strong> {plant.category}</p>
          <p><strong>Price:</strong> ${plant.price}</p>
          <p><strong>Rating:</strong> ⭐ {plant.rating}</p>
          <p><strong>Available:</strong> {plant.availableStock}</p>
          <p><strong>Care Level:</strong> {plant.careLevel}</p>
          <p><strong>Provider:</strong> {plant.providerName}</p>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="mt-12 bg-green-50 p-6 rounded-2xl shadow-inner">
        <h2 className="text-2xl font-bold text-primary mb-4">
          🌱 Book a Consultation
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <button type="submit" className="btn-primary w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
