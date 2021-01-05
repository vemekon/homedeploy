import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;

  background: rgb(0, 0, 30);
  margin-top: 5%;
  margin-bottom: 0;
  color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 90%;

  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4% 0;
  div {
    width: 25%;
    h1 {
      font-size: 1.2rem;
      margin: 2% 0;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
const Foot = styled.div`
  width: 100%;
  padding-top: 2%;
  border-top: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  p {
    font-size: 0.8rem;
  }
`;
const Linker = styled.div`
  a {
    padding: 1% 0;
    font-size: 0.8rem;
    text-decoration: none;
    color: white;

    &:hover {
      color: orange;
    }
  }
`;

export const Footer = () => {
  return (
    <Section>
      <Container>
        <div>
          <h1>About Us</h1>
          <p>
            {" "}
            A new property agency in the centre of Birmingham. Working with
            local communtiy to bring affordable property for residents
          </p>
        </div>
        <div>
          <h1>Get in touch</h1>
          <p>
            {" "}
            185 High Street <br />
            Edgbaston <br />
            Birmingham <br /> 012152974521
          </p>
        </div>
        <div>
          <h1>Affliate Companies</h1>
          <Linker>
            {" "}
            <a href="https://www.zoopla.co.uk/">Zoopla</a>
          </Linker>
          <Linker>
            {" "}
            <a href="https://www.zoopla.co.uk/">Zillow</a>
          </Linker>
          <Linker>
            {" "}
            <a href="https://www.zoopla.co.uk/">Realtor</a>
          </Linker>
        </div>
      </Container>
      <Foot>
        <p>
          Copyrights © 2021 - Samuel Mekonen, All Rights Reserved.{" "}
          <a href="https://www.zoopla.co.uk/">Zoopla</a>
        </p>
      </Foot>
    </Section>
  );
};
