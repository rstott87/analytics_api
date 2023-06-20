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
    console.log(channelID.mssp);
    console.log(enteredSearchTerm);
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
    <form className="py-8">
      <div className="flex flex-col gap-2">
        <input
          onChange={handleChange}
          value={searchTerm}
          placeholder="YouTube Channel ID"
          className="text-xl rounded-full border border-slate-900 py-3 px-8 font-bold shadow-lg shadow-violet-200"
          type="text"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="font-semiboldf rounded-lg border text-2xl border-blue-900 bg-slate-900 p-1 text-neutral-200 shadow-lg shadow-violet-200"
          value="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
