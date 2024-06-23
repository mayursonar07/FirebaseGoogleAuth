"use client";

import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Google from "../assets/icons/Google";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { isAuthenticated } = UserAuth();

    useEffect(() => {
        if (isAuthenticated != null) {
            if (isAuthenticated) {
                router.replace("/dashboard");
            }
        }
    }, [isAuthenticated]);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.replace("/dashboard");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <main className="flex justify-end mx-2 my-2">
            <button
                onClick={signInWithGoogle}
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                <Google />
                Sign In with google
            </button>
        </main>
    );
}
