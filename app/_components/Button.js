"use client";

export default function Button({ children }) {
  return (
    <button className="inline-flex px-3 py-1 font-semibold transition-all rounded-full bg-accent-500 text-primary-800 hover:bg-accent-700 whitespace-nowrap">
      {children}
    </button>
  );
}
