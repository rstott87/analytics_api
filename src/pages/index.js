import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";
import NavBar from "../components/UI/NavBar";
import Example from "../components/Example";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black  px-8 py-12 text-center">
      <div className="max-w-md pb-6 text-6xl ">
        {" "}
        <div className="px-4 text-5xl font-bold  text-neutral-300 ">
          <p>Fast.</p>
          <p>Clear.</p>
          <p>Real-Time.</p>
        </div>
        <div>
          <p className="px-2 py-10 text-center text-lg font-normal leading-snug text-neutral-500">
            An intuitive and user-friendly platform that leverages the power of
            AI to bring you detailed data and insightful analytics for any
            YouTube channel in seconds.
          </p>
        </div>
        <Link href="/channel-search">
          <p className="rounded-full bg-neutral-200 px-4 py-2 text-xl font-normal text-slate-900 shadow-md shadow-purple-500">
            {`Get Started`}
          </p>{" "}
        </Link>
      </div>
      <Example title={"Placeholder One"} />
      <Example title={"Placeholder Two"} />
    </div>
  );
}
