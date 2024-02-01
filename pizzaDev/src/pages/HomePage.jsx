import React from "react";

import pizza from "../assets/pizza.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div className="w-auto m-4 px-4">
        <p className="italic mb-4 text-xl">Are you hungry?</p>
        <p className="text-6xl text-black text-nowrap mb-9">Don't wait !</p>
        <Link
          to="/menu"
          className="bg-orange-400 text-white  py-4 px-5 rounded-t-2xl rounded-b-2xl "
        >
          Order Now
        </Link>
      </div>
      <img
        src={pizza}
        className=" h-auto md:mx-4 md:mt-16 px-4 sm:pt-10"
        alt="pizza"
      />
    </div>
  );
};

export default HomePage;
