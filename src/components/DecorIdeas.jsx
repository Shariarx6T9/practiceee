import React from "react";
import PlantCorners from "../assets/Plant Corners.png";
import HangingPlanters from "../assets/Hanging Planters.png";
import DeskPlants from "../assets/Desk Plants.png";

export default function DecorIdeas() {
  const ideas = [
    {
      title: "Plant Corners",
      img: PlantCorners,
      desc: "A cozy, well-lit room corner filled with various plants, including a large Monstera, creating a lush, green space.",
    },
    {
      title: "Hanging Planters",
      img: HangingPlanters,
      desc: "A close-up of several plants in stylish macrame hanging planters against a clean white wall.",
    },
    {
      title: "Desk Plants",
      img: DeskPlants,
      desc: "A clean, modern desk setup with a computer, keyboard, and small potted plants, adding a touch of nature to the workspace.",
    },
  ];

  return (
    <section className="my-20 bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-8">
        🌸 Eco Decor Ideas
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ideas.map((idea, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={idea.img}
              alt={idea.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-green-700 text-lg mb-2">
                {idea.title}
              </h3>
              <p className="text-gray-600 text-sm">{idea.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
