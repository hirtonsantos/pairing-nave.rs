import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  background: darksalmon;
  flex-direction: column;
  padding: 30px 30px;
  box-sizing: border-box;
  @media (min-width: 800px) {
    justify-content: center;
    margin: 0px;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  background: #afa4ff;
  width: 120px;
  height: 45px;
`;

export const DivA = styled.div`
  position: fixed;
  background-color: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  z-index: 10;
  img {
    width: 185px;
    margin-bottom: 20px;
  }
  label {
    display: flex;
    text-align: start;
    width: 100%;
    justify-content: flex-start;
  }
  svg {
    align-self: flex-end;
    width: 35px;
    height: 35px;
  }
  h1 {
    width: 363px;
    height: 32px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3px;
    font-size: 23px;
    line-height: 28px;
    color: black;
  }
  h2 {
    text-align: center;
    width: 363px;
    margin-bottom: 10px;
    height: 32px;
    font-family: monospace;
    font-size: 14px;
    line-height: 18px;
    color: black;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: initial;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  max-width: 500px;
  min-width: 200px;
  min-height: 300px;
  span {
    text-align: right;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div``;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 10px;
    p:first-child {
      font-weight: bold;
      width: 18ch;
      text-align: left;
      margin-right: 0px;
    }
  }
  @media (min-width: 500px) {
    span {
      flex-direction: row;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
