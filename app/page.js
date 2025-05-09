"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SectionOne from "@/components/Home/SectionOne";
import SectionTwo from "@/components/Home/SectionTwo";
import Sectionthory from "@/components/Home/Sectionthory";
import SectionFour from "@/components/Home/SectionFour";
import SectionFive from "@/components/Home/Sectionfive";
import SectionSixs from "@/components/Home/Sectionsixs";
import SectionEeta from "@/components/Home/SectionEeta";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <Sectionthory />
      <SectionFour />
      <SectionFive />
      <SectionSixs />
      <SectionEeta />
    </>
  );
};

export default Home;
