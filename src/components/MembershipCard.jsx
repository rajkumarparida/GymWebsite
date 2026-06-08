import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const MembershipCard = ({ plan, index }) => {
  const [billingPeriod, setBillingPeriod] = React.useState('monthly');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl overflow-hidden transition-all ${
        plan.popular
          ? 'ring-2 ring-accent lg:scale-105'
          : 'glass-effect'
      }`}
    >
      {/* {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-accent text-primary px- py-1 rounded-full font-bold text-sm">
            MOST POPULAR
          </span>
        </div>
      )} */}

      <div className={`p-8 h-full flex flex-col ${
        plan.popular ? 'bg-gradient-to-b from-accent/10 to-primary' : ''
      }`}>
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{plan.icon}</div>
          <h3 className="font-montserrat font-bold text-2xl mb-2 text-light">
            {plan.name}
          </h3>
          <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">
              ₹{plan.pricing[billingPeriod]}
            </div>
            <p className="text-gray-400 text-sm mt-2">
              per {billingPeriod.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className={`w-full font-semibold py-3 rounded-lg transition-all ${
          plan.popular
            ? 'btn-primary'
            : 'glass-effect text-light hover:border-accent'
        }`}>
          Choose Plan
        </button>
      </div>
    </motion.div>
  );
};