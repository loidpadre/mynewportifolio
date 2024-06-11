import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    a{
        color: white;
        text-decoration: none;
    }
    .squar{
        width: 50%;
        height: 650px;
        background-color: #272727;
        position: absolute;
        top: 710px;
        left: 0px;
        z-index: -1;
    }
    .cards-inf{
        margin-top: 90px;
        .cards{
            display: flex;
            justify-content: space-between;
            .card{
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 350px;
                cursor: pointer;
                transition: transform 0.5s;
                p{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        .experience{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 250px;
            .years{
                text-align: center;
                h1{
                    color: #ad1400;
                    font-size: 190px;
                }
            }
                
                .palet1{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    h1{
                        color: #ad1400;
                    }
                    .pal{
                        text-align: center;
                        background-color: #313131;
                        padding: 10px;
                        width: 250px;
                        height: 190px;
                    }
                }
            }
        
    }
    @media screen and (max-width: 1144px){
        .squar{
            width: 100%;
        }
        .cards-inf{
            .cards{
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .card{
                    width: 500px;
                    &:hover{
                        transform: scale(0.9);
                    }
                }
            }
            .experience{
            flex-direction: column;
            .palet1{
                justify-content: center;
                align-items: center;
                .pal{
                    width: 500px;
                }
            }
        }
        }
        
    }
`