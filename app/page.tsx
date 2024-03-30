import { AiFillAlert, AiFillAmazonCircle } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-black">
      <h1 className="text-3xl font-bold text-heading-color flex">
        Welcome to Reality <AiFillAmazonCircle />
      </h1>
      <p className="text-xl text-subtitle-color">Someone's imagination is today's reality</p>
    </main>
  );
}
