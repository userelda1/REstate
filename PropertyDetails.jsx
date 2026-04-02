import React from "react";
import { useParams } from "react-router-dom";
import { propertiesdetails } from "../assets/assets";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PropertyDetails = () => {

  const { id } = useParams();
  const property = propertiesdetails[id];

  if (!property) {
    return <div className="text-center py-20">Property not found</div>;
  }

  return (
    <>
  <Navbar />

  <div className="bg-blue-300 text-white py-20">
    <div className="container mx-auto px-6 md:px-20 lg:px-32">

      {/* Big Image */}
      <div className="mb-10">
        <img
          src={property.image}
          alt="property"
          className="w-full h-[450px] mt-6 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Price */}
      <h1 className="text-3xl font-bold mb-2">{property.price}</h1>

      {/* Location */}
      <p className="mb-6">{property.location}</p>

      {/* Property Info */}
      <div className="flex flex-wrap gap-6 text-lg mb-8">

        <div className="bg-blue-300 text-white px-4 py-2 rounded">
          {property.bedroom}
        </div>

        <div className="bg-blue-300 text-white px-4 py-2 rounded">
          {property.bathroom}
        </div>

        <div className="bg-blue-300 text-white px-4 py-2 rounded">
          {property.size}
        </div>

      </div>

      {/* Description */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>

        <p className="leading-relaxed">
          {property.description}
        </p>
      </div>

      {/* Contact Button */}
      <button className="bg-blue-600 mt-2 text-white px-8 py-2 rounded
   hover:bg-blue-800 active:scale-95 transition-all duration-200">
        Contact Agent
      </button>

    </div>
  </div>

  <Footer />
</>
  );
};

export default PropertyDetails;