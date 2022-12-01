import React from "react";
import Footer from "../atom/Footer";
import PermanentDrawerLeft from "../permanentDrawerLeft/PermanentDrawerLeft";
import { StyledContainer } from "./FiTeknoloji.styles";

const FiTeknoloji = () => {
  return (
    <StyledContainer>
      <PermanentDrawerLeft />
      <Footer />
    </StyledContainer>
  );
};

export default FiTeknoloji;
