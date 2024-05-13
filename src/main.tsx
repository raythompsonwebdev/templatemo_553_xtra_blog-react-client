import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./pages/App";
import Blog from "./pages/Blog";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import LogOut from "./pages/LogOut";
import "./assets/css/bootstrap.min.css";
import "./assets/css/templatemo-xtra-blog.css";
// import { CookiesProvider } from "react-cookie";
// import "./js/templatemo-script.js";
// import reportWebVitals from "./reportWebVitals.js";
import { UserProvider } from "./useContext/context";
import { PrivateRoute } from "./pages/auth/PrivateRoute";

const routing = (
  <UserProvider>
    <React.StrictMode>
      <Router>
        <div id="main-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/post/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/create-post" element={<CreateBlog />} />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  </UserProvider>
);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(routing);
