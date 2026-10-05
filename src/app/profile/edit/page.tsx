"use client";

import { changeEmail, changePassword, updateUser } from "@/lib/auth-client";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Edit = () => {
  const router = useRouter();
  const handleInfoCng = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await updateUser({
      name: String(userData.name),
      image: String(userData.image),
    });
    if (error) {
      toast.error(error.message || "Failed! Try Again", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    if (data) {
      toast.success("Name and Image Changed Successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      router.push("/profile");
      router.refresh();
    }
  };
  const handlePassCng = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await changePassword({
      newPassword: String(userData.newPassword),
      currentPassword: String(userData.password),
      revokeOtherSessions: true,
    });
    if (error) {
      toast.error(error.message || "Password change failed!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    if (data) {
      toast.success("Password Changed Successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      router.push("/profile");
      router.refresh();
    }
  };

  const handleEmailCng = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await changeEmail({
      newEmail: String(userData.email),
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "Email change failed!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    if (data) {
      toast.success("Email Changed Successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Page Title */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-red-700"
        >
          <ArrowLeft size={17} />
          হোমে ফিরে যান
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            প্রোফাইল এডিট করুন
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য পরিবর্তন করুন
          </p>
        </div>

        {/* Profile Information */}
        <form
          onSubmit={handleInfoCng}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900">প্রোফাইল তথ্য</h2>

          <p className="mt-1 text-sm text-gray-500">
            আপনার নাম এবং প্রোফাইল ছবি আপডেট করুন।
          </p>

          <div className="mt-5 space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="আপনার নাম"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                প্রোফাইল ছবি URL
              </label>

              <input
                id="image"
                type="url"
                name="image"
                placeholder="https://example.com/profile.jpg"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
            >
              তথ্য আপডেট করুন
            </button>
          </div>
        </form>

        {/* Change Password */}
        <form
          onSubmit={handlePassCng}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900">
            পাসওয়ার্ড পরিবর্তন
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            আপনার বর্তমান পাসওয়ার্ড ব্যবহার করে নতুন পাসওয়ার্ড সেট করুন।
          </p>

          <div className="mt-5 space-y-4">
            {/* Current Password */}
            <div>
              <label
                htmlFor="currentPassword"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                বর্তমান পাসওয়ার্ড
              </label>

              <input
                id="currentPassword"
                type="password"
                name="password"
                placeholder="বর্তমান পাসওয়ার্ড"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                নতুন পাসওয়ার্ড
              </label>

              <input
                id="newPassword"
                type="password"
                name="newPassword"
                placeholder="নতুন পাসওয়ার্ড"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
            >
              পাসওয়ার্ড পরিবর্তন করুন
            </button>
          </div>
        </form>

        {/* Change Email */}
        <form
          onSubmit={handleEmailCng}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900">
            ইমেইল পরিবর্তন
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের নতুন ইমেইল ঠিকানা দিন।
          </p>

          <div className="mt-5 space-y-4">
            {/* New Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                নতুন ইমেইল
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="newemail@example.com"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
            >
              ইমেইল পরিবর্তন করুন
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Edit;
