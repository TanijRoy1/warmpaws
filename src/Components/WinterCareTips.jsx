import React from "react";
import {
  FaSnowflake,
  FaPaw,
  FaUtensils,
  FaHome,
  FaBath,
  FaHeartbeat,
} from "react-icons/fa";
import MyContainer from "./MyContainer";

const tips = [
  {
    id: 1,
    icon: <FaSnowflake className="text-3xl text-[#E38B29]" />,
    title: "Limit Outdoor Time",
    description:
      "Keep walks short and protect your pet from cold winds and icy surfaces. Frostbite can occur quickly in low temperatures.",
  },
  {
    id: 2,
    icon: <FaPaw className="text-3xl text-[#E38B29]" />,
    title: "Protect Their Paws",
    description:
      "Use pet-safe paw balm or booties to prevent cracked pads from ice, salt, or snow irritation.",
  },
  {
    id: 3,
    icon: <FaUtensils className="text-3xl text-[#E38B29]" />,
    title: "Maintain a Healthy Diet",
    description:
      "Feed a balanced diet to help your pet maintain energy and body warmth during the colder months.",
  },
  {
    id: 4,
    icon: <FaHome className="text-3xl text-[#E38B29]" />,
    title: "Provide Cozy Shelter",
    description:
      "Ensure your pet has a warm, dry place indoors away from drafts. Add extra blankets or a heated bed.",
  },
  {
    id: 5,
    icon: <FaBath className="text-3xl text-[#E38B29]" />,
    title: "Keep Them Dry",
    description:
      "After outdoor play, wipe your pet’s paws and fur to remove snow, salt, and moisture that can cause irritation.",
  },
  {
    id: 6,
    icon: <FaHeartbeat className="text-3xl text-[#E38B29]" />,
    title: "Regular Vet Check-ups",
    description:
      "Schedule a winter health check-up to ensure your pet is in good condition for the cold season.",
  },
];

const WinterCareTips = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-[#F1FAFF] py-16"
    >
      <MyContainer>
        <div className="text-center">
          <h2 className="animate__animated animate__swing  text-2xl sm:text-4xl font-bold text-[#184E77] mb-8">
            Winter Care Tips for Pets ❄️
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Help your furry friends stay warm, healthy, and happy throughout the
            winter with these expert-approved care tips.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="800"
                data-aos-once="false"
                key={tip.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-[#184E77] mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default WinterCareTips;
