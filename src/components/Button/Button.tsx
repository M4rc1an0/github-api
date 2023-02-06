import { ButtonMore } from "./styles"

export const Button = ({text, click, width}: any) => {
    return (
        <ButtonMore width={width} onClick={click}>{text}</ButtonMore>
    )
}