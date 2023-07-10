import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import channelID from "@/data/channelIDs";
import channelSchema from "../data/channelSchema";

function SearchForm(props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    //UC4fZeoNxAXfbIpT3swsVh9w
    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          id: searchTerm,
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

    setEnteredSearchTerm((prevValue) => {
      return searchTerm;
    });
    setSearchTerm("");
    router.push({
      pathname: "/channel/[id]",
      query: { id: searchTerm }
    });
  };

  return (
    <form
      className=" flex flex-col rounded-lg gap-4 px-8 py-2 pt-4 pb-4 shadow-violet-900"
      onSubmit={handleSubmit}
    >
      <input
        required
        onChange={handleChange}
        value={searchTerm}
        minLength="20"
        maxLength="24"
        placeholder="YouTube Channel ID"
        className="rounded-full border border-slate-900 px-8 py-3 text-xl font-bold shadow-md shadow-violet-800"
        type="search"
      />
      <button
        type="submit"
        className="rounded-lg border border-blue-500 bg-blue-600 p-1 text-2xl font-semibold text-neutral-100 shadow-md shadow-violet-800"
        value="Search"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
