import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import {AuthContext} from "../Components/auth";
import {All, Img, Nav, SectionImg, DivInput, DivA, Button} from "./styled";

export default function SignInPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    let navigate = useNavigate();

    const { setUser } = useContext(AuthContext);

    function signIn(event){

        event.preventDefault();

        setHabilit(true);
        setDisabled(true);

        const login = {
            email,
            password
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, login);

        promise.then(resp => {setUser(resp.data); 
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem("name", resp.data.name) ;
            navigate("/products")});

        promise.catch((err => {alert(err.response?.data.message); setHabilit(false); setDisabled(false)}));
    };

    return (
        <>  
            <All>
                <Img src={"https://content.paodeacucar.com/wp-content/uploads/2019/06/o-que-%C3%A9-vinho-de-mesa4.jpg"}/>
                <Nav>
                    <SectionImg>
                        <h1> WineDrop </h1>
                    </SectionImg>

                    <form onSubmit={signIn}>
                        <DivInput >
                            <input disabled={disabled} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <input disabled={disabled} placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            <Button disabled={disabled} type="submit"> {!habilit ? "Entrar" : <ThreeDots color={"white"}/>} </Button>
                        </DivInput>
                    </form>

                    <DivA>
                        <Link to="/sign-up" data-identifier="sign-up-action">
                            Não tem uma conta? Cadastre-se! 
                        </Link>
                    </DivA>
                </Nav> 
            </All>
        </>
    )
}