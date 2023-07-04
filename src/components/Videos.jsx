import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";
import playListSchema from "@/data/playListSchema";

function Videos() {
  const [playListData, setPlayListData] = useState(playListSchema.items);
  const [videoIdList, setVideoIdList] = useState([]);
  const [videoData, setVideoData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://www.googleapis.com/youtube/v3/playlistItems", {
  //         params: {
  //           playlistId: "UU5AQEUAwCh1sGDvkQtkDWUQ",
  //           part: "snippet",
  //           key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  //         }
  //       })
  //       .then(function (response) {
  //         // handle success
  //         setPlayListData(response.data.items);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         // always executed
  //       });
  //   }, []);

  const arrayOfVideoIds = playListData.map(
    (item) => item.snippet.resourceId.videoId
  );

  useEffect(() => {
    setVideoIdList(arrayOfVideoIds);
  }, []);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          id: videoIdList.join(","),
          part: "snippet, statistics",
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }
      })
      .then(function (response) {
        // handle su
        setVideoData(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [videoIdList]);

  const listOfVideos = videoData.map((item) => (
    <Video
      key={item.id}
      date={item.snippet.publishedAt}
      likes={item.statistics.likeCount}
      views={item.statistics.viewCount}
      comments={item.statistics.commentCount}
      title={item.snippet.title}
      thumbnail={item.snippet.thumbnails.medium.url}
    />
  ));

  return (
    <section>
      <div className="text-center">Latest Uploads</div>
      <ul className="grid gap-4">{listOfVideos}</ul>
    </section>
  );
}

export default Videos;
