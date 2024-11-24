import { getBaseURL } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        const body = await request.json();
        const res = await fetch(`${getBaseURL()}/company-user`, {
            method: "POST",
            body: JSON.stringify({
                Username: body.company,
                Password: body.password,
                email: body.email,
                CompanyPerfil: {
                    Sunac: body.ruc,
                    IndustrySector: body.type,
                    PhoneNumber: body.phone,
                    Address: body.address,
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