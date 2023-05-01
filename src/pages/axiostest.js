import axios from "axios";
import { useState, useEffect } from "react";
import channelSchema from "../data/channelSchema";
import Form from "../components/Form";
import Card from "../components/Card";
import Results from "../components/Results";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function FetchParent() {
  const [searchResponse, setSearchResponse] = useState(channelSchema.items);
  
    const listOfPodcasts = searchResponse.map((item) => (
      <Card
        key={item.id}
        className="text-2xl"
        title={item.snippet.title}
        videoCount={item.statistics.videoCount}
        viewCount={item.statistics.viewCount}
        thumbnail={item.snippet.thumbnails.medium.url}
      />
    ));
    console.log(listOfPodcasts);
  

  return (
    <div className="bg-slate-200 h-screen flex flex-col  items-center">
      <Form
        setSearchResponse={setSearchResponse}
      />
      <Results listOfPodcasts={listOfPodcasts}/>
    </div>
  );
}

