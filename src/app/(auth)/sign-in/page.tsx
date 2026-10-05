"use client";
import { signIn } from "@/lib/auth-client";
import React from "react";
import toast from "react-hot-toast";

const SignIn = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      email: String(userData.email),
      password: String(userData.password),
      callbackURL: "/",
    });
    if (error) {
      toast.error("Sign in Failed", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
    if (data) {
      toast.success("Sign in Successfull!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div className="min-h-[80vh] bg-linear-to-br from-slate-950 via-slate-900 to-red-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} action="" className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              ই-মেইল
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>
          {/* Name */}
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
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          আপনার কি একাউন্ট আছে?{" "}
          <a
            href="/sign-up"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            সাইন আপ
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
