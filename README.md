🌿 GreenNest
GreenNest is a modern, responsive web application for an indoor plant nursery. Users can browse a catalog of beautiful indoor plants, view detailed care instructions, and manage their user profile. The site features a clean, green-themed UI built with Tailwind CSS and DaisyUI, and it uses Firebase for user authentication.

Live Site URL: https://greennestindorestore.surge.sh

Features
Based on the project files, the site includes the following features:

Firebase Authentication: Secure user registration and login using either email/password or Google Sign-In.

Password Reset: Users can request a password reset email.

Dynamic Homepage: A welcoming homepage featuring a Swiper-based image slider and a "Top Rated Plants" section.

Protected Routes: Key parts of the site, such as plant details and user profiles, are protected. Only logged-in users can access them.

Plant Catalog: Logged-in users can browse the full catalog of indoor plants on the "Plants" page.

Plant Details: A dynamic details page for each plant, loading data from a JSON file. It displays the plant's image, description, category, price, rating, and care level.

Profile Management: Authenticated users have a profile page where they can view and update their display name and photo URL.

Responsive Design: The site is fully responsive, using Tailwind CSS and DaisyUI for a clean layout on all devices.

User Notifications: Uses react-toastify to provide non-intrusive feedback for actions like logging in, registering, or booking a consultation.

Custom 404 Page: A custom-designed ErrorPage provides a friendly user experience for broken links.

Tech Stack
Frontend: React

Build Tool: Vite

Styling: Tailwind CSS + DaisyUI (with a custom "greennest" theme)

Routing: React Router DOM

Backend & Auth: Firebase (Authentication)

Animation: Framer Motion

UI Components: Swiper (for carousel), React Icons, Lucide React

Notifications: React Toastify