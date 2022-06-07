import styled from "styled-components";

export const StyledSoftwareEngineer = styled.img`
  height: 8%;
`;

export const ImageGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  & > img {
    grid-row: 1;
    grid-column: 1;
  }

  & > div {
    grid-row: 1;
    grid-column: 1;
  }
`;

export const StyledLaPalms = styled.img`
  height: 92vh;
  filter: blur(3.5px);
`;

export const StyledHeadshot = styled.img`
  position: relative;
  box-shadow: 16px -15px white, 30px -30px black;
  height: 62%;
`;
