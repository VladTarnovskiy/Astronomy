'use client';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="m-auto flex flex-col text-white justify-center items-center w-fit">
      <div className="mt-12 mb-12">Something went wrong.</div>
      <button className="w-32 h-12 bg-blue-800 rounded-sm text-lg font-semibold hover:scale-[1.02] transition-all">
        Go back
      </button>
    </div>
  );
}
