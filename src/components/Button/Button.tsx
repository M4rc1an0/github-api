import { ButtonMore } from "./styles"

type ButtonProps = {
    text: string
    click?: () => void
    width?: string | number | undefined
}

export const Button = ({text, click, width}: ButtonProps) => {
    return (
        <ButtonMore width={width} onClick={click}>{text}</ButtonMore>
    )
}