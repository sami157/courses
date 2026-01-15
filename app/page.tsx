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
    <div className="bg-white dark:bg-gray-900">
      {/* 1. Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Learn From The Best Teachers Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Discover thousands of courses taught by expert instructors. Start
              your learning journey today and unlock your potential with
              world-class education at your fingertips.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/courses"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Get started in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    1
                  </div>
                  Choose Course
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    Browse through our extensive catalog of courses and find the
                    perfect one that matches your interests and learning goals.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    2
                  </div>
                  Learn
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">
                    Access high-quality video lessons, interactive content, and
                    expert guidance from industry professionals.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    3
                  </div>
                  Grow
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
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
      <section className="bg-gray-50 py-24 dark:bg-gray-800 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Top Teachers
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Learn from industry experts and experienced educators
            </p>
          </div>
          {topTeachers.length === 0 ? (
            <div className="mx-auto mt-16 max-w-2xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                No teachers available yet.
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {topTeachers.map((teacher) => (
                <div
                  key={teacher._id}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800"
                >
                  <div className="flex flex-col items-center text-center">
                    {teacher.image ? (
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                    )}
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                        {teacher.name}
                      </h3>
                      {teacher.expertise && teacher.expertise.length > 0 && (
                        <p className="mt-1 text-base leading-7 text-indigo-600 dark:text-indigo-400">
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
                      <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3">
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Top Courses
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Featured courses that students love
            </p>
          </div>
          {topCourses.length === 0 ? (
            <div className="mx-auto mt-16 max-w-2xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                No courses available yet.
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {topCourses.map((course) => {
                const teacherName =
                  typeof course.teacher === "object" && course.teacher
                    ? course.teacher.name
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
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {teacherName}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-yellow-500">
                            ⭐
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {course.rating.toFixed(1)}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
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
      <section className="bg-gray-50 py-24 dark:bg-gray-800 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Our Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Coachify is a comprehensive online learning platform designed to
              connect students with expert instructors from around the world. We
              believe that quality education should be accessible to everyone,
              regardless of location or background. Our platform offers
              thousands of courses across various disciplines, from technology
              and business to creative arts and personal development.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              With interactive learning materials, hands-on projects, and
              community support, we empower learners to achieve their goals and
              advance their careers. Join thousands of students who are already
              transforming their lives through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Student Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Student Testimonials
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              See what our students are saying
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                "The courses on Coachify are incredibly well-structured and
                practical. I landed my dream job as a web developer after
                completing the bootcamp. Highly recommended!"
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Alex Thompson
                </p>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Software Developer
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                "I've taken multiple courses on data science here, and each one
                exceeded my expectations. The instructors are knowledgeable and
                the community is supportive."
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Maria Garcia
                </p>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Data Analyst
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                "The design courses helped me transition into UX design. The
                practical projects and feedback from instructors were invaluable
                for my career change."
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  James Wilson
                </p>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="bg-indigo-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Join thousands of students who are already transforming their
              careers. Sign up today and get access to all our courses.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/login"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign Up Now
              </Link>
              <Link
                href="/courses"
                className="text-base font-semibold leading-7 text-white hover:text-indigo-100"
              >
                Browse Courses <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
