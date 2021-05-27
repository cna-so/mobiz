import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Nav = () => {
  return (
    <Navigation>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <NavMenu>
        <ul>
          <li>Home</li>
          <li>Movie</li>
          <li>Series</li>
          <li>My List</li>
          <li>
            <BiSearchAlt />
          </li>
        </ul>
      </NavMenu>
    </Navigation>
  );
};

const Navigation = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #090b13;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 4rem;
  margin: 0 auto;
`;
const Logo = styled.div`
  padding: 0;
  width: 80px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    list-style: none;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default Nav;
