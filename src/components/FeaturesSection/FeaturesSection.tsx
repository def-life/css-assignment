import { ArrowRight } from "lucide-react";
import "./FeaturesSection.scss";
import SvgImage from "../SvgImage";

const features = [
  {
    icon: <SvgImage src="012-blackboards.svg" size={28} />,
    title: "Certified Teacher",
    description: "The gradual accumulation of information about",
  },
  {
    icon: <SvgImage src="013-telescope-1.svg" size={28} />,
    title: "Expert instruction",
    description: "The gradual accumulation of information about",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section section section-padding ps-0" id="features">
      <div className="container ps-0">
        <div className="row align-items-start">
          
          <div className="col-lg-5 left-content">
            <div className="feature-red-line" />

            <h2 className="section-title">
              Approdable Packages
            </h2>

            <p className="section-description">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>

            <div className="arrow-hover">
              <span>Learn More</span>
              <ArrowRight size={18} className="arrow-icon" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {features.map((feature, index) => (
                <div className="col-12 col-sm-6" key={index}>
                  <div className="feature-card">
                    
                    <div className="feature-icon-box">
                      {feature.icon}
                    </div>

                    <h5 className="feature-title">
                      {feature.title}
                    </h5>

                    <div className="feature-separator" />

                    <p className="feature-text">
                      {feature.description}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;