import React, { useState } from "react";
import { Content } from "../components/ContentSection/Content";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { NavigationBar } from "../components/Navbar/NavigationBar";
import { SideNav } from "../components/SideNav/SideNav";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  // both the sidebar and navigation bar component will present in the dom (that is why we are not using conditional block
  // to render a single component at a time)
  // only when there will a click event performed then the sidebar will be visible
  //
  return (
    <>
      <SideNav isOpen={isOpen} closeMobileMenu={closeMobileMenu} />
      <NavigationBar toggle={toggle} />
      <HeroSection />
      <Content />
      <Footer />
    </>
  );
};
