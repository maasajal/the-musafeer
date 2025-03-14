"use client";

import { motion } from "framer-motion";

const Banner = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative mx-5 sm:mx-10 md:mx-20 py-5 md:py-10 md:mb-40">
      <motion.div
        className="absolute inset-x-0 -bottom-64 mx-auto p-6 bg-white max-w-xl sm:max-w-3xl md:max-w-5xl rounded-xl shadow-lg text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-4">
          <motion.h2
            className="text-xl md:text-2xl font-semibold tracking-wider"
            variants={itemVariants}
          >
            EID & Umrah in Makkah
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700"
            variants={itemVariants}
          >
            €850 - €1200 (All Inclusive)
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg font-light uppercase text-gray-500"
            variants={itemVariants}
          >
            March, April, May 2025
          </motion.p>

          <motion.p
            className="text-center max-w-xl mx-auto leading-8 text-gray-600"
            variants={itemVariants}
          >
            Join us for a Spiritual Journey: Umrah in Saudi Arabia. Experience a
            life-changing journey to the holy cities of Makkah and Madinah. Our
            exclusive 7-day Umrah package offers peace, blessings, and
            spirituality with comfort and ease.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light uppercase text-gray-700"
            variants={itemVariants}
          >
            Tour Route: Jeddah, Makkah, Madinah
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
