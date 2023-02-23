import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";

import GlobalStyle from "../Components/globalStyle";
import AuthProvider from "../Components/auth"

export default function App(){
    return (
       <>
            <BrowserRouter>
                <GlobalStyle/>
                <AuthProvider>
                    <Routes>
                        
                    </Routes>
                </AuthProvider>

            </BrowserRouter>
       </>
    )
}