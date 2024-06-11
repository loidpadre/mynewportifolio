import styled from "styled-components";

export const Wrapper = styled.div`
    width: 500px;
    margin: 100px auto;
    ul{
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 10px;
        a{
            color: white;
            text-decoration: none;
        }
        li{
            list-style: none;
            transition: color 0.5s;
            cursor: pointer;
            &:hover{
                color: #ad1400;

            }
        }
    }
    @media screen and (max-width: 1144px){
        width: 100%;
        margin: 100px auto;
        ul{

        }
    }
`