import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.6875rem;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.WHITE};

  img {
    width: 180px;
    height: 30px;

    @media (max-width: 600px) {
      width: 150px;
      height: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 0px 5px;
  }

  @media (max-width: 400px) {
    button {
      transform: scale(0.9);
    }
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
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 273px;

  @media (max-width: 600px) {
    width: 230px;
  }
`;
