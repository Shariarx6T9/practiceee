import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Welcome to GreenNest
        </h1>
        <p className="text-lg text-gray-600">
          Your perfect indoor plant companion 🌿
        </p>
        <button className="mt-6 btn-primary">Explore Plants</button>
      </motion.div>

      <motion.img
        src="https://i.postimg.cc/3N5rhkMB/plant-hero.png"
        alt="Hero plant"
        className="w-72 md:w-96 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
