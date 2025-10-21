export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-green-100 text-base-content mt-16">
      <nav className="grid grid-flow-col gap-4">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="#"><i className="ri-instagram-line"></i></a>
          <a href="#"><i className="ri-facebook-circle-line"></i></a>
          <a href="#"><i className="ri-pinterest-line"></i></a>
        </div>
      </nav>
      <aside>
        <p>© 2025 GreenNest. All rights reserved.</p>
      </aside>
    </footer>
  );
}
