import axios from "axios";
import { use, useEffect, useState } from "react";
import Video from "./Video";
import playListSchema from "@/data/playListSchema";

function LatestUploadsContainer(props) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const listOfVideos = props.dataVideos.items.map((item) => (
      <Video
        likes={item.statistics.likeCount || 0}
        views={item.statistics.viewCount || 0}
        comments={item.statistics.commentCount || 0}
        title={item.snippet.title}
        date={item.snippet.publishedAt}
        id={item.id}
        key={item.id}
      />
    ));
    setVideoList(listOfVideos);
  }, []);

  return (
    <section>
    <h2 className="text-2xl pt-5 pb-6 font-bold">Latest Uploads</h2>
      <ul className="grid gap-3">{videoList}</ul>
    </section>
  );
}

export default LatestUploadsContainer;
