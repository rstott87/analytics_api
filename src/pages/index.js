import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-6xl font-bold text-center">
        {" "}
        Welcome to PodTube by FCR Analytics!
      </h1>

      <Link href="/channel-search">
        {" "}
        <h1 className="shadow-lg text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </h1>
      </Link>
    </main>
  );
}
