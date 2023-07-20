import Image from "next/image";
import StatCard from "./StatCard";
import VideosContainer from "./VideosContainer";
import StatisticsChart from "./charts/StatisticsChart";


function FullDataChannelCard(props) {
  return (
    <div className="mb-6 flex flex-col items-center gap-3 rounded-lg border border-violet-950 bg-gradient-to-l from-slate-900 px-4 py-8 text-center text-neutral-300 shadow-lg shadow-blue-900 ">
      <Image
        priority={true}
        className="rounded-full border-4 border-slate-800 shadow-md shadow-violet-900"
        src={props.channelPhoto}
        width={100}
        height={1000}
        alt="Picture of the author"
      />

      <p className=" text-3xl font-bold text-clip">{props.title}</p>
      <div className="grid grid-cols-3 gap-5 py-4">
        <StatCard
          title={"Subscribers"}
          count={props.subscriberCount}
          percent={"10"}
        />
        <StatCard title={"Uploads"} count={props.videoCount} percent={"8"} />
        <StatCard title={"Views"} count={props.viewCount} percent={"15"} />
      </div>
      <VideosContainer
        playListId={props.playListId}
        dataPlaylist={props.dataPlaylist}
        dataVideos={props.dataVideos}
      />
    </div>
  );
}

export default FullDataChannelCard;
