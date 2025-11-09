import React from "react";
import usePlantsData from "../Hook/Hook";
import PlantCard from "./PlantCard";
import { Link } from "react-router";
import Loading from "./Loading";

const IndoorPlants = () => {
  const { plants, loading } = usePlantsData();
  const topPlants = plants.slice(0, 6);
  
  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Top Rated Indoor Plants</h3>
        <p className="text-gray-500">
          Discover the best indoor plants loved for their beauty and and easy
          care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {topPlants.map((plant) => <PlantCard key={plant.plantId} plant={plant}></PlantCard>) }
      </div>
      <div className="mt-8 flex justify-center">
        <Link className="btn bg-green-600 text-white rounded-lg px-10" to='/plants'>Show all</Link>
      </div>
    </div>
  );
};

export default IndoorPlants;
