import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[100px] md:text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
      >
        500
      </motion.h1>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800"
      >
        Oops! Something went wrong 😢
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        It looks like our server is taking a coffee break.  
        Don’t worry — we’re working to fix it! Please try again later.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        🔄 Back to Home
      </motion.button>

      <motion.img
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        src="https://illustrations.popsy.co/gray/server-down.svg"
        alt="Server error illustration"
        className="w-72 mt-10"
      />
    </div>
  );
};

export default ServerError;
