import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Search, Filter, X, Clock, Users, Star, ExternalLink } from 'lucide-react';
import monasteriesData from '../data/monasteries.json';

const Map = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [mapCenter, setMapCenter] = useState({ lat: 27.5, lng: 88.5 });
  const [mapZoom, setMapZoom] = useState(8);

  const filteredMonasteries = monasteriesData.filter(monastery => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         monastery.significance.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
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

  const handleMonasteryClick = (monastery) => {
    setSelectedMonastery(monastery);
    setMapCenter(monastery.coordinates);
    setMapZoom(12);
  };

  const handleCloseDetails = () => {
    setSelectedMonastery(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                Interactive Map
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Explore monastery locations across Sikkim
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search monasteries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full sm:w-64"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Monasteries</option>
                <option value="seat">Seat of Lineage</option>
                <option value="oldest">Historic</option>
                <option value="sacred">Sacred Sites</option>
                <option value="traditional">Traditional</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-8rem)]">
        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Map Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern - Sikkim Map Style */}
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-16 grid-rows-12 h-full">
                {[...Array(192)].map((_, i) => (
                  <div key={i} className="border border-green-300 dark:border-green-600" />
                ))}
              </div>
            </div>
            
            {/* Mountain Silhouettes */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-400 to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-1/4 right-0 h-24 bg-gradient-to-t from-gray-500 to-transparent opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 left-0 h-20 bg-gradient-to-t from-gray-600 to-transparent opacity-25"></div>
            
            {/* Rivers */}
            <div className="absolute top-1/3 left-1/4 w-1 h-32 bg-blue-300 opacity-60 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-24 bg-blue-300 opacity-60 rounded-full"></div>
            
            {/* Roads */}
            <div className="absolute top-1/2 left-1/6 w-24 h-1 bg-yellow-400 opacity-50 rounded-full"></div>
            <div className="absolute top-2/3 right-1/4 w-20 h-1 bg-yellow-400 opacity-50 rounded-full"></div>

            {/* Monastery Markers */}
            {filteredMonasteries.map((monastery, index) => (
              <motion.button
                key={monastery.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleMonasteryClick(monastery)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${((monastery.coordinates.lng - 88.0) / 1.0) * 100}%`,
                  top: `${((27.8 - monastery.coordinates.lat) / 0.8) * 100}%`
                }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-600" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 min-w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {monastery.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                      {monastery.location}
                    </p>
                    <div className="flex items-center mt-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* Map Info */}
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Sikkim Monasteries Map
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Click on markers to view monastery details
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p>📍 {filteredMonasteries.length} monasteries found</p>
                <p>🏔️ Sikkim, India</p>
                <p>🗺️ Interactive map with GPS coordinates</p>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <Navigation className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                Legend
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Monasteries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gold-500 rounded-full mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Sacred Sites</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-forest-500 rounded-full mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Historic Sites</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Monastery List */}
        <div className="w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Monasteries ({filteredMonasteries.length})
            </h2>
            
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {filteredMonasteries.map((monastery, index) => (
                <motion.div
                  key={monastery.id}
                  variants={fadeInUp}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedMonastery?.id === monastery.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => handleMonasteryClick(monastery)}
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {monastery.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {monastery.location}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 line-clamp-2">
                        {monastery.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">4.8</span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Monastery Details Modal */}
      <AnimatePresence>
        {selectedMonastery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseDetails}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedMonastery.image}
                  alt={selectedMonastery.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {selectedMonastery.name}
                  </h3>
                  <p className="text-gray-200 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedMonastery.location}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedMonastery.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {selectedMonastery.visitingHours}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Est. {selectedMonastery.established}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMonastery.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Festivals
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMonastery.festivals.map((festival, index) => (
                        <span
                          key={index}
                          className="bg-gold-100 dark:bg-gold-900 text-gold-800 dark:text-gold-200 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {festival}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Start Virtual Tour
                  </button>
                  <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Map;
