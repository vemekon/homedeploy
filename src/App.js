import react, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import { Dropdown } from "./components/Dropdown";

import Navbar from "./components/Navbar";

import GlobalStyle from "./globalStyles";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Mortgage, Sustainability } from "./pages/Mortgage";
import { Rental } from "./pages/Rental";
import { Buy } from "./pages/Buy";
import { ContactCEO } from "./pages/Contact-CEO";
import { ContactRenrals } from "./pages/Contact-rental";
import { ContactDirectors } from "./pages/Contact-directors";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [yOffset, setYOffset] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const handleScroll = () => {
  //   setYOffset(window.pageYOffset);
  // };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mortgage" exact component={Mortgage} />
        <Route path="/rental" exact component={Rental} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/contactCEO" exact component={ContactCEO} />
        <Route path="/contactDirectors" exact component={ContactDirectors} />
        <Route path="/contactRentals" exact component={ContactRenrals} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
