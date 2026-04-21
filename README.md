# Smart Learn+ - Adaptive Learning Platform for Dyscalculia

A comprehensive web-based showcase for **Smart Learn+**, an innovative adaptive mobile learning platform designed specifically for children aged 6–8 with dyscalculia (math learning disorder).

## 🎯 Project Overview

**Smart Learn+** is a final year project that aims to support children with dyscalculia through:
- **Game-based assessments** that make learning fun and engaging
- **Adaptive learning algorithms** that personalize difficulty and pace
- **Comprehensive progress tracking** for parents and educators
- **Culturally relevant content** with Sinhala audio guidance
- **Accessible design** that works on mobile devices

## 📋 Features

- ✨ **Game-Based Assessment** - Fun interactive games that assess mathematical abilities
- 🔢 **Number Recognition** - Interactive activities for visual-numeric associations
- 💯 **Counting Activities** - Engaging exercises to develop counting skills
- ⚖️ **Magnitude Comparison** - Tools for understanding quantity relationships
- ➕ **Simple Arithmetic Learning** - Foundational addition and subtraction
- 🤖 **Adaptive Recommendations** - AI-powered personalized learning paths
- 📊 **Progress Dashboard** - Real-time insights into learning progress
- 🔊 **Sinhala Audio Guidance** - Native language support for accessibility

## 🛠️ Technology Stack

### Frontend
- **React** - UI framework
- **CSS3** - Modern styling with animations and responsive design

### Backend (For Full Application)
- **React Native** - Mobile app development
- **Node.js + Express.js** - API server
- **MongoDB / Firebase** - Database
- **AI / Rule-Based System** - Adaptive learning algorithms

## 📚 Project Sections

1. **Hero Section** - Strong introduction to Smart Learn+
2. **About Section** - Explanation of dyscalculia and project importance
3. **Problem Section** - Challenges the project addresses
4. **Objectives Section** - Clear project goals and deliverables
5. **Features Section** - Key capabilities and features
6. **Methodology Section** - Development approach (4 stages)
7. **Technology Stack** - Tools and technologies used
8. **Team Section** - Development team members
9. **Contact Section** - University, supervisor, and GitHub links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd progress

# Install dependencies
npm install

# Start development server
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed
```

## 📝 Customization Guide

### Update Team Members

Edit `src/App.js` - Team Section:
```javascript
<div className="team-card">
  <div className="team-member-avatar">IR</div>
  <h3>Iroshan Rathnayake</h3>
  <p className="team-role">Dyscalculia Module Developer</p>
  <p className="team-description">Your description here</p>
</div>
```

### Update Contact Information

Edit `src/App.js` - Contact Section:
```javascript
<div className="contact-card">
  <h3>👨‍🏫 Project Supervisor</h3>
  <p>[Supervisor Name]</p>
  <p className="text-muted">[Supervisor Email]</p>
</div>
```

### Update GitHub Link

Edit `src/App.js` - Contact Section:
```javascript
<a href="https://your-github-repo-url" target="_blank" rel="noopener noreferrer" className="contact-link">
  View Source Code →
</a>
```

### Customize Colors

Edit `src/App.css` - CSS Variables:
```css
:root {
  --primary-blue: #0066cc;    /* Main brand color */
  --primary-green: #10b981;   /* Secondary brand color */
  --dark-gray: #1f2937;
  --text-gray: #4b5563;
  /* ... other colors ... */
}
```

## 🎨 Design Features

- **Modern, Clean Interface** - Professional yet child-friendly design
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Hover effects, transitions, and floating elements
- **Consistent Color Theme** - Blue (#0066cc) and Green (#10b981) gradient
- **Improved Readability** - Generous spacing and typography
- **Accessibility** - Color contrast and semantic HTML

## 📱 Responsive Breakpoints

- **Desktop** - 1200px and above
- **Tablet** - 768px to 1199px
- **Mobile** - Below 768px
- **Small Mobile** - Below 480px

## 📞 Contact & Support

- **University** - University of Colombo
- **Project Module** - Dyscalculia Module
- **Lead Developer** - Iroshan Rathnayake

## 📄 License

This project is part of the University of Colombo Final Year Project. All rights reserved.

## 🙏 Acknowledgments

- Special thanks to the dyscalculia research community
- Thanks to all project supervisors and mentors
- Gratitude to the target users and their families for valuable feedback

---

**Smart Learn+** - Empowering Learners with Dyscalculia

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
