import { useState, useEffect, use } from "react";
import axios from "axios";
import channelID from "@/data/channelIDs";
import channelSchema from "../data/channelSchema";

function SearchForm(props) {
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
        props.setSearchResponse(response.data.items);
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
  };

  return (
    <form className="flex flex-col gap-2 py-8" onSubmit={handleSubmit}>
      <input
        required
        onChange={handleChange}
        value={searchTerm}
        minLength="20"
        placeholder="YouTube Channel ID"
        className="rounded-full border border-slate-900 px-8 py-3 text-xl font-bold shadow-lg shadow-violet-200"
        type="text"
      />
      <button
        type="submit"
        className="rounded-lg border border-blue-900 bg-slate-900 p-1 text-2xl font-semibold text-neutral-200 shadow-lg shadow-violet-200"
        value="Search"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
