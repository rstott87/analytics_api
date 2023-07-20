import Head from "next/head";
import FullDataChannelCard from "@/components/FullDataChannelCard";
import { data } from "autoprefixer";

export const getServerSideProps = async (context) => {
  try {
    let key = process.env.YOUTUBE_API_KEY;
    let id = context.query.id;

    const resChannels = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${id}&key=${key}&part=snippet&part=statistics&part=contentDetails`
    );
    const dataChannels = await resChannels.json();
    let playlistId = await dataChannels.items[0].contentDetails.relatedPlaylists
      .uploads;
    const resPlaylistItems = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${key}&part=snippet&maxResults=10`
    );
    const dataPlayList = await resPlaylistItems.json();
    let videoIdArray = await dataPlayList.items.map(
      (item) => item.snippet.resourceId.videoId
    );
    const resVideos = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoIdArray}&key=${key}&part=snippet&part=statistics`
    );
    const dataVideos = await resVideos.json();

    if (!dataChannels.items) {
      return {
        redirect: {
          destination: "/youtube-channel-search",
          permanent: false
        }
      };
    }
    return {
      props: { dataPlayList, dataChannels, dataVideos }
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/youtube-channel-search",
        permanent: false
      }
    };
  }
};

export default function Channel({ dataChannels, dataPlayList, dataVideos }) {
  const channelSnippet = dataChannels.items[0].snippet;
  const channelStatistics = dataChannels.items[0].statistics;
  const playListId =
    dataChannels.items[0].contentDetails.relatedPlaylists.uploads;
  console.log(dataVideos);

  return (
    <div className="flex w-full flex-col items-center">
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
          dataChannels={dataChannels}
          dataPlayList={dataPlayList}
          dataVideos={dataVideos}
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
