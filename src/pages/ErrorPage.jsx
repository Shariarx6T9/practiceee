import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import errorImg from "../assets/Error 404.png"; // ✅ Correct import

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 text-center px-6">
      
      {/* Error Image replacing 404 text */}
      <motion.img
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={errorImg}
        alt="Error illustration"
        className="w-72 mb-6"
      />

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800"
      >
        Oops! Page not found
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        The page you’re looking for doesn’t exist, or it may have been moved or deleted.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        ⬅ Back to Home
      </motion.button>
    </div>
  );
};

export default ErrorPage;
