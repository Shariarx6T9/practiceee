import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

export default function Login() {
  const { signInUser, googleLogin, resetPassword } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful 🌿");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleReset = () => {
    if (!email) return toast.info("Enter your email first!");
    resetPassword(email)
      .then(() => toast.success("Password reset email sent!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Welcome Back 🌿
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-400"
            onChange={(e) => setEmail(e.target.value)}
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

          <p
            onClick={handleReset}
            className="text-sm text-green-600 cursor-pointer hover:underline"
          >
            Forgot password?
          </p>

          <button className="btn bg-green-600 text-white w-full hover:bg-green-700">
            Login
          </button>
        </form>

        <div className="divider my-5 text-gray-400">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex justify-center items-center gap-2 border-green-500 text-green-700 hover:bg-green-50"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-700 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
