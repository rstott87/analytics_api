import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import channelSchema from "../data/channelSchema";
import SearchForm from "../components/SearchForm";
import ChannelCard from "../components/ChannelCard";
import CardDisplay from "../components/CardDisplay";
import ErrorMessage from "../components/ErrorMessage";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function ChannelSearch() {
  // const [searchResponse, setSearchResponse] = useState(channelSchema.items);

  const defaultList = channelSchema.items;

  const listOfPodcastCards = defaultList ? (
    defaultList.map((item) => (
      <ChannelCard
        key={item.id}
        title={item.snippet.title}
        channelPhoto={item.snippet.thumbnails.default.url}
        channelId={item.id}
      />
    ))
  ) : (
    <ErrorMessage message="No results found. Ensure that YouTube Channel ID is correct." />
  );

  return (
    <div className="_container flex flex-col gap-4 p-4 items-center bg-slate-100">
      <Head>
        {/* <link
          rel="icon"
          href="../images/icon.ico"
          type="image/svg+xml"
          sizes="800x800"
        ></link> */}
        <title>
          YouTube Channel Stats Search Tool | Analyze and Track Video Metrics
        </title>
        <meta
          name="description"
          content="Discover powerful YouTube channel stats search tool. Track and analyze video metrics, engagement, and subscribers. Boost your content strategy!"
          key="desc"
        ></meta>
      </Head>
      <SearchForm />
      <CardDisplay listOfPodcastCards={listOfPodcastCards} />
    </div>
  );
}
