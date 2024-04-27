import { Navigate } from "react-router-dom";

export const Protected = ({children}) => {
  
    const loggedin = sessionStorage.getItem("token");

    return loggedin?children:<Navigate to="/login" />
    
}