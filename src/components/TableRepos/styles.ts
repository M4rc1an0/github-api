import styled from 'styled-components'

export const ReposContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    border: 1px solid #f5f5f5;
    height: 310px;
    overflow-y: scroll;


    a:nth-child(2n+1){
        background-color: #f5f5f5;
    }
`

export const RepoInfo = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    

    :nth-child(1n):hover {
        background-color: #ebebeb;
    }
`