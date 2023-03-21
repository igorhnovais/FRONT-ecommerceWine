import styled from "styled-components";

import useProducts from "../Hooks/Api/useProducts";
import useToken from "../Hooks/useToken";
import ProductsList from "./productList";
import Loading from "../Components/loading";

export default function HomePage(){

    const {products} = useProducts();
    const token = useToken();
    console.log(token)


    return (
        <>
            <section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
            </section>

            <Nav>
                <ProductsSection>
                   {(products) 
                    ?
                    (products.data.map((item, i) => <ProductsList item={item} key={i}/>)) 
                    :
                    <Loading/>}               
                </ProductsSection>     
            </Nav>

        </>
        
        
    )
}

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 60px;
    color: #322938;
    position: fixed;
    top: 0;
	background-color: #31684A;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-wrap: wrap;
    margin-top: 60px;
    border-radius: 5px;
    border: 5px solid #322938;
`