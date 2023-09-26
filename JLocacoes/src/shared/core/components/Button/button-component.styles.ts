import styled from "styled-components";

export const Button = styled.button`
  width: 108px;
  height: 43px;
  border: none;

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 12px;
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};

  background-color: ${(props) => props.theme.colors.PRIMARY};

  color: ${(props) => props.theme.colors.FONT_PRIMARY};

  animation-duration: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;
`;
