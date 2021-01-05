import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { SliderData } from "../data/SliderData";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
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
        color: rgb(255, 153, 0);
        font-weight: bold;

  }
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;
const arrowButtons = css`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

export const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };
  if (!Array.isArray(slides) || slides.length <= 0) return null;
  return (
    <HeroSection>
      <HeroWrapper>
        {" "}
        {slides.map((s, i) => (
          <HeroSlide key={i}>
            {i === current && (
              <HeroSlider>
                <HeroImage src={s.image} alt={s.alt} />
                <HeroContent>
                  <h1 data-aos="fade-down">{s.title}</h1>
                  <p data-aos="fade-down">{s.price}</p>
                  <Button
                    data-aos="fade-up"
                    to={s.path}
                    primary
                    css={`
                      max-width: 160px;
                    `}
                  >
                    {s.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};
