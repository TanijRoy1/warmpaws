import React from "react";

const testimonials = [
  {
    id: 1,
    petName: "Buddy",
    ownerName: "Sarah Collins",
    story:
      "Buddy used to shiver all winter! After trying WarmPaws’ coat fitting service, he stays cozy and playful even on chilly mornings.",
    image:
      "https://i.ibb.co.com/Zp4qTbKr/brian-jones-Rfv5u-Z0ym3-Y-unsplash.jpg",
  },
  {
    id: 2,
    petName: "Luna",
    ownerName: "Michael Tan",
    story:
      "The paw treatment and grooming really helped Luna’s paws heal last winter. She looks and feels great now!",
    image: "https://i.ibb.co.com/R47rvHQs/sandra-BZr8-V52-IU80-unsplash.jpg",
  },
  {
    id: 3,
    petName: "Rocky",
    ownerName: "Amira Hasan",
    story:
      "I booked a winter checkup through WarmPaws. The vet’s advice was spot on — Rocky hasn’t caught a cold since!",
    image:
      "https://i.ibb.co.com/N6kcKKv2/sveta-golovina-TDVDh-BQorjc-unsplash.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-gradient-to-br from-[#EAF4F4] via-[#D6EADF] to-[#C7E8CA] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="sm:text-4xl text-2xl font-bold text-[#184E77] mb-4">
          What Pet Parents Say 🐾
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Warm hearts, cozy pets — here’s what our happy families have to share
          about their winter care experiences!
        </p>

        <div className="flex flex-wrap justify-center lg:gap-8 gap-12">
          {testimonials.map((t, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              key={t.id}
              className="bg-white/80 backdrop-blur-md border border-[#184E77]/10 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl p-6 max-w-sm relative"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={t.image}
                  alt={t.petName}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#E38B29] shadow-md"
                />
              </div>

              <div className="mt-12">
                <p className="italic text-gray-700 mb-4">“{t.story}”</p>
                <h3 className="font-semibold text-[#184E77]">{t.ownerName}</h3>
                <p className="text-[#E38B29] text-sm font-medium">
                  Pet: {t.petName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
