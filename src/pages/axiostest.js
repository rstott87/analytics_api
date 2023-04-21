import axios from "axios";
import { useState } from "react";
import SearchForm from "@/SearchForm";

const baseURL =
  "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics";

export default function FetchTest() {
  const [views, setViews] = useState("0");
  const [subscribers, setSubscribers] = useState("0");
    //   axios
  //       .get(
  //         "https://www.googleapis.com/youtube/v3/channels?id=UC4fZeoNxAXfbIpT3swsVh9w&part=statistics",
  //         {
  //           params: {
  //             key: "AIzaSyA03W4pd3Ud1hhp - Fb4qjVESiLNPMeIE8Y"
  //           }
  //         }
  //       )
  //       .then(function (response) {
  //         // handle success
  //         console.log(response.data.items[0].statistics.viewCount);
  //         console.log(response.data.items[0].statistics.subscriberCount);
  //           setViews(response.data.items[0].statistics.viewCount);
  //           setSubscribers(response.data.items[0].statistics.subscriberCount);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         // always executed
  //       });
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      {/* fancy search box styled in tailwind
       */}

      <div className="text-slate-800 border-2 border-black h-20 w-20">
        {views}
      </div>
      <div className="text-slate-800 border-2 border-black h-20 w-20">
        {subscribers}
      </div>
      <SearchForm />
    </div>
  );
}
