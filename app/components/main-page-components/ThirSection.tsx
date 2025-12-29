"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import { services } from './websites-contents/ourServices';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              What We Do Best
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Can We Solve
            <motion.span
              className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Problem?
            </motion.span>
          </h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From zero to production, we build software that solves real problems. Fast.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                  whileHover={{ opacity: 0.03 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Decorative Circle */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0`}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Icon Container */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg relative z-10`}
                  whileHover={{ 
                    rotate: [0, -8, 8, -8, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <motion.div 
                  className="space-y-3 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={featureVariants}
                      className="flex items-center text-gray-700 text-sm lg:text-base"
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Border Animation */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.p
            className="text-gray-600 mb-6 text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Have a unique idea or challenge? <span className="font-semibold text-gray-900">We're excited to help you bring it to life!</span>
          </motion.p>
          
          <motion.button
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-semibold text-lg overflow-hidden shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <a href="https://calendly.com/" target='_blank'>
            <span className="relative z-10 cursor-pointer">Start Your Project </span>
            </a>
            
            <motion.svg
              className="relative z-10 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;