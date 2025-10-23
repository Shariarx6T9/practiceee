import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us 📬</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Have a question, suggestion, or just want to say hi?  
        We’d love to hear from you! 🌿
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="textarea textarea-bordered w-full"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
