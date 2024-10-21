"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthUserType {
    user: any;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthUserType | null>(null);


export const AuthProvider = ({children}: {children: any}) => {
    interface UserData {
        username: string;
        token: string;
    }

    const [user, setUser] = useState<UserData | null>(null);
    const router = useRouter();

    // Retrieve user from localStorage when the app is loaded
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            setUser(parsedUser);
            axios.defaults.headers.common['Authorization'] = `Bearer ${parsedUser.token}`;
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            // const res = await axios.post("URL", formData, {
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            // });
            const res = {
                data: {
                    username: "Test user",
                    token: "DDSHsjI3891HKSJD_98139jsSA"
                }
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

            localStorage.setItem("user", JSON.stringify(res.data)); // Save user data in localStorage
            setUser(res.data);
            router.push("/home");
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Clear user data from localStorage
        delete axios.defaults.headers.common['Authorization'];
        router.push("/login");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;