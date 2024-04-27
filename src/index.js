import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilterProvider, CartProvider } from "./context";
import { ScrollToTop } from "./components";
import './index.css';
import App from './App';
import { LoginProvider } from './context/LoginConext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <LoginProvider>
            <ScrollToTop />
            <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
            <App />
          </LoginProvider>
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);