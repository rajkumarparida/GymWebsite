import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';

const allGalleryImages = [
  { id: 1, title: "Gym Interior", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/2c1edec2a239a6299fab7ed19fba1e72b4ddf48e.jpg", category: "Interior" },
  { id: 2, title: "Modern Equipment", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/12d3a27e1ce491feaf307620c01356a2ca645757.jpg", category: "Equipment" },
  { id: 3, title: "Training Session", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1c3843793fdafa04dd63f400db8732e9a76d8f56.jpg", category: "Members" },
  { id: 4, title: "Cardio Zone", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/3b2a3bd002c33bca32692cf07937fb072ebdcd61.jpg", category: "Equipment" },
  { id: 5, title: "Strength Training", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/01bfb6e3e8f736c4c7ab129d972df046870eef9c.jpg", category: "Members" },
  { id: 6, title: "Group Classes", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f4587dfba777b8443bf4b6b329196c2ae214f066.jpg", category: "Events" },
  { id: 7, title: "Free Weights", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/401dc84e3a8b89c8a4d94d4ae79e2d9c0863c73b.jpg", category: "Equipment" },
  { id: 8, title: "Personal Training", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/705657e8738b93f5a8505439f9410036e5c2bdc9.jpg", category: "Members" },
  { id: 9, title: "Success Moment", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/18ec93e73f84bac5dafd634d1b64fc53878b8854.jpg", category: "Transformations" },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", ...new Set(allGalleryImages.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "All"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | AD Fitness Khallikot</title>
        <meta name="description" content="View AD Fitness gym facilities, equipment, members, and transformations in our photo gallery." />
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
                Our <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore our state-of-the-art facilities and member transformations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
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

            {/* Gallery Grid - Masonry Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(img)}
                  className="relative h-72 rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
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
                      <h3 className="text-light font-montserrat font-bold text-lg">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-light hover:text-accent transition-colors"
                >
                  <X size={32} />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-xl"
                />

                {/* Info */}
                <div className="mt-4 text-center">
                  <p className="text-accent font-semibold">{selectedImage.category}</p>
                  <h3 className="text-light font-montserrat font-bold text-2xl">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {currentIndex + 1} / {filteredImages.length}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-6 py-2 glass-effect rounded-lg text-accent hover:border-accent/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === filteredImages.length - 1}
                    className="px-6 py-2 glass-effect rounded-lg text-accent hover:border-accent/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>
  );
};