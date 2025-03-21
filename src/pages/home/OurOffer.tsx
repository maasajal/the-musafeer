"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const OurOffer = () => {
  const offers = [
    {
      id: 1,
      title: "Personalized Service",
      description:
        "Tailored to your specific needs, ensuring a unique and enjoyable experience.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Experienced Guides",
      description:
        "Our professional guides provide insights to enrich your journey.",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Flexible Packages",
      description:
        "Choose from a variety of customizable packages to fit your schedule.",
      icon: "🕒",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-fixed bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle
          section="Offer"
          heading="What We Offer"
          description="At The Musafeer with Comfort & Resonable Price"
          customStyle="text-white"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: offer.id * 0.2 }}
            >
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h4 className="mb-2">{offer.title}</h4>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
