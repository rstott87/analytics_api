import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import SampleChannelCard from "../components/SampleChannelCard";
import CardDisplay from "../components/CardDisplay";
import ErrorMessage from "../components/ErrorMessage";



export const getStaticProps = async () => {
 const key = process.env.YOUTUBE_API_KEY;
 const arrayOfChannelIds = [ "UCzQUP1qoWDoEbmsQxvdjxgQ", "UC4fZeoNxAXfbIpT3swsVh9w", "UCIyIoM_Nd8HtY19fuR_ov2A", "UCy6A9WMN43DrtBkID7nMXJw", "UCSHZKyawb77ixDdsGog4iWA", "UCVCiKCwhFCZEnx2lk-FS7lA", "UC15XVjBZTbV1oBebwDY9UBg", "UCeYSlCaX1PheCaqxN7uQX4A", "UC5AQEUAwCh1sGDvkQtkDWUQ"]
  const arrayOfChannelIdsString = arrayOfChannelIds.join(",");
  

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${arrayOfChannelIdsString}&part=snippet&key=${key}&part=statistics`
  );
  const channelData = await res.json();
  return { props: { channelData } };
};

export default function ChannelSearch({ channelData }) {
  const defaultList = channelData.items;

  const listOfPodcastCards = defaultList ? (
    defaultList.map((item) => (
      <SampleChannelCard
        key={item.id}
        subscriberCount={item.statistics.subscriberCount}
        videoCount={item.statistics.videoCount}
        title={item.snippet.title}
        channelPhoto={item.snippet.thumbnails.default.url}
        channelId={item.id}
      />
    ))
  ) : (
    <ErrorMessage message="No results found. Ensure that YouTube Channel ID is correct." />
  );

  return (
    <div className="flex flex-col items-center">
      <div className="_container gap-6 p-4 px-5">
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
    </div>
  );
}
