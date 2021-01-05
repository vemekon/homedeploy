import React from "react";
import styled from "styled-components";

const ContainerContact = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 20);
  h1 {
    padding: 7rem 1rem 2rem 7rem;
    color: white;
    letter-spacing: 3px;
    border-bottom: 1px solid orange;
  }
  p {
    padding: 2rem 7rem;
    color: white;
    letter-spacing: 3px;
    line-height: 1.8;
  }
`;

export const ContactRenrals = () => {
  return (
    <ContainerContact>
      <h1>Contact Our Rental Officers</h1>
      <p>
        Our rental and sales Officers can be contacted by the contact details{" "}
        <br />
        mentioned below. <br />
        <br />
        Our business is built on happy customers and to ensure <br />
        that each and every one of our customers receives a quick property{" "}
        <br />
        solution that is tailored to them in an open, honest and
        <br />
        informative service throughout every
        <br />
        stage of the process we have set out our H&H Promises that all
        <br />
        our customers will receive.
        <br />
        <br />
        Allison Harvey <br />
        Rental and sales <br />
        tel 01215452874
      </p>
    </ContainerContact>
  );
};
