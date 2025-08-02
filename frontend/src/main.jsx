import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

// ✅ Load your Clerk publishable key from environment
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// ✅ Error check for missing key
if (!PUBLISHABLE_KEY) {
  throw new Error('❌ Missing Clerk Publishable Key. Did you set VITE_CLERK_PUBLISHABLE_KEY in your .env file?');
}

// ✅ Render App with ClerkProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
