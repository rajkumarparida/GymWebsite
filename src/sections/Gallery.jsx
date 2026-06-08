import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: "Gym Interior",
    image: "https://i.pinimg.com/736x/1e/f0/6e/1ef06e2b6cab629b69b0c9951961f610.jpg",
    category: "Interior",
  },
  {
    id: 2,
    title: "Modern Equipment",
    image: "https://i.pinimg.com/736x/47/64/dd/4764dd594587a6b7ad0cf3aa2dc252a0.jpg",
    category: "Equipment",
  },
  {
    id: 3,
    title: "Training Session",
    image: "https://i.pinimg.com/736x/df/f0/7f/dff07f2b60074160e6de185404424c47.jpg",
    category: "Members",
  },
  {
    id: 4,
    title: "Cardio Zone",
    image: "https://i.pinimg.com/1200x/93/bf/d5/93bfd5118fe97354c056b67e2f7f089c.jpg",
    category: "Equipment",
  },
  {
    id: 5,
    title: "Strength Training",
    image: "https://i.pinimg.com/736x/44/62/c3/4462c399706324ad8ba2335eba3a3540.jpg",
    category: "Members",
  },
  {
    id: 6,
    title: "Group Classes",
    image: "https://i.pinimg.com/736x/f9/94/04/f9940482c80af40c057bc81cdfcecd71.jpg",
    category: "Events",
  },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Our <span className="gradient-text">Gym Space</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'btn-primary'
                  : 'glass-effect text-gray-400 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative h-72 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-accent text-sm font-semibold">{img.category}</p>
                  <h3 className="text-light font-montserrat font-bold text-xl">
                    {img.title}
                  </h3>
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
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            View Full Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
};