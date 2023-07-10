import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import ChannelCard from "../components/ChannelCard";
import CardDisplay from "../components/CardDisplay";
import ErrorMessage from "../components/ErrorMessage";



export const getStaticProps = async () => {
 const key = process.env.YOUTUBE_API_KEY;
 const arrayOfChannelIds = [ "UCzQUP1qoWDoEbmsQxvdjxgQ", "UC4fZeoNxAXfbIpT3swsVh9w", "UCIyIoM_Nd8HtY19fuR_ov2A", "UCy6A9WMN43DrtBkID7nMXJw", "UCSHZKyawb77ixDdsGog4iWA", "UCVCiKCwhFCZEnx2lk-FS7lA", "UC15XVjBZTbV1oBebwDY9UBg", "UCeYSlCaX1PheCaqxN7uQX4A", "UC5AQEUAwCh1sGDvkQtkDWUQ"]
  const arrayOfChannelIdsString = arrayOfChannelIds.join(",");
  

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${arrayOfChannelIdsString}&part=snippet&key=${key}`
  );
  const channelData = await res.json();
  return { props: { channelData } };
};

export default function ChannelSearch({ channelData }) {
  console.log(channelData);
  const defaultList = channelData.items;

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
    <div className="_container flex flex-col items-center gap-4 bg-slate-100 p-4">
      <Head>
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
