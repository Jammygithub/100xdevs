import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="lg:text-3xl border-red-600 text-green-600 bg-[#bada55]">
        Hello World
      </div>
      <div className="w-16 h-16 bg-black text-white underline decoration-red-500">
        Tailwindcss
      </div>
      <div className="mb-4"></div>
      <div className="h-screen bg-slate-500">full</div>
    </>
  );
}
