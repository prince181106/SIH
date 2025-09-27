import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, MapPin, Clock, Calendar, Users, Star, ExternalLink } from 'lucide-react';
import monasteriesData from '../data/monasteries.json';

const VirtualTours = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredMonasteries = monasteriesData.filter(monastery => {
    if (filter === 'all') return true;
    return monastery.significance.toLowerCase().includes(filter.toLowerCase());
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-gold-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white">
              Virtual Tours
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience the spiritual beauty of Sikkim's monasteries through immersive 360° virtual tours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { value: 'all', label: 'All Monasteries' },
              { value: 'seat', label: 'Seat of Lineage' },
              { value: 'oldest', label: 'Historic' },
              { value: 'sacred', label: 'Sacred Sites' },
              { value: 'traditional', label: 'Traditional' }
            ].map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === filterOption.value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Monasteries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMonasteries.map((monastery, index) => (
              <motion.div
                key={monastery.id}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMonastery(monastery)}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-200"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.button>
                    </div>

                    {/* Monastery Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {monastery.name}
                      </h3>
                      <p className="text-gray-200 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {monastery.location}
                      </p>
                    </div>

                    {/* Significance Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {monastery.significance}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {monastery.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Established: {monastery.established}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Visiting Hours: {monastery.visitingHours}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">4.8</span>
                      </div>
                      <button
                        onClick={() => setSelectedMonastery(monastery)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center group"
                      >
                        Start Tour
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {selectedMonastery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMonastery(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {selectedMonastery.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedMonastery.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMonastery(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* 360° Viewer Placeholder */}
              <div className="relative h-96 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    360° Virtual Tour
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Interactive panoramic view would be embedded here
                  </p>
                  <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-600 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Note:</strong> This is a placeholder. In production, this would contain an embedded 360° viewer 
                      (e.g., using A-Frame, Three.js, or a third-party service like Matterport).
                    </p>
                  </div>
                </div>
              </div>

              {/* Monastery Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      About This Monastery
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {selectedMonastery.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Established: {selectedMonastery.established}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Visiting Hours: {selectedMonastery.visitingHours}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedMonastery.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                      Festivals
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMonastery.festivals.map((festival, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {festival}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VirtualTours;
