import { forwardRef } from "react";
import { IButton } from "../../domain-types";
import * as S from "./button-component.styles";

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, isDisabled, variant, ...rest }, ref) => {
    return (
      <S.Button
        variant={variant}
        {...rest}
        ref={ref}
        children={children}
        isDisabled={isDisabled}
      />
    );
  }
);

export default Button;
