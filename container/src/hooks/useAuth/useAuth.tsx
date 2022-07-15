import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
    token: string | undefined;
    setToken: Function;
};

const AuthContext = createContext<AuthContextType>({
    token:  undefined,
    setToken: () => null,
});

const AuthProvider = ({ children }: any) => {
    const [token, handleTokenState] = useState<string | undefined>();

    const setToken = (token: string) => {
        handleTokenState(token);
    };

    return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };
