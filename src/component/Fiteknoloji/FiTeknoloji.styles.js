import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0;
  top: 0;
  left: 0;

  .ana-div {
    position: relative;
    box-sizing: border-box;
    position: fixed;
  }

  .sol-div {
    float: right;
    width: 400px;
    height: 100vh;
    background: #e0e0e0;
    min-height: calc(92vh - 40px);
  }
  .sag-div {
    float: left;
    width: 177vh;
    height: 100vh;
    background: gray;
    min-height: calc(92vh - 40px);
  }

  .alt-div {
    width: 200px;
    height: 50px;
    background: gray;
  }

  .anasayfa {
    display: flex;
    min-height: calc(92vh - 40px);
    flex-flow: row wrap;
    flex-direction: row;
  }

  .ust-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .sol-ust-div {
    width: 5rem;
    height: 9rem;
  }
`;
