import Image from "next/image";
import StatCard from "./StatCard";

function ChannelCard(props) {
  return (
    <div className="mb-6 flex w-full flex-col gap-3 rounded-lg border items-center border-slate-300 bg-slate-300 py-6 px-4 text-center text-slate-300 shadow-lg shadow-slate-600">
      <Image
        className="rounded-full border-4 border-slate-800 shadow-lg shadow-slate-500"
        src={props.channelPhoto}
        width={90}
        height={90}
        alt="Picture of the author"
      />

      <p className=" text-3xl font-semibold text-slate-800">{props.title}</p>
      <div className="w-full grid gap-2 lg:grid-cols-3">
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
