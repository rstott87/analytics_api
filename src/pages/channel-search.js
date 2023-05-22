import axios from "axios";
import { useState, useEffect } from "react";
import channelSchema from "../data/channelSchema";
import SearchForm from "../components/SearchForm";
import PodcastCard from "../components/PodcastCard";
import CardDisplay from "../components/CardDisplay";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function ChannelSearch() {
  const [searchResponse, setSearchResponse] = useState(channelSchema.items);
  
    const listOfPodcastCards = searchResponse.map((item) => (
      <PodcastCard
        key={item.id}
        className="text-2xl"
        title={item.snippet.title}
        videoCount={item.statistics.videoCount}
        viewCount={item.statistics.viewCount}
        thumbnail={item.snippet.thumbnails.medium.url}
        subscriberCount={item.statistics.subscriberCount}
        description={item.snippet.description}
      />
    ));

  return (
    <div className="bg-slate-200 flex flex-col  items-center">
      <SearchForm
        setSearchResponse={setSearchResponse}
      />
      <CardDisplay listOfPodcastCards={listOfPodcastCards}/>
    </div>
  );
}

