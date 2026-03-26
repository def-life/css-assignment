import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="d-flex align-items-center navbar-container justify-content-between">
          <a href="#" className="brand-name flex-grow-0">
            Brandname
          </a>

          {/* Desktop nav */}
          <div className="d-none d-lg-flex align-items-center gap-4 text-strong-small flex-grow-1 nav-link-custom-container">
            <a href="#home" className="nav-link-custom">
              Home
            </a>
            <a href="#features" className="nav-link-custom">
              Product
            </a>
            <a href="#courses" className="nav-link-custom">
              Pricing
            </a>
            <a href="#contact" className="nav-link-custom">
              Contact
            </a>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3 flex-grow-1">
            <a href="#" className="login-button">
              Login
            </a>
            <button className="btn btn-brand d-flex align-items-center gap-2 text-strong-small join-us-button">
              JOIN US <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="d-lg-none btn border-0 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ fontSize: "1.5rem", lineHeight: 1 }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="d-lg-none mt-3 pb-2">
            <div className="d-flex flex-column gap-2">
              <a href="#home" className="nav-btn-link-button">
                Home
              </a>
              <a href="#features" className="nav-btn-link-button">
                Product
              </a>
              <a href="#courses" className="nav-btn-link-button">
                Pricing
              </a>
              <a href="#contact" className="nav-btn-link-button">
                Contact
              </a>
              <hr />
              <a href="#" className="nav-btn-link-button">
                Login
              </a>
              <button
                className="btn btn-brand d-flex align-items-center gap-2 mt-1 text-strong-small"
                style={{ width: "fit-content" }}
              >
                JOIN US <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
