import { Link } from "gatsby"
import React from "react"
import {
  NavButton,
  NavTabContainer,
} from "../../../styles/index/NavTabs.styled"

export default function NavTabs() {
  return (
    <NavTabContainer>
      <ul>
        <li>
          <Link to='/#home'>
            <NavButton>Home</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#works'>
            <NavButton>Works</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#about'>
            <NavButton>About</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#contact-me'>
            <NavButton>Contact</NavButton>
          </Link>
        </li>
      </ul>
    </NavTabContainer>
  )
}
