import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero1.jpg')",
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
  );
}
