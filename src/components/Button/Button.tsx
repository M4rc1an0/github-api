import { ButtonMore } from "./styles"

type ButtonProps = {
    text: string
    click?: () => void
    width?: string | number | undefined
    name?: string
}

export const Button = ({text, click, width, name}: ButtonProps) => {
    return (
        <ButtonMore name={name} width={width} onClick={click}>{text}</ButtonMore>
    )
}