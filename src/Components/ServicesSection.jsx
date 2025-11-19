import React from "react";
import ServiceCard from "./ServiceCard";
import MyContainer from "./MyContainer";
import useLoadServices from "../Hooks/useLoadServices";



const ServicesSection = () => {
  const {services, loading} = useLoadServices();

  if(loading){
    return (
      <h1 className="text-center py-30">
        <span className="loading loading-bars loading-xl"></span>
      </h1>
    );
  }
   
   
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="py-16 bg-[#F1FAFF] z-0">
      <MyContainer>
        <div className="text-center mb-10">
          <h2 className="animate__animated animate__backInRight sm:text-4xl text-2xl font-bold text-[#184E77] mb-3">
            Winter Pet Care Services ❄️
          </h2>
          <p className="animate__animated animate__backInRight text-gray-700 sm:text-lg max-w-2xl mx-auto">
            Keep your pets cozy, clean, and happy this winter. Explore our
            top-rated seasonal services below.
          </p>
        </div>

        <div
         data-aos="fade-up"
         data-aos-duration="800"
         data-aos-once="false"
         className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.serviceId}
              service={service}
            ></ServiceCard>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default ServicesSection;
