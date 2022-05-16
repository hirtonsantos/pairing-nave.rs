import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
    text: string;
    color?: string;
    onclick?: () => void;
}

const Button = ({ onclick, color, text }: ButtonProps) => {

  return (
    <ButtonStyled onClick={onclick} color={color}>
      {text}
    </ButtonStyled>
  );
};

export default Button;