import styled from "styled-components"

export const MainGrid = styled.div``

export const IntroSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2rem;
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
  margin-top: -1rem;
  margin-inline: auto;
  max-width: 90vw;
`

export const InfoSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: clamp(1rem, 5vw + 1rem, 5.5rem) 1rem;

  & > p {
    margin-left: 2rem;
    max-width: 40rem;
  }
`

export const CollageImg = styled.img`
  width: 100vw;
`

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 1rem;
`
