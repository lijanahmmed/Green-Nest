import React from "react";
import SwiperSection from "../Components/SwiperSection";
import IndoorPlants from "../Components/indoorPlants";
import usePlantsData from "../Hook/Hook";
import Loading from "../Components/Loading";
import PlantCare from "../Components/PlantCare";
import GreenExperts from "../Components/GreenExperts";
import Decor from "../Components/Decor";
import Work from "../Components/Work";

const Home = () => {
  const { loading } = usePlantsData();
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <SwiperSection></SwiperSection>
      <IndoorPlants></IndoorPlants>
      <PlantCare></PlantCare>
      <GreenExperts></GreenExperts>
      <Decor></Decor>
      <Work></Work>
    </div>
  );
};

export default Home;
