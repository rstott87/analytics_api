import Image from "next/image";
import VideoStatLeaf from "./VideoStatLeaf";

function Video(props) {
  const likes = Number(props.likes).toLocaleString();
  const comments = Number(props.comments).toLocaleString();
  const views = Number(props.views).toLocaleString();
  const date = new Date(props.date).toLocaleDateString();
  const title = props.title;
  return (
    <li className=" flex flex-col border-b border-b-violet-700 px-2 pb-1">
      {/* <Image
        className="rounded-lg"
        src={props.thumbnail}
        width={300}
        height={300}
        alt="thumbnail from youtube video"
      /> */}

      <h3 className="line-clamp-1 text-clip text-left text-sm font-semibold">
        {title}
      </h3>
      <div className="grid w-full grid-cols-4 gap-2 py-1">
        <VideoStatLeaf title="Date" count={date} />
        <VideoStatLeaf title="Views" count={views} />
        <VideoStatLeaf title="Likes" count={likes} />
        <VideoStatLeaf title="Comments" count={comments} />
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
