import React from "react";

export default function Experts() {
  const experts = [
    {
      id: 1,
      name: "Snake Plant",
      role: "Air Purifying Specialist",
      img: "/assets/snake plant.png",
      desc: "Known for its ability to clean indoor air and thrive in low light — the go-to expert for fresh spaces.",
    },
    {
      id: 2,
      name: "Peace Lily",
      role: "Elegant Bloom Expert",
      img: "/assets/peace lily.png",
      desc: "A graceful flowering plant that adds peace and purity to any corner of your home.",
    },
    {
      id: 3,
      name: "Spider Plant",
      role: "Hanging Decor Stylist",
      img: "/assets/spider plant.png",
      desc: "Playful and adaptable, this expert in hanging decor brightens up rooms while purifying the air.",
    },
    {
      id: 4,
      name: "Areca Palm",
      role: "Tropical Vibe Designer",
      img: "/assets/areca palm.png",
      desc: "Brings lush, tropical charm indoors — the ultimate expert in creating a relaxing green atmosphere.",
    },
  ];

  return (
    <section className="my-16 text-center">
      <h2 className="text-2xl font-bold text-greenDark mb-8">
        🌿 Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="card p-6 flex flex-col items-center text-center bg-white rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative group">
              <img
                src={expert.img} // This will now correctly resolve to "http://your-server/assets/snake plant.png"
                alt={expert.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-300 transition duration-300 group-hover:border-green-500"
              />
            </div>

            <h3 className="text-lg font-semibold text-greenDark">
              {expert.name}
            </h3>
            <p className="text-sm text-gray-600 italic">{expert.role}</p>
            <p className="text-gray-500 text-sm mt-2">{expert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}