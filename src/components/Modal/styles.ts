import styled from "styled-components"

export const OpacityModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.8);
`

export const Modal = styled.div`
    width: 60%;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    color: #000;

    @media (max-width: 1024px) {
        justify-content: center;
        border-radius: 21px;
        width: 95%;
        height: 90%;
    }
`