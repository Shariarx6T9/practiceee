export default function TipsSection() {
  const tips = [
    {
      title: "💧 Watering",
      desc: "Water when topsoil feels dry. Avoid overwatering to prevent root rot.",
    },
    {
      title: "☀️ Light",
      desc: "Most indoor plants love bright, indirect sunlight. Rotate them weekly!",
    },
    {
      title: "🌿 Fertilizer",
      desc: "Use organic fertilizer once a month during the growing season.",
    },
  ];

  return (
    <section className="my-16 bg-white p-8 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
        🌱 Quick Plant Care Tips
      </h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {tips.map((tip, i) => (
          <div key={i}>
            <h4 className="font-bold mb-2 text-lg">{tip.title}</h4>
            <p className="text-gray-600">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
