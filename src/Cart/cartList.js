import styled from "styled-components";

export default function CartList({item}){
    return (
        <>
            <Nav>
                <WineDiv>
                    <Img src={item.products.image}/>
                    <H2>{item.products.name}</H2>
                    <PriceDiv>
                        <H6> R$: {(item.products.value / 100).toFixed(2).replace(".",",")}</H6>
                    </PriceDiv>
                    
                </WineDiv>
                
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 145px;
    width: 90vw;
    border: 2px solid #322938;
    border-radius: 5px;
    margin: 10px 10px 0 10px;
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
    width: 80px;
    border-right: 2px solid #322938;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 5px;
    font-size: 25px;
`

const H6 = styled.h6`
    display: flex;
    justify-content: center;
    border-left: 2px solid #322938;
    padding: 5px;
`

const PriceDiv = styled.div`
    min-width: 100px;
`
