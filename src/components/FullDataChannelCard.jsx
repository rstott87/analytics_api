import Image from "next/image";
import StatCard from "./StatCard";
import VideosContainer from "./VideosContainer";


function FullDataChannelCard(props) {
  return (
    <div className="mb-6 flex flex-col items-center gap-3 px-4 py-6 text-center text-neutral-300 ">
      <Image
        priority = {true}
        className="rounded-full border-4 border-slate-800 shadow-lg shadow-slate-500"
        src={props.channelPhoto}
        width={90}
        height={90}
        alt="Picture of the author"
      />

      <p className=" text-2xl font-semibold ">{props.title}</p>
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
      <VideosContainer playListId={props.playListId} dataPlaylist={props.dataPlaylist} dataVideos={props.dataVideos}/>
    </div>
  );
}

export default FullDataChannelCard;
