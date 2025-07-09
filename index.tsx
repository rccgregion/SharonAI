
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Ensured relative path
import { SettingsProvider } from './contexts/SettingsContext.js';
import { ThemeProvider } from './hooks/useTheme.js';
import { ToastProvider } from './contexts/ToastContext.js';
import { GoogleDriveSaveProvider } from './contexts/GoogleDriveSaveContext.js';
import { FeatureStateProvider } from './contexts/FeatureStateContext.js';
import { LanguageProvider } from './contexts/LanguageContext.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <SettingsProvider>
            <GoogleDriveSaveProvider>
              <FeatureStateProvider>
                <App /> 
              </FeatureStateProvider>
            </GoogleDriveSaveProvider>
          </SettingsProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
// Trailing comment