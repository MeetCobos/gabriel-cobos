import React from "react";
import gitHub from "../images/GitHubLogo.svg";
import linkedIn from "../images/LinkedInLogo.svg";
import twitter from "../images/TwitterLogo.svg";
import {
  NavAnchor,
  NavContainer,
  NavContent,
  NavIcons,
  NavLogo,
} from "../styles/index/Nav.styled";

export default function Nav({ black }) {
  return (
    <NavContainer black={black}>
      <NavContent>
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
              <NavAnchor href="#works">
                <p>Works</p>
              </NavAnchor>
            </li>
            <li>
              <NavAnchor href="#about">
                <p>About</p>
              </NavAnchor>
            </li>
            <li>
              <NavAnchor href="#contact-me">
                <p>Contact</p>
              </NavAnchor>
            </li>
          </NavIcons>
        </div>
      </NavContent>
    </NavContainer>
  );
}
