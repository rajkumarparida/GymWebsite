import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-2xl text-center"
        >
          
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Get Fitness <span className="gradient-text">Tips & Updates</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Subscribe to our newsletter for exclusive workout tips, nutrition advice, and special offers
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 bg-primary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary px-8"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex items-center justify-center gap-2 text-green-400"
            >
              <CheckCircle size={20} />
              <span>Thank you for subscribing!</span>
            </motion.div>
          )}

        </motion.div>

      </div>
    </section>
  );
};