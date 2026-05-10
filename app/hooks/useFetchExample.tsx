"use client";

import { useFetch } from "./useFetch";

interface Message {
  message: string;
}

export function FetchExample() {
  const { data, loading, error, refetch } = useFetch<Message>("/api/hello", {
    method: "POST",
    body: { name: "John" },
  });

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Data Fetching Example</h2>

      {loading && <p className="text-gray-500">Loading...</p>}

      {error && (
        <p className="text-red-500">Error: {error.message}</p>
      )}

      {data && (
        <p className="text-green-600 font-medium">{data.message}</p>
      )}

      <button
        onClick={() => refetch()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refetch Data
      </button>
    </div>
  );
}
