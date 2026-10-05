import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-[80vh] bg-linear-to-br from-slate-950 via-slate-900 to-red-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">সাইন আপ</h1>
          {/* <p className="mt-2 text-sm text-gray-500">
            Sign up to get started with your account
          </p> */}
        </div>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              নাম
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              ই-মেল
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              প্রোফাইল ইমেজ ইউআরএল
            </label>
            <input
              type="url"
              name="image"
              id="image"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Button */}
          <button
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            type="submit"
          >
            সাইন আপ
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          আপনার কি অ্যাকাউন্ট আছে?{" "}
          <a
            href="/sign-in"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            সাইন ইন
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
