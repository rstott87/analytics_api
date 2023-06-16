import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";
import NavBar from "../components/NavBar";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div className="bg-black flex min-h-screen flex-col items-center justify-evenly px-6">
      <div className="text-6xl text-neutral-100 font-extrabold flex flex-col gap-4">
        {" "}
        <div className="p-4">
          <p>Fast.</p>
          <p>Clear.</p>
          <p>Real-Time.</p>
        </div>
        <div>
          <p className="text-xl font-light text-slate-400 text-center leading-8 px-2">
            {" "}
            An intuitive and user-friendly platform that allows
            you to access detailed data and insightful analytics for any YouTube
            channel by leveraging the power of AI.
          </p>
        </div>
      </div>

      <Link href="/channel-search">
        {" "}
        <h1 className="shadow-lg text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Get Started
        </h1>
      </Link>
    </div>
  );
}
