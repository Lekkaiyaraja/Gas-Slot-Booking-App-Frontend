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
                    FuelOne
                  </p>
                  <p className="text-white m-4">
                    At FuelOne, we are redefining the way you refuel with our
                    innovative gas slot booking system. No more waiting in long
                    queues or worrying about last-minute fuel shortages—our
                    seamless platform allows you to reserve your gas slots in
                    advance, ensuring a smooth and stress-free experience.
                    Designed for convenience, reliability, and efficiency,
                    FuelOne empowers drivers to take control of their refueling
                    schedule. Whether you're commuting daily or gearing up for a
                    long journey, our technology ensures you stay on the move
                    without interruptions. Join the future of refueling with
                    FuelOne and experience a smarter, faster, and more
                    convenient way to fuel up!
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
