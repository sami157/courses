import Link from "next/link";
import connectDB from "@/lib/mongodb";
import Course from "@/lib/models/Course";

export const dynamic = "force-dynamic";

interface Teacher {
  _id: string;
  name: string;
  bio?: string;
  expertise: string[];
  image?: string;
  rating: number;
  totalStudents: number;
}

interface Course {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  price: number;
  rating: number;
  teacher: Teacher | string;
}

async function getCourses(): Promise<Course[]> {
  try {
    await connectDB();
    const courses = await Course.find()
      .populate("teacher", "name bio expertise image rating totalStudents")
      .sort({ createdAt: -1 })
      .lean();
    
    return courses.map((course) => {
      // Handle teacher field - could be ObjectId, populated object, or string
      let teacher: Teacher | string;
      if (typeof course.teacher === "object" && course.teacher !== null && "_id" in course.teacher) {
        // It's a populated teacher object
        const teacherObj = course.teacher as any;
        teacher = {
          _id: teacherObj._id.toString(),
          name: teacherObj.name,
          bio: teacherObj.bio,
          expertise: teacherObj.expertise || [],
          image: teacherObj.image,
          rating: teacherObj.rating || 0,
          totalStudents: teacherObj.totalStudents || 0,
        };
      } else {
        // It's an ObjectId or string, convert to string
        teacher = typeof course.teacher === "string" 
          ? course.teacher 
          : (course.teacher as any)?.toString() || "";
      }

      return {
        _id: course._id.toString(),
        title: course.title,
        description: course.description,
        image: course.image,
        price: course.price,
        rating: course.rating,
        teacher,
      };
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          All Courses
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Discover our comprehensive collection of courses taught by expert
          instructors.
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No courses available yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            // Handle teacher data - can be object or string
            const teacherName =
              typeof course.teacher === "object" && course.teacher
                ? course.teacher.name
                : typeof course.teacher === "string"
                  ? course.teacher
                  : "Unknown Teacher";

            return (
              <Link
                key={course._id}
                href={`/courses/${course._id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-lg dark:bg-gray-900 dark:ring-gray-800"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {course.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {teacherName}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-yellow-500">
                          ⭐
                        </span>
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                          {course.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      ${course.price}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
}
