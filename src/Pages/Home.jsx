import React, { useEffect } from 'react';
import WinterCareTips from '../Components/WinterCareTips';
import MeetOurVets from '../Components/MeetOutVets';
import Slider from '../Components/Slider';
import ServicesSection from '../Components/ServicesSection';
import Testimonials from '../Components/Testimonials';
import AOS from "aos";
import "aos/dist/aos.css";
import useLoadServices from '../Hooks/useLoadServices';

const Home = () => {
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
    
    return (
        <div className="roboto-font z-0">
            <Slider></Slider>
            <ServicesSection services={services}></ServicesSection>
            <WinterCareTips></WinterCareTips>
            <MeetOurVets></MeetOurVets>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;