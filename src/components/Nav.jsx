import React from "react";
import gitHub from "../images/GitHubLogo.svg";
import linkedIn from "../images/LinkedInLogo.svg";
import twitter from "../images/TwitterLogo.svg";
import {
  NavAnchor,
  NavContainer,
  NavIcons,
  NavLink,
  NavLogo,
} from "../styles/Nav.styled";

export default function Nav() {
  return (
    <NavContainer>
      <div>
        <NavLogo href="#landing">Gabriel Cobos</NavLogo>
      </div>
      <div>
        <NavIcons>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-cobos/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn Logo"></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MeetCobos"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHub} alt="GitHub Logo"></img>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/MeetCobos"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter Logo"></img>
            </a>
          </li>
          <li>
            <NavLink to="/Works">
              <p>Works</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/About">
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavAnchor href="#contact-me">
              <p>Contact</p>
            </NavAnchor>
          </li>
        </NavIcons>
      </div>
    </NavContainer>
  );
}
