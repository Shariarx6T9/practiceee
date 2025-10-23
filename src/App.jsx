import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlantDetails from "./pages/PlantDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";
import SuccessPage from "./components/SuccessPage";
import ExplorePlants from "./pages/ExplorePlants";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulated loading effect for a smooth intro
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    // ✅ Use custom DaisyUI theme (white, green)
    <div
      data-theme="greennest"
      className="min-h-screen flex flex-col bg-gradient-to-br from-greenMuted via-greenLight to-greenMuted text-gray-800"
    >
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Explore Plants Page (Public) */}
          <Route path="/explore" element={<ExplorePlants />} />

          {/* Plants Page (Protected) */}
          <Route
            path="/plants"
            element={
              <PrivateRoute>
                <ExplorePlants />
              </PrivateRoute>
            }
          />

          {/* Plant Details Page (Protected) */}
          <Route
            path="/plants/:id"
            element={
              <PrivateRoute>
                <PlantDetails />
              </PrivateRoute>
            }
          />

          {/* Profile Page (Protected) */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* About Page (Public) */}
          <Route path="/about" element={<About />} />

          {/* Contact Page (Public) */}
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Optional success page for after actions */}
          <Route
            path="/success"
            element={<SuccessPage message="Your action was successful!" />}
          />

          {/* 404 fallback */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
