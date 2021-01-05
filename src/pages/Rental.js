import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/photo-1.jpg";
import { RentalData } from "../data/RentalData";
import e from "../images/construction/e.jpg";

const RentalSection = styled.div`
  width: 100vw;
  height: 1500px;
  overflow-y: scroll;
`;
const Container = styled.div``;
const MainContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${e});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  height: calc(70vh - 60px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: brown;
  position: relative;
  h1 {
    position: absolute;
    top: 50%;
    left: 2%;
    margin-left: 5rem;
    z-index: 50;
  }
  p {
    position: absolute;
    top: 65%;
    left: 2%;
    margin-left: 5rem;
  }
  &::after {
    content: "";
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(100, 100, 100, 0.1)
    );
    display: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const SubContainer = styled.div`
  background: rgba(240, 240, 240, 0.7);
  width: 96%;
  margin: 0.5rem auto;
  padding: 0.5rem 0.5rem;
  display: grid;
  grid-gap: 1rem;
  //grid-template-columns: repeat(4, minmax(100px, 300px));
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 350px;
`;
const Card = styled.div`
  height: 350px;
  transition: 0.2s linear;
  img {
    width: 100%;
    height: 60%;
  }
  h1 {
    font-size: 1rem;
    padding: 0.3rem 0.2rem;
  }
  p {
    font-size: 0.8rem;
    padding: 0.3rem 0.2rem;
    font-weight: bold;
    color: brown;
  }
  h3 {
    font-size: 0.9rem;
    font-weight: normal;
    padding: 0.3rem 0.2rem;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
const Title = styled.div`
  width: 100%;
  height: 5rem;
  padding: 2rem 2rem 0 2.5rem;
  h1 {
    font-size: 1.5rem;
    color: brown;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
`;

export const Rental = () => {
  return (
    <RentalSection>
      <Container>
        <MainContainer>
          <h1></h1>
          <p></p>
        </MainContainer>
        <Title>
          <h1>Current Properties in Birmingham</h1>
        </Title>
        <SubContainer>
          {RentalData.map((item, i) => (
            <Links to="/contactRentals">
              <Card>
                <img src={`${item.image}`} alt="" />
                <h1>{item.title}</h1>
                <p>£{item.price}</p>
                <h3>{item.label}</h3>
              </Card>
            </Links>
          ))}
        </SubContainer>
      </Container>
    </RentalSection>
  );
};
