import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "./Loader";

import channelID from "@/data/channelIDs";
import channelSchema from "../data/channelSchema";

function SearchForm(props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputError, setInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          id: searchTerm,
          part: "statistics, snippet",
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.pageInfo.totalResults === 0) {
          throw new Error("No Results Found");
        }
        router.push({
          pathname: "/channel/[id]",
          query: { id: searchTerm }
        });
      })
      .catch(function (error) {
        setInputError(true);
        setIsLoading(false);
      })
      .finally(function () {
        setSearchTerm("");
      });
  };

  return (
    <div>
    <div className="px-8 py-4">
      <p className="text-neutral-500 text-center font-semibold">{`To begin, enter a YouTube channel ID, or get started with one of our example channels below.`}</p>
    </div>
      <form
        className=" flex flex-col gap-3 rounded-lg p-8 pb-12 shadow-violet-900"
        onSubmit={handleSubmit}
      >
        <input
          required
          onChange={handleChange}
          value={searchTerm}
          minLength="20"
          maxLength="24"
          placeholder="YouTube Channel ID"
          className="rounded-full border border-slate-300 px-8 py-2 placeholder:text-md font-semibold shadow-md shadow-violet-800  placeholder:text-slate-400 placeholder:font-medium focus:border-violet-800 focus:outline-none focus:ring-1 focus:ring-violet-800"
          type="search"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 p-1 text-lg font-semibold text-neutral-100 shadow-sm shadow-violet-900"
          value="Search"
        >
          {isLoading ? <Loader /> : "Search"}
        </button>
        {inputError && (
          <div className="flex flex-col items-center">
            <p className="absolute text-center text-xl font-semibold text-red-500">
              Invalid Channel ID. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
