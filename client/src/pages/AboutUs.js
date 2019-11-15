import React from "react";
import About from "../components/AboutUs";
import { MainNav } from "../components/Nav";
import Footer from "../components/Footer";

function AboutUs() {
  window.scrollTo(0, 0);

  return (
    <div>
      <MainNav />
      <About />
      <Footer />
    </div>
  );
}

export default AboutUs;
