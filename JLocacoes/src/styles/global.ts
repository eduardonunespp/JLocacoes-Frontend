import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, textarea {
        font-size: 1rem;
        outline: none;
        font-family: 'montserrat', 'sans-serif';

        background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
    }

`;
