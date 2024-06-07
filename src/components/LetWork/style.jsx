import styled from "styled-components";

export const Wrapper = styled.section`
    width: 95%;
    margin: 200px auto;
    background-color: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .text{
        width: 700px;
        h1{
            font-size: 34px;
        }
        p{
            color: #b1afaf;
        }
    }
    button{
        margin-right: 50px;
        padding: 10px 14px;
        color: white;
        background-color: #ad1400;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
        transform: scale(1);
            &:hover{
                animation: animeBtn 0.5s alternate infinite;
            }
            @keyframes animeBtn {
                to{
                    transform: scale(0.8);
                }
                from{
                    transform: scale(1);
                }
            }
    }

`