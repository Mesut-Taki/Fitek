import styled from "styled-components";
import resim from "../../../assets/img/resim.jpg";

export const StyledContainer = styled.div`
  background-image: url(${resim});
  background-color: #ab2828;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .m-5 {
    background-color: #ab2828;
  }

  .mb-3 {
    box-shadow: 2px 5px 3px yellow;
    text-shadow: 0px 0px 1px black, 1px 1px 1px DeepPink, 0 0 20px FireBrick,
      0 0 5px Crimson;
    font-size: x-large;
  }
  .p-5 {
    background-color: blue;
    box-shadow: 2px 15px 50px yellow;
    text-shadow: 5px -5px 50px magenta;
  }
`;

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
  margin-top: 5rem;
  margin-left: 70%;
  border: 2px solid palevioletred;
  border-radius: 3px;
  box-shadow: 2px 5px 10px yellow;
  text-shadow: 0px 0px 1px black, 1px 1px 2px DarkRed, 0 0 20px FireBrick,
    0 0 5px Crimson;
`;
