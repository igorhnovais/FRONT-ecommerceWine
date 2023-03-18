import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProductsList({item}){
    return (
        <>
            <WineDiv>
                <Link to={`/wine/${item._id}`}>
                    <Img src={item.image} alt={`vinho ${item.name}`}/>
                    <H2> {item.name}</H2>
                    <H6> R$: {item.value} </H6>
                </Link>
            </WineDiv>
        </>
    )
}

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 320px;
    border: 2px solid #322938;
    border-radius: 5px;
    margin: 10px;
    flex-shrink: 0;
    & a{
        text-decoration: none;
        color: #322938;   
    }   
`

const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 5px;
`

const H6 = styled.h6`
    display: flex;
    justify-content: center;
`