import { ButtonMore } from "./styles"

export const Button = ({text, click}: any) => {
    return (
        <ButtonMore onClick={click}>{text}</ButtonMore>
    )
}