import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const SectionSearch = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60%;
    padding: 30px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 
    rgba(0, 0, 0, 0.3) 0px 19px 38px,  
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

    @media (max-width: 1200px) {
        width: 80%;
    }
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

export const ButtonReturn = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
