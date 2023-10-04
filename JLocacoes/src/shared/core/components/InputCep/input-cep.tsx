import InputMask from "react-input-mask";
import * as S from "./input-cep.styles";
import { IInput } from "../../domain-types";
import { forwardRef } from "react";
import { ReactInputMask } from "react-input-mask";

export const InputCep = forwardRef<ReactInputMask, IInput>(
  ({ label, id, placeholder, error, ...rest }, ref) => {
    const getErrorStyles = (error: string | undefined) => {
      return error !== undefined;
    };

    return (
      <S.InputAuth error={getErrorStyles(error)}>
        <label htmlFor={id}>{label}</label>
        <InputMask
          mask="99999-999"
          maskChar=""
          {...rest}
          ref={ref}
          placeholder={placeholder}
        />
        {error !== undefined && <span>{error}</span>}
      </S.InputAuth>
    );
  }
);

export default InputCep;
