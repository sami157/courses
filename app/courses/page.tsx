import Link from "next/link";

interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  teacher: string;
  rating: number;
  price: number;
}

async function getCourses(): Promise<Course[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
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
          {courses.map((course) => (
            <Link
              key={course._id}
              href={`/courses/${course._id}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-lg dark:bg-gray-900 dark:ring-gray-800"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {course.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {course.teacher}
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
          ))}
        </div>
      )}
    </div>
  );
}
