import styled from "styled-components";

export const ButtonCadastro = styled.button`
  width: 149px;
  height: 43px;
  border: none;

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 12px;
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};

  background-color: ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};

  color: ${(props) => props.theme.colors.WHITE};

  animation-duration: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;

  @media(max-width: 600px) {
    width: 120px;
    
  }

  

`;
