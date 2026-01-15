import { NextRequest, NextResponse } from "next/server";
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

// POST /api/teachers - Create teacher
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, bio, expertise, image, rating, totalStudents } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        {
          error: "Missing required field: name",
        },
        { status: 400 }
      );
    }

    const teacher = new Teacher({
      name,
      bio: bio || "",
      expertise: expertise || [],
      image: image || "",
      rating: rating || 0,
      totalStudents: totalStudents || 0,
    });

    const savedTeacher = await teacher.save();
    return NextResponse.json(savedTeacher, { status: 201 });
  } catch (error) {
    console.error("Error creating teacher:", error);
    return NextResponse.json(
      { error: "Failed to create teacher" },
      { status: 500 }
    );
  }
}
