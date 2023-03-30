import styled from "styled-components"

export default function NotFound(){
    return (
        <>
            <Div>
                <h1> Pagina Não Encontrada!!</h1>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & h1{
        margin-top: 100px;
        color: white;
        font-size: 80px;
    }
    
`