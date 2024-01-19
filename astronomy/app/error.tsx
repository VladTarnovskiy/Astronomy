"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();
  return (
    <div className="m-auto flex flex-col text-teal-500 justify-center items-center w-fit">
      <div className="mt-2">Something went wrong.</div>
      <button
        onClick={() => router.back()}
        className="h-10 rounded-md mt-6 p-2 text-md shadow-teal-500 shadow-sm hover:shadow-yellow-400 bg-gray-800"
      >
        Go back
      </button>
    </div>
  );
}
