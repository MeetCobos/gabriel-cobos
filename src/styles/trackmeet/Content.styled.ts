import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 19.75rem;
  grid-auto-rows: minmax(13.625rem, auto);
  justify-items: center;
`;

export const IntroSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  background-color: #f2f4f5;

  & h3 {
    text-align: center;
    margin-top: 2rem;
  }

  & p {
    width: fit-content;
    max-width: 20ch;
    margin-top: 1rem;
    margin-inline: auto;
  }
`;

export const MacImg = styled.img`
  grid-row: 2;
  margin-top: -100px;
`;

export const ContributionSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 3;
  height: 13.625rem;
  width: 50%;
`;

export const CollageImg = styled.img`
  width: 100vw;
`;

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 13.625rem;
`;
