import React from "react";
import {
  StyledFooter,
  FooterContainer,
  StyledYear,
  StyledLinkContainer,
  StyledFooterLink,
  StyledImg,
} from "./index.styles";
import EnglishNavi from "../../../assets/img/Navigation.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledYear>&copy; 2022 FiTeknoloji</StyledYear>
        <StyledLinkContainer>
          <StyledFooterLink>
            <a className="link" href="/terms" target="_blank">
              Terms & Conditions
            </a>
          </StyledFooterLink>
          <StyledFooterLink>
            <a className="link" href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </StyledFooterLink>
          <StyledFooterLink>Help</StyledFooterLink>
          <StyledFooterLink>
            English <StyledImg src={EnglishNavi} alt="english" />
          </StyledFooterLink>
        </StyledLinkContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
