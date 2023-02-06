import styled from "styled-components";

type ButtonProps = {
    width: string
}

export const ButtonMore = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width ?? '200px'};
    background-color: #347d39;
    border-radius: 20px;
    padding: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: 'Chakra Petch', sans-serif;

    :hover {
        opacity: 0.9;
    }
`