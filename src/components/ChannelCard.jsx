import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import StatCard from "./StatCard";

function ChannelCard(props) {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.channelId);
    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          id: props.channelId,
          part: "statistics, snippet",
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      router.push({
        pathname: "/channel/[id]",
        query: { id: props.channelId }
      });
  };
  return (
    <li className="mb-6 flex flex-col items-center gap-3 rounded-lg border border-slate-300 bg-slate-300 px-4 py-6 text-center text-slate-300 shadow-lg shadow-slate-600">
      <Image
        className="rounded-full border-4 border-slate-800 shadow-lg shadow-slate-500"
        src={props.channelPhoto}
        width={90}
        height={90}
        alt="Picture of the author"
      />
      <p className=" text-3xl font-semibold text-slate-800">{props.title}</p>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="w-full rounded-lg border border-blue-900 bg-slate-900 p-1 text-2xl font-semibold text-neutral-200 shadow-lg shadow-violet-200">
          {" "}
          See Channel Stats{" "}
        </button>
      </form>
    </li>
  );
}

export default ChannelCard;
