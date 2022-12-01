import React from "react";
import Footer from "../atom/Footer";
import Login from "../atom/Login/Login";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import SimpleAccordion from "../SimpleAccordion/SimpleAccordion";
import { StyledContainer } from "./FiTeknoloji.styles";
import logo from "../../assets/img/logo-light.png";

const Layout = () => {
  return (
    <StyledContainer>
      <div className="ana-div">
        <div className="ust-div">
          <ResponsiveAppBar />
        </div>
        <div className="anasayfa">
          <div className="sol-div">
            <div className="sol-ust-div">
              <img className="img-sol-ust" src={logo} alt="" />
            </div>
            <div>
              <SimpleAccordion />
            </div>
          </div>
          <div className="sag-div">
            <Login />
          </div>
        </div>
        <div className="alt-div">
          <Footer />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Layout;
