import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
  position: relative;
`;

export const BlockMock = styled.div`
  width: 96%;
  height: 400px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin: 20px auto;

  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.PRIMARY};

  h2 {
    font-weight: 600;
  }
`;

export const SearchContainer = styled.div `
  display: flex;
  margin: 0px 5px;
  align-items: center;
  justify-content: space-evenly;
  height: 30px;
  width: 70px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.SECUNDARY};

  svg {
    font-size: 0.9rem;
  }

  span {
    margin: 0px;
    padding: 0px;

    font-size: 0.95rem;

  }

`

export const SearchContainerP = styled.div `

  height: 50px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  
  @media(max-width: 600px){
    width: 300px;
  }

`

export const ContainerStates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60px;

  p {
    padding-top: 5px;
    padding: 0px;
  }

  svg {
    font-size: 0.8rem;
    margin-bottom: 3px;
    margin-left: 2px;

    color: ${(props) => props.theme.colors.PRIMARY};
  }
`;

export const Card = styled.div`
  width: 306px;
  height: 425px;
  border-radius: 1rem;
  padding: 10px;
  margin: 10px 0px;

  border: 1px solid #ccc;

  h3 {
    margin: 10px 0px;
    font-weight: 600;
    font-size: 1.5rem;
  }

  span {
    font-weight: 600;
  }
`;

export const FooterCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  display: flex;
  align-items: center;

  padding: 0px 5px;

  p {
    margin: 0px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.PRIMARY};
  }

  button {
    height: 35px;
    width: 70px;

    font-size: 0.7rem;
  }
`;

export const ContainerTitle = styled.div`
  width: 95%;
  margin: auto;

  h2 {
    font-weight: 600;
  }
`;

export const BackPhoto = styled.div`
  width: 100%;
  height: 195px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 500px;

  background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
  border-radius: 10px;
  height: 50px;
  align-items: center;
  justify-content: space-around;

  input {
    width: 400px;
    border: none;
    height: 40px;

    margin-top: 10px;
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    width: 320px;

    input {
      width: 240px;
    }
  }
`;

export const ContainerBlocks = styled.div`
  width: 96%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Block = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.BACKGROUND_SECUNDARY};
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
