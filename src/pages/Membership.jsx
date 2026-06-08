import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { membershipPlans } from '../data/membership';
import { MembershipCard } from '../components/MembershipCard';

export const Membership = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <>
      <Helmet>
        <title>Membership Plans | AD Fitness Khallikot</title>
        <meta name="description" content="Flexible membership plans at AD Fitness. Choose from Basic, Standard, or Premium plans with no hidden charges." />
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
                Flexible <span className="gradient-text">Membership Plans</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Choose the perfect plan for your fitness journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="glass-effect p-1 rounded-2xl flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                {['monthly', 'quarterly', 'halfYearly', 'yearly'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setBillingPeriod(period)}
                    className={`px-4 py-2 text-sm rounded-xl font-medium transition-all ${
  billingPeriod === period
    ? 'bg-red-500 text-white'
    : 'text-gray-400 hover:text-white'
}`}
                  >
                    {period === 'monthly' && 'Monthly'}
                    {period === 'quarterly' && 'Quarterly'}
                    {period === 'halfYearly' && 'Half-Yearly'}
                    {period === 'yearly' && 'Yearly'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, idx) => (
                <MembershipCard 
                  key={plan.id} 
                  plan={{...plan, pricing: {...plan.pricing, [billingPeriod]: plan.pricing[billingPeriod]}}}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="font-montserrat font-bold text-4xl mb-4">
                Plan <span className="gradient-text">Comparison</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-x-auto glass-effect p-6 rounded-xl"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold text-light">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-light">Basic</th>
                    <th className="text-center py-4 px-4 font-bold text-accent">Standard</th>
                    <th className="text-center py-4 px-4 font-bold text-light">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Gym Access', basic: '✓', standard: '✓', premium: '✓' },
                    { feature: 'Cardio Equipment', basic: '✗', standard: '✓', premium: '✓' },
                    { feature: 'Group Classes', basic: '✗', standard: '✓', premium: '✓' },
                    { feature: 'Diet Consultation', basic: '✗', standard: '✓', premium: '✓' },
                    { feature: 'Personal Training', basic: '✗', standard: '✗', premium: '✓' },
                    { feature: '24/7 Support', basic: '✗', standard: '✗', premium: '✓' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-700 hover:bg-white/5">
                      <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                      <td className="text-center py-4 px-4 text-gray-400">{row.basic}</td>
                      <td className="text-center py-4 px-4 text-accent">{row.standard}</td>
                      <td className="text-center py-4 px-4 text-gray-300">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              Ready to <span className="gradient-text">Transform?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book your free trial session today and experience AD Fitness
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Book Free Trial
            </button>
          </motion.div>
        </section>

      </main>
    </>
  );
};