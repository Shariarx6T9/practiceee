import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Profile() {
  const { user, updateUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();

    try {
      await updateUser(name, photo);
      toast.success("Profile updated successfully 🌿");
      setEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center border border-green-100">
        <h2 className="text-3xl font-bold mb-6 text-green-700">My Profile</h2>

        <img
          src={user?.photoURL || "https://i.ibb.co/2sYZf9M/user.png"}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-300 object-cover"
        />

        <h3 className="text-xl font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-500 mb-4">{user?.email}</p>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="btn bg-green-600 text-white hover:bg-green-700 w-full"
          >
            Update Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="mt-6 space-y-3">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="New Name"
              className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL}
              placeholder="New Photo URL"
              className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
            />
            <button className="btn bg-green-600 text-white w-full hover:bg-green-700">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="btn bg-gray-300 w-full hover:bg-gray-400"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
