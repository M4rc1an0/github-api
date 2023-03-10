import styled from 'styled-components'

export const SectionCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 720px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 992px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 85%;
    }

    @media (max-width: 490px) {
        width: 100%;
    }
`

export const InfoUser = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const Avatar = styled.img`
    width: 250px;
    height: 250px;

    @media (max-width: 1200px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: 992px) {
        width: 165px;
        height: 165px;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 600px) {
        display: initial;
        width: 100%;
        height: 100%;
    }
`

export const AvatarMobile = styled.img`
    display: none;
    
    @media (max-width: 768px) {
        display: initial;
        width: 100px;
        height: 100px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`

export const UlInfo = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    li {
        display: flex;
        list-style: none;
        max-width: 440px;
        overflow: hidden;
        text-overflow: ellipsis;
        
        p, h3 {
            font-weight: bold;
            margin-right: 5px;
        }
    }

    @media (max-width: 1200px) {
        li {
            p {
                font-size: 15px;
            }

        }
    }
`

export const UlSubInfo = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 10px;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-weight: bold;
        }
    }

    @media (max-width: 1200px) {
        li {
            flex-direction: row;
            p {
                font-size: 15px;
            }

        }
    }

    @media (max-width: 600px) {
        li {
            flex-direction: column;
            p {
                font-size: 12px;
            }
        }
    }
`

export const UlSubInfoMobile = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 10px;

    li {
        display: flex;
        align-items: center;

        p {
            font-weight: bold;
        }
    }

    @media (max-width: 1200px) {
        li {
            p {
                font-size: 15px;
            }
        }
    }

    @media (max-width: 768px) {
        li {
            span {
                a {
                    word-break: break-word;
                }
            }

        }
    }

    @media (max-width: 430px) {
        li {
            h3 {
                font-size: 15px;
            }

            span {
                a {
                    font-size: 15px;
                    word-break: break-word;
                }
            }

        }
    }
`

export const ContentWithMobile = styled.div`
    display: flex;
`

export const MoreInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
`