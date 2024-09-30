import React from "react";
import aboutImg from "./about2.png";

const About = () => {
  return (
    <div>
      <section className="bg-dark">
        <div className="container">
          <div className="py-5">
            <div className="row align-items-center justify-content-evenly">
              <p className="text-white display-4 py-3 text-center">About Us</p>
              <div className="col-lg-6 text-center">
                <img
                  src={aboutImg}
                  alt="About CloudNiine"
                  className="about-img shadow-lg img-fluid rounded-3"
                />
              </div>
              <div className="col-lg-6">
                <div className="mx-1">
                  <p className="display-2 text-white font-curv text-start">
                    CloudNiine
                  </p>
                  <p className="text-white m-4">
                  We’re dedicated to revolutionizing your refueling experience. Our cutting-edge gas slot booking app is designed to streamline the refueling process, making it simple and hassle-free. You can reserve your gas slots ahead of time, avoid long wait times, and rest easy knowing you won’t run out of fuel. Our goal is to provide convenience, reliability, and satisfaction to every driver, ensuring that your travels are always smooth and enjoyable. Experience the future of refueling and take your driving experience to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
