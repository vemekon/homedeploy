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

export const ContactDirectors = () => {
  return (
    <ContainerContact>
      <h1>Contact Our Directors</h1>
      <p>
        Our Directors can be contacted by the contact details <br />
        mentioned below. <br />
        <br /> However our rental and sales officers <br />
        are always happy to assist you if your <br />
        enquiry is in relation to property
        <br />
        rental or property purchase. <br />
        <br />
        Hannah Audrey <br />
        Receptionist <br />
        tel 01215452874
      </p>
    </ContainerContact>
  );
};
