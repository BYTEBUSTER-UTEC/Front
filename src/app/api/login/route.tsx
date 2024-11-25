import { getBaseURL } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const res = await fetch(`${getBaseURL()}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                email: body.email,
                password: body.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(!res.ok) {
            return NextResponse.json({ success: false });
        }
    
        const { token } = await res.json();
        const response = NextResponse.json(
            { success: true },
            { status: 200, headers: { "content-type": "application/json" } }
        );

        response.cookies.set({
            name: "token",
            value: token,
            path: "/",
            httpOnly: true,
        });

        return response;
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}