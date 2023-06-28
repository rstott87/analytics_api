import Head from "next/head";
import { useRouter } from "next/router";

export default function Channel() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div className="_container items-center gap-4 bg-slate-100 p-4">
      <Head>
        <title>
          Channel Page
        </title>
        <meta
          name="description"
          content="Discover powerful YouTube channel stats search tool. Track and analyze video metrics, engagement, and subscribers. Boost your content strategy!"
          key="desc"
        ></meta>
      </Head>
      <div>channel lol</div>
    </div>
  );
}
