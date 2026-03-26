import { useEffect, useState, useRef, memo } from "react";
import SliderLib from "react-slick";
import "./InstructorsSection.scss";

import SvgImage from "../SvgImage";
import instructor1 from "../../assets/user-cover.png";
import instructor2 from "../../assets/user-cover-2.png";
import instructor3 from "../../assets/user-cover-3.png";
import instructor4 from "../../assets/user-cover-4.png";

const Slider = (SliderLib as any).default || SliderLib;

const instructors = [
  { name: "Julian Jameson", profession: "Profession", img: instructor1 },
  { name: "Julian Jameson", profession: "Profession", img: instructor2 },
  { name: "Julian Jameson", profession: "Profession", img: instructor3 },
  { name: "Julian Jameson", profession: "Profession", img: instructor4 },
];



const InstructorsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      const width = containerRef.current?.offsetWidth || 0;

      console.log('width', width);

      if (width < 400) setSlidesToShow(1);
      else if (width < 600) setSlidesToShow(2);
      else if (width < 900) setSlidesToShow(3);
      else setSlidesToShow(4);

    };

    updateSlides();

    const resizeObserver = new ResizeObserver(updateSlides);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const data = [...instructors, ...instructors];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="instructors-section section section-padding ps-0">
      <div className="container ps-0" ref={containerRef}>

        <div className="section-header">
          <span className="subtitle-tag">Team</span>

          <h2 className="section-title">
            Get Quality Education
          </h2>

          <p className="section-description">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>
        </div>

        <Slider {...settings}>
          {data.map((instructor, index) => (
            <div key={index} className="slide-item">
              <div className="instructor-card">

                <img
                  src={instructor.img}
                  alt={instructor.name}
                  className="instructor-image"
                />

                <h6 className="instructor-name">
                  {instructor.name}
                </h6>

                <span className="instructor-role">
                  {instructor.profession}
                </span>

                <div className="instructor-social">
                  <SvgImage src="/facebook.svg" size={23} />
                  <SvgImage src="/instagram.svg" size={23} />
                  <SvgImage src="/twitter.svg" size={23} />
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default memo(InstructorsSection);