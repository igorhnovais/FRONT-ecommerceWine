import styled from "styled-components";
import { Link } from "react-router-dom";
import {RiAdminFill} from "react-icons/ri";

import useToken from "../Hooks/useToken";
import useGetAdm from "../Hooks/Api/useGetAdm";

export default function Adm(){
    const token = useToken();
    const {adm} = useGetAdm(token);

    return (
        <>
            {(adm === true)
                ?
                
                <Div>
                    <Link to="/adm">
                        <RiAdminFill/>
                        <h6>Adm</h6>
                    </Link>
                </Div>
                
                :
                ""
            } 
        </>
    )
}

const Div = styled.div`
    width: 200px;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    cursor:pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    & h6{
        color: white;
        text-shadow: 0 0 6px white;
        border-bottom: 2px solid #322938;
    }
    & svg{
        color: red;
        margin-right: 5px;
    }
    & a{
        display: flex;
        text-decoration: none;
    }
`