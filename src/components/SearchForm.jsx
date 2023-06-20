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
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
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
    <form className="p-8">
      <div className="flex flex-col gap-2 text-2xl font-bold">
        <p className="text-center text-2xl font-bold">Enter YouTube Channel ID</p>
        <input
          onChange={handleChange}
          value={searchTerm}
          className="border-2 p-2 border-slate-400 rounded-md"
          type="text"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="border-2 bg-blue-400 border-blue-200 rounded-lg"
          value="Search"
        />
      </div>

    </form>
  );
}

export default SearchForm;
