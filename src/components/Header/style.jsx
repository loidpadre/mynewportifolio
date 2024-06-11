import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    .col-1{
        z-index: -1;
        img{
           
            
        }
    }
    .col-2{
        width: 700px;
        span{
            font-size: 18px;
            color: #ff1e00;
            }
        
        h1{
            font-size: 65px;
            margin-top: 20px;
        }
        p{
            margin-top: 20px;
        }
        button{
            margin-top: 20px;
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
    }
    @media screen and (max-width: 1144px){
        flex-direction: column;
        .col-2{
            width: 500px;
            text-align: center;
        }
    }
`