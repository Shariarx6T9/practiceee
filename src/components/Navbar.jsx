import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // avatar dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // hamburger

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((err) => console.error(err));
    setOpen(false);
    setMobileMenu(false);
  };

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

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <Link to="/plants" className="hover:text-green-700">
            Plants
          </Link>
          {user && (
            <Link to="/profile" className="hover:text-green-700">
              My Profile
            </Link>
          )}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3 relative">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "https://i.ibb.co/2sYZf9M/user.png"}
                alt="User Avatar"
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full border-2 border-green-400 object-cover cursor-pointer"
              />

              {open && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg border border-gray-100 w-40">
                  <p
                    onClick={() => {
                      navigate("/profile");
                      setOpen(false);
                    }}
                    className="text-center py-2 text-green-700 font-medium border-b border-gray-200 cursor-pointer hover:bg-green-50"
                  >
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
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

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md border-t border-green-100">
          <div className="flex flex-col gap-2 p-4">
            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to="/plants"
              onClick={() => setMobileMenu(false)}
              className="hover:text-green-700"
            >
              Plants
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-green-700"
                  onClick={() => setMobileMenu(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-gray-50 p-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMobileMenu(false);
                  }}
                  className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setMobileMenu(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
