"use client";
import { motion } from "framer-motion";

const KaabaVideo = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/kaabaVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay Fix */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-20">
        <div className="space-y-5 px-5">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Musafeer – Your Path to Umrah
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Accommodation: Luxury Hotel Flight | Visa | Transfer & More
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default KaabaVideo;
