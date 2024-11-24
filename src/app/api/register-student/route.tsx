import { getBaseURL } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    try {
        const body = await request.json();
        const res = await fetch(`${getBaseURL()}/student-user`, {
            method: "POST",
            body: JSON.stringify({
                Name: body.name,
                LastName: body.last_name,
                Password: body.password,
                email: body.email,
                UserProfile: {
                    Institute: body.university,
                    Carrer: body.career,
                    Ciclo: body.ciclo
                }
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(!res.ok) {
            return NextResponse.json({ success: false });
        }
    
        const response = NextResponse.json(
            { success: true },
            { status: 200, headers: { "content-type": "application/json" } }
        );

        return response;
    } catch (error) {
        return NextResponse.json({ success: false });
    }
}