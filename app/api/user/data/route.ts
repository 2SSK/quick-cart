import connectDB from "@/config/db";
import User from "@/models/user";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    await connectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ sucess: false, message: "User not found" });
    }
    return NextResponse.json({ sucess: true, user });
  } catch (error) {
    return NextResponse.json({ sucess: false, message: error });
  }
}
