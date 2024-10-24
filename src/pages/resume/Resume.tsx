import React from "react";
import About from "../About";
import Skill from "../Skill";
import Experience from "../Experience";
import Newsletter from "../Newsletter";
import Service from "../Service";
import Portfolio from "../Portfolio";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Footer from "../Footer";

const Resume = () => {
  return (
    <>
      {/* <!-- About --> */}
      <About />

      {/* <!-- Skill --> */}
      <Skill />

      {/* <!-- Experience --> */}
      <Experience />

      {/* <!-- Subscribe --> */}
      <Newsletter />

      {/* <!-- Service --> */}
      <Service />

      {/* <!-- Portfolio --> */}
      <Portfolio />

      {/* <!-- Testimonial --> */}
      <Testimonial />

      {/* <!-- Contact --> */}
      <Contact />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default Resume;
