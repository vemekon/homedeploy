import React from "react";
import styled from "styled-components";
import { TeamData } from "../data/TeamData";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;
  background: black;
  overflow: hidden;
`;
const Container = styled.div`
  padding: 3rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 400px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2.5rem 1rem 2.5rem;
  color: wheat;

  img {
    width: 90%;
    height: 80%;
    object-fit: cover;
  }

  h1 {
    margin: 0.2rem 1rem 1rem 0;
    padding-top: 0.5rem;

    font-size: clamp(1rem, 6vw, 1.2rem);
    justify-self: center;
  }
  p {
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }
`;

export const TeamSection = () => {
  return (
    <Section>
      <Container>
        {TeamData.map((item, index) => (
          <Card key={index} data-aos="fade-in-left">
            <img src={item.image} alt="" />
            <h1> {item.title}</h1>
            <p> {item.paragraph}</p>

            <Button to={item.path} primary="true">
              {item.label}
            </Button>
          </Card>
        ))}
      </Container>
    </Section>
  );
};
