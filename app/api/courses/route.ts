import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Course from "@/lib/models/Course";
import Teacher from "@/lib/models/Teacher";

// GET /api/courses - Get all courses
export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find()
      .populate("teacher", "name bio expertise image rating totalStudents")
      .sort({ createdAt: -1 });
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

// POST /api/courses - Create course (accept teacherId)
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      title,
      description,
      image,
      rating,
      teacherId,
      price,
      lessons,
      isTopCourse,
    } = body;

    // Validate required fields
    if (!title || !teacherId || price === undefined) {
      return NextResponse.json(
        {
          error: "Missing required fields: title, teacherId, price",
        },
        { status: 400 }
      );
    }

    // Verify teacher exists
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return NextResponse.json(
        { error: "Teacher not found" },
        { status: 404 }
      );
    }

    const course = new Course({
      title,
      description: description || "",
      image: image || "",
      rating: rating || 0,
      teacher: teacherId,
      price,
      lessons: lessons || [],
      isTopCourse: isTopCourse || false,
    });

    const savedCourse = await course.save();
    const populatedCourse = await Course.findById(savedCourse._id).populate(
      "teacher",
      "name bio expertise image rating totalStudents"
    );

    return NextResponse.json(populatedCourse, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
