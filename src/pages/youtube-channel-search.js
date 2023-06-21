import axios from "axios";
import { useState, useEffect } from "react";
import channelSchema from "../data/channelSchema";
import SearchForm from "../components/SearchForm";
import ChannelCard from "../components/ChannelCard";
import CardDisplay from "../components/CardDisplay";
import Head from "next/head";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function ChannelSearch() {
  const [searchResponse, setSearchResponse] = useState(channelSchema.items);
  
    const listOfPodcastCards = searchResponse.map((item) => (
      <ChannelCard
        key={item.id}
        className="text-2xl"
        title={item.snippet.title}
        channelPhoto={item.snippet.thumbnails.medium.url}
        videoCount={item.statistics.videoCount}
        viewCount={item.statistics.viewCount}
        subscriberCount={item.statistics.subscriberCount}
        description={item.snippet.description}
      />
    ));

  return (
    <div className="flex flex-col items-center bg-slate-100">
      <Head>
        <title>StatCrown: gSearch for Any Youtube Channel to Return Stats</title>
        <meta
          name="description"
          content="The search form to find stats on any youtube channel"
          key="desc"
        ></meta>
      </Head>
      <SearchForm setSearchResponse={setSearchResponse} />
      <CardDisplay listOfPodcastCards={listOfPodcastCards} />
    </div>
  );
}

