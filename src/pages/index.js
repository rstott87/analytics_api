import Link from "next/link";
import { Inter } from "next/font/google";
import SignIn from "./signin";
import NavBar from "../components/UI/NavBar";
import Example from "../components/Example";
import Head from "next/head";
import analyticsImage_2 from "src/images/Analytics_Dashboard_2.png";
import analyticsImage from "src/images/Analytics_Dashboard.png";
import channel_example from "src/images/channel_example.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black px-4 py-12 pt-32 text-center">
      <Head>
        <title>
          StatCrown | Simplify YouTube Stats and Analytics for Powerful Insights
        </title>
        <link rel="apple-touch-icon" href="public/apple-icon.png" />
        <meta
          name="description"
          content="Unlock YouTube stats and analytics with intuitive charts and visualizations. Get valuable insights for informed decision-making. Discover a new way to track video performance. Boost your YouTube strategy!"
          key="desc"
        ></meta>
      </Head>
      <section className="max-w-md pb-6 text-6xl ">
        <div className=" text-5xl font-semibold  text-neutral-300 ">
          <h2>{`Real-Time Data.`}</h2>
          <h2 className="text-violet-400">Market Insights.</h2>
          <h2>Strategy Made Simple.</h2>
        </div>
        <h3 className="px-2 py-10 text-center text-lg font-medium leading-snug text-neutral-500">
          StatCrown is a platorm built to give creators the data-driven insights
          they need to build successful branding and content strategies in
          seconds.
        </h3>

        <div className="px-8">
          <Link href="/youtube-channel-search">
            <div className="rounded-full bg-neutral-200 px-4 py-2 text-xl font-bold text-slate-900 shadow-lg shadow-purple-900">
              {`Get Started`}
            </div>
          </Link>
        </div>
      </section>
      <div className="flex flex-col gap-10 px-5 pt-10">
        <Example
          image={analyticsImage}
          title={"YouTube Analytics"}
          subtitle={
            "Compare Crucial Metrics Across Multiple Channels in Seconds with our Powerful YouTube API Integration"
          }
        />
        <Example
          image={analyticsImage_2}
          title={"Insights & Benchmarks"}
          subtitle={
            "Gain a Competitive Edge by Analyzing and Benchmarking Key Metrics of Competitors with Ease"
          }
        />
      </div>
    </div>
  );
}
