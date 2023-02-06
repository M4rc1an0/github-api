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
    align-items: center;
    padding: 5px;
    
    :nth-child(1n):hover {
        background-color: #ebebeb;
    }

    li{
        display: flex;
        align-items: center;
        list-style: none;

        p {
            white-space: nowrap;
            width: 400px;
            overflow: hidden;
            text-overflow:    ellipsis;
        }
    }

    @media (max-width: 768px) {
        li{
            p {
                white-space: nowrap;
                width: 250px;
                overflow: hidden;
                text-overflow:    ellipsis;
            }
        }
    }

    @media (max-width: 600px) {
        li{
            p {
                display: none;
            }
        }
    }
`