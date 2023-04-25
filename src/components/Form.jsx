import { useState, useEffect } from "react";
import axios from "axios";

function Form(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    axios.get("https://www.googleapis.com/youtube/v3/search", {
           params: {
             q: searchTerm,
             part: "snippet",
             key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
           }
         })
         .then(function (response) {
           // handle success
           console.log(response)
           console.log(response.data.items[0].snippet.channelTitle);
           // console.log(response.data.items[0].statistics.viewCount);
           // console.log(response.data.items[0].statistics.subscriberCount);
           // setViews(response.data.items[0].statistics.viewCount);
           // setSubscribers(response.data.items[0].statistics.subscriberCount);
            setTitleOfChannel(response.data.items[0].snippet.channelTitle)

         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .finally(function () {
           // always executed 
          })

    props.setEnteredSearchTerm((prevValue) => {
      return searchTerm;
    });
    setSearchTerm("");
  };

  return (
    <form>
      <div className="flex flex-col">
        <input
          onChange={handleChange}
          value={searchTerm}
          className="border-2 border-red-600 rounded-md"
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
