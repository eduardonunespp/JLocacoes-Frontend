import React from "react";
import * as S from "./input-component.styles";
import { IInput } from "../../domain-types";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, id, placeholder, error, ...rest }, ref) => {
    const getErrorStyles = (error: string | undefined) => {
      return error !== undefined;
    };

    return (
      <S.InputAuth error={getErrorStyles(error)}>
        <label htmlFor={id}>{label}</label>
        <input {...rest} ref={ref} placeholder={placeholder} />
        {error !== undefined && <span>{error}</span>}
      </S.InputAuth>
    );
  }
);

export default Input;
