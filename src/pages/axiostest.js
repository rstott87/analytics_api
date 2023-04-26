import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../components/Form";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function FetchParent() {
  const [views, setViews] = useState("0");
  const [subscribers, setSubscribers] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");
  const [enteredSearchTerm, setEnteredSearchTerm] = useState("Place Holder");
  const [titleOfChannel, setTitleOfChannel] = useState("");
  
  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/youtube/v3/channels", {
  //       params: {
  //         q: enteredSearchTerm,
  //         id: "UC4fZeoNxAXfbIpT3swsVh9w",
  //         part: "statistics",
  //         key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
  //       }
  //     })
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //       console.log(response.data.items[0].statistics.viewCount);
  //       console.log(response.data.items[0].statistics.subscriberCount);
  //       setViews(response.data.items[0].statistics.viewCount);
  //       setSubscribers(response.data.items[0].statistics.subscriberCount);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [enteredSearchTerm]);


  
  

  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <Form
        setViews={setViews}
        setSubscribers={setSubscribers}
        setTitleOfChannel={setTitleOfChannel}
        setEnteredSearchTerm={setEnteredSearchTerm}
        enteredSearchTerm={enteredSearchTerm}
      />
      <div className="text-2xl font-black ">
        <div>Name of Channel: {titleOfChannel}</div>
        <div className="text-slate-800 border-2 ">Views: {views}</div>
        <div className="text-slate-800 border-2">Subscriptions: {subscribers}</div>
      </div>
    </div>
  );
}
