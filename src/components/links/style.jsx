import styled from "styled-components";

export const Wrapper = styled.div`
    width: 500px;
    margin: 100px auto;
    ul{
        margin-left: 90px;
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
`