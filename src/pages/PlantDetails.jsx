import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/data/plants.json")
      .then((res) => res.json())
      .then((data) => setPlant(data.find((p) => p.plantId == id)));
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    e.target.reset();
  };

  if (!plant) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <img src={plant.image} alt={plant.plantName} className="w-full rounded-lg" />
      <h2 className="text-3xl mt-4 font-semibold">{plant.plantName}</h2>
      <p>{plant.description}</p>
      <p className="mt-2">Price: ${plant.price}</p>
      <form onSubmit={handleBook} className="mt-6 space-y-3">
        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
        <button type="submit" className="btn btn-success text-white w-full">Book Now</button>
      </form>
    </div>
  );
}
