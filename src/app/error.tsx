"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center">
      <h2 className="text-xl font-bold text-red-700">
        দুঃখিত! নিউজ লোড করা যাচ্ছে না।
      </h2>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-red-700 px-4 py-2 text-white"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}
