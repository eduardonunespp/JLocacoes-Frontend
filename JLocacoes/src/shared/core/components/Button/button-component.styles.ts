import styled from "styled-components";

export type ButtonProps = {
  isDisabled?: boolean;
  variant?: "danger" | "warning";
};

export const Button = styled.button<ButtonProps>`
  width: 108px;
  height: 43px;
  border: none;

  ${(ButtonProps) => {
    switch (ButtonProps.variant) {
      case "danger":
        return `background-color: #D62839; color: #ffffff;`;
      case "warning":
        return `background-color: orange; color: #ffffff; `;
      default:
        return `background-color: #0FEA5A; color: #253531;`;
    }
  }}

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 12px;
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};

  animation-duration: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;

  filter: brightness(${(props) => (props.isDisabled ? 0.7 : 1)});
`;
