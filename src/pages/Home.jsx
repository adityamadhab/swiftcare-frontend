import React from "react";
import first from "../assets/first.jpg";
import Contact from "../components/Contact";
import ChooseUs from "../components/ChooseUs";
import { Footer } from "../components/Footer";
import { AboutUs } from "../components/AboutUs";
import { Landing } from "../components/Landing";

function Home() {
  return (
    <>
      <Landing/>
      <AboutUs/>
      <ChooseUs/>
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;
