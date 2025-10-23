import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 flex flex-col items-center py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-green-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About GreenNest 🌿
      </motion.h1>
      <motion.p
        className="max-w-3xl text-center text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        GreenNest was founded with a passion to bring nature closer to your home.
        Our mission is to make indoor gardening easy, fun, and inspiring for
        everyone — whether you're a seasoned plant parent or just starting your
        green journey. 🌱
      </motion.p>
      <div className="max-w-3xl mt-8 space-y-4 text-center">
        <p>
          🪴 We handpick every plant from trusted growers to ensure quality and
          sustainability.
        </p>
        <p>
          💧 Our care guides and expert consultations help you keep your plants
          healthy and happy.
        </p>
        <p>
          🌼 With GreenNest, your home becomes a living, breathing space of calm
          and beauty.
        </p>
      </div>
    </div>
  );
}
