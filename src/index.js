import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotificationProvider from './components/Notification/NotificationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
