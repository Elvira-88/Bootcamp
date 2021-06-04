import {createContext, useContext, useState} from "react";

const AuthContext = createContext({});

export default function AuthContextProvider({children}) {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setisAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token); // ALERT: XSS - Cross Site Scripting vulnerable
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loggedInUser.role === "ADMIN";

    const logIn = (token, user) => {
        setToken(token);
        setLoggedInUser(user);
        setisAuthenticated(true);
    };

    const logOut = () => {
        removeToken();
        setLoggedInUser({});
        setisAuthenticated(false);
    };

    const contextValue = {
        logIn,
        logOut,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook para simplificar el uso de este contexto
const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
};
