"use client";

import { UserAuth } from "@/app/context/AuthContext";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { userInfo } = UserAuth();
    const router = useRouter();

    const logout = async () => {
        try {
            await signOut(auth);
            router.replace("/home");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white">
                <span className="mr-2">Hello, {userInfo?.displayName}</span>
            </div>
            <div>
                {userInfo && (
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={logout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
