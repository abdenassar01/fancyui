import styled from "styled-components";
import { MarginStyles, PaddingStyles } from "../../types/utilities";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Padding = styled.span<PaddingStyles>`
    padding: ${props => props.padding ? `${props.padding}px` : "0" };
    padding-left: ${props => props.pv ? `${props.pv}px` : `${ props.padding ?? "0" }` };
    padding-right: ${props => props.pv ? `${props.pv}px` : `${ props.padding ?? "0" }` };
    padding-top: ${props => props.ph ? `${props.ph}px` : `${ props.padding ?? "0" }` };
    padding-bottom: ${props => props.ph ? `${props.ph}px` : `${ props.padding ?? "0" }` };
`

export const Margin = styled.span<MarginStyles>`
    margin: ${props => props.margin ? `${props.margin}px` : "0" };
    margin-left: ${props => props.mv ? `${props.mv}px` : `${ props.margin ?? "0" }` };
    margin-right: ${props => props.mv ? `${props.mv}px` : `${ props.margin ?? "0" }` };
    margin-top: ${props => props.mh ? `${props.mh}px` : `${ props.margin ?? "0" }` };
    margin-bottom: ${props => props.mh ? `${props.mh}px` : `${ props.margin ?? "0" }` };
`