import styled from "styled-components"

export const IntroSection = styled.section`
  text-align: center;
  height: 19.75rem;
  background-color: #f2f4f5;

  & h3 {
    padding-top: 2rem;
  }

  & p {
    margin-top: 1rem;
    margin-inline: auto;
    max-width: 70ch;
  }
`

export const ResumeSvg = styled.img`
  display: block;
  margin-top: -100px;
  margin-inline: auto;
  border: 1px solid black;
  box-shadow: 3px 3px 10px black;
`

export const StyledDownload = styled.div`
  display: flex;
  margin-top: -1.09375rem;
  margin-bottom: 6.375rem;
  justify-content: center;
`
