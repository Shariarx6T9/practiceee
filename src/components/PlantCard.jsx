import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, price, rating, image } = plant;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={plantName}
        className="w-full h-52 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-semibold text-primary">{plantName}</h3>
      <p className="text-gray-600">💰 ${price}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
      <Link to={`/plants/${plantId}`}>
        <button className="mt-3 btn-primary w-full">View Details</button>
      </Link>
    </div>
  );
};

export default PlantCard;
