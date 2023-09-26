import styled from "styled-components"

export const HeaderContainer = styled.header `
    width: 100%;
    height: 6.6875rem;
    padding: 0rem 1.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.WHITE};

    img {
        width: 11.25rem;
        height: 1.875rem;
    }
`