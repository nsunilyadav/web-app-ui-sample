import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blogs from "./Blog";
import Clients from "./Clients";
import ContactUs from "./Contact";
import Faqs from "./FAQs";
import Features from "./Features";
import Mission from "./Mission";
import Quote from "./Quote";
import Services from "./Services";
import ServicesBanner from "./ServicesBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <Quote />
      <Features />
      <Mission />
      <Services />
      <ServicesBanner />
      <Faqs />
      <AboutUs />
      <Blogs />
      <ContactUs />
      <Clients />
    </>
  );
};

export default Home;
