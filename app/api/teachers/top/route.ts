import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Teacher from "@/lib/models/Teacher";

// GET /api/teachers/top - Get top-rated teachers (limit 4)
export async function GET() {
  try {
    await connectDB();
    const teachers = await Teacher.find()
      .sort({ rating: -1 })
      .limit(4);
    return NextResponse.json(teachers);
  } catch (error) {
    console.error("Error fetching top teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch top teachers" },
      { status: 500 }
    );
  }
}
