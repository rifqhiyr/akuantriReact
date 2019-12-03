import React from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Service from "../Service";
import Faq from "../Faq";
import Testimonial from "../Testimonial";
import Product from "../Product";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Service />
      <Faq />
      <Testimonial />
      <Product />
      <Footer />
    </div>
  );
}

export default HomePage;
