import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

export default function Profile() {
  const { user, updateUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser(name, photo)
      .then(() => {
        toast.success("Profile updated successfully 🌿");
        setEditing(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-lg mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-green-700">My Profile</h2>
      <img
        src={user?.photoURL || "https://i.ibb.co/2sYZf9M/user.png"}
        alt="User"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-300"
      />
      <h3 className="text-xl font-semibold">{user?.displayName}</h3>
      <p className="text-gray-500">{user?.email}</p>

      {!editing ? (
        <button onClick={() => setEditing(true)} className="btn btn-success text-white mt-4">
          Update Profile
        </button>
      ) : (
        <form onSubmit={handleUpdate} className="mt-6 space-y-3">
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="New Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photo"
            defaultValue={user?.photoURL}
            placeholder="New Photo URL"
            className="input input-bordered w-full"
          />
          <button className="btn btn-success text-white w-full">Save Changes</button>
        </form>
      )}
    </div>
  );
}
