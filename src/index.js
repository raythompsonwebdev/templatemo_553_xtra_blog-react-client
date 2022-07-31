import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import App from './pages/App.js';
import Blog from './pages/Blog.js';
import About from './pages/About.js';
import Createblog from './pages/Createblog.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Contact from './pages/Contact.js';
import './static/css/bootstrap.min.css';
import './static/css/templatemo-xtra-blog.css';
import './static/fontawesome/css/all.min.css';
// import "./js/templatemo-script.js";
// import reportWebVitals from "./reportWebVitals.js";

const routing = (
  <Router>
    <div id="main-wrapper">
      <Header />
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/post/:id" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/create-post" element={<Createblog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </React.StrictMode>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
