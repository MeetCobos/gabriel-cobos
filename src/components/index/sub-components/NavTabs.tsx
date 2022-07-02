import { Link } from "gatsby";
import React from "react";
import { NavTabContainer } from "../../../styles/index/NavTab.styled";

export default function NavTabs() {
  return (
    <NavTabContainer>
      <ul>
        <li>
          <Link to="/#home">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/#works">
            <span>Works</span>
          </Link>
        </li>
        <li>
          <Link to="/#about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/#contact-me">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </NavTabContainer>
  );
}
