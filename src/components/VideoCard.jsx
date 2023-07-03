import Image from "next/image";
import StatCard from "./StatCard";


function VideoCard(props) {
  return (
    <div className="mb-6 flex flex-col items-center gap-3 rounded-lg border border-slate-300 bg-slate-300 px-4 py-6 text-center text-slate-300 shadow-lg shadow-slate-600">
      <Image
        className="rounded-full border-4 border-slate-800 shadow-lg shadow-slate-500"
        src={props.channelPhoto}
        width={90}
        height={90}
        alt="Picture of the author"
      />

      <p className=" text-3xl font-semibold text-slate-800">{props.title}</p>
      <div className="grid w-full gap-2 ">
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

export default VideoCard;
