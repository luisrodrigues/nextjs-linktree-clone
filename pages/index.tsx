import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
    </div>
  );
}
