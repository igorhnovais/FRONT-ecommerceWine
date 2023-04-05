import styled from "styled-components";
import { Link } from "react-router-dom";

import useToken from "../Hooks/useToken";
import useGetAdm from "../Hooks/Api/useGetAdm";

export default function Adm(){
    const token = useToken();
    const {adm} = useGetAdm(token);

    return (
        <>
            {(adm === true)
                ?
                <Link to="/adm">
                     <H6> Adm</H6>
                </Link>
                :
                ""
            } 
        </>
    )
}

const H6 = styled.h6`
    color: white
`