import React, { useEffect } from "react";
import MyContainer from "../Components/MyContainer";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import useLoadServices from "../Hooks/useLoadServices";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {

  const {id} = useParams();
  const {services, loading} = useLoadServices();


  useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 100,
        easing: "ease-in-out",
        once: false, 
        mirror: true,
      });
  }, []);

  if(loading){
    return (
      <h1 className="text-center py-30">
        <span className="loading loading-bars loading-xl"></span>
      </h1>
    );
  }
    
  const service = services.find(service => service.serviceId == id);
  const { image, serviceName, price, rating, description, providerName, providerEmail, slotsAvailable, category} = service;

  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("🎉 Your booking has been received! We'll contact you soon.");
    e.target.reset();
  }

  return (
    <section className="bg-[#F1FAFF] py-16">
      <MyContainer>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
          
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="false"
            className="">
            <img
              src={image}
              alt={serviceName}
              className="w-full h-full object-cover"
            />
          </div>

          <div
           className="p-8 flex md:flex-row flex-col justify-between items-end gap-4">

            <div
             data-aos="zoom-in"
             data-aos-duration="800"
             data-aos-once="false"
             className="flex-1">
              <h2 className="text-3xl font-bold text-[#184E77] mb-3">
                {serviceName}
              </h2>

              <p className="text-gray-700 mb-4">{description}</p>

              <div className="space-y-2 text-gray-800">
                <p>
                  <span className="font-semibold text-[#184E77]">
                    Category:
                  </span>{" "}
                  {category}
                </p>
                <p>
                  <span className="font-semibold text-[#184E77]">
                    Provider:
                  </span>{" "}
                  {providerName}
                </p>
                <p>
                  <span className="font-semibold text-[#184E77]">
                    Contact Email:
                  </span>{" "}
                  <a
                    href="#"
                    className="text-[#E38B29] underline hover:text-[#F7B267]"
                  >
                    {providerEmail}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#184E77]">Rating:</span>{" "}
                  ⭐ {rating}
                </p>
                <p>
                  <span className="font-semibold text-[#184E77]">
                    Slots Available:
                  </span>{" "}
                  {slotsAvailable}
                </p>
                <p className="text-xl font-bold text-[#E38B29] mt-3">
                  Price: ${price}
                </p>
              </div>
            </div>

            <form
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-once="false"
              onSubmit={handleBookNow} className="lg:w-1/3 md:w-1/2 w-full bg-[#F8F9FA] p-5 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-[#184E77] mb-4">
                Book Service
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-white"
                  required
                />
                <button
                  type="submit"
                  className="mt-3 bg-[#E38B29] hover:bg-[#dd7a11] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Book Now
                </button>
              </div>
            </form>

          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default ServiceDetails;
