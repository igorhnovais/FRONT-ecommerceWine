import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import GlobalStyle from "../Components/globalStyle";
import AuthProvider from "../Components/auth";
import SignInPage from "../Sign/signInPage";
import SignUpPage from "../Sign/signUpPage";
import HomePage from "../Home/homePage";
import OneProduct from "../Home/oneProduct";

export default function App(){
    return (
       <>
            <BrowserRouter>
                <GlobalStyle/>
                <AuthProvider>
                    <Routes>
                        <Route path={"/"} element={<Navigate replace to="/products"/>}/>
                        <Route path={"/sign-in"} element={<SignInPage/>}/>
                        <Route path={"/sign-up"} element={<SignUpPage/>}/>
                        <Route path={"/products"} element={<HomePage/>}/>
                        <Route path={"/product/:productId"} element={<OneProduct/>}/>
                    </Routes>
                </AuthProvider>

            </BrowserRouter>
       </>
    )
}