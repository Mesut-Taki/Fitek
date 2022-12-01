import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  min-width: 100%;
  bottom: 0;
  background-color: #0dcaf0;
  padding: 0.75rem 0.625rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
  align-items: center;
  color: blue;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledYear = styled.div`
  display: flex;
  justify-content: start;
`;
export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
`;
export const StyledFooterLink = styled.div`
  display: flex;
  justify-content: end;
  .link,
  .link:visited {
    text-decoration: none;
    color: #979797;
  }
`;
export const StyledImg = styled.img`
  width: 30px;
  height: 15px;
`;
