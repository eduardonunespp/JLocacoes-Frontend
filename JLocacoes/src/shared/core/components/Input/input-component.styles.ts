import styled from "styled-components";

export const medias = {
  mobile: "(max-width: 600px)",
};

export interface InputAuthProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

export const InputAuth = styled.div<InputAuthProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;

  label {
    color: ${(props) => props.theme.colors.FONT_PRIMARY};
    font-size: 1rem;
    display: block;

    ::after {
      content: "*";
      color: ${(props) => props.theme.colors.ALERT_SECUNDARY};
      margin: 3px;
    }
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    margin-top: 0.188rem;
    padding: 0px 10px;

    border: ${(props) =>
      props.error ? "1px solid #DC4C64" : "1px solid #6c757d"};

    /* border: 1px solid #6c757d; */

    background-color: #ccc;
    color: ${(props) => props.theme.colors.FONT_PRIMARY};
    border-radius: 0.25rem;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    &::placeholder {
      font-size: 0.9rem;
    }

    @media ${medias.mobile} {
      height: 2.5rem;
    }
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.ALERT_SECUNDARY};
  }
`;
