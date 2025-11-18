"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const dubaiAreas = [
  "junk removal Al Barsha Dubai",
  "junk removal Al Barsha South Dubai",
  "junk removal Al Barsha 1 Dubai",
  "junk removal Al Barsha 2 Dubai",
  "junk removal Al Barsha 3 Dubai",
  "junk removal Business Bay Dubai",
  "junk removal Jumeirah Dubai",
  "junk removal Palm Jumeirah Dubai",
  "junk removal Dubai Marina",
  "junk removal Downtown Dubai",
  "junk removal Al Khawaneej 1 Dubai",
  "junk removal Al Khawaneej Dubai",
  "junk removal Al Warqa Dubai",
  "junk removal Nad Al Sheba 1 Dubai",
  "junk removal Nad Al Sheba Dubai",
  "junk removal Mudon Dubai",
  "junk removal The Villa Dubai",
  "furniture removal Palm Jumeirah Dubai",
  "appliance removal Business Bay Dubai",
  "sofa disposal Jumeirah Dubai",
  "fridge removal Al Barsha Dubai",
  "mattress removal Arabian Ranches Dubai",
  "washing machine disposal Downtown Dubai",
  "TV removal Dubai Marina",
  "e-waste pickup Dubai Silicon Oasis",
  "furniture & appliance removal Al Wasl Dubai",
  "junk removal Al Khawaneej 2 Dubai",
  "junk removal Mirdif Dubai",
  "junk removal Dubai Silicon Oasis",
  "junk removal Dubai Production City",
  "junk removal Dubai Sports City",
  "junk removal Al Wasl Dubai",
  "junk removal Al Sufouh 1 Dubai",
  "junk removal Al Sufouh 2 Dubai",
  "junk removal Emirates Hills Dubai",
  "junk removal Arabian Ranches Dubai",
  "junk removal Arabian Ranches 2 Dubai",
  "junk removal Jumeirah Village Dubai",
  "junk removal Jumeirah Park Dubai",
  "junk removal Jumeirah Golf Estates Dubai",
  "junk removal Dubai Festival City",
  "junk removal Dubai Creek Harbour",
  "junk removal Golf City Dubai",
  "junk removal DAMAC Hills Dubai",
  "junk removal Motor City Dubai",
];

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-navy to-secondary-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Junk Removal Services in Dubai
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Professional junk removal services across all areas of Dubai
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+971582103486"
                className="flex items-center space-x-2 px-8 py-4 bg-secondary-emerald hover:bg-secondary-teal text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call: +971582103486</span>
              </motion.a>
              <motion.a
                href="https://wa.me/+971582103486"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Service Areas in Dubai
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive junk removal services in the following areas of Dubai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {dubaiAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover-lift group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-emerald to-secondary-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy group-hover:text-secondary-emerald transition-colors">
                      {area}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-primary-navy to-secondary-teal rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Junk Removal in Your Area?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote. Same-day service available!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+971582103486"
                  className="flex items-center space-x-2 px-8 py-4 bg-secondary-emerald hover:bg-secondary-teal text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: +971582103486</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/+971582103486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: +971582103486</span>
                </motion.a>
                <motion.a
                  href="mailto:Junkremoval1.uae@gmail.com"
                  className="flex items-center space-x-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Email: Junkremoval1.uae@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}

