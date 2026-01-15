import Link from "next/link";

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
  lessons: string[];
}

async function getCourse(id: string): Promise<Course | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  try {
    const res = await fetch(`${baseUrl}/api/courses/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch course");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Course Not Found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The course you're looking for doesn't exist.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
      </div>
    );
  }

  // Handle teacher data - can be object or string
  const teacher =
    typeof course.teacher === "object" && course.teacher
      ? course.teacher
      : null;
  const teacherName = teacher ? teacher.name : "Unknown Teacher";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Course Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 lg:h-full">
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>

        {/* Course Details */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {course.title}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-lg text-gray-600 dark:text-gray-400">
                by <span className="font-semibold">{teacherName}</span>
              </span>
              <div className="flex items-center">
                <span className="text-lg font-medium text-yellow-500">⭐</span>
                <span className="ml-1 text-lg text-gray-600 dark:text-gray-400">
                  {course.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          {course.description && (
            <div className="mt-8">
              <p className="text-xl leading-8 text-gray-600 dark:text-gray-400">
                {course.description}
              </p>
            </div>
          )}

          {/* Teacher Profile Section */}
          {teacher && (
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                About the Teacher
              </h2>
              <div className="mt-4 flex items-start gap-4">
                {teacher.image ? (
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-20 w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {teacher.name}
                  </h3>
                  {teacher.expertise && teacher.expertise.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {teacher.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-yellow-500">
                        ⭐
                      </span>
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                        {teacher.rating.toFixed(1)} Rating
                      </span>
                    </div>
                    {teacher.totalStudents > 0 && (
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {teacher.totalStudents.toLocaleString()} Students
                      </span>
                    )}
                  </div>
                  {teacher.bio && (
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {teacher.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Lessons List */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Course Lessons
            </h2>
            {course.lessons && course.lessons.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {course.lessons.map((lesson, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                      {index + 1}
                    </span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                No lessons available yet.
              </p>
            )}
          </div>

          {/* Price and Enroll */}
          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Price
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${course.price}
                </p>
              </div>
              <button className="rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
