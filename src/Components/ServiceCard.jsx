import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { serviceId, image, serviceName, price, rating, description } = service;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={serviceId * 200}
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <img src={image} alt={serviceName} className="w-full h-56 object-cover" />

      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-[#184E77] mb-1">
          {serviceName}
        </h3>

        <div className="flex justify-between items-center mb-1">
          <p className="text-[#E38B29] font-bold text-lg">${price}</p>
          <p className="text-yellow-500 font-medium">⭐ {rating}</p>
        </div>

        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{description}</p>

        <Link
          to={`/services/${serviceId}`}
          className="w-full block text-center bg-[#E38B29] hover:bg-[#d87b18] text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
