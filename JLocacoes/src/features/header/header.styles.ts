import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.6875rem;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  img {
    width: 180px;
    height: 30px;

    @media (max-width: 600px) {
      width: 160px;
      height: 22px;
    }
  }

  @media (max-width: 600px) {
    padding: 0px 5px;
  }

  @media (max-width: 450px) {
    button {
      transform: scale(0.92);
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 380px;

  @media (max-width: 600px) {
    width: 235px;
  }

  svg {
    color: black;
  }
`;

export const ContainerActions = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 43px;

  transform: scale(1.2);

  @media (max-width: 600px) {
    display: none;
  }
`;
