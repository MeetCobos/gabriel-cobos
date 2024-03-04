import styled from "styled-components"

export const StyledButton = styled.button`
  /* width: min(7.125vw, ); */
  padding: 0.35em 0.65em;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(var(--font-size-s), 0.875vw + 1rem, 20px);
  font-weight: 600;
  background-color: #f10000;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 100%, 40%);
  }

  &:active {
    background-color: hsl(0, 100%, 33%);
  }
`

export const CenteredButton = styled(StyledButton)`
  margin-inline: auto;
`

export const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const AbsoluteCenter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const AbsoluteContainer = styled.div`
  position: absolute;
`

export const PageLabel = styled.label`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(var(--font-size-l), 5vw + 1rem, 112px);
`

export const PageImg = styled.img`
  max-height: 86vh;
  max-width: 80vw;
  filter: blur(3.5px);
`

export const LandingContainer = styled.div`
  display: flex;
  background: var(--linear-background);
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`
