import React, { useEffect } from 'react';
import ServicesSection from '../Components/ServicesSection';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

    useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 100,
        easing: "ease-in-out",
        once: false, 
        mirror: true,
      });
    }, []);
    
    
    return (
        <div>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Services;