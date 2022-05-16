import styled from "styled-components";

export const Conteiner = styled.div`
  height: 319px;
  width: 76.6%;
  background: white;
  header {
    background-color: red;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 45px;
    h1 {
      height: 18px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;

      color: #ffffff;
    }
  }
  .MuiDataGrid-columnHeader {
    background: dodgerblue;
    color: white;
  }

  .MuiDataGrid-footerContainer {
    background: white;
  }

  .MuiDataGrid-virtualScroller.css-1w5m2wr-MuiDataGrid-virtualScroller {
    width: 390px;
    height: 208px;
  }
`;
