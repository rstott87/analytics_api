import Image from "next/image";
import VideoStatLeaf from "./VideoStatLeaf";

function Video(props) {
  const likes = Number(props.likes).toLocaleString();
  const comments = Number(props.comments).toLocaleString();
  const views = Number(props.views).toLocaleString();
  const date = new Date(props.date).toLocaleDateString();
  const title = props.title;
  return (
    <li className=" flex flex-col  border-b px-2 border-b-violet-700 pb-3">
      {/* <Image
        className="rounded-lg"
        src={props.thumbnail}
        width={300}
        height={300}
        alt="thumbnail from youtube video"
      /> */}

      <h3 className="text-md pt-2 text-left text-lg font-bold ">{title}</h3>
      <div className="grid w-full grid-cols-4 py-4 gap-2">
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
