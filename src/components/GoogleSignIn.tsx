"use client";
import { signIn } from "@/lib/auth-client";

const GoogleSignIn = () => {
  const handleGoogle = async () => {
    const { data, error } = await signIn.social({
      provider: "google",
    });
  };
  const handleGithub = async () => {
    const { data, error } = await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex gap-3 mt-2">
      <button
        onClick={handleGoogle}
        type="button"
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        Google
      </button>

      <button
        onClick={handleGithub}
        type="button"
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        GitHub
      </button>
    </div>
  );
};

export default GoogleSignIn;
