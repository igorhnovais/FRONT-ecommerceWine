import styled from "styled-components";

export const All = styled.div`
    display: flex;
    
`

export const Section = styled.section`
    width: 100%;
    background-image:url(https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/06/02/vinho-0-1iemoc5o9yxis.jpg);
    background-repeat: no-repeat;
    background-size: 800px ;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-bottom: 150px;
    `

export const SectionImg = styled.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    & h1{
        color: white;
        font-size: 60px;
        font-family: 'Saira Stencil One';
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & input{
        width: 303px;
        height: 45px;
        margin-top: 10px;
        border: 1px solid rgb(207,207,207);
        border-radius: 3px;
        padding-left: 10px;
        font-size: 20px;
        ::placeholder{
            font-size: 20px;
            color: black;
        }
    }
    & a{
        text-decoration: none;
    }
   
`

export const Button = styled.button`
    background-color: #322938;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 303px;
    margin-top: 10px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
`

export const DivA = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    
    & a{
        color: white;
        font-size: 20px;
        font-weight: 500;
    }
`