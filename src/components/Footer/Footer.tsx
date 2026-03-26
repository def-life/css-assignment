import SvgImage from "../SvgImage";
import "./Footer.scss";
import { capitalizeFirst } from "../../lib/helper";
import { memo } from "react";

const footerData = {
  "company Info": [
    { label: "About Us", link: "#" },
    { label: "Carrier", link: "#" },
    { label: "We are hiring", link: "#" },
    { label: "Blog", link: "#" },
  ],
  legal: [
    { label: "About Us", link: "#" },
    { label: "Carrier", link: "#" },
    { label: "We are hiring", link: "#" },
    { label: "Blog", link: "#" },
  ],
  features: [
    { label: "Business Marketing", link: "#" },
    { label: "User Analytic", link: "#" },
    { label: "Live Chat", link: "#" },
    { label: "Unlimited Support", link: "#" },
  ],
  resources: [
    { label: "IOS & Android", link: "#" },
    { label: "Watch a Demo", link: "#" },
    { label: "Customers", link: "#" },
    { label: "API", link: "#" },
  ],
  "get In Touch": [
    { label: "(480) 555-0103", link: "#", src: "/contact.svg" },
    { label: "4517 Washington Ave. Manchester, Kentucky 39495", link: "#", src: "/location.svg" },
    { label: "debra.holt@example.com", link: "#", src: "/email.svg" },
  ],
};

interface FooterItem {
  label: string;
  link: string; 
  src?: string; 
}

const Footer = () => {

  return (
    <footer className="footer section">
      <div className="container footer-top">
        <div className="footer-grid">
          {Object.entries(footerData).map(([section, items]) => (
            <div key={section} className={`footer-col ${section === 'contact' ? 'contact' : ''}`}>
              <h6>{capitalizeFirst(section)}</h6>
              <ul>
                {items.map((item: FooterItem, index: number) => (
                  <li key={index}>
                    {section === 'get In Touch' ? (
                      <>
                        <SvgImage src={item.src as string} size={24} />
                        <span>{item.label}</span>
                      </>
                    ) : (
                      <a href={item.link}>{capitalizeFirst(item.label)}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <p>Made With Love By Figmaland All Right Reserved</p>

        <div className="socials">
          <SvgImage src="/facebook.svg" size={24} />
          <SvgImage src="/instagram.svg" size={24} />
          <SvgImage src="/twitter.svg" size={24} />
        </div>
      </div>
    </footer>
  )
}



export default memo(Footer);