"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/app/context/AuthContext";

export default function ProtectedRoute({children}: {children: any}) {
    const context = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!context?.user) {
            router.push("/login");
        }
    }, [context?.user, router])

    return context?.user ? children : null;
}