import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";
import NavBar from "../components/UI/NavBar";
import Example from "../components/Example";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-950 text-center justify-evenly px-8 py-12">
      <div className="text-6xl text-neutral-100 font-extrabold flex flex-col gap-10">
        {" "}
        <div className="px-4">
          <p>Fast.</p>
          <p>Clear.</p>
          <p>Real-Time.</p>
        </div>
        <div>
          <p className="text-xl font-normal text-slate-300 text-center leading-8 px-5">

            An intuitive and user-friendly platform that leverages the power of
            AI to bring you detailed data and insightful analytics for any
            YouTube channel in seconds.
          </p>
        </div>
        <Link href="/channel-search">
          <p className="shadow-lg text-xl bg-neutral-200  text-slate-900 font-medium py-2 px-4 rounded-lg">
            Get Started
          </p>{" "}
        </Link>
      </div>
      <Example title={"Placeholder One"} />
      <Example title={"Placeholder Two"} />
    </main>
  );
}
