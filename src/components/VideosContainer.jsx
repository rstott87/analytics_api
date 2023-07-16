import axios from "axios";
import { use, useEffect, useState } from "react";
import Video from "./Video";
import playListSchema from "@/data/playListSchema";

function VideosContainer(props) {
  const [videoList, setVideoList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/youtube/v3/playlistItems", {
  //       params: {
  //         playlistId: props.playListId,
  //         part: "snippet",
  //         key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  //       }
  //     })
  //     .then(function (response) {
  //       // handle success
  //       console.log("1. Fetch to Playlist.");
  //       setPlayListData(response.data.items);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [props.playListId]);
    

  // useEffect(() => {
  //   let arrayOfVideoIds = playListData.map(
  //     (item) => item.snippet.resourceId.videoId
  //   );
  //   setVideoIdArray(arrayOfVideoIds);
  // }, [playListData]);


  // useEffect(() => {
  //     axios
  //       .get("https://www.googleapis.com/youtube/v3/videos", {
  //         params: {
  //           id: videoIdArray.join(","),
  //           part: "snippet, statistics",
  //           key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  //         }
  //       })
  //       .then(function (response) {
  //         // handle su
  //         setVideoData(response.data.items);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         // always executed
  //       });
  // }, [videoIdArray]);

  useEffect(() => {
    const listOfVideos = props.dataVideos.items.map((item) => (
      <Video
        likes={item.statistics.likeCount}
        views={item.statistics.viewCount}
        comments={item.statistics.commentCount}
        title={item.snippet.title}
        date={item.snippet.publishedAt}
        dataVideos={props.dataVideos}
        key={item.id}
      />
    ));
    setVideoList(listOfVideos);
  }, []);

  return (
    <section>
    <h2 className="text-3xl py-4 pt-10 font-bold">Latest Uploads</h2>
      <ul className="grid gap-4">{videoList}</ul>
    </section>
  );
}

export default VideosContainer;
