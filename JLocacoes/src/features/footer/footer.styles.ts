import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 90%;
  margin: 100px auto 0px auto;
  display: flex;
  flex-direction: column;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;

  img {
    width: 100px;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};

  border-bottom: 1px solid ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};

  a {
    margin: 10px;
    color: ${(props) => props.theme.colors.FONT_PRIMARY};
    outline: none;
    text-decoration: none;

    @media (max-width: 700px) {
      margin: 5px;
      font-size: 0.8rem;
    }
  }
`;

export const ContainerCopyright = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
