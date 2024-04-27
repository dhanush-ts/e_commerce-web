import { createContext, useContext, useReducer } from "react"
import { LoginReducer } from "../reducers/LoginReducers";

const initialState = {
    name : "",
    email : "",
    id : ""
}

const LoginContext = createContext(initialState);

export const LoginProvider = ({ children }) => {

    const [state ,dispatch] = useReducer(LoginReducer,initialState);

    function LoginChange(details){
        dispatch({
            type : "CHANGE",
            payload : {
                name : details.name,
                email : details.email,
                id : details.id,
                key : details.accessToken
            }
        })
    };

    function Logout(details){
        dispatch({
            type : "RESET"
            }
        )
    };
    
    const value = {
        LoginChange,
        Logout,
        name : state.name ,
        email : state.email,
        id : state.id
    };

    return(
        <LoginContext.Provider value={value}>
            { children }
        </LoginContext.Provider>
    );
    
};

export const UseCredentials = () => {
    return useContext(LoginContext)
};