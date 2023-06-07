import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
 } 
`;

export const ContainerAPP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
