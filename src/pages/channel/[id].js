import Head from "next/head";
import FullDataChannelCard from "@/components/FullDataChannelCard";


export const getServerSideProps = async (context) => {
  let key = process.env.YOUTUBE_API_KEY;
  let id = context.query.id;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${id}&key=${key}&part=snippet&part=statistics&part=contentDetails`
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
  const channelSnippet = data.items[0].snippet;
  const channelStatistics = data.items[0].statistics;
  const playListId = data.items[0].contentDetails.relatedPlaylists.uploads;

  return (
    <div className="w-full bg-slate-100 flex flex-col items-center">
      <div className="_container w-full max-w-md gap-4 p-4">
        <Head>
          <title>Channel Page</title>
          <meta
            name="description"
            content="Discover powerful YouTube channel stats search tool. Track and analyze video metrics, engagement, and subscribers. Boost your content strategy!"
            key="desc"
          ></meta>
        </Head>
        <FullDataChannelCard  
          playListId={playListId}
          title={channelSnippet.title}
          channelPhoto={channelSnippet.thumbnails.default.url}
          videoCount={channelStatistics.videoCount}
          viewCount={channelStatistics.viewCount}
          subscriberCount={channelStatistics.subscriberCount}
          description={channelSnippet.description}
        />
      </div>
    </div>
  );
}
