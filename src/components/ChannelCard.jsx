import Image from "next/image";
import StatCard from "./StatCard";

function ChannelCard(props) {
  return (
    <div className="p-6 mb-6 shadow-lg shadow-slate-600 flex flex-col gap-3 text-slate-300 bg-slate-200 rounded-lg border text-center border-slate-300">
      <p className=" text-slate-800 text-4xl">{props.title}</p>
      <div className="flex justify-center">
        {/* <img
          className="border-4 border-slate-200 rounded-full shadow-xl shadow-slate-900"
          src={props.thumbnail}
          width={230
          height={10}
          alt={""}
        /> */}
      </div>

      <div className="grid md:grid-cols-3 gap-2">
        <StatCard
          title={"Total Subscribers"}
          count={props.subscriberCount}
          percent={"10"}
        />
        <StatCard
          title={"Total Videos"}
          count={props.videoCount}
          percent={"8"}
        />
        <StatCard
          title={"Total Views"}
          count={props.viewCount}
          percent={"15"}
        />
      </div>
    </div>
  );
}

export default ChannelCard;
