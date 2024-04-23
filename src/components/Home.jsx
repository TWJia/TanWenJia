import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "animate.css";
import TopPage from "./TopPage";
import Skills from "./Skills/Skills";
import Achievements from "./Achievements";
const Home = () => {
  return (
    <>
      <Navbar />
      <TopPage />
      {/* <h1 class="animate__animated animate__zoomInDown">Tan Wen Jia</h1> */}
      <Skills />
      <Achievements />
      <Footer />
    </>
  );
};

export default Home;
