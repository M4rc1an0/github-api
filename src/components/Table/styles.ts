import styled from "styled-components";

export const InfoUserContent = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`

export const ImgUser = styled.img`
    width: 220px;
    height: 220px;
`

export const UlContent = styled.div`
    width: 100%;
`

export const UlInfo = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    li {
        display: flex;
        list-style: none;
        margin: 0 10px;
        width: 100%;
        overflow-wrap: break-word;
        word-wrap: break-word; 

        p {
            max-width: 850px;
            word-wrap: break-word;
        }

        span, h3 {
            font-weight: bold;
            margin: 0 5px;
        }
    }
`

export const UlSubInfo = styled.ul`
    display: flex;
    justify-content: space-around;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;

        span, p {
            font-weight: bold;
        }
    }
`