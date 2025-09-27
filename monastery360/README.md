# Monastery360 - Digital Heritage Platform

A comprehensive digital platform for exploring and preserving the cultural heritage of Sikkim's monasteries through immersive virtual tours, interactive maps, digital archives, and smart audio guides.

## 🌟 Features

### 🏛️ Virtual Tours
- 360° panoramic views of monasteries
- Interactive modal experiences
- Smooth animations with Framer Motion
- Filter by monastery type and significance

### 🗺️ Interactive Map
- Fullscreen map with geo-tagged locations
- Click-to-explore monastery details
- Search and filter functionality
- Responsive sidebar with monastery list

### 📚 Digital Archives
- Gallery view of scanned manuscripts and artifacts
- Search and filter by category, date, and tags
- Masonry grid and list view options
- Detailed modal views with download options

### 📅 Cultural Calendar
- Calendar view with festival and event markers
- List view with detailed event information
- Event participation and booking buttons
- Filter by event type and date

### 🎧 Smart Audio Guide
- Mobile app mockup and features showcase
- GPS-triggered audio content
- Offline mode capabilities
- Multi-language support

### 🌙 Dark/Light Mode
- Toggle between light and dark themes
- Persistent theme preference
- Smooth transitions

## 🚀 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: TailwindCSS with custom color palette
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts (for future analytics)
- **State Management**: React Context API

## 🎨 Design System

### Color Palette
- **Primary**: Warm earthy tones (maroon, gold, cream, dark green)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Components**: Custom utility classes and component variants

### Key Features
- Responsive design (mobile-first)
- Smooth page transitions
- Accessible navigation
- Production-ready code structure

## 📁 Project Structure

```
monastery360/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── contexts/           # React Context providers
│   │   └── ThemeContext.jsx
│   ├── data/              # JSON data files
│   │   ├── monasteries.json
│   │   ├── events.json
│   │   └── archives.json
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── VirtualTours.jsx
│   │   ├── Map.jsx
│   │   ├── Archives.jsx
│   │   ├── Calendar.jsx
│   │   ├── AudioGuide.jsx
│   │   └── About.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd monastery360
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action buttons
- Featured monasteries showcase
- Upcoming events preview
- Feature highlights

### Virtual Tours
- Grid of monastery cards
- Interactive modal with 360° viewer placeholder
- Filter by monastery type
- Detailed monastery information

### Interactive Map
- Fullscreen map with monastery markers
- Click-to-explore functionality
- Search and filter options
- Responsive sidebar

### Digital Archives
- Gallery/list view of cultural artifacts
- Advanced search and filtering
- Detailed artifact information
- Download and collection features

### Cultural Calendar
- Calendar and list view modes
- Event details and participation
- Festival and ceremony information
- Booking integration

### Audio Guide
- Mobile app features showcase
- Sample audio tours
- Offline mode demonstration
- Download links for app stores

### About
- Mission and vision
- Team information
- Project timeline
- Impact statistics

## 🎯 Key Features Implemented

✅ **Responsive Design**: Mobile-first approach with TailwindCSS
✅ **Dark/Light Mode**: Theme toggle with persistent storage
✅ **Smooth Animations**: Framer Motion for page transitions and interactions
✅ **Interactive Components**: Modals, filters, search functionality
✅ **Data Management**: JSON-based content management
✅ **Accessibility**: Semantic HTML and keyboard navigation
✅ **Performance**: Optimized images and lazy loading
✅ **Production Ready**: Clean code structure and error handling

## 🔮 Future Enhancements

- **Backend Integration**: API endpoints for dynamic content
- **User Authentication**: User accounts and personalized experiences
- **Real-time Features**: Live updates and notifications
- **Advanced Search**: AI-powered search capabilities
- **Social Features**: Sharing and community features
- **Analytics**: User behavior tracking and insights
- **PWA Support**: Progressive Web App capabilities
- **VR Integration**: Virtual Reality experiences

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Government of Sikkim** for supporting cultural heritage preservation
- **Monastery Representatives** for providing authentic content
- **Cultural Experts** for ensuring accurate representation
- **Open Source Community** for the amazing tools and libraries

## 📞 Contact

- **Project Lead**: Monastery360 Team
- **Email**: info@monastery360.gov.in
- **Website**: [monastery360.gov.in](https://monastery360.gov.in)

---

**Monastery360** - Digitizing and Showcasing Monasteries of Sikkim