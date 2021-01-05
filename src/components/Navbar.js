import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { BiMenuAltRight, BiWindows } from "react-icons/bi";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  text-decoration: none;
  background: ${({ y }) => (y > 600 ? "rgb(0, 0, 50)" : "")};
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  text-decoration: line-through;
  text-shadow: 0.5px 0.5px;
  font-size: 1.5rem;
  span {
    color: orange;
    font-size: 1rem;
    text-shadow: 0;
  }
  ${NavLink}
`;
const MenuBars = styled(BiMenuAltRight)`
  display: none;
  height: 40px;
  width: 40px;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  transition: all 0.3s linear;
  ${NavLink}
  &:hover {
    color: orange;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [y, setY] = useState(300);

  const handleScroll = () => {
    setY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <Nav y={y}>
      <Logo to="/">
        H<span>&</span>H
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, i) => (
          <NavMenuLinks to={item.link} key={i}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contactRentals" primary>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
