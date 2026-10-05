"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  const session = useSession();
  return (
    <div className="absolute right-0 flex items-center gap-3">
      {session?.data?.user ? (
        <>
          {session?.data?.user?.image ? (
            <Image
              className="h-12 w-12 rounded-full p-px ring ring-red-600"
              src={session?.data?.user?.image}
              alt={session?.data?.user?.name}
              height={50}
              width={50}
            />
          ) : (
            <h1>{session?.data?.user?.name}</h1>
          )}
          <button
            onClick={() => signOut()}
            className="rounded-md border bg-red-700 text-white border-gray-300 px-4 py-2 text-sm font-medium  transition cursor-pointer "
          >
            সাইন আউট
          </button>
        </>
      ) : (
        <>
          <Link href={"/sign-in"}>
            <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-700 hover:text-red-700">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SignUp;
