import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Learn From The Best Teachers Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
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
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="flex items-center gap-x-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    Sarah Johnson
                  </h3>
                  <p className="text-base leading-7 text-indigo-600 dark:text-indigo-400">
                    Web Development
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Expert full-stack developer with 10+ years of experience
                teaching modern web technologies.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="flex items-center gap-x-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600"></div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    Michael Chen
                  </h3>
                  <p className="text-base leading-7 text-indigo-600 dark:text-indigo-400">
                    Data Science
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Data scientist and machine learning expert, former Google
                researcher with published papers.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="flex items-center gap-x-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600"></div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    Emily Rodriguez
                  </h3>
                  <p className="text-base leading-7 text-indigo-600 dark:text-indigo-400">
                    UI/UX Design
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Award-winning designer with expertise in user experience and
                interface design for top tech companies.
              </p>
            </div>
          </div>
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
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                  Complete Web Development Bootcamp
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Master HTML, CSS, JavaScript, React, and Node.js. Build
                  real-world projects and land your dream job.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Sarah Johnson
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    4.9 ⭐
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                  Machine Learning Fundamentals
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Learn the core concepts of machine learning, neural networks,
                  and deep learning from scratch.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Michael Chen
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    4.8 ⭐
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                  Advanced UI/UX Design Masterclass
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Create stunning user interfaces and experiences. Learn design
                  principles, tools, and best practices.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Emily Rodriguez
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    4.9 ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>
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
