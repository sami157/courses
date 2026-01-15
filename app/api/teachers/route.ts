import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Teacher from "@/lib/models/Teacher";

// GET /api/teachers - Get all teachers
export async function GET() {
  try {
    await connectDB();
    const teachers = await Teacher.find().sort({ rating: -1 });
    return NextResponse.json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}
