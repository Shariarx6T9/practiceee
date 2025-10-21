import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/profile">My Profile</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-green-600">GreenNest</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "https://i.ibb.co/2sYZf9M/user.png"} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold text-center">{user.displayName || "User"}</li>
              <li><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm btn-success text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
