import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import GlobalStyle from "../Components/globalStyle";
import AuthProvider from "../Components/auth";
import SignInPage from "../Sign/signInPage"

export default function App(){
    return (
       <>
            <BrowserRouter>
                <GlobalStyle/>
                <AuthProvider>
                    <Routes>
                        <Route path={"/"} element={<Navigate replace to="/sign-in"/>}/>
                        <Route path={"/sign-in"} element={<SignInPage/>}/>
                    </Routes>
                </AuthProvider>

            </BrowserRouter>
       </>
    )
}