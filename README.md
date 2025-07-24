# FreepLink

A modern React application for link management and sharing.

## 🚀 Features

- User authentication with Firebase
- Protected routes
- Dashboard for link management
- Responsive design
- Modern React 19 with React Router v7

## 🛠️ Technologies Used

- **React 19** - Latest React with modern features
- **React Router v7** - Client-side routing
- **Firebase** - Authentication and backend services
- **React Testing Library** - Testing utilities
- **CSS3** - Styling

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project (for authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/FreepLink.git
   cd FreepLink
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   └── ProtectedRoute.js
├── hooks/              # Custom React hooks
│   └── useAnalytics.js
├── pages/              # Page components
│   ├── Dashboard.js
│   ├── Login.js
│   └── Signup.js
├── services/           # External services
│   └── firebase.js
├── App.js              # Main App component
└── index.js            # Entry point
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

## 🚀 Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Deploy using:
   ```bash
   npm run deploy
   ```

### Manual Deployment

The build files will be in the `build` directory and can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for backend services
- All contributors who help improve this project

---

**Live Demo:** [https://YOUR_USERNAME.github.io/FreepLink](https://YOUR_USERNAME.github.io/FreepLink)
