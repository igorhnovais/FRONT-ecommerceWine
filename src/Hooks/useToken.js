import { useContext } from "react";
import { AuthContext } from "../Components/auth";

export default function useToken(){
    const {user} = useContext(AuthContext);
    
    return user.token
}