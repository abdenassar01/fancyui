import { ButtonProps } from "../../types/button";
import { PrimaryButton } from "./Button.Style";

export function Button({ text, onClick, ...rest }: ButtonProps) {
  return (
    <PrimaryButton onClick={onClick} {...rest}>{ text }</PrimaryButton>
  )
}

