import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import AboutHome from "./AboutHome";
import Specializations from "./Specializations";
import IndustryServices from "./IndustryServices";
import WorkProcess from "./WorkProcess";
import StandoutSection from "./StandoutSection";
import ServiceSectionHome from "./ServicesSectionHome";
import PrjectItemHome from "./ProjectItemHome";
import ProjectItemHome from "./ProjectItemHome";
import BenefitsSectionHome from "./BenefitsSectionHome";
import { MdWhatsapp } from "react-icons/md";
import ContactHome from "./ContactHome";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutHome />
      <Specializations />
      <IndustryServices />
      <WorkProcess />
      <StandoutSection />
      <ServiceSectionHome />
      <ProjectItemHome />

      <BenefitsSectionHome />
      <ContactHome />
    </>
  );
};

export default Home;
