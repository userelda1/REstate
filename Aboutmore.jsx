import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { aboutMore } from "../assets/assets";

const Aboutmore = () => {
  return (
    <>
      <Navbar />

      <div className="bg-blue-300 text-white py-20 text-center">
        <div className="container mx-auto">

          <h1 className="text-4xl font-bold mb-6">
            {aboutMore.title}
          </h1>

          <img
            src={aboutMore.image}
            alt={aboutMore.title}
            className="w-80 mx-auto mb-8"
          />

          <p className="max-w-xl mx-auto">
            {aboutMore.description}
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutmore;