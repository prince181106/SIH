import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VirtualTours from './pages/VirtualTours';
import Map from './pages/Map';
import Archives from './pages/Archives';
import Calendar from './pages/Calendar';
import AudioGuide from './pages/AudioGuide';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-cream-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/virtual-tours" element={<VirtualTours />} />
              <Route path="/map" element={<Map />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/audio-guide" element={<AudioGuide />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;