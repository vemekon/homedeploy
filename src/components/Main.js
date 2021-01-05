import React from "react";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
import { Hero } from "./Hero";
import { InfoSection } from "./InfoSection";
import { TeamSection } from "./TeamSection";

export const Main = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataOne} />
      <InfoSection {...InfoDataTwo} />
      <TeamSection />
    </>
  );
};
