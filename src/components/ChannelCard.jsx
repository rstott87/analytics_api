import Image from "next/image";
import StatCard from "./StatCard";

function ChannelCard(props) {
  return (
    <div className=" p-6 mb-6 shadow-lg shadow-slate-600 flex flex-col gap-3 text-slate-300 bg-slate-700 rounded-lg border-2 text-center border-slate-900">
      <p className="text-4xl">{props.title}</p>
      <div className="flex justify-center">
        {/* <img
          className="border-4 border-slate-200 rounded-full shadow-xl shadow-slate-900"
          src={props.thumbnail}
          width={230
          height={10}
          alt={""}
        /> */}
      </div>

      <div>
        {/* modern card that displays stats and data */}
        <StatCard
          title={"Total Subscribers"}
          count={props.subscriberCount}
        />
        <StatCard title={"Total Videos"} count={props.videoCount} />
        <StatCard title={"Total Views"} count={props.viewCount} />
      </div>
    </div>
  );
}

export default ChannelCard;
