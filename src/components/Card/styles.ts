import styled from 'styled-components'

export const SectionCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 720px;
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

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
`

export const UlInfo = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;

    li {
        display: flex;
        list-style: none;
        margin: 0 10px;
        max-width: 290px;
        overflow: hidden;
        text-overflow: ellipsis;
        
        p, h3 {
            font-weight: bold;
            margin: 0 5px;
        }
    }
`

export const UlSubInfo = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;

        p {
            font-weight: bold;
        }
    }
`

export const MoreInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
`