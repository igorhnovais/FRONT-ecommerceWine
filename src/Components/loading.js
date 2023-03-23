import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading(){
    return (
        <>
            <Div>
              <MagnifyingGlass width={"400"} height={"400"} color={"#322938"} glassColor={"#00ffff10"} />
            </Div>
            
        </>
    )
}

const Div = styled.div`
    justify-content: center;
    align-items: center;
`