import { motion } from 'framer-motion';
import { Award, Dumbbell } from 'lucide-react';

export const TrainerCard = ({ trainer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-xl overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        
        {/* Experience Badge */}
        <div className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-full text-primary font-bold text-sm">
          {trainer.experience}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-2xl mb-2 text-light">
          {trainer.name}
        </h3>
        <p className="text-accent text-sm font-semibold mb-4">
          {trainer.specialization}
        </p>

        {/* Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <Award size={16} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-500 text-xs">Certification</p>
              <p className="text-gray-300 text-sm">{trainer.certification}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Dumbbell size={16} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-500 text-xs">Achievements</p>
              <p className="text-gray-300 text-sm">{trainer.achievements}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6 italic">
          "{trainer.bio}"
        </p>

        {/* CTA */}
        <button className="btn-primary w-full text-sm">
          Book Session
        </button>
      </div>
    </motion.div>
  );
};