import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure><img src={plant.image} alt={plant.plantName} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{plant.plantName}</h2>
        <p>${plant.price}</p>
        <p>⭐ {plant.rating}</p>
        <Link to={`/plants/${plant.plantId}`} className="btn btn-sm btn-success text-white">View Details</Link>
      </div>
    </div>
  );
}
