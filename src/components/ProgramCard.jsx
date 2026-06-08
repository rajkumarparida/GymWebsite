import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const ProgramCard = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40"></div>
        <div className="absolute top-4 right-4 text-4xl">{program.icon}</div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat font-bold text-xl mb-2 text-light">
          {program.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {program.description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="text-accent">{program.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Level:</span>
            <span className="text-accent">{program.level}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {program.benefits.slice(0, 3).map((benefit, i) => (
              <span key={i} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="btn-primary w-full flex items-center justify-center gap-2 mt-auto">
          Learn More <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};