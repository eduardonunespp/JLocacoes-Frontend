import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    height: 100dvh;
    background-color: ${(props) => props.theme.colors.BACKGROUND_PRIMARY};
    position: relative;

    
    p {
        position: absolute;
        left: 20px;
        bottom:  20px ;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.WHITE};
        font-weight: 600;
    }
`