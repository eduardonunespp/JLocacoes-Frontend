import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
  position: relative;
`;

export const BlockMock = styled.div`
  width: 96%;
  height: 400px;

  margin: 20px auto;

  border-radius: 1rem;

  background-color: #ccc;
`;

export const ContainerBlocks = styled.div`
  width: 96%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #ccc;
`;

export const ContainerStatus = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  left: 20px;
  bottom: 20px;

  svg {
    color: ${(props) => props.theme.colors.PRIMARY};

    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.PRIMARY};
    font-weight: 600;
    margin: 0px;
  }
`;
