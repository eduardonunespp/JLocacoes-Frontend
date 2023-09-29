import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FormContainer = styled.div`
  max-width: 19.75rem;

  h2 {
    font-family: var(--font-primary);
    font-size: 1.375rem;
    color: ${(props) => props.theme.colors.FONT_PRIMARY};

    padding: 0rem 0.75rem;

    margin-bottom: 1.5rem;
  }
`;

export const FooterModal = styled.div`
  background-color: white;
  height: 60px;

  border-top: 1px solid #dee2e6;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    margin-left: 7px;
  }
`;

export const ButtonSave = styled.button`
  width: 100%;
  height: 43px;
  border: none;
  background-color: ${(props) => props.theme.colors.PRIMARY};
  border-radius: 12px;
  font-family: ${(props) => props.theme.typography.FONT_SECUNDARY};
  font-weight: 600;

  font-size: 0.9rem;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
