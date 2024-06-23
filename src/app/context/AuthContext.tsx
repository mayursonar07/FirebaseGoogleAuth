import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext: any = createContext({ userInfo: null });
export const AuthContextProvider = ({ children }: any) => {
    const [userInfo, setUserInfo] = useState<null | User>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUserInfo(currentUser);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, [userInfo]);

    return <AuthContext.Provider value={{ userInfo, isAuthenticated }}>{children}</AuthContext.Provider>;
};

export const UserAuth = (): any => {
    return useContext(AuthContext);
};
