import React from "react";

const Decor = () => {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Eco Decor Ideas</h3>
        <p className="text-gray-500">
          Creative ways to style your home with plants for a fresh, natural, and
          eco-friendly vibe.
        </p>
      </div>
      <div className="mt-10">
        <img
          className="w-full md:w-10/12 h-96 mx-auto object-cover"
          src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/at%2Fhouse%20tours%2F2020-03%2Fthomas-d%2F_E5A8508"
          alt=""
        />
      </div>
    </div>
  );
};

export default Decor;
