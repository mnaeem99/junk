"use client";

import { motion } from "framer-motion";
import { 
  Refrigerator, 
  Building2, 
  Home, 
  Sofa, 
  Hammer, 
  TreePine,
  Package,
  Trash2
} from "lucide-react";

const services = [
  {
    icon: Refrigerator,
    title: "Junk Appliances Removal",
    description: "Professional removal of old refrigerators, washing machines, AC units, and all household appliances.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Office Junk Removal",
    description: "Complete office clearance, furniture disposal, and commercial waste removal services.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    title: "Home & Villa Junk Removal",
    description: "Full home and villa cleanouts, including all unwanted items and debris removal.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Sofa,
    title: "Furniture Removal & Disposal",
    description: "Safe removal of sofas, beds, tables, and all types of furniture with eco-friendly disposal.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Hammer,
    title: "Construction Debris Removal",
    description: "Efficient removal of construction waste, rubble, and building materials.",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: TreePine,
    title: "Garden Waste Removal",
    description: "Professional garden cleanup, tree removal, and green waste disposal services.",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: Package,
    title: "Bulky Item Pickup",
    description: "Same-day pickup for large items that don't fit in regular disposal methods.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Trash2,
    title: "E-Waste Recycling",
    description: "Responsible recycling of electronic waste, computers, and tech equipment.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk removal solutions for homes, offices, and businesses across the UAE
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-emerald transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <motion.a
                  href="#contact"
                  className="inline-flex items-center text-secondary-emerald font-semibold group-hover:text-secondary-teal transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <span className="ml-2">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

