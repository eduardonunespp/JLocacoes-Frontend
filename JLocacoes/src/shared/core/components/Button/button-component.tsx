import * as S from "./button-component.styles";
import { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
