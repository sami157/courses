export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="h-10 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-4 h-6 w-96 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800"
          >
            <div className="h-48 animate-pulse bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-4 flex items-center justify-between">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
