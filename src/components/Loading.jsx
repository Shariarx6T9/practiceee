import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-pink-50 to-purple-100 text-center">
      <motion.div
        className="relative w-24 h-24"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-8 border-t-green-500 border-r-pink-400 border-b-transparent border-l-transparent"></div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500"
      >
        Loading, please wait...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
        className="text-gray-500 mt-3"
      >
        Preparing something amazing ✨
      </motion.p>
    </div>
  );
};

export default Loading;
