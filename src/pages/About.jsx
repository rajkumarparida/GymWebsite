import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <Helmet>
        <title>About AD Fitness | Premium Gym in Khallikot, Odisha</title>
        <meta name="description" content="Learn about AD Fitness - Khallikot's premium gym with certified trainers and state-of-the-art equipment." />
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
                About <span className="gradient-text">AD Fitness</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transforming bodies and lives since day one
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="relative h-96 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                  alt="AD Fitness Gym"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants}>
                <h2 className="font-montserrat font-bold text-4xl mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Founded in 2019, AD Fitness began with a simple vision: to create a gym that transforms lives. 
                  What started as a small fitness facility has grown into Khallikot's premier fitness destination.
                </p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  We believe fitness is not just about physical transformation—it's about building confidence, 
                  resilience, and a healthier lifestyle. Today, we're proud to serve 500+ active members and counting.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
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
                Our <span className="gradient-text">Vision</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="font-montserrat font-bold text-2xl mb-4 gradient-text">
                  Our Mission
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower individuals to achieve their fitness goals through personalized training, 
                  top-quality equipment, and a supportive community environment that motivates and inspires.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="font-montserrat font-bold text-2xl mb-4 gradient-text">
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the most trusted and preferred fitness destination in Odisha, known for transforming 
                  bodies, building character, and creating a lifestyle where fitness is a priority.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
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
                Core <span className="gradient-text">Values</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Excellence", desc: "We maintain the highest standards in training and facilities" },
                { title: "Integrity", desc: "Honest, transparent, and ethical in all our dealings" },
                { title: "Community", desc: "Supporting and motivating each member's unique journey" },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-xl text-center"
                >
                  <h3 className="font-montserrat font-bold text-2xl mb-3 gradient-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};