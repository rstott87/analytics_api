import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "./Loader";

function ChannelCard(props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const subscriberCount = Number(props.subscriberCount).toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    <li className="rounded-lg border border-slate-900 bg-gradient-to-bl from-slate-800 px-3 pb-4 text-slate-300 shadow-md shadow-violet-900">
      {/* {isLoading && <Loader />} */}

      <div className=" flex items-center justify-start py-2">
        <Image
          className="rounded-full border-2 border-violet-800 "
          src={props.channelPhoto}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <p className="px-2 text-lg font-semibold text-neutral-100">
          {props.title}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="pt-1">
            <p className="text-center text-sm font-semibold text-neutral-100">
              Subscribers
            </p>
            <p className="text-sm font-semibold text-neutral-300">
              {subscriberCount}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {isLoading ? (
              <Loader></Loader>
            ) : (
              <button
                type="submit"
                className="rounded-lg border border-violet-900 bg-violet-700 p-2 text-sm font-semibold text-neutral-100 shadow-sm shadow-violet-900"
              >
                View Stats
              </button>
            )}
          </form>
        </div>
      </div>
    </li>
  );
}

export default ChannelCard;
