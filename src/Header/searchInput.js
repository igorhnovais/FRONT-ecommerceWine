import styled from "styled-components";
import api from "../Services/api";

import { DebounceInput } from 'react-debounce-input';

export default function searchInput({setQuest, text}){

    const HandleChange = (value => {
        
        if(value.length >= 1){
            const promise =  api.post("products/searched", {search: value});
            promise.then(resp => setQuest(resp.data))

        } else {
            setQuest([]);
        }
    })

    return(
       <>
            <InputDiv>
                <DebounceInput
                    value={text}
                    minLength={1}
                    debounceTimeout={400}
                    placeholder={"Search for products"}
                    onChange={event => HandleChange(event.target.value)}
                />
            </InputDiv>
       </> 
    )
}

const InputDiv = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
    left:0;
    flex-direction: column;
   & input{
    width: 250px;
    border: 3px solid rgb(73,8,8);
    border-radius: 2px;
   }
   @media (max-width: 745px){
        & input{
            display: flex;
            justify-content: center;
            margin-left: 50px;
        }
    }
   @media (max-width: 630px){  
        & input{
            margin-right: 100px;
        }
    }
   @media (max-width: 600px){  
        & input{
            margin-right: 50px;
            width: 140px;
        }
    }
`