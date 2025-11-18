"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
    title: "Villa Cleanout - Dubai",
    description: "Complete removal of furniture and appliances from a 5-bedroom villa",
  },
  {
    before: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1556912173-6719e3e0d41f?w=800&h=600&fit=crop",
    title: "Office Clearance - Abu Dhabi",
    description: "Full office furniture removal and space preparation for renovation",
  },
  {
    before: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
    title: "Construction Debris - Sharjah",
    description: "Efficient removal of construction waste and building materials",
  },
  {
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    title: "Garden Waste Removal - RAK",
    description: "Professional garden cleanup and tree removal services",
  },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformation we deliver for our clients across the UAE
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              {/* Before */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold z-10">
                  BEFORE
                </div>
                <img
                  src={galleryItems[currentIndex].before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold z-10">
                  AFTER
                </div>
                <img
                  src={galleryItems[currentIndex].after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-primary-navy" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-primary-navy" />
            </button>
          </div>

          {/* Slide Info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center"
          >
            <h3 className="text-2xl font-bold text-primary-navy mb-2">
              {galleryItems[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {galleryItems[currentIndex].description}
            </p>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary-emerald w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

