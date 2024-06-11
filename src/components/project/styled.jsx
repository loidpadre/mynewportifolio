import styled from "styled-components";

export const Wrapper = styled.section`
    width:100%;
    margin: 120px auto;
    .text{
        display: flex;
        justify-content: space-between;
        button{
            margin-top: 20px;
            padding: 10px 14px;
            color: white;
            background-color: #ad1400;
            border: none;
            text-transform: uppercase;
            cursor: pointer;
        }
        h1{
            font-size: 40px;
        }
    }
    .project{
        display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 20px; 
        .proj{
            background-color: #272727;
            text-align: center;
            img{
                width: 80%;
                height:300px;
                object-fit: cover;
            }
        }
        .sub{
            margin-top: 20px;
            p{
                color: #ad1400;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 1144px) {
        .text{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .project{
            display: flex;
            flex-direction: column;
            align-items: center;
            .proj{
                width: 500px;
            }
        }
    }
`