import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { programs } from '../data/programs';
import { ProgramCard } from '../components/ProgramCard';

export const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Our Programs | AD Fitness Khallikot</title>
        <meta name="description" content="Explore AD Fitness programs including weight training, fat loss, cardio, and women's fitness." />
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
                Our <span className="gradient-text">Programs</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Scientifically designed programs for every fitness goal
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <ProgramCard key={program.id} program={program} index={idx} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Ready to Start Your <span className="gradient-text">Transformation?</span>
              </h2>
              <button className="btn-primary text-lg px-8 py-4">
                Book Free Trial
              </button>
            </motion.div>

          </div>
        </section>

      </main>
    </>
  );
};