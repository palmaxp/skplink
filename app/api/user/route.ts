import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/database/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let user;

    try {
      user = Object.fromEntries(formData.entries());
    } catch {
      return NextResponse.json(
        {
          message: "Invalid JSON data format",
        },
        { status: 400 }
      );
    }
    const createUser = await User.create(user);

    return NextResponse.json(
      {
        message: "User created successfully",
        user: createUser,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "User creation failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 }
    );
  }
}
