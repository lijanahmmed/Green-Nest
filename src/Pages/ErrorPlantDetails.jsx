import React from 'react';
import usePlantsData from '../Hook/Hook';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router';

const ErrorPlantDetails = () => {
    const { loading } = usePlantsData();

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <Loading></Loading>;
  }

    return (
        <div className="w-10/12 mx-auto">
      <div className="flex justify-center items-center mt-10">
        <img
          className="w-[50%] lg:w-[30%]"
          src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
          alt=""
        />
      </div>
      <div className="text-center mt-5 space-y-2">
        <p className="text-3xl md:text-4xl font-bold">Oops, Plant not found!</p>
        <p className="text-gray-400">
          This plant you are looking for is not available!!
        </p>
        <button onClick={handleGoBack} className="btn text-white bg-green-600">
          Go Back!
        </button>
      </div>
    </div>
    );
};

export default ErrorPlantDetails;