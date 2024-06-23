"use client";
import { UserAuth } from "@/app/context/AuthContext";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import loader from "../../assets/spinner.gif";
import Image from "next/image";

const PrivateRoute = ({ children }: any) => {
    const { isAuthenticated } = UserAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (isAuthenticated != null) {
            setLoading(false);
            if (!isAuthenticated) {
                router.replace("/home");
            }
        }
    }, [isAuthenticated]);

    if (loading) {
        return (
            <div className="flex justify-center items-center  h-screen">
                <Image src={loader} alt="loading..." priority />
            </div>
        );
    } else {
        return (
            <div>
                {isAuthenticated && <Navbar />}
                {children}
            </div>
        );
    }
};

export default PrivateRoute;
