import React from "react";
import { FaStethoscope, FaPaw, FaHeartbeat } from "react-icons/fa";
import MyContainer from "./MyContainer";

const vets = [
  {
    id: 1,
    name: "Dr. Sara Rahman",
    specialty: "Canine Health & Nutrition",
    experience: "8 Years Experience",
    image:
      "https://i.ibb.co.com/v4Mthqf3/humberto-chavez-FVh-yq-LR9e-A-unsplash.jpg",
    description:
      "Specialist in dog nutrition and winter wellness care, ensuring pets stay healthy during colder months.",
  },
  {
    id: 2,
    name: "Dr. Ayaan Chowdhury",
    specialty: "Feline Medicine & Behavior",
    experience: "6 Years Experience",
    image:
      "https://i.ibb.co.com/s9ZtnRyZ/usman-yousaf-p-Trhfmj2j-DA-unsplash.jpg",
    description:
      "Certified feline expert offering guidance on indoor care, grooming, and cold-weather stress reduction.",
  },
  {
    id: 3,
    name: "Dr. Meera Islam",
    specialty: "Small Animal Surgery",
    experience: "10 Years Experience",
    image:
      "https://i.ibb.co.com/dw2K9fxc/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.jpg",
    description:
      "Focused on preventive winter care and minor surgeries for small pets to keep them safe and active.",
  },
  {
    id: 4,
    name: "Dr. Tanvir Ahmed",
    specialty: "Exotic & Winter Wildlife Care",
    experience: "9 Years Experience",
    image:
      "https://i.ibb.co.com/d4ffQrYX/ashkan-forouzani-DPEPYPBZp-B8-unsplash.jpg",
    description:
      "Experienced with rabbits, birds, and exotic pets—providing warm shelter and specialized care tips.",
  },
];

const MeetOurVets = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-[#F1FAFF] py-16">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#184E77] mb-8">
            Meet Our Expert Vets 🩺
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our trusted veterinary team ensures your furry friends receive the
            best care, guidance, and love — especially during the winter season.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vets.map((vet, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="false"
                key={vet.id}
                className="bg-[#EAF4F4] rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-[#184E77]">
                    {vet.name}
                  </h3>
                  <p className="text-[#E38B29] text-sm font-medium">
                    {vet.specialty}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">{vet.experience}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {vet.description}
                  </p>

                  <div className="flex space-x-3 text-[#E38B29]">
                    <FaStethoscope />
                    <FaPaw />
                    <FaHeartbeat />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default MeetOurVets;
