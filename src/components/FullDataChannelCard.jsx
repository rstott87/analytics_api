import Image from "next/image";
import StatCard from "./StatCard";
import LatestuploadsContainer from "./LatestuploadsContainer";
import AnalysisSummary from "./AnalysisSummary";
import Divider from "./UI/Divder";
import StatisticsChart from "./charts/StatisticsChart";

function FullDataChannelCard(props) {
  
  //function that creates a single object from props related to channel data

  const channelData = {
    title: props.title,
    channelPhoto: props.channelPhoto,
    subscriberCount: props.subscriberCount,
    videoCount: props.videoCount,
    viewCount: props.viewCount,
    description: props.description
  };
    
  console.log(channelData);

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
      <p className=" text-clip text-3xl font-bold">{props.title}</p>
      <div className="grid grid-cols-3 gap-5 py-4">
        <StatCard
          title={"Subscribers"}
          count={props.subscriberCount}
          percent={"10"}
        />
        <StatCard title={"Uploads"} count={props.videoCount} percent={"8"} />
        <StatCard title={"Views"} count={props.viewCount} percent={"15"} />
      </div>
      <Divider />
      <AnalysisSummary
        channelData={channelData}
        dataVideos={props.dataVideos}
        commentsOnVideo={props.commentsOnVideo}
      />
      <LatestuploadsContainer
        playListId={props.playListId}
        dataPlaylist={props.dataPlaylist}
        dataVideos={props.dataVideos}
      />
    </div>
  );
}

export default FullDataChannelCard;
