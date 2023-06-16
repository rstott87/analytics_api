import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-evenly p-6">
      <div className="text-6xl text-neutral-100 font-extrabold flex flex-col gap-4">
        {" "}
        <div className="p-4">
          <p>Fast.</p>
          <p>Clear.</p>
          <p>Real-Time.</p>
        </div>
        <div>
          <p className="text-2xl font-light text-slate-400 text-center leading-8">
            {" "}
            An intuitive and user-friendly platform that allows
            you to access detailed data and insightful analytics for any YouTube
            channel.
          </p>
        </div>
      </div>

      <Link href="/channel-search">
        {" "}
        <h1 className="shadow-lg text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Get Started
        </h1>
      </Link>
    </main>
  );
}
