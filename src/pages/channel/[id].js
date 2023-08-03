import Head from "next/head";
import FullDataChannelCard from "@/components/FullDataChannelCard";
import { data } from "autoprefixer";

// Fetch channel data, then use the obtained playlist ID to fetch playlist data. Afterward, fetch video and comments data based on the extracted video IDs. Handle redirects if any fetch call fails or if channel data is missing.

const fetchYouTubeData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getServerSideProps = async (context) => {
  try {
    const key = process.env.YOUTUBE_API_KEY;
    const id = context.query.id;
    const baseApiUrl = "https://www.googleapis.com/youtube/v3";

    const channelsUrl = `${baseApiUrl}/channels?id=${id}&key=${key}&part=snippet&part=statistics&part=contentDetails`;
    const dataChannels = await fetchYouTubeData(channelsUrl);

    if (!dataChannels.items) {
      return {
        redirect: {
          destination: "/youtube-channel-search",
          permanent: false
        }
      };
    }

    const playlistId =
      dataChannels.items[0].contentDetails.relatedPlaylists.uploads;
    const playlistUrl = `${baseApiUrl}/playlistItems?playlistId=${playlistId}&key=${key}&part=snippet&maxResults=10`;
    const dataPlayList = await fetchYouTubeData(playlistUrl);

    const videoIdArray = dataPlayList.items.map(
      (item) => item.snippet.resourceId.videoId
    );
    const videosUrl = `${baseApiUrl}/videos?id=${videoIdArray.join(
      ","
    )}&key=${key}&part=snippet&part=statistics`;
    const dataVideos = await fetchYouTubeData(videosUrl);

    const commentsUrl = `${baseApiUrl}/commentThreads?part=snippet&videoId=${videoIdArray[0]}&key=${key}`;
    const dataComments = await fetchYouTubeData(commentsUrl);

    return {
      props: { dataChannels, dataPlayList, dataVideos, dataComments }
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

export default function Channel({
  dataChannels,
  dataPlayList,
  dataVideos,
  dataComments
}) {
  console.log(dataChannels);
  const channelSnippet = dataChannels.items[0].snippet;
  const channelStatistics = dataChannels.items[0].statistics;
  const playListId =
    dataChannels.items[0].contentDetails.relatedPlaylists.uploads;
  // array of objects of comments that includes only comment text, like count, and replies, and date
  const commentsArray = dataComments.items.map((item) => {
    return {
      commentText: item.snippet.topLevelComment.snippet.textDisplay,
      likeCount: item.snippet.topLevelComment.snippet.likeCount,
      replies: item.snippet.totalReplyCount,
      date: item.snippet.topLevelComment.snippet.publishedAt
    };
  });
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
          commentsOnVideo={commentsArray}
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
