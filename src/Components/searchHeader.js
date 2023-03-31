import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SearchHeader({item}){
    return (
        <>
            <Link to={`/product/${item.id}`}>
                <Div >
                    <img src={item.image}/>
                    <h6>
                        {item.name}
                    </h6>
                </Div>
            </Link> 
        </>
    )
}


const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 5px;
    & img{
        width: 20px;
        margin-right: 5px;
        border-right: 2px solid #322938;
    }
    & h6{
        color: white;
        text-shadow: 0 0 9px black;
    }
`