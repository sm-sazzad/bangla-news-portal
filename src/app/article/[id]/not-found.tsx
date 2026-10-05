export default function NotFound() {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-red-700">সংবাদটি পাওয়া যায়নি</h2>

      <p className="mt-2 text-gray-500">
        আপনি যে সংবাদটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
      </p>
    </div>
  );
}
