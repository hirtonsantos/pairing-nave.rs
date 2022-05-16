import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.color};
  color: #ffffff;
  width: 150px;
  padding: 10px;
  height: 45px;
  border-radius: 6px;
  border: 0;
  border-radius: 1px;
  cursor: pointer;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    /* width: 24%; */
    max-width: 120px;
  }
  @media (min-width: 1230px) {
    margin-right: 20px;
  }
`;
