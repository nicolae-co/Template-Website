import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: #01bf71;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #01bf71;
    height: 100vh;
`

export const Text = styled.p`
    color: #000;
    font-size: 3rem;

    @media screen  and  (max-width: 480px){
        color: white;
        font-size: 2rem;
    }
`

export const HomeContainer = styled.div`
    padding-top: 16px;
    
`

export const Home = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
    
`