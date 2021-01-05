import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { SustainData } from "../data/SustainData";
import g from "../images/construction/g.jpg";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    botoom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    //     background: linear-gradient(
    //       0deg,
    //       rgba(0, 0, 0, 0.2) 0%,
    //       rgba(0, 0, 0, 0.4) 50%,
    //       rgba(0, 0, 0, 0.6) 100%
    //     );
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: grayscale(100%);
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;

  h1{
        font-size: clamp(1rem , 8vw , 3rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow:0px 0px 20px rgba(0,0,0,0.5)
        text-align: left;
        margin-bottom: 0.8rem;
  }
  p{
        margin-bottom:1.2rem;
        text-shadow:0px 0px 20px rgba(0,0,0,0.5);

  }
`;
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  margin: 3rem 0;
`;
const LeftContent = styled.div`
  background: rgb(0, 0, 50);
  margin-right: 0rem;
  padding: 2rem 1rem;
  color: wheat;
  h1 {
    padding: 2rem 2rem;
    word-spacing: 6px;
  }
  p {
    padding: 0.8rem 2rem;
    word-spacing: 6px;
    font-size: 0.8rem;
  }
`;
const RightContent = styled.div`
  background: rgb(0, 0, 50);
  padding: 2rem 1rem 3rem 1rem;
  color: wheat;
  h1 {
    font-size: 0.9rem;
    padding: 1rem 1rem;

    color: rgb(240, 20, 0);
  }
  ul {
    padding: 1rem 2rem;
  }
  p {
    padding: 2rem 1rem;
  }
`;
const SubRail = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 2rem auto 2rem 4rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  img {
    width: 250px;
    height: 250px;
  }
  h1 {
    margin: 0;
    padding: 0.5rem 0.2rem;
    font-size: 1rem;
    color: wheat;
    word-spacing: 6px;
  }
  p {
    margin: 0;
    padding: 0;
    width: 100%;
    color: red;
    word-spacing: 6px;
  }
`;

export const Mortgage = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroSlider>
          <HeroImage src={g} alt="train" />
          <HeroContent>
            <h1 data-aos="fade-down">Free mortgage advice</h1>
            <p data-aos="fade-down">Contact us before its too late</p>
          </HeroContent>
        </HeroSlider>
      </HeroWrapper>
      <MainContent>
        <LeftContent>
          <h1>MORTGAGE SERVICES</h1>
          <p>
            Connells Mortgage Services are fully focused on customers needs and
            available through all our estate agency branches.
          </p>
          <p>
            We take the responsibility of finding you the right mortgage very
            seriously, which is why Connells continuously monitors the quality
            and standard of our qualified consultants.
          </p>
          <h1>FOR PEOPLE WHO ARE THINKING OF MOVING HOME OR REMORTGAGING</h1>
          <p>
            We will provide advice and information about all the costs and
            charges involved when buying a new home or remortgaging and how some
            of these could be reduced. Meanwhile you can contact the following
            banks for tailored mortgage advise.
          </p>
          <SubRail>
            {SustainData.map((x, i) => (
              <RailCard key={i}>
                <img src={x.image} alt="" />
                <h1>{x.title}</h1>
                <p>{x.paragraph}</p>
              </RailCard>
            ))}
          </SubRail>
        </LeftContent>
        <RightContent>
          <h1>How we can help?</h1>
          <ul>
            <li>Expert Advice</li>
            <li>Moving Home</li>
            <li>First time buyers</li>
            <li>Remortgage</li>
          </ul>

          <p>
            YOUR HOME OR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP
            REPAYMENTS ON YOUR MORTGAGE.
          </p>
          <h1>Remortgage?</h1>
          <p>
            YOU MAY HAVE TO PAY AN EARLY REPAYMENT CHARGE TO YOUR EXISTING
            LENDER IF YOU RE-MORTGAGE.
          </p>
          <h1>Open 7 days a week</h1>
          <p>
            Busy schedule? Always on the go? We're here to make life easy.
            That's why our conveyancing service is open 7 days a week and late
            nights.
            <p>Monday - Friday 9.00am to 7.00pm</p>
            <p>Saturday 9.30am to 4.30pm </p>
            <p>Subday 10.00am to 3.30pm</p>
            <p>
              {" "}
              In fact we're only closed on Christmas Day, Easter Sunday and Bank
              Holidays.
            </p>
          </p>
        </RightContent>
      </MainContent>
    </HeroSection>
  );
};
