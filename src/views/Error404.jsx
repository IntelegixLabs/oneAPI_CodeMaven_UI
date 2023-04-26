import Navbar from "../components/guest/Navbar.jsx";
import Footer from "../components/guest/Footer.jsx";

export default function Error404() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center my-auto" style={{ opacity: 0.6 }}>
        <h1>
          <i class="fa-solid fa-person-circle-exclamation fa-3x"></i>
        </h1>
        <h2 className="my-4 font-bold">that's an Error 404</h2>
        <p className="p-large">It looks like you're lost.</p>
      </div>
      <Footer />
    </div>
  );
}
