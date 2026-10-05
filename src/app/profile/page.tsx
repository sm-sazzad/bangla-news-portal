"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Mail, User, CalendarDays, ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  const session = useSession();
  const user = session.data?.user;

  if (session.isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-gray-500">প্রোফাইল লোড হচ্ছে...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-800">
          আপনাকে প্রথমে সাইন ইন করতে হবে
        </h2>

        <Link
          href="/sign-in"
          className="mt-4 rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
        >
          সাইন ইন করুন
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-[80vh] bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-red-700"
        >
          <ArrowLeft size={17} />
          হোমে ফিরে যান
        </Link>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Cover */}
          <div className="h-32 bg-red-700" />

          {/* Profile Info */}
          <div className="px-6 pb-8 sm:px-10">
            {/* Avatar */}
            <div className="-mt-16 mb-5">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={120}
                  height={120}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-red-100 text-4xl font-bold text-red-700 shadow-md">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>

              <p className="mt-1 text-sm text-gray-500">News24 পাঠক</p>
            </div>

            {/* User Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-100 p-2 text-red-700">
                    <User size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">নাম</p>
                    <p className="mt-1 font-medium text-gray-800">
                      {user.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-100 p-2 text-red-700">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">ইমেইল</p>
                    <p className="mt-1 truncate font-medium text-gray-800">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-red-100 p-2 text-red-700">
                  <CalendarDays size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">অ্যাকাউন্ট স্ট্যাটাস</p>

                  <p className="mt-1 flex items-center gap-2 font-medium text-gray-800">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    সক্রিয়
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/profile/edit"
                className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
              >
                প্রোফাইল এডিট করুন
              </Link>

              <Link
                href="/"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-red-700 hover:text-red-700"
              >
                খবর পড়ুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
