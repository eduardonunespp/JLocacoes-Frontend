import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.6875rem;
  padding: 0rem 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.WHITE};

  img {
    width: 11.25rem;
    height: 1.875rem;
  }
`;

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
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 273px;
`;
