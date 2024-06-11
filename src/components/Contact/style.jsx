import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    form{
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        input,textarea {
            padding: 12px;
            resize: none;
            background-color: #272727;
            border: none;
            color: white;
            &:focus{
                outline: none;
            }
            &::placeholder{
                color: #ad1400;
                font-size: 15px;
            }
        }
        
       
        button{
            padding: 10px 14px;
        color: white;
        background-color: #ad1400;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
        }
    }
    @media screen and (max-width: 1144px){
        form{
            width: 400px;
        }
    }
`