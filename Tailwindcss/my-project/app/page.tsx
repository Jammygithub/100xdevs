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
      <p className="text-xs p-5 bg-gray-900 text-gray-500 m-3">
        {" "}
        just some text
      </p>
      <p className="tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, et
        quia ducimus rerum exercitationem odio minus. Tempore, quisquam
        exercitationem soluta obcaecati esse nulla id. Hic eos provident
        reiciendis repudiandae voluptatum!
      </p>
      <p className="tracking-tight font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, et
        quia ducimus rerum exercitationem odio minus. Tempore, quisquam
        exercitationem soluta obcaecati esse nulla id. Hic eos provident
        reiciendis repudiandae voluptatum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, et
        quia ducimus rerum exercitationem odio minus. Tempore, quisquam
        exercitationem soluta obcaecati esse nulla id. Hic eos provident
        reiciendis repudiandae voluptatum!
      </p>
      <p> just some other text</p>
      <div className="bg-red-100 m-16 w-32 h-32 border-t-8 border-blue-800 rounded-full"></div>
      <div className="bg-red-100 m-16 w-32 h-32 border-t-8 border-blue-800 rounded-br-full"></div>

      <div className="flex">
        <div className="w-32 h-32 bg-gray-300">1</div>
        <div className="w-32 h-32 bg-gray-300">2</div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>

      <input
        className="bg-white focus:bg-blue-200 border border-gray-300 rounded-lg py-2 px-4 block w-full"
        type="email"
        placeholder="sam@example.com"
      ></input>
      <div className="bg-yellow-300 w-32 h-6 hidden">world</div>
      <div className="mb-4"></div>
      <div className="font-sans h-screen bg-slate-500">full</div>
    </>
  );
}
