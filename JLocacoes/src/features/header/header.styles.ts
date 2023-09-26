import styled from "styled-components"

export const HeaderContainer = styled.header `
    width: 100%;
    height: 107px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.WHITE};
`