import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

export default function Register() {
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
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
        updateUser(name, photo)
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-50 px-4">
      <div className="card w-full max-w-md bg-white shadow-xl p-6 border border-green-100 rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-400"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-400"
            required
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-400"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="btn bg-green-600 text-white w-full mt-3 hover:bg-green-700">
            Register
          </button>
        </form>

        <div className="divider my-5 text-gray-400">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 border-green-500 text-green-700 hover:bg-green-50"
        >
          <FaGoogle /> Continue with Google
        </button>

        <p className="text-center mt-3 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
