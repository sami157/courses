import Link from "next/link";

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

async function getTopTeachers(): Promise<Teacher[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  try {
    const res = await fetch(`${baseUrl}/api/teachers/top`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching top teachers:", error);
    return [];
  }
}

async function getTopCourses(): Promise<Course[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  try {
    const res = await fetch(`${baseUrl}/api/courses/top`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching top courses:", error);
    return [];
  }
}

export default async function Home() {
  const [topTeachers, topCourses] = await Promise.all([
    getTopTeachers(),
    getTopCourses(),
  ]);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 1. Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 sm:p-12 shadow-2xl ring-1 ring-purple-200/50 dark:ring-gray-700/50 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Learn From The Best Teachers Online
              </h1>
              <p className="mt-6 text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
                Discover thousands of courses taught by expert instructors. Start
                your learning journey today and unlock your potential with
                world-class education at your fingertips.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl ring-1 ring-indigo-500/50 hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="bg-purple-50/20 dark:bg-gray-800/30 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              Get started in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:text-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg sm:text-xl">Choose Course</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  <p className="flex-auto">
                    Browse through our extensive catalog of courses and find the
                    perfect one that matches your interests and learning goals.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:text-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <span className="text-lg sm:text-xl">Learn</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  <p className="flex-auto">
                    Access high-quality video lessons, interactive content, and
                    expert guidance from industry professionals.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-105">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white sm:text-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-lg sm:text-xl">Grow</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  <p className="flex-auto">
                    Apply your new skills, complete projects, and advance your
                    career with confidence and expertise.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Top Teachers */}
      <section className="bg-purple-50/30 dark:bg-gray-800/30 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Top Teachers
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              Learn from industry experts and experienced educators
            </p>
          </div>
          {topTeachers.length === 0 ? (
            <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-16">
              <p className="text-gray-600 dark:text-gray-400">
                No teachers available yet.
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {topTeachers.map((teacher) => (
                <div
                  key={teacher._id}
                  className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    {teacher.image ? (
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-indigo-500/20"
                      />
                    ) : (
                      <div className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-2 ring-indigo-500/20"></div>
                    )}
                    <div className="mt-4">
                      <h3 className="text-base font-semibold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-lg">
                        {teacher.name}
                      </h3>
                      {teacher.expertise && teacher.expertise.length > 0 && (
                        <p className="mt-1 text-sm leading-7 text-indigo-600 dark:text-indigo-400 sm:text-base">
                          {teacher.expertise[0]}
                        </p>
                      )}
                      <div className="mt-2 flex items-center justify-center gap-1">
                        <span className="text-sm font-medium text-yellow-500">
                          ⭐
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {teacher.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    {teacher.bio && (
                      <p className="mt-4 text-xs leading-6 text-gray-600 dark:text-gray-400 line-clamp-3 sm:text-sm">
                        {teacher.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Top Courses */}
      <section className="bg-purple-50/20 dark:bg-gray-800/30 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Top Courses
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              Featured courses that students love
            </p>
          </div>
          {topCourses.length === 0 ? (
            <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-16">
              <p className="text-gray-600 dark:text-gray-400">
                No courses available yet.
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {topCourses.map((course) => {
                const teacherName =
                  typeof course.teacher === "object" && course.teacher
                    ? course.teacher.name
                    : "Unknown Teacher";
                return (
                  <Link
                    key={course._id}
                    href={`/courses/${course._id}`}
                    className="group overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105"
                  >
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                      {course.image ? (
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        />
                      ) : null}
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 sm:text-xl">
                        {course.title}
                      </h3>
                      {course.description && (
                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-gray-600 dark:text-gray-400 sm:text-sm">
                          {course.description}
                        </p>
                      )}
                      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 sm:text-sm">
                          {teacherName}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-yellow-500 sm:text-sm">
                            ⭐
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                            {course.rating.toFixed(1)}
                          </span>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                            ${course.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. About Platform */}
      <section className="bg-purple-50/30 dark:bg-gray-800/30 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              About Coachify
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              Empowering learners worldwide with world-class education
            </p>
          </div>

          {/* Main Content */}
          <div className="mx-auto max-w-4xl mb-16">
            <div className="rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 sm:p-12 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <p className="text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg lg:text-xl text-center">
                Coachify is a comprehensive online learning platform designed to
                connect students with expert instructors from around the world. We
                believe that quality education should be accessible to everyone,
                regardless of location or background.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="mx-auto max-w-5xl mb-16">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 text-center shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  10K+
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Active Students
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 text-center shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  500+
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Expert Instructors
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 text-center shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  1K+
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Courses Available
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 text-center shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  95%
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mx-auto max-w-6xl">
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white sm:text-2xl mb-12">
              Why Choose Coachify?
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Instructors
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Learn from industry professionals and experienced educators who
                  bring real-world expertise to every lesson.
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Learning
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Engage with hands-on projects, interactive content, and practical
                  exercises that reinforce your learning.
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Community Support
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Join a vibrant community of learners, share experiences, and get
                  support from peers and instructors.
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Learn at Your Pace
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Access courses anytime, anywhere. Learn at your own pace with
                  lifetime access to course materials.
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Certified Courses
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Earn certificates upon completion that you can showcase on your
                  resume and LinkedIn profile.
                </p>
              </div>

              <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Career Advancement
                </h4>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Gain skills that matter. Our courses are designed to help you
                  advance your career and achieve your professional goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Testimonials */}
      <section className="bg-purple-50/20 dark:bg-gray-800/30 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Student Testimonials
            </h2>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              See what our students are saying
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                "The courses on Coachify are incredibly well-structured and
                practical. I landed my dream job as a web developer after
                completing the bootcamp. Highly recommended!"
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold leading-6 text-gray-900 dark:text-white sm:text-sm">
                  Alex Thompson
                </p>
                <p className="text-xs leading-6 text-gray-600 dark:text-gray-400 sm:text-sm">
                  Software Developer
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                "I've taken multiple courses on data science here, and each one
                exceeded my expectations. The instructors are knowledgeable and
                the community is supportive."
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold leading-6 text-gray-900 dark:text-white sm:text-sm">
                  Maria Garcia
                </p>
                <p className="text-xs leading-6 text-gray-600 dark:text-gray-400 sm:text-sm">
                  Data Analyst
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                "The design courses helped me transition into UX design. The
                practical projects and feedback from instructors were invaluable
                for my career change."
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold leading-6 text-gray-900 dark:text-white sm:text-sm">
                  James Wilson
                </p>
                <p className="text-xs leading-6 text-gray-600 dark:text-gray-400 sm:text-sm">
                  UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-indigo-50/20 to-purple-50/40 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 sm:p-12 shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
                Ready to Start Learning?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg">
                Join thousands of students who are already transforming their
                careers. Sign up today and get access to all our courses.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
                <Link
                  href="/login"
                  className="w-full sm:w-auto rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg ring-1 ring-indigo-500/50 hover:bg-indigo-700 transition-all hover:scale-105"
                >
                  Sign Up Now
                </Link>
                <Link
                  href="/courses"
                  className="w-full sm:w-auto text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
                >
                  Browse Courses <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
