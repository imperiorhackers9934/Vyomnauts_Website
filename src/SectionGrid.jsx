import React from "react";
import Card from "./card";

const SectionGrid = () => {
  const cards = [
    {
      icon: "🔥",
      title: "PROPULSION",
      description:
        "At IITK RaSET, propulsion lies at the heart of our rocketry enthusiasts. We design and develop advanced solid and liquid rocket engines, pushing the boundaries of performance and innovation.",
    },
    {
      icon: "✈️",
      title: "AERODYNAMICS & STRUCTURES",
      description:
        "The Aerodynamics and Structures team ensures our rockets achieve optimal flight performance and structural integrity. We design aerodynamic profiles for stability and efficiency.",
    },
    {
      icon: "⚙️",
      title: "AVIONICS & PAYLOAD",
      description:
        "The Avionics and Payload team equips rockets with advanced electronics, flight computers, telemetry systems, and sensors for precise navigation and communication.",
    },
    {
      icon: "💡",
      title: "RECOVERY",
      description:
        "The Recovery team ensures the safe retrieval of our rockets after missions, designing reliable recovery systems like parachutes and deployment mechanisms.",
    },
  ];

  return (
    <section className="bg-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        OUR SUBSYSTEMS
      </h1>
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Subsystems Grid"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={<span className="text-4xl">{card.icon}</span>}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGrid;