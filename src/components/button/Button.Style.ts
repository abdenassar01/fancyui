import styled from "styled-components";
import { ButtonStyles } from "../../types/button";

export const PrimaryButton = styled.button<ButtonStyles>`
    border: 1px solid ${props => props.color ?? "#0074E9" };
    background-color: ${props => props.color ?? "#0074E9" };
    color: ${props => props.textColor ?? "white" };
    padding-top: ${props => props.ph ? `${props.ph}px` : "12px" };
    padding-bottom: ${props => props.ph ? `${props.ph}px` : "12px" };
    padding-left: ${props => props.pv ? `${props.pv}px` : "42px" };
    padding-right: ${props => props.pv ? `${props.pv}px` : "42px" };
    border-radius: ${props => props.rounding ? `${props.rounding}px` : "10px" };
    font-weight: 600;
    transition: all .3s ease-in-out; 

    &:hover{
        background-color: transparent;
        color: ${props => props.color ?? "#0074E9" };
    }
`

