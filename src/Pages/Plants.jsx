import React from "react";
import usePlantsData from "../Hook/Hook";
import Loading from "../Components/Loading";
import PlantCard from "../Components/PlantCard";

const Plants = () => {
  const { plants, loading } = usePlantsData();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Our All Plants</h3>
        <p className="text-gray-500">
          Explore our complete collection of vibrant, healthy plants perfect for
          every home and space.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {plants.map((plant) => <PlantCard key={plant.plantId} plant={plant}></PlantCard>) }
      </div>
    </div>
  );
};

export default Plants;
