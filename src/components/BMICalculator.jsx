import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal Weight');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-400';
      case 'Normal Weight':
        return 'text-green-400';
      case 'Overweight':
        return 'text-yellow-400';
      case 'Obese':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-effect p-8 rounded-xl max-w-md mx-auto"
    >
      <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
        BMI <span className="gradient-text">Calculator</span>
      </h3>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-light font-semibold mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full px-4 py-2 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-light font-semibold mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="w-full px-4 py-2 bg-secondary/50 border border-gray-700 rounded-lg text-light placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="btn-primary w-full mb-6"
      >
        Calculate BMI
      </button>

      {bmi && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-4 bg-secondary/50 rounded-lg"
        >
          <p className="text-gray-400 text-sm mb-2">Your BMI</p>
          <p className="text-4xl font-bold gradient-text mb-2">{bmi}</p>
          <p className={`text-lg font-semibold ${getCategoryColor()}`}>
            {category}
          </p>
        </motion.div>
      )}

      {/* BMI Chart */}
      <div className="mt-6 text-xs space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Underweight</span>
          <span className="text-blue-400">Below 18.5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Normal</span>
          <span className="text-green-400">18.5 - 24.9</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Overweight</span>
          <span className="text-yellow-400">25 - 29.9</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Obese</span>
          <span className="text-red-400">30+</span>
        </div>
      </div>
    </motion.div>
  );
};