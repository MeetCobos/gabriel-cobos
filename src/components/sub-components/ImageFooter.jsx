import React from "react";
import { ImageFooterContainer } from "../../styles/ImageFooter.styled";

export default function ImageFooter({
  heading,
  "sub-heading": subHeading,
  "page-num": pageNum,
}) {
  return (
    <ImageFooterContainer>
      <div>
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>
      </div>
      <div>
        <p>{pageNum}</p>
      </div>
    </ImageFooterContainer>
  );
}
