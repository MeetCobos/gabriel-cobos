import React from "react";
import linkedIn from "../assets/images/LinkedInLogo.svg";
import gitHub from "../assets/images/GitHubLogo.svg";
import twitter from "../assets/images/TwitterLogo.svg";
import { StyledNav, NavLogo, NavIcons } from "../styles/Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <div>
        <NavLogo>Gabriel Cobos</NavLogo>
      </div>
      <div>
        <NavIcons>
          <li>
            <img src={linkedIn} alt="LinkedIn Logo"></img>
          </li>
          <li>
            <img src={gitHub} alt="GitHub Logo"></img>
          </li>
          <li>
            <img src={twitter} alt="Twitter Logo"></img>
          </li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </NavIcons>
      </div>
    </StyledNav>
  );
}
