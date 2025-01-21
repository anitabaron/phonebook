import React from 'react';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Check your index.html.');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App />
            <Toaster />
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
