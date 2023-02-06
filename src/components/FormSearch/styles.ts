import styled from "styled-components";

export const ContentSearch = styled.div`

    div {
        display: flex;
    }

    h2 {
        margin: 10px 0 ;
    }

    input {
        height: 40px;
        width: 300px;
        padding: 10px;
        border: 1px solid #bdbdbd;
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
        outline: none;
    }
`

export const ButtonSearch = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #2d333b;
    color: #fff;
    padding: 0 10px;
    border: none;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    outline: none;

    :hover {
        opacity: 0.2;
    }
`