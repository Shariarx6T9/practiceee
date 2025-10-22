import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

export default function Register() {
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password))
      return toast.error("Password must contain an uppercase letter.");
    if (!/(?=.*[a-z])/.test(password))
      return toast.error("Password must contain a lowercase letter.");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters.");

    createUser(email, password)
      .then(() => {
        updateUser(name)
          .then(() => {
            toast.success("Registration successful! 🌿");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        {/* Top heading to indicate registration page */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </form>

        {/* Google login button */}
        <div className="mt-3">
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Continue with Google
          </button>
        </div>

        {/* Main register button moved below */}
        <button
          onClick={(e) => handleRegister(e)}
          className="btn bg-green-600 text-white w-full mt-3"
        >
          Register
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
