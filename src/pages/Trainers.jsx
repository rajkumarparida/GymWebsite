import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { trainers } from '../data/trainers';
import { TrainerCard } from '../components/TrainerCard';

export const Trainers = () => {
  return (
    <>
      <Helmet>
        <title>Our Trainers | AD Fitness Khallikot</title>
        <meta name="description" content="Meet our certified fitness trainers at AD Fitness. Expert coaches specializing in weight training, cardio, and women's fitness." />
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
                Meet Our <span className="gradient-text">Expert Trainers</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Certified professionals dedicated to your fitness transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl mb-4">
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-400">
                Each trainer is certified and has helped hundreds of members achieve their goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {trainers.map((trainer, idx) => (
                <TrainerCard key={trainer.id} trainer={trainer} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Training Specializations */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl mb-4">
                Training <span className="gradient-text">Specializations</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { emoji: '💪', title: 'Weight Training', desc: 'Build muscle and strength' },
                { emoji: '🏃', title: 'Cardio', desc: 'Improve endurance' },
                { emoji: '👩', title: 'Women Fitness', desc: 'Female-focused programs' },
                { emoji: '🎯', title: 'Functional', desc: 'Real-world movements' },
              ].map((spec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl text-center hover:border-accent/50 transition-all"
                >
                  <div className="text-4xl mb-3">{spec.emoji}</div>
                  <h3 className="font-semibold text-light mb-2">{spec.title}</h3>
                  <p className="text-gray-400 text-sm">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};