import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import channelID from "@/data/channelIDs";
import channelSchema from "../data/channelSchema";

function SearchForm(props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputError, setInputError] = useState(false);
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          id: searchTerm,
          part: "statistics, snippet",
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
        }
      })
      .then(function (response) {
        router.push({
          pathname: "/channel/[id]",
          query: { id: searchTerm }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setSearchTerm("");
        setInputError(true);
      });

    setEnteredSearchTerm((prevValue) => {
      return searchTerm;
    });
  };

  return (
    <form
      className=" flex flex-col gap-4 rounded-lg px-8 py-14  shadow-violet-900"
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

      {inputError && (
        <p className="text-center text-xl font-semibold text-red-500">
          Please enter a valid YouTube Channel ID
        </p>
      )}
    </form>
  );
}

export default SearchForm;
