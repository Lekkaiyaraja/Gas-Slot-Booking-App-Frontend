import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <section>
          <div className="footer-details row">
            <div className="footer-section col-lg-4 col-md-6 text-center text-md-start">
              <Link to="/home" className="navbar-brand">
                FuelOne
              </Link>
              <p>
                At FuelOne, we revolutionize refueling with our innovative gas
                slot booking app. Enjoy a seamless, efficient, and stress-free
                experience by booking your gas slots in advance.
              </p>
            </div>

            <div className="footer-section col-lg-4 col-md-6 text-center text-md-start">
              <h6>Contact</h6>
              <hr />

              <div className="contact-info">
                <Link to="https://www.google.co.in/maps" target="_blank">
                  <p>
                    <i className="fas fa-home"></i>
                    Trichy, Tamil Nadu
                  </p>
                </Link>

                <Link to="mailto:lekkaiyarajaraj2020@gmail.com" target="_blank">
                  <p>
                    <i className="fas fa-envelope"></i>
                    lekkaiyarajaraj321@gmail.com
                  </p>
                </Link>

                <Link to="tel:+916383574223" target="_blank">
                  <p>
                    <i className="fas fa-phone"></i>
                    +91 0123456789
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="social-icons text-center">
          <div>
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="social-links">
            <Link to="mailto:lekkaiyarajaraj2020@gmail.com" target="_blank" className="facebook">
            <i class="fa-solid fa-envelope"></i>
            </Link>
            {/* <Link to="https://x.com/?lang=en" target="_blank" className="twitter">
              <i className="fab fa-twitter"></i>
            </Link> */}
            <Link to="https://my-personal-portfolio-developer.netlify.app/" target="_blank" className="google">
              <i className="fab fa-google"></i>
            </Link>
            {/* <Link to="https://www.instagram.com" target="_blank" className="instagram">
              <i className="fab fa-instagram"></i>
            </Link> */}
            <Link to="https://www.linkedin.com/in/lekkaiyaraja-t-9ba2a0213/" target="_blank" className="linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="https://github.com/Lekkaiyaraja" target="_blank" className="github">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>
      </div>

      <div className="footer-bottom text-center">
        &copy; {new Date().getFullYear()}&nbsp;
        <Link to="/" className="footer-brand">
          FuelOne
        </Link>
        &nbsp;All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
