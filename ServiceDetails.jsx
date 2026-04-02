import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { services } from "../assets/assets";

const ServiceDetails = () => {

  const { id } = useParams();
  const service = services[id];

  return (
    <>
      <Navbar />

      <div className="bg-blue-300 text-white py-20 text-center">
        <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {service.title}
        </h1>

        <img
          src={service.image}
          alt={service.title}
          className="w-80 mx-auto mb-8"
        />

        <p className="text-gray-500 max-w-xl mx-auto">
          {service.description}
        </p>

      </div>
        </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;