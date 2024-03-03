import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { CurCardType } from "../../../pages/index"

export default function NavTabs({ curCard }: { curCard: CurCardType }) {
  return (
    <NavTabContainer>
      <ul>
        <li>
          <Link to='/#home'>
            <NavButton curCard={curCard.landing}>Home</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#works'>
            <NavButton curCard={curCard.works}>Works</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#about'>
            <NavButton curCard={curCard.aboutMe}>About</NavButton>
          </Link>
        </li>
        <li>
          <Link to='/#contact-me'>
            <NavButton curCard={curCard.contactMe}>Contact</NavButton>
          </Link>
        </li>
      </ul>
    </NavTabContainer>
  )
}

const NavTabContainer = styled.nav`
  @media (max-width: 1300px) {
    display: none;
  }

  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  z-index: 2;

  & > ul {
    list-style: none;

    & > li {
      height: auto;
    }
  }
`

const NavButton = styled.button<{ curCard: boolean }>`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 0.875rem;
  background: none;
  border: none;

  font-size: ${({ curCard }) => curCard && "1.5rem"};
  font-weight: ${({ curCard }) => curCard && 700};
  transition: font-size 0.1s, font-weight 0.1s;

  &:hover {
    cursor: pointer;
    color: hsla(0, 0%, 100%, 80%);
  }
`
