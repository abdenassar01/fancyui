import styled from "styled-components";
import { PaddingStyles } from "../../types/utilities";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Padding = styled.div<PaddingStyles>`
    padding: ${props => props.padding ? `${props.padding}px` : "20px" };
`