import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import Cards from "../../components/cards/Cards";
import LeftBanner from "../../components/leftbanner/LeftBanner";
import Gallery from "../../components/gallery/Gallery";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsLetter/NewsLetter";
import HospitalDepartments from "../../components/department/Department";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
      <LeftBanner />
      <HospitalDepartments/>
      <Gallery />
      <Hero />
      <Newsletter/>
      <Footer />
    </>
  );
};

export default Home;
