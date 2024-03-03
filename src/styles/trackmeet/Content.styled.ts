import styled from "styled-components"

export const MainGrid = styled.div``

export const IntroSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 19.75rem;
  background-color: #f2f4f5;
  text-align: center;

  & h3 {
    margin-top: 2rem;
  }

  & p {
    max-width: 25ch;
    margin-top: 1rem;
  }
`

export const MacImg = styled.img`
  display: block;
  margin-top: -100px;
  margin-inline: auto;
`

export const ContributionSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 13.625rem;

  & > p {
    width: 40rem;
  }
`

export const CollageImg = styled.img`
  width: 100vw;
`

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 13.625rem;
`
