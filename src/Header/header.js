import styled from "styled-components";
import { useState } from "react";

import SearchHeader from "./searchHeader";
import SearchInput from "./searchInput";
import MenuHeader from "./menuHeader";
import ListMenu from "./listMenu";

export default function Header({setResponse}){
    const [menu, setMenu] = useState("none");
    const [quest, setQuest] = useState([]);
    const [text, setText] = useState();

    return (
        <>
            <Section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
                <SearchInput setQuest={setQuest} text={text}/>
                <MenuHeader setMenu={setMenu} menu={menu}/>
            </Section>
            <SearchDiv>
                {quest?.map((item, i) => <SearchHeader item={item} key={i}/>)}
            </SearchDiv>
            <ListMenu setResponse={setResponse} menu={menu}/>
        </>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color:rgb(225,223,208);
    box-shadow: 6px 2px 6px black;
    width: 100%;
    height: 70px;
    padding: 0 30px;
`

const TitleDiv = styled.div`
    height: 70px;
    width: 33%;
    display: flex;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 35px;
    color: #322938;
    & h1{
        color: rgb(73,8,8);
        text-shadow: 1px 1px 2px #000000;
    }
`

const SearchDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.95);
    width: 300px;
    position: fixed;
    top: 70px;
    left: calc(45%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px solid rgb(73,8,8);
    border-radius: 5px;
    @media (min-width: 900px){
        left: calc(40%); 
    }
    @media (max-width: 900px){
        left: calc(35%); 
    }
    @media (max-width: 710px){
        left: calc(32%); 
    }
    @media (max-width: 630px){
        left: calc(30%); 
    }
    @media (max-width: 550px){
        left: calc(25%); 
    }
    @media (max-width: 420px){
        left: calc(14%); 
    }
`



