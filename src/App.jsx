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
import Loading from "./components/Loading";
import SuccessPage from "./components/SuccessPage";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simple fake loading animation for a smooth entry
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-pink-50 to-purple-100 text-gray-800">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/plants/:id"
            element={
              <PrivateRoute>
                <PlantDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Optional success route (for redirects after actions) */}
          <Route
            path="/success"
            element={<SuccessPage message="Your action was successful!" />}
          />

          {/* 404 Catch-all route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
