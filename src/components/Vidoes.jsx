import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";
import videosSchema from "@/data/videosSchema";

function Videos() {
  const [videoList, setVideoList] = useState(videosSchema.items);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          playlistId: "UU5AQEUAwCh1sGDvkQtkDWUQ",
          part: "snippet",
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }
      })
      .then(function (response) {
        // handle success
        setVideoList(response.data.items);
        console.log(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const listOfVideos = videoList.map((item) => (
    <Video
      key={item.id}
      title={item.snippet.title}
      thumbnail={item.snippet.thumbnails.medium}
    />
  ));

  return <div>{listOfVideos}</div>;
}

export default Videos;
