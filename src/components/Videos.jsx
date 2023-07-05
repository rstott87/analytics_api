import axios from "axios";
import { use, useEffect, useState } from "react";
import Video from "./Video";
import playListSchema from "@/data/playListSchema";

function Videos(props) {
  const [playListData, setPlayListData] = useState(playListSchema.items);
  const [videoIdArray, setVideoIdArray] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
      axios
        .get("https://www.googleapis.com/youtube/v3/playlistItems", {
          params: {
            playlistId: props.playListId,
            part: "snippet",
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
          }
        })
        .then(function (response) {
          // handle success
          console.log("Fetch to Playlist.")
          setPlayListData(response.data.items);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
    

  useEffect(() => {
    let arrayOfVideoIds = playListData.map(
      (item) => item.snippet.resourceId.videoId
    );
    setVideoIdArray(arrayOfVideoIds);
  }, [playListData]);


  useEffect(() => {
    console.log("2"),
      axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            id: videoIdArray.join(","),
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
  }, [videoIdArray]);

  console.log("outside");

  useEffect(() => {
    const listOfVideos = videoData.map((item) => (
      <Video
        key={item.id.toString()}
        date={item.snippet.publishedAt}
        likes={item.statistics.likeCount}
        views={item.statistics.viewCount}
        comments={item.statistics.commentCount}
        title={item.snippet.title}
        thumbnail={item.snippet.thumbnails.medium.url}
      />
    ));
    setVideoList(listOfVideos);
  }, [videoData]);

  return (
    <section>
      <div className="text-center">Latest Uploads</div>
      <ul className="grid gap-4">{videoList}</ul>
    </section>
  );
}

export default Videos;
