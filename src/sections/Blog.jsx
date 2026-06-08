import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Muscle Growth",
    excerpt: "Learn the key strategies to maximize muscle gain and strength training results.",
    image: "https://i.pinimg.com/736x/42/49/cf/4249cf21ba600b0b78128d5b5c78d43f.jpg",
    date: "Mar 15, 2024",
    category: "Training",
    author: "Jhon Deo",
  },
  {
    id: 2,
    title: "Nutrition Guide for Weight Loss",
    excerpt: "Discover the perfect diet plan to achieve your weight loss goals effectively.",
    image: "https://i.pinimg.com/1200x/00/5b/68/005b6814ac0a6859345829b15cc85687.jpg",
    date: "Mar 12, 2024",
    category: "Nutrition",
    author: "Priya Singh",
  },
  {
    id: 3,
    title: "Cardio Workouts for Beginners",
    excerpt: "Start your cardio journey with these beginner-friendly exercises and routines.",
    image: "https://i.pinimg.com/736x/c6/71/4b/c6714b93866814ce19885bd480f0d626.jpg",
    date: "Mar 10, 2024",
    category: "Cardio",
    author: "Arun Patel",
  },
];

export const Blog = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full text-accent text-sm font-semibold mb-4">
            Latest Articles
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Fitness <span className="gradient-text">Tips & Updates</span>
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-primary text-xs font-bold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-light group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm font-semibold">
                    By {post.author}
                  </span>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-secondary text-lg px-8 py-4">
            Read All Articles
          </button>
        </motion.div>

      </div>
    </section>
  );
};