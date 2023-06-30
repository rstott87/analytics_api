import Head from "next/head";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  let key = process.env.YOUTUBE_API_KEY;
  let id = context.query.id;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${id}&key=${key}&part=snippet&part=statistics`
  );
  const data = await res.json();

  if (!data.items) {
    return {
      redirect: {
        destination: "/youtube-channel-search",
        permanent: false
      }
    };
  }
  return {
    props: { data }
  };
};

export default function Channel({ data }) {
  console.log(data);
  const title = data.items[0].snippet.title;
  const description = data.items[0].snippet.description;
  return (
    <div className="_container items-center gap-4 bg-slate-100 p-4">
      <Head>
        <title>Channel Page</title>
        <meta
          name="description"
          content="Discover powerful YouTube channel stats search tool. Track and analyze video metrics, engagement, and subscribers. Boost your content strategy!"
          key="desc"
        ></meta>
      </Head>
      <div> {title}</div>
      <div> {description}</div>
    </div>
  );
}
