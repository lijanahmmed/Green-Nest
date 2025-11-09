import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating } = plant;
  return (
    <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
      <figure>
        <img className="w-full h-56 object-cover" src={image} alt="plant" />
      </figure>
      <div className="space-y-3 mt-3">
        <h2 className="card-title">{plantName}</h2>
        <div className="flex justify-between">
          <p className="py-2 px-4 bg-blue-100 rounded-3xl">
            <span className="text-md font-bold">Price: </span>
            {price} ৳
          </p>
          <p className="font-bold btn bg-yellow-100 rounded-3xl">⭐ {rating}</p>
        </div>
        <div className="card-actions">
          <Link
            to={`/plant-details/${plantId}`}
            className="btn w-full bg-green-500 rounded-lg text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
