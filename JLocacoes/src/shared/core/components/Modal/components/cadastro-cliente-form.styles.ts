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

  
    padding: 0rem .75rem;

    margin-bottom: 1.5rem;
  }
`;