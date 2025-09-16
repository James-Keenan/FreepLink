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

## 🔐 Environment & Security

This project now uses **Vite** (migrated from Create React App) eliminating legacy `react-scripts` vulnerabilities.

### Firebase Environment Variables

Public web Firebase config values must use the `VITE_` prefix to be exposed to the client bundle:

Create a `.env.local` (not committed) with:

```
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-app
VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

Missing values cause the app to run in a degraded (non-Firebase) mode without crashing.

### CI Security Guard

Workflow `.github/workflows/security-guard.yml` fails CI if any legacy `REACT_APP_FIREBASE_` variable names reappear, preventing accidental leakage patterns or outdated config reintroduction.

### Why VITE\_ Prefix?

Vite only exposes environment variables starting with `VITE_` to the client. This prevents accidental leakage of unrelated secrets.

### Production Deployment

GitHub Pages build does not inject Firebase env vars by default. If you want Firebase-enabled deployments, add the above `VITE_` variables as repository secrets and set them in the build step:

```
			- name: Build
				run: npm run build
				env:
					VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
					VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
					VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
					VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
					VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
					VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
					VITE_FIREBASE_MEASUREMENT_ID: ${{ secrets.VITE_FIREBASE_MEASUREMENT_ID }}
```

If omitted, the build is still valid; Firebase-dependent features will be disabled gracefully.

---

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project (for authentication)
