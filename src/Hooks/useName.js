import { useContext } from "react";
import { AuthContext } from "../Components/auth";

export default function useName(){
    const {user} = useContext(AuthContext);
    
    return user.name
}