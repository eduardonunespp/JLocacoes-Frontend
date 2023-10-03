import InputMask from 'react-input-mask'
import * as S from "./input-cnpj.styles";
import { IInput } from "../../domain-types";
import { forwardRef } from "react";
import { ReactInputMask } from 'react-input-mask'

export const InputCnpj = forwardRef<ReactInputMask, IInput>(
  ({ label, id, placeholder, error, ...rest }, ref) => {
    const getErrorStyles = (error: string | undefined) => {
      return error !== undefined;
    };

    return (
      <S.InputAuth error={getErrorStyles(error)}>
        <label htmlFor={id}>{label}</label>
        <InputMask mask="99.999.999/9999-99" maskChar="" {...rest} ref={ref} placeholder={placeholder} />
        {error !== undefined && <span>{error}</span>}
      </S.InputAuth>
    );
  }
);

export default InputCnpj;

