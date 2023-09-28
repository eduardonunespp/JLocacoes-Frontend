import * as S from "./button-component.styles";
import { forwardRef } from "react";

type ButtonInputType = {
  isDisabled?: boolean;
  variant?: 'danger' | 'warning'
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = forwardRef<HTMLButtonElement, ButtonInputType>(
  ({ children, isDisabled, variant, ...rest }, ref) => {
    return <S.Button variant={variant} {...rest} ref={ref} children={children} isDisabled={isDisabled} />
  }
);

export default Button;
