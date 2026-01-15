import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Course from "@/lib/models/Course";

// GET /api/courses/top - Get top courses (isTopCourse=true, limit 3)
export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find({ isTopCourse: true })
      .populate("teacher", "name bio expertise image rating totalStudents")
      .sort({ rating: -1 })
      .limit(3);
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching top courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch top courses" },
      { status: 500 }
    );
  }
}
