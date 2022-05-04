import React from "react";
import linkedIn from "../images/LinkedInLogo.svg";
import gitHub from "../images/GitHubLogo.svg";
import twitter from "../images/TwitterLogo.svg";
import { NavContainer, NavLogo, NavIcons } from "../styles/Nav.styled";

export default function Nav() {
  return (
    <NavContainer>
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
          <li>
            <p>Works</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </NavIcons>
      </div>
    </NavContainer>
  );
}
