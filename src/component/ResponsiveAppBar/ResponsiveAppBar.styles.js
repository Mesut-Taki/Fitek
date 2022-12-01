import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  min-width: 100%;
  top: 0;
  background-color: #0dcaf0;
  padding: 0.5rem 0.45rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
  align-items: center;
  box-shadow: 2px 5px 3px yellow;
  text-shadow: 0px 0px 1px black, 1px 1px 1px DeepPink, 0 0 20px FireBrick,
    0 0 5px Crimson;

  .logo-firma {
    position: fixed;
    max-width: 20vh;
    display: flex;
    position: fixed;
    top: 10px;
    box-shadow: 2px 5px 3px yellow;
    text-shadow: 0px 0px 1px black, 1px 1px 1px DeepPink, 0 0 20px FireBrick,
      0 0 5px Crimson;
  }
  .resim {
    position: fixed;
    border: 3px solid #73ad21;
    right: 50px;
    top: 10px;
    box-shadow: 2px 5px 3px yellow;
    text-shadow: 0px 0px 1px black, 1px 1px 1px DeepPink, 0 0 20px FireBrick,
      0 0 5px Crimson;
  }

  .btn-success {
    background-color: #0dcaf0 !important;
    color: #fff !important;
  }

  .dropdown-div {
    position: fixed;
    right: 110px;
    border: 3px solid #73ad21;
    top: 10px;
    box-shadow: 2px 5px 3px yellow;
    text-shadow: 0px 0px 1px black, 1px 1px 1px DeepPink, 0 0 20px FireBrick,
      0 0 5px Crimson;
    background-color: #0dcaf0 !important;
  }
`;
