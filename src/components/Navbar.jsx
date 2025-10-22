import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-green-700 flex items-center gap-2"
        >
          🌿 <span>GreenNest</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/plants" className="hover:text-green-700">Plants</Link>
          {user && <Link to="/profile" className="hover:text-green-700">Profile</Link>}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "https://i.ibb.co/2sYZf9M/user.png"}
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-green-400 object-cover"
              />
              <button
                onClick={logOut}
                className="text-red-600 text-sm hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
