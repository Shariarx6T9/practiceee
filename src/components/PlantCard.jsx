import { useNavigate } from "react-router-dom";

export default function PlantCard({ plant }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden border border-green-100 transition duration-200">
      <img src={plant.image} alt={plant.plantName} className="h-44 w-full object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{plant.plantName}</h3>
        <p className="text-sm text-gray-500">{plant.category}</p>
        <div className="flex justify-between text-sm mt-2">
          <span className="font-semibold text-greendark">৳{plant.price}</span>
          <span className="text-yellow-500">{plant.rating} ★</span>
        </div>
        <button
          onClick={() => navigate(`/plants/${plant.plantId}`)}
          className="w-full mt-3 bg-greendark text-white py-2 rounded-md hover:bg-green-800"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
