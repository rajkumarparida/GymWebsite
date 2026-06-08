import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const transformations = [
  {
    id: 1,
    name: "Rajesh Kumar",
    duration: "6 Months",
    weightLoss: "22 kg",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    testimonial: "The trainers at AD Fitness changed my life. I never thought I could achieve this transformation!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    duration: "4 Months",
    weightLoss: "18 kg",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    testimonial: "Professional guidance and constant motivation from the team made it possible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Gupta",
    duration: "8 Months",
    weightLoss: "28 kg",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    testimonial: "Best decision I made for my health. Highly recommend AD Fitness!",
    rating: 5,
  },
];

export const Transformations = () => {
  return (
    <>
      <Helmet>
        <title>Transformations | AD Fitness Khallikot</title>
        <meta name="description" content="See amazing transformation stories from AD Fitness members. Real results, real people." />
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
              <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight">
                Success <span className="gradient-text">Transformations</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                1000+ members transformed their bodies and lives
              </p>
            </motion.div>
          </div>
        </section>

        {/* Transformations Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {transformations.map((transform, idx) => (
              <motion.div
                key={transform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-2xl">
                  
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="font-montserrat font-bold text-3xl mb-4">
                      <span className="gradient-text">{transform.name}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
                      <div>
                        <p className="text-gray-500 text-sm">Duration</p>
                        <p className="text-light font-semibold text-base sm:text-lg">{transform.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Weight Loss</p>
                        <p className="text-accent font-semibold text-lg">{transform.weightLoss}</p>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(transform.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Before/After Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-center text-accent font-semibold text-lg mb-3">Before</p>
                      <img
                        src={transform.beforeImage}
                        alt="Before"
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-center text-green-400 font-semibold mb-3">After</p>
                      <img
                        src={transform.afterImage}
                        alt="After"
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-accent pl-6"
                  >
                    <p className="text-gray-300 italic text-lg">
                      "{transform.testimonial}"
                    </p>
                    <p className="text-accent font-semibold mt-4">— {transform.name}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Your Transformation <span className="gradient-text">Awaits</span>
              </h2>
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </button>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};