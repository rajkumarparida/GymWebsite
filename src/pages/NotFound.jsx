import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-primary pt-20 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-montserrat font-bold text-9xl gradient-text mb-4">
            404
          </h1>
          <h2 className="font-montserrat font-bold text-4xl text-light mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track!
          </p>

          {/* Animated Illustration */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-12 text-8xl"
          >
            🏋️
          </motion.div>

          {/* CTA */}
          <Link to="/" className="inline-block">
            <button className="btn-primary flex items-center gap-2 mx-auto mb-4">
              <Home size={20} />
              Back to Home
            </button>
          </Link>

          {/* Quick Links */}
          <div className="space-y-2 mt-8">
            <p className="text-gray-400 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Programs', path: '/programs' },
                { label: 'Membership', path: '/membership' },
                { label: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <Link key={idx} to={link.path}>
                  <span className="text-accent hover:text-red-600 transition-colors flex items-center gap-1">
                    {link.label} <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};