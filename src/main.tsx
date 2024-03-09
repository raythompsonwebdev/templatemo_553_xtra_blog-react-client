import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import Blog from './pages/Blog';
import About from './pages/About';
import Createblog from './pages/Createblog';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Logout from './pages/Logout'
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo-xtra-blog.css';
import { CookiesProvider } from "react-cookie";
// import "./js/templatemo-script.js";
// import reportWebVitals from "./reportWebVitals.js";

const routing = (
  <Router>
    <CookiesProvider>
      <div id="main-wrapper">
        <Header />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/post/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-post" element={<Createblog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </React.StrictMode>
        <Footer />
      </div>
    </CookiesProvider>
  </Router>
);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container) ;
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

