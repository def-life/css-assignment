import heroImg from "../../assets/hero-cover-1.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="position-relative hero-container">
        <div className="row align-items-center ms-lg-0 me-lg-0 ms-0 me-0">
          <div className="col-lg-6 mb-4 mb-lg-0 pe-0 ms-0 me-0">
            <span className="subtitle-tag">Welcome</span>

            <h1 className="fw-bold display-4 mb-3 hero-title">
              Best Learning
              <br />
              Opportunities
            </h1>

            <p className="mb-4 hero-text">
              Our goal is to make online education work for everyone
            </p>

            <div className="d-flex gap-3 flex-wrap button-group">
              <button className="btn btn-brand">Join Us</button>
              <button className="btn btn-brand-outline">Learn More</button>
            </div>
          </div>

          <div className="col-lg-6 text-center hero-image-container pe-0 ms-0 me-0">
            <img
              src={heroImg}
              alt="Student with books"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
