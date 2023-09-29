import styled from "styled-components";

type ButtonProps = {
  isbuttonselect: boolean;
};

export const ButtonCadastro = styled.button`
  width: 149px;
  height: 43px;
  border: none;

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 12px;
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};

  background-color: ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};

  color: ${(props) => props.theme.colors.FONT_PRIMARY};

  animation-duration: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;

  @media (max-width: 600px) {
    width: 120px;
  }
`;

export const RegisterContainerSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 10px 0px;
`;

export const RegisterContainerMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  font-weight: 600;
  background-color: ${(props) => props.theme.colors.PRIMARY};
  border-radius: 5px;
  padding: 5px 10px;
`;

export const ButtonSelect = styled.button<ButtonProps>`
  width: 90px;
  height: 37px;
  margin: 0px;
  border-radius: 8px;
  background-color: ${(props) => (props.isbuttonselect ? "#71F79F" : "#ccc")};
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};
  font-weight: 600;
  border: none;

  margin-right: 10px;

  font-size: 0.75rem;

  transition: 0.2s;
`;

export const MessageTitle = styled.h2`
  font-weight: 600;
  font-size: 1.7rem;
  margin: 0px;
`;
