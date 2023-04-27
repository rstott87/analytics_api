import { useState, useEffect } from "react";
import axios from "axios";
import channelID from "@/data/channelIDs";

function Form(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(channelID.mssp);
    // axios.get("https://www.googleapis.com/youtube/v3/search", {
    //        params: {
    //          q: searchTerm,
    //          part: "snippet",
    //          key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
    //        }
    //      })
    //      .then(function (response) {
    //        // handle success
    //        setSearchResponse(response)
    //        console.log(response)
    //        console.log(response.data.items[0].snippet.channelTitle);
    //        console.log(response.data.items[0].statistics.viewCount);
    //        console.log(response.data.items[0].statistics.subscriberCount);
    //        props.setViews(response.data.items[0].statistics.viewCount);
    //        props.setSubscribers(response.data.items[0].statistics.subscriberCount);
    //        props.ssetTitleOfChannel(response.data.items[0].snippet.channelTitle)

    //      })
    //      .catch(function (error) {
    //        // handle error
    //        console.log(error);
    //      })
    //      .finally(function () {
    //        // always executed
    //       })

    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          q: searchTerm,
          id: "UC4fZeoNxAXfbIpT3swsVh9w, UCzQUP1qoWDoEbmsQxvdjxgQ, UCIyIoM_Nd8HtY19fuR_ov2A, UCy6A9WMN43DrtBkID7nMXJw, UCSHZKyawb77ixDdsGog4iWA",
          part: "statistics, snippet",
          key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setSearchResponse(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    

    props.setEnteredSearchTerm((prevValue) => {
      return searchTerm;
    });
    setSearchTerm("");
  };

  const listOfTitles = searchResponse.map((item) => item.snippet.title)
  

  console.log(listOfTitles)
  return (
    <form>
      <div className="flex flex-col gap-2 text-2xl font-bold">
        <input
          onChange={handleChange}
          value={searchTerm}
          className="border-2 p-2 border-red-600 rounded-md"
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

export default Form;
