"use client";
import { AuthContextProvider } from "@/app/context/AuthContext";
import PrivateRoute from "../PrivateRoute";

const Layout = ({ children }: any) => {
    return (
        <AuthContextProvider>
            <PrivateRoute>{children}</PrivateRoute>
        </AuthContextProvider>
    );
};

export default Layout;
