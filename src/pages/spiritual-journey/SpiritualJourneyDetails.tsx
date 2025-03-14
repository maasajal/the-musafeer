"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

const SpiritualJourneyDetails = () => {
  return (
    <div className="py-10 px-4 md:px-20">
      <SectionTitle
        section="Journey Details"
        heading="Experience the Ultimate Spiritual Journey"
        description="Discover our all-inclusive Umrah package and embark on a life-changing experience."
        customStyle=""
      />

      {/* Umrah Experience Section */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mt-8 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-blue-800">
          A Spiritual Retreat
        </h2>
        <p className="mt-4 text-gray-700 leading-7">
          Our exclusive Umrah package offers a seamless and enriching
          experience, ensuring that your spiritual journey is filled with
          comfort and tranquility.
        </p>
      </motion.div>

      {/* Package Inclusions */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mt-8 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-blue-800">Package Includes</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Round-trip flight tickets</li>
          <li>Visa processing & assistance</li>
          <li>Luxury accommodation in Makkah & Madinah</li>
          <li>Daily buffet breakfast & dinner</li>
          <li>Guided tours & religious lectures</li>
          <li>24/7 customer support & assistance</li>
        </ul>
      </motion.div>

      {/* Booking Call-to-Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <CallToAction />
      </motion.div>
    </div>
  );
};

export default SpiritualJourneyDetails;
