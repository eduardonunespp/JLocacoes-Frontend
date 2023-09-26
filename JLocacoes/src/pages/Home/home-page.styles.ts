import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100dvh;
  background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
  position: relative;

  p {
    left: 20px;
    bottom: 20px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.WHITE};
    font-weight: 600;
  }
`;

export const BlockMock = styled.div`
  width: 96%;
  height: 400px;

  margin: 20px auto;

  border-radius: 1rem;

  background-color: #ccc;
`;

export const ContainerStatus = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  left: 20px;
  bottom: 20px;

  svg {
    color: ${(props) => props.theme.colors.WHITE};

    font-size: 1.3rem;
  }
`;
