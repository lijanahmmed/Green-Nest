import React from "react";
import usePlantsData from "../Hook/Hook";
import Loading from "../Components/Loading";
import { useParams } from "react-router";
import Consultation from "../Components/Consultation";
import ErrorPlantDetails from "./ErrorPlantDetails";

const PlantDetails = () => {
  const { plants, loading } = usePlantsData();
  const { id } = useParams();
  const plant = plants.find((p) => p.plantId === Number(id));
  const { plantName, price, rating, availableStock, description, image } =
    plant || {};

    if(!plant){
        return <ErrorPlantDetails></ErrorPlantDetails>
    }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
        <img className="w-full h-96 object-cover" src={image} alt="" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{plantName}</h3>
        <p className="text-gray-500">{description}</p>
        <p>
          <span className="font-bold">Price : </span>
          {price}৳
        </p>
        <p>
          <span className="font-bold">Rating : </span>
          {rating} ⭐
        </p>
        <p>
          <span className="font-bold">Available : </span>
          {availableStock} Pcs
        </p>
      </div>
      </div>
      <Consultation></Consultation>
    </div>
  );
};

export default PlantDetails;
