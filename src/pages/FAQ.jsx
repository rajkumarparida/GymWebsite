import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>FAQ | AD Fitness Khallikot</title>
        <meta name="description" content="Frequently asked questions about AD Fitness membership, trainers, timings, and programs." />
      </Helmet>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Find answers to common questions about our gym and services
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left group"
                  >
                    <h3 className="font-semibold text-light text-lg group-hover:text-accent transition-colors">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="text-accent" size={24} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700"
                      >
                        <p className="px-6 py-4 text-gray-400 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 glass-effect p-8 rounded-xl text-center"
            >
              <h2 className="font-montserrat font-bold text-2xl mb-4">
                Still Have <span className="gradient-text">Questions?</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? Please contact our team.
              </p>
              <button className="btn-primary">
                Get In Touch
              </button>
            </motion.div>

          </div>
        </section>

      </main>
    </>
  );
};