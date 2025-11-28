"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai Marina",
    rating: 5,
    text: "Very good service! They take all old furniture from my villa very fast. Professional team and good price. I recommend!",
    image: null,
  },
  {
    name: "Ayesha Khan",
    location: "Business Bay, Dubai",
    rating: 5,
    text: "Best company for removing junk. They come same day and price is clear. They also donate some items. Very happy!",
    image: null,
  },
  {
    name: "Mohammed Hassan",
    location: "Al Barsha, Dubai",
    rating: 5,
    text: "They remove all building waste from my house. Quick work and good price. Nice team!",
    image: null,
  },
  {
    name: "Fatima Al Zaabi",
    location: "Dubai",
    rating: 5,
    text: "Good service for office cleaning. They work professional and clean everything. Thank you very much!",
    image: null,
  },
  {
    name: "Imran Ali",
    location: "Downtown Dubai",
    rating: 5,
    text: "Fast service and good team. They remove garden waste and recycle properly. Very good! 5 stars!",
    image: null,
  },
  {
    name: "Zainab Ahmed",
    location: "Dubai",
    rating: 5,
    text: "They take all old furniture and machines from my home. Same day service and fair price. Very good work!",
    image: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers in Dubai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-emerald-500 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-blue-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
