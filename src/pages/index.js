import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";
import NavBar from "../components/UI/NavBar";
import Example from "../components/Example";
import Head from "next/head";
import analyticsImage_2 from "src/images/Analytics_Dashboard_2.png";
import analyticsImage from "src/images/Analytics_Dashboard.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black px-8 py-12 pt-32 text-center">
      <Head>
        <title>
          StatCrown | Simplify YouTube Stats and Analytics for Powerful Insights
        </title>
        <meta
          name="description"
          content="Unlock YouTube stats and analytics with intuitive charts and visualizations. Get valuable insights for informed decision-making. Discover a new way to track video performance. Boost your YouTube strategy!"
          key="desc"
        ></meta>
      </Head>
      <section className="max-w-md pb-6 text-6xl ">
        <div className="px-4 text-5xl font-bold  text-neutral-300 ">
          <h2>Fast.</h2>
          <h2>Clear.</h2>
          <h2>Real-Time.</h2>
        </div>
        <h3 className="px-2 py-10 text-center text-lg font-normal leading-snug text-neutral-500">
          An intuitive and user-friendly platform that leverages the power of AI
          to bring you detailed data and insightful analytics for any YouTube
          channel in seconds.
        </h3>

        <Link href="/youtube-channel-search">
          <p className="rounded-full bg-neutral-200 px-4 py-2 text-xl font-normal text-slate-900 shadow-md shadow-purple-500">
            {`Get Started`}
          </p>
        </Link>
      </section>
      <Example
        image={analyticsImage}
        title={
          "Streamline Your YouTube Analytics Experience: Compare Crucial Metrics Across Multiple Channels in Seconds with our Powerful YouTube API Integration"
        }
      />
      <Example image={analyticsImage_2} title={"Uncover Your Competition's Secrets: Gain a Competitive Edge by Analyzing and Benchmarking Key Metrics of Other YouTube Channels with Easen"} />
    </div>
  );
}
