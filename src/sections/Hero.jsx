import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-4"
      >
        
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full text-accent text-sm font-semibold">
            Welcome to AD Fitness
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-montserrat font-bold text-5xl md:text-7xl mb-6 leading-tight"
        >
          <span className="gradient-text">Transform Your Body.</span>
          <br />
          <span className="text-light">Transform Your Life.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Join 500+ members achieving their fitness goals with our certified trainers and state-of-the-art equipment.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary text-lg px-8 py-4">
            Join Now
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Book Free Trial
          </button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>

    </section>
  );
};