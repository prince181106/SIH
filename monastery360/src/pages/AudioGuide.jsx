import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Download, 
  Play, 
  Pause, 
  Volume2, 
  MapPin, 
  Clock, 
  Wifi, 
  WifiOff,
  Star,
  CheckCircle,
  ArrowRight,
  Headphones,
  Mic,
  Camera,
  Navigation,
  BookOpen,
  Globe
} from 'lucide-react';

const AudioGuide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const features = [
    {
      icon: Headphones,
      title: "Immersive Audio Tours",
      description: "High-quality audio guides with local narrators and ambient sounds"
    },
    {
      icon: MapPin,
      title: "GPS-Triggered Content",
      description: "Automatic audio playback based on your location within monasteries"
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "Download content for offline access in remote areas without internet"
    },
    {
      icon: Mic,
      title: "Multi-Language Support",
      description: "Available in English, Hindi, Nepali, and local Sikkimese languages"
    },
    {
      icon: Camera,
      title: "AR Integration",
      description: "Point your camera at artifacts to get instant information and audio"
    },
    {
      icon: Navigation,
      title: "Smart Navigation",
      description: "Turn-by-turn directions to different areas within each monastery"
    }
  ];

  const audioTracks = [
    {
      title: "Rumtek Monastery - Main Prayer Hall",
      duration: "8:45",
      description: "Learn about the significance of the main prayer hall and its architectural features"
    },
    {
      title: "Pemayangtse Monastery - Ancient Murals",
      duration: "12:30",
      description: "Discover the stories behind the ancient murals and their spiritual meaning"
    },
    {
      title: "Tashiding Monastery - Sacred Water Ceremony",
      duration: "6:20",
      description: "Understand the Bumchu ceremony and its importance in Sikkimese culture"
    }
  ];

  const appScreenshots = [
    {
      title: "Home Screen",
      description: "Easy navigation to different monasteries and features",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
    },
    {
      title: "Audio Player",
      description: "Intuitive controls with track information and progress",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=600&fit=crop"
    },
    {
      title: "Map View",
      description: "Interactive map with audio hotspots and navigation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=600&fit=crop"
    },
    {
      title: "Offline Mode",
      description: "Download content for offline access anywhere",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-gold-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                Smart Audio Guide
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Experience Sikkim's monasteries like never before with our intelligent mobile app featuring GPS-triggered audio tours and offline access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </button>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-96 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=800&fit=crop"
                    alt="App Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-lg font-semibold mb-2">Rumtek Monastery</h3>
                    <p className="text-white/90 text-sm mb-4">Tap to start your audio tour</p>
                    <div className="flex items-center space-x-3">
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors duration-200">
                        <Play className="w-6 h-6 text-white" />
                      </button>
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-1/3" />
                      </div>
                      <span className="text-white/90 text-sm">2:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our mobile app combines cutting-edge technology with cultural preservation to deliver an unparalleled experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              App Screenshots
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our intuitive interface makes exploring monasteries effortless and engaging.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {appScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audio Demo Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Sample Audio Tours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Listen to previews of our high-quality audio guides featuring local narrators and ambient sounds.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {audioTracks.map((track, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      setCurrentTrack(index);
                    }}
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                  >
                    {isPlaying && currentTrack === index ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {track.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {track.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {track.duration}
                      </span>
                      <span className="flex items-center">
                        <Volume2 className="w-4 h-4 mr-1" />
                        High Quality Audio
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">4.8</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offline Mode Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Offline Mode
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Perfect for remote areas with limited internet connectivity. Download content before your visit and enjoy uninterrupted audio tours even without network coverage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Download entire monastery tours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">GPS works without internet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Minimal storage requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Auto-sync when connected</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Download Status</h3>
                    <div className="flex items-center space-x-2">
                      <WifiOff className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm">Offline Mode</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Rumtek Monastery</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">Downloaded</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Pemayangtse Monastery</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">Downloaded</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Tashiding Monastery</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 rounded-full">
                          <div className="w-full h-full bg-white/50 rounded-full" style={{ width: '60%' }} />
                        </div>
                        <span className="text-white/70 text-sm">60%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>Storage Used</span>
                      <span>2.3 GB / 5 GB</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-white rounded-full h-2" style={{ width: '46%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Download Now
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Available for both Android and iOS. Start your spiritual journey today with our comprehensive audio guide app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-lg transition-colors duration-200 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">G</span>
                </div>
                <div className="text-left">
                  <div className="text-sm">Download on the</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
              
              <button className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-lg transition-colors duration-200 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">A</span>
                </div>
                <div className="text-left">
                  <div className="text-sm">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Free to download • No in-app purchases • Works offline • Available in multiple languages
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AudioGuide;
