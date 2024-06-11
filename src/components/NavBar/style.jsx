import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu{
       ul{
        display: flex;
        gap: 10px;
        align-items: center;
        a{
            color: white;
            text-decoration: none;
        }
        li{
            list-style: none;
            cursor: pointer;
            &::after{
                content: " ";
                width: 0;
                background-color: #ad1400;
                height: 2px;
                display: block;
                transition: width 1s;
            }
            &:hover:not(.redes)::after{
                width: 100%;
            }
        }
       }
       .redes{
        display: flex;
        gap: -20px;
            p{
            transition: color 0.5s;
                &:hover{
                    color: white;
                }
            }
       }
       .menuDrop{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        right: 50px;
        top: 60px;
        display: block;
        li{
            transition: 0.5s ease;
            padding: 8px;
            border-radius: 8px;
            &:hover{
                background-color: #ad1400;
                border-radius: 8px;
            }
            
        }
       }
       
    }
    .amburg{
        display: none;
    }


    @media screen and (max-width: 1144px) {
        position: relative;
        .menu{
            display: block;
            position: absolute;
            left: 0;
            top: 0px;
            ul{
                width: 100%;
                flex-direction: column;
                align-items: center;
                background-color: #272727;
                width: 180px;
                padding-right: 50px;
            }
            .menuDrop{
                right: -200px;
                top: 0px;
                justify-content: center;
                align-items: center;
                li{
                    &:hover{
                        background-color:transparent;
                    }
                }
            }
        }
        .amburg{
            display: block;
            cursor: pointer;
        }
        .hidden{
            display: none;
        }
    }
`