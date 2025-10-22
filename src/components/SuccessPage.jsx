import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const SuccessPage = ({ message = "Action completed successfully!" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-pink-50 to-purple-100 text-center">
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="flex items-center justify-center w-28 h-28 bg-white rounded-full shadow-xl border border-green-200"
      >
        <CheckCircle2 className="text-green-500" size={60} />
      </motion.div>

      {/* Message */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500"
      >
        Success!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-600 mt-3 text-lg max-w-md"
      >
        {message}
      </motion.p>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-pink-500 text-white font-medium shadow-lg hover:opacity-90 transition"
      >
        Go Back Home
      </motion.button>
    </div>
  );
};

export default SuccessPage;
