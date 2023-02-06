import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const SectionSearch = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60%;
    background-color: #fff;
    box-shadow: 
    rgba(0, 0, 0, 0.3) 0px 19px 38px,  
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

export const SubSection = styled.section`
    margin: 50px;

    h1 {
        margin: 10px;
        font-size: 30px;
    }
`

export const Img = styled.img`
    width: 40%;
`

export const Title = styled.h2`
    color: #fff;
`

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

export const SectionInfo = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InfoUserContent = styled.div`
    display: flex;
    width: 100%;
`

export const UlContent = styled.div`
    width: 100%;
`

export const ImgUser = styled.img`
    width: 200px;
    height: 200px;
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
            max-width: 650px;
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

export const ButtonReturn = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
