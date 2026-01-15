export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image skeleton */}
        <div className="h-96 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 lg:h-full"></div>

        {/* Content skeleton */}
        <div className="flex flex-col space-y-6">
          <div>
            <div className="h-12 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-4 h-6 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div>
            <div className="h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-4 space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"
                ></div>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-8">
            <div className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
