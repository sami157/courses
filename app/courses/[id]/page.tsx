import Link from "next/link";

interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  teacher: string;
  rating: number;
  price: number;
  lessons: string[];
}

async function getCourse(id: string): Promise<Course | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

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
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Course Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 lg:h-full">
          {course.image && (
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Course Details */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {course.title}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-lg text-gray-600 dark:text-gray-400">
                by <span className="font-semibold">{course.teacher}</span>
              </span>
              <div className="flex items-center">
                <span className="text-lg font-medium text-yellow-500">⭐</span>
                <span className="ml-1 text-lg text-gray-600 dark:text-gray-400">
                  {course.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-400">
              {course.description}
            </p>
          </div>

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
  );
}
