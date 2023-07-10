import Image from "next/image";
import VideoStatLeaf from "./VideoStatLeaf";

function Video(props) {
  const likes = Number(props.likes).toLocaleString();
  const comments = Number(props.comments).toLocaleString();
  const views = Number(props.views).toLocaleString();
  const date = new Date(props.date).toLocaleDateString();
  const title = props.title;
  return (
    <li className=" flex flex-col items-center gap-2 border bg-slate-200 shadow-md shadow-violet-800 rounded-xl p-3">
      {/* <Image
        className="rounded-lg"
        src={props.thumbnail}
        width={300}
        height={300}
        alt="thumbnail from youtube video"
      /> */}
    
      <h3 className="text-center text-violet-800 text-sm font-bold ">{title}</h3>
      <div className="grid grid-cols-2 w-full gap-2">
        <VideoStatLeaf title="Date" count={date} />
        <VideoStatLeaf title="Likes" count={likes} />
        <VideoStatLeaf title="Comments" count={comments} />
        <VideoStatLeaf title="Views" count={views} />
      </div>

      {/* <div>
        <div>Likes</div>
        <p>{props.likes}</p>
      </div>
      <div>
        <div>Views</div>
        <p>{props.views}</p>
      </div>
      <div>
        <div>Comments</div>
        <p>{props.comments}</p>
      </div> */}
    </li>
  );
}

export default Video;
