import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const SectionSearch = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 
    rgba(0, 0, 0, 0.3) 0px 19px 38px, 
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

export const SubSection = styled.section`
    margin: 75px;
`

export const Img = styled.img`
    width: 100px;
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
        height: 30px;
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
    height: 30px;
    background-color: #2d333b;
    color: #fff;
    padding: 0 5px;
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

export const SectionCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 35%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 
    rgba(0, 0, 0, 0.3) 0px 19px 38px, 
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

export const InfoUser = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const MoreInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    width: 20%;
    cursor: pointer;

    :hover {
        background-color: #ccc;
    }
`

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
`

export const UlInfo = styled.ul`
    width: 100%;
    margin: 0 20px;

    li {
        list-style: none;
        margin: 5px
    }
`

export const UlSubInfo = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-weight: bold;
        }
    }
`