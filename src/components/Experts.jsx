const experts = [
  {
    name: "Lina Bloom",
    role: "Indoor Plant Specialist",
    img: "https://i.postimg.cc/tTzKJPNh/expert1.jpg",
  },
  {
    name: "Aaron Green",
    role: "Botanist & Decor Advisor",
    img: "https://i.postimg.cc/j2zSwbf9/expert2.jpg",
  },
  {
    name: "Sophia Leaf",
    role: "Plant Care Consultant",
    img: "https://i.postimg.cc/28bG7ZKk/expert3.jpg",
  },
];

export default function Experts() {
  return (
    <section className="py-12 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">
        🌱 Meet Our Green Experts
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {experts.map((expert, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <img
              src={expert.img}
              alt={expert.name}
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p className="text-gray-500">{expert.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
